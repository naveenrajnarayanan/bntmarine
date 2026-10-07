import type { Metadata } from "next";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { PageGrid, PageShell } from "@/components/system/Container";
import { ProductFeature } from "@/components/products/ProductFeature";
import { PageTransition } from "@/components/system/PageTransition";
import { Text } from "@/components/system/Text";
import { products } from "@/lib/site/products";

export const metadata: Metadata = {
  title: "Products",
  description: "The BNT Marine product range.",
};

export default function ProductsPage() {
  return (
    <PageTransition>
      <>
        <SiteHeader />
        <main className="">
        <PageShell as="section" className="" />

        <section
          aria-labelledby="products-range-title"
          data-scroll-reveal
          className="mt-space-160"
        >
          <PageGrid>
  <div className="col-span-4 md:col-span-6 lg:col-span-8">
    <Text variant="eyebrow">The Range</Text>

    <Text
      id="products-range-title"
      as="h2"
      variant="h2"
      className="mt-space-0 whitespace-nowrap"
    >
      Built for different waters. One discipline.
    </Text>

    <Text
      variant="h4"
      tone="secondary"
      className="mt-space-24 whitespace-nowrap"
    >
      A focused collection across game fishing, semi-submarine,
      passenger ferry and trimaran craft.
    </Text>
  </div>

          </PageGrid>
          {products.map((product) => (
            <ProductFeature key={product.slug} product={product} />
          ))}
        </section>
        </main>
      </>
    </PageTransition>
  );
}
