"use client";

import { useState } from "react";
import Image from "next/image";
import { PageGrid } from "@/components/system/Container";

type ProductGalleryProps = {
  productName: string;
  images: string[];
};

export function ProductGallery({ productName, images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0] ?? "");
  const thumbnails = images.filter((image) => image !== activeImage);

  return (
    <PageGrid
      as="section"
      aria-label={`${productName} image gallery`}
      data-scroll-reveal
      className="mt-space-64"
    >
      <div
        className="relative col-span-4 aspect-video overflow-hidden bg-background-secondary md:col-span-8 lg:col-span-12"
        aria-hidden={activeImage ? undefined : true}
      >
        {activeImage && (
          <Image
            src={activeImage}
            alt={`${productName} product by BNT Marine`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 90vw"
            className="object-cover"
            preload
          />
        )}
      </div>

      {thumbnails.map((image, index) => (
        <button
          key={image}
          type="button"
          aria-label={`Show ${productName} image ${index + 2} of ${images.length}`}
          onClick={() => setActiveImage(image)}
          className="relative col-span-2 aspect-video overflow-hidden border border-border-subtle bg-background-secondary hover:border-brand-primary focus-visible:border-brand-primary md:col-span-2 lg:col-span-3"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 767px) 50vw, (max-width: 1023px) 25vw, 25vw"
            className="object-cover"
          />
        </button>
      ))}
    </PageGrid>
  );
}