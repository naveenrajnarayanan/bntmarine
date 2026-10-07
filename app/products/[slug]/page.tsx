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
          <PageShell className="pt-space-28">
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

          {product.detailDescription && (
            <PageShell className="mt-space-32">
              <Text
                variant="body-large"
                tone="secondary"
                className="indent-[2.5rem] leading-[1.75] tracking-[-0.01em]"
              >
                {product.detailDescription}
              </Text>
            </PageShell>
          )}

          <ProductGallery productName={product.name} images={gallery} />

          {product.specifications.length > 0 && (
            <PageGrid
              as="section"
              data-scroll-reveal
              className="mt-space-96 pt-space-32"
            >
              <div className="col-span-4 lg:col-span-12">
                <div
                  className="
          mx-auto
          w-full
          max-w-[1280px]
          rounded-[28px]
          border
          border-border-subtle
          bg-background-secondary/40
          px-6
          py-10
          sm:px-8
          md:px-12
          md:py-12
          lg:px-16
          lg:py-14
        "
                >
                  {/* HEADING */}
                  <div className="mb-12">
                    <span
                      className="
              text-sm
              font-medium
              uppercase
              tracking-[0.18em]
              text-text-secondary
            "
                    >
                      Technical Specifications
                    </span>
                  </div>

                  {/* SPECIFICATIONS — 3 COLUMNS */}
                  <dl className="grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:gap-y-12">
                    {product.specifications.map((specification) => (
                      <div
                        key={specification.label}
                        className="
                flex
                min-h-[76px]
                flex-col
                justify-start
                text-left
              "
                      >
                        <dt
                          className="
                  text-sm
                  font-medium
                  tracking-wide
                  text-text-secondary
                "
                        >
                          {specification.label}
                        </dt>

                        <dd
                          className="
                  mt-2
                  text-[20px]
                  font-normal
                  leading-[1.4]
                  tracking-[-0.015em]
                  text-text-primary
                  md:text-[21px]
                "
                        >
                          {specification.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
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
