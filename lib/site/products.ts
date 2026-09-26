export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  heroImage: string;
  gallery: string[];
  specifications: ProductSpecification[];
};

export const products: Product[] = [
  {
    slug: "game-fishing",
    name: "Game Fishing",
    category: "Fishing Vessel",
    description: "A BNT Marine product for game fishing.",
    heroImage: "/images/game/1.jpg",
    gallery: [
      "/images/game/2.jpg",
      "/images/game/3.jpg",
      "/images/game/4.jpg",
      "/images/game/5.jpg",
    ],
    specifications: [],
  },
  {
    slug: "semi-submarine",
    name: "Semi Submarine",
    category: "Submersible Craft",
    description: "A BNT Marine semi-submarine product.",
    heroImage: "/images/sub/1.jpg",
    gallery: ["/images/sub/2.jpg", "/images/sub/3.jpg"],
    specifications: [],
  },
  {
    slug: "catamaran-70-passenger-ferry",
    name: "Catamaran 70 Passenger Ferry",
    category: "Passenger Vessel",
    description: "A BNT Marine catamaran passenger ferry.",
    heroImage: "/images/catamaran/1.jpg",
    gallery: ["/images/catamaran/2.jpg"],
    specifications: [],
  },
  {
    slug: "trimaran",
    name: "Trimaran",
    category: "Multihull",
    description: "A BNT Marine trimaran product.",
    heroImage: "/images/products/trimaran/bnt-trimaran-hero.jpg",
    gallery: [],
    specifications: [],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
