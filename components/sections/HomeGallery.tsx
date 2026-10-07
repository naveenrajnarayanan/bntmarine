"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { PageShell } from "@/components/system/Container";
import { Text } from "@/components/system/Text";
import "./home-gallery.css";

const galleryItems = [
  {
    name: "Game Fishing",
    description: "Offshore craft for long days on open water.",
    image: "/images/game/1.jpg",
    alt: "BNT Marine game fishing vessel",
    wide: true,
  },
  {
    name: "Catamaran 70",
    description: "Passenger transport with room for the journey.",
    image: "/images/catamaran/1.jpg",
    alt: "BNT Marine Catamaran 70 passenger ferry",
    wide: false,
  },
  {
    name: "Semi Submarine",
    description: "Experience the water from below the surface.",
    image: "/images/sub/1.jpg",
    alt: "BNT Marine semi-submarine craft",
    wide: true,
  },
  {
    name: "River Boats",
    description: "Craft shaped for inland routes.",
    image: "/images/river/1.jpg",
    alt: "BNT Marine river boat",
    wide: false,
  },
];

export function HomeGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (direction: -1 | 1) => {
    const track = trackRef.current;
    const firstCard = track?.querySelector<HTMLElement>("[data-gallery-card]");

    if (!track || !firstCard) {
      return;
    }

    const cardList = firstCard.parentElement;
    const gap = cardList
      ? Number.parseFloat(getComputedStyle(cardList).columnGap) || 0
      : 0;
    track.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-labelledby="home-gallery-title"
      data-scroll-reveal
      className="overflow-hidden border-y border-border-subtle py-space-32 md:py-space-40 lg:py-space-48"
    >
      <PageShell>
        <Text variant="eyebrow">Our Products</Text>
        <Text
          id="home-gallery-title"
          as="h2"
          variant="h2"
          className="mt-space-12 md:mt-space-16"
        >
          Craft, in their element.
        </Text>
      </PageShell>

      <div
        id="home-gallery-track"
        ref={trackRef}
        role="region"
        aria-label="Featured BNT Marine craft"
        tabIndex={0}
        className="home-gallery-track mt-space-24 overflow-x-auto focus-visible:outline-offset-4 md:mt-space-32"
      >
        <ul className="flex w-max min-w-full snap-x snap-mandatory gap-space-24 px-page">
          {galleryItems.map((item) => (
            <li
              key={item.name}
              data-gallery-card
              className={`shrink-0 snap-start ${
                item.wide
                  ? "w-[82vw] max-w-[52rem] md:w-[54vw] lg:w-[50vw]"
                  : "w-[82vw] max-w-[34rem] md:w-[34vw] lg:w-[30vw]"
              }`}
            >
              <figure>
                <div className="relative h-[min(42vh,24rem)] min-h-[15rem] overflow-hidden rounded-[24px] bg-background-secondary">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={
                      item.wide
                        ? "(max-width: 767px) 82vw, (max-width: 1023px) 54vw, 50vw"
                        : "(max-width: 767px) 82vw, (max-width: 1023px) 34vw, 30vw"
                    }
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-space-16 flex flex-wrap items-baseline gap-x-space-8 gap-y-space-4 md:mt-space-20">
                  <Text as="h3" variant="body" className="font-medium">
                    {item.name}.
                  </Text>
                  <Text variant="body-small" tone="secondary">
                    {item.description}
                  </Text>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <PageShell
        aria-label="Gallery controls"
        className="mt-space-16 flex justify-end gap-space-8 md:mt-space-20"
      >
        <button
          type="button"
          aria-label="Previous craft"
          aria-controls="home-gallery-track"
          onClick={() => scrollGallery(-1)}
          className="grid size-12 shrink-0 place-items-center rounded-full border border-border-default text-text-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <ChevronLeft size={20} strokeWidth={1.5} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Next craft"
          aria-controls="home-gallery-track"
          onClick={() => scrollGallery(1)}
          className="grid size-12 shrink-0 place-items-center rounded-full border border-border-default text-text-primary transition-colors hover:border-brand-primary hover:text-brand-primary"
        >
          <ChevronRight size={20} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </PageShell>
    </section>
  );
}