import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/products/ProductGallery";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { PageGrid, PageShell } from "@/components/system/Container";
import { PageTransition } from "@/components/system/PageTransition";
import { Text } from "@/components/system/Text";
import { getProductBySlug, products } from "@/lib/site/products";

function productImageExists(imagePath: string) {
  return existsSync(
    join(process.cwd(), "public", imagePath.replace(/^\/+/, "")),
  );
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.slug !== product.slug);
  const gallery = [product.heroImage, ...product.gallery].filter(
    productImageExists,
  );

  return (
    <PageTransition>
      <>
        <SiteHeader />
        <main className="section-space">
        <PageShell className="pt-space-128">
          <Link
            href="/products"
            className="type-eyebrow text-cta text-text-secondary"
          >
            Products
          </Link>
          <Text as="h1" variant="h1" className="mt-space-32">
            {product.name}
          </Text>
        </PageShell>

        <PageGrid
          as="section"
          aria-labelledby={`${product.slug}-profile-title`}
          data-scroll-reveal
          className="mt-space-64"
        >
          <div className="col-span-4 md:col-span-3 lg:col-span-4">
            <Text variant="eyebrow">Vessel profile</Text>
            <Text
              id={`${product.slug}-profile-title`}
              as="h2"
              variant="h3"
              className="mt-space-16"
            >
              At a glance
            </Text>
          </div>
          <div className="col-span-4 md:col-span-5 lg:col-span-7 lg:col-start-6">
            <Text variant="product-meta">{product.category}</Text>
            <Text
              variant="body-large"
              tone="secondary"
              className="mt-space-16"
            >
              {product.description}
            </Text>
          </div>
        </PageGrid>

        <ProductGallery productName={product.name} images={gallery} />

        {product.specifications.length > 0 && (
          <PageGrid as="section" data-scroll-reveal className="mt-space-96">
            <div className="col-span-4 lg:col-span-6">
              <Text variant="eyebrow">Specifications</Text>
              <dl className="mt-space-32">
                {product.specifications.map((specification) => (
                  <div
                    key={specification.label}
                    className="flex justify-between gap-space-24 border-t border-border-subtle py-space-16"
                  >
                    <dt className="text-body-small text-text-secondary">
                      {specification.label}
                    </dt>
                    <dd className="text-body-small text-text-primary">
                      {specification.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </PageGrid>
        )}

        {related.length > 0 && (
          <PageGrid as="section" data-scroll-reveal className="mt-space-128">
            <div className="col-span-4 lg:col-span-12">
              <Text variant="eyebrow">Other products</Text>
              <ul className="mt-space-32">
                {related.map((item) => (
                  <li
                    key={item.slug}
                    className="border-t border-border-subtle py-space-16"
                  >
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-h4 text-text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </PageGrid>
        )}
        </main>
      </>
    </PageTransition>
  );
}
