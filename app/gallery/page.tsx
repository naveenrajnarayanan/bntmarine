import type { Metadata } from "next";
import Image from "next/image";

import { SiteHeader } from "@/components/navigation/SiteHeader";
import {
  PageGrid,
  PageShell,
} from "@/components/system/Container";
import { PageTransition } from "@/components/system/PageTransition";
import { Text } from "@/components/system/Text";
import { products } from "@/lib/site/products";

const productGalleryCollections = [
  {
    id: "game-fishing",
    title: "Game Fishing",
    productSlug: "game-fishing-7-2",
    additionalImages: [
      "/images/game/1.jpg",
      "/images/game/2.jpg",
      "/images/game/3.jpg",
      "/images/game/4.jpg",
      "/images/game/5.jpg",
    ],
  },
  {
    id: "catamaran",
    title: "Catamaran",
    productSlug: "catamaran-70",
    additionalImages: [
      "/images/catamaran/1.jpg",
      "/images/catamaran/2.jpg",
    ],
  },
  {
    id: "semi-submarine",
    title: "Semi Submarine",
    productSlug: "semi-submarine",
    additionalImages: [
      "/images/sub/2.jpg",
      "/images/sub/3.jpg",
    ],
  },
  {
    id: "trimaran",
    title: "Trimaran Glass Bottom Ferry",
    productSlug: "trimaran",
    additionalImages: [],
  },
] as const;

const galleryCollections = [
  ...productGalleryCollections.map((collection) => {
    const product = products.find(
      ({ slug }) => slug === collection.productSlug,
    );
    if (!product) {
      throw new Error(
        `Gallery collection "${collection.id}" has no matching product.`,
      );
    }

    return {
      id: collection.id,
      title: collection.title,
      images: [
        product.heroImage,
        ...product.gallery,
        ...collection.additionalImages,
      ],
    };
  }),
  {
    id: "aluminium",
    title: "Aluminium Boats",
    images: [
      "/images/alumin/Aluminium_boat_1.jpg",
      "/images/alumin/Aluminium_boat_2.jpg",
      "/images/alumin/Aluminium_boat_in sea1.jpg",
      "/images/alumin/Aluminium_boat_interior.jpg",
      "/images/alumin/Aluminium_boat_in_sea.jpg",
    ],
  },

  {
    id: "interiors",
    title: "Boat Interiors",
    images: [
      "/images/inner/chief2.jpg",
      "/images/inner/chief3.jpeg",
      "/images/inner/chief4.jpg",
    ],
  }
];

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Boats and interior views from the BNT Marine image gallery.",
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <>
        <SiteHeader />

        <main className="section-space">
          {/* HERO */}
<PageGrid
  as="section"
  className="items-start"
>
  <div className="col-span-4 md:col-span-8 lg:col-span-8">
    <Text variant="eyebrow">
      BNT Marine
    </Text>

    <Text
      as="h1"
      variant="display-large"
      className="mt-space-24 max-w-4xl"
    >
      Gallery
    </Text>

    <Text
      variant="h4"
      tone="secondary"
      className="
        mt-space-24
        max-w-2xl
        font-normal
        leading-[1.4]
        tracking-[-0.02em]
        md:whitespace-nowrap
      "
    >
      A closer look at boats across the range, from hulls and
      passenger craft to interiors.
    </Text>
  </div>
</PageGrid>

          {/* GALLERY CONTENT */}
          <div>
            {/* CATEGORY NAVIGATION */}
            <PageShell>
              <nav
                aria-label="Gallery categories"
                className="mt-space-64"
              >
                <ul
                  className="
                    flex
                    flex-wrap
                    gap-x-space-24
                    gap-y-space-16
                  "
                >
                  {galleryCollections.map((collection) => (
                    <li key={collection.id}>
                      <a
                        href={`#${collection.id}`}
                        className="
                          type-eyebrow
                          border-b
                          border-border-subtle
                          pb-space-8
                          text-text-secondary
                          transition-colors
                          duration-300
                          hover:text-text-primary
                        "
                      >
                        {collection.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </PageShell>

            {/* COLLECTIONS */}
            {galleryCollections.map((collection) => (
              <PageGrid
                key={collection.id}
                as="section"
                id={collection.id}
                aria-labelledby={`${collection.id}-title`}
                data-scroll-reveal
                className="
                  mt-space-96
                  scroll-mt-[56px]
                  md:scroll-mt-[68px]
                "
              >
                {/* COLLECTION TITLE */}
                <div
                  className="
                    col-span-4
                    border-t
                    border-border-subtle
                    pt-space-24
                    md:col-span-8
                    lg:col-span-12
                  "
                >
                  <Text
                    as="h2"
                    id={`${collection.id}-title`}
                    variant="h3"
                  >
                    {collection.title}
                  </Text>
                </div>

                {/* IMAGES */}
                {collection.images.map((image, index) => (
                  <div
                    key={image}
                    className="
                      relative
                      col-span-4
                      aspect-video
                      overflow-hidden
                      bg-background-secondary
                      md:col-span-4
                      lg:col-span-4
                    "
                  >
                    <Image
                      src={image}
                      alt={`${collection.title} image ${index + 1}`}
                      fill
                      sizes="
                        (max-width: 767px) 100vw,
                        (max-width: 1023px) 50vw,
                        33vw
                      "
                      loading={
                        collection.id === "aluminium" &&
                        index < 3
                          ? "eager"
                          : "lazy"
                      }
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </PageGrid>
            ))}
          </div>
        </main>
      </>
    </PageTransition>
  );
}