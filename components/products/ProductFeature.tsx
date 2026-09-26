import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";
import type { Product } from "@/lib/site/products";

type ProductFeatureProps = {
  product: Product;
};

export function ProductFeature({ product }: ProductFeatureProps) {
  const imagePath = join(
    process.cwd(),
    "public",
    product.heroImage.replace(/^\/+/, ""),
  );
  const hasHeroImage = existsSync(imagePath);

  return (
    <PageGrid
      as="article"
      aria-labelledby={`product-${product.slug}-title`}
      data-scroll-reveal
      className="mt-space-64 items-center"
    >
      <div
        className="relative col-span-4 aspect-video overflow-hidden bg-background-secondary md:col-span-5 lg:col-span-7"
        aria-hidden={hasHeroImage ? undefined : true}
      >
        {hasHeroImage && (
          <Image
            src={product.heroImage}
            alt={`${product.name} product by BNT Marine`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 62vw, 58vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="col-span-4 md:col-span-3 lg:col-span-4 lg:col-start-9">
        <Text variant="product-meta">{product.category}</Text>
        <Text
          id={`product-${product.slug}-title`}
          as="h3"
          variant="h2"
          className="mt-space-16"
        >
          {product.name}
        </Text>
        <Text variant="body" tone="secondary" className="mt-space-24">
          {product.description}
        </Text>
        <Link
          href={`/products/${product.slug}`}
          data-gsap-interaction
          className="type-eyebrow mt-space-32 inline-block text-cta text-text-primary hover:text-brand-primary"
        >
          View product
        </Link>
      </div>
    </PageGrid>
  );
}