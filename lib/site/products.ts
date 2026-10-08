export type ProductSpecification = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  detailDescription?: string;
  heroImage: string;
  gallery: string[];
  specifications: ProductSpecification[];
};

export const products: Product[] = [
  {
    slug: "trimaran",
    name: "16M GLASS BOTTOM TRIMARAN",
    category: "Glass Bottom Boat",
    description: "16.54 m · 50 passengers",
    detailDescription:
      "This custom-designed 16-meter aluminum trimaran is built for ultimate exploration and adventure, specifically crafted to offer an unforgettable coral banks safari experience. Designed by a renowned Australian Naval Architects Studio, the vessel accommodates up to 50 passengers and features a state-of-the-art glass bottom, allowing guests to observe vibrant marine life up close while cruising above the reef. Constructed from high-strength aluminum, this vessel combines durability, lightweight performance, and corrosion resistance, making it ideal for coastal and offshore tours. With a focus on safety, comfort, and eco-friendly exploration, this boat ensures an immersive and sustainable experience on the water.",
    heroImage: "/Img/Trimaran_Glass_Bottom_Ferry/Ocean-Rafale-7.jpg",
    gallery: [
      "/Img/Trimaran_Glass_Bottom_Ferry/Ocean-Rafale-10.jpg",
      "/Img/Trimaran_Glass_Bottom_Ferry/Ocean-Rafale-15.jpg",
      "/Img/Trimaran_Glass_Bottom_Ferry/Ocean-Rafale-16.jpg",
      "/Img/Trimaran_Glass_Bottom_Ferry/1.jpg",
      "/Img/Trimaran_Glass_Bottom_Ferry/3.png",
      "/Img/Trimaran_Glass_Bottom_Ferry/2290cdab-9fb5-4855-8c6e-c25df29bf58c.jpeg",
      "/Img/Trimaran_Glass_Bottom_Ferry/23428c00-6425-4c22-8783-c4e4f3c5ac7e.jpeg",
      "/Img/Trimaran_Glass_Bottom_Ferry/38d30347-5095-46d6-9fd7-18e47f747a42.jpeg",
      "/Img/Trimaran_Glass_Bottom_Ferry/4b692d90-6564-4520-a4fd-7eb1affc71d3.jpeg",
      "/Img/Trimaran_Glass_Bottom_Ferry/96ccc9c8-f419-498d-a79b-63260b56644c.jpeg",
      "/Img/Trimaran_Glass_Bottom_Ferry/Ocean-Rafale-2.jpg",
      "/Img/Trimaran_Glass_Bottom_Ferry/Ocean-Rafale-20.jpg",
      "/Img/Trimaran_Glass_Bottom_Ferry/Ocean-Rafale-3.jpg",
      "/Img/Trimaran_Glass_Bottom_Ferry/Ocean-Rafale-4.jpg",
    ],
    specifications: [
      { label: "Length Overall", value: "16.54 m" },
      { label: "Beam Overall", value: "5.70 m" },
      { label: "Depth", value: "2.70 m (main deck)" },
      { label: "Speed", value: "10 knots" },
      { label: "Passengers capacity", value: "50 Passengers" },
      { label: "Material", value: "Aluminium" },
      { label: "Engine", value: "2 x Suzuki OBM 140 hp" },
      { label: "Class", value: "IRS" },
      { label: "Type of vessel", value: "Glass Bottom Boat" },
    ],
  },
  {
    slug: "catamaran-70",
    name: "Catamaran 70",
    category: "Passenger Ferry",
    description: "15.90 m · 70 passengers",
    detailDescription:
      "The 16-meter Catamaran FRP (Fiberglass Reinforced Plastic) is a high-performance, spacious passenger vessel designed to provide comfort and stability for up to 70 passengers. Crafted with durable and lightweight FRP material, this catamaran ensures superior fuel efficiency and minimal maintenance. Its twin-hull design enhances stability, making it ideal for both calm and rough waters. Perfect for ferry services, tourist excursions, or leisure cruises, the vessel offers ample deck space, comfortable seating, and advanced safety features. Built for durability and long-lasting performance, this catamaran is the ideal choice for efficient and reliable passenger transport.",
    heroImage: "/Img/FRP_70-PASSSENGER_CATAMARAN_FERRY/DJI_0354 - Copy.jpg",
    gallery: [
      "/Img/FRP_70-PASSSENGER_CATAMARAN_FERRY/1 (1).jpg",
      "/Img/FRP_70-PASSSENGER_CATAMARAN_FERRY/2 (1).jpg",
      "/Img/FRP_70-PASSSENGER_CATAMARAN_FERRY/3.jpg",
      "/Img/FRP_70-PASSSENGER_CATAMARAN_FERRY/DJI_0468.jpg",
      "/Img/FRP_70-PASSSENGER_CATAMARAN_FERRY/DJI_0351 - Copy.jpg",
      "/Img/FRP_70-PASSSENGER_CATAMARAN_FERRY/DJI_0468 - Copy.jpg",
    ],
    specifications: [
      { label: "Length Overall", value: "15.90 m" },
      { label: "Beam Overall", value: "6.00 m" },
      { label: "Depth", value: "2.90 m" },
      { label: "Material", value: "FRP" },
      { label: "Passengers capacity", value: "70 Passengers" },
      { label: "Speed", value: "08 Knots" },
      { label: "Engine", value: "Alm-4CTI 108PS 2400 RPM" },
      { label: "Class", value: "IRS" },
      { label: "Gear Box", value: "Dong/1 DMT 90A - 2.06:1" },
      { label: "Type of vessel", value: "Glass Bottom Boat" },
    ],
  },
  {
    slug: "semi-submarine",
    name: "Semi Submarine",
    category: "Submersible Craft",
    description: "12.00 m · 16+2 passengers",
    detailDescription:
      "The 12-meter Semi Submarine offers a unique and immersive underwater experience without fully submerging. Designed for both comfort and safety, this vessel allows passengers to explore marine life through large, panoramic windows below the waterline. Ideal for eco-tourism and sightseeing, the semi-submarine provides an unobstructed view of coral reefs, fish, and other underwater wonders while remaining above the surface. The spacious deck offers comfort for guests, and the vessel’s sturdy construction ensures stability and reliability in varying sea conditions. This innovative design blends the thrill of underwater exploration with the safety and convenience of surface navigation.",
    heroImage: "/Img/semi_submarine_outboard/GB.png",
    gallery: [
      "/Img/semi_submarine_outboard/03851311-1fba-4cc4-bfbd-e1dcaa0bd770.jpg",
      "/Img/semi_submarine_outboard/3e21654c-35ae-420e-b426-77969d792081.jpg",
      "/Img/semi_submarine_outboard/72170fc5-0802-405f-b70a-f113ec91d2cc.jpg",
      "/Img/semi_submarine_outboard/a255c3ac-f11c-461d-9e80-61800ee5f36f.jpg",
      "/Img/semi_submarine_outboard/4b43bc01-08cb-4b54-857a-28391848c244.png",
      "/Img/semi_submarine_outboard/73f65e6d-eab6-496c-91c0-b653e2bbee31.jpg",
      "/Img/semi_submarine_outboard/80746a05-d6b5-4a28-b1f0-4e3bef1000ca.jpg",
      "/Img/semi_submarine_outboard/aadb464e-1035-483f-893d-7b8c3d41487f.jpg",
      "/Img/semi_submarine_outboard/c0649ac0-2a15-4edb-9444-017936c14cdf.jpg",
      "/Img/semi_submarine_outboard/c965b63e-8789-43be-b949-ae4443fc2ef2.jpg",
      "/Img/semi_submarine_outboard/cf9ff23a-21fc-4e9c-a104-1db5d8e102d1.jpg",
      "/Img/semi_submarine_outboard/d8d31e0c-e3f0-46d8-9b41-ff0abf864712.jpg",
      "/Img/semi_submarine_outboard/f0c8d507-b503-4812-a6e1-51a76ca414d7.jpg",
    ],
    specifications: [
      { label: "Length Overall", value: "12.00 m" },
      { label: "Beam Overall", value: "2.65 m" },
      { label: "Depth", value: "2.45 m" },
      { label: "Material", value: "FRP" },
      { label: "Passengers capacity", value: "16+2 Passengers" },
      { label: "Speed", value: "08 Knots" },
      { label: "Engine", value: "2 x 90HP OBM Engine" },
      { label: "Class", value: "IRS" },
      { label: "Type of vessel", value: "Semi submarine Glass Bottom Boat" },
    ],
  },
  {
    slug: "sports-fishing-11-5",
    name: "Sports Fishing 11.5",
    category: "Fishing Vessel",
    description: "11.50 m · 10+2 passengers",
    detailDescription:
      "Built for anglers who want to venture farther, the 11.5-meter Sports Fishing boat pairs a spacious layout with confident performance on the water. Twin outboard engines deliver power for reaching fishing grounds efficiently, while the generous beam and practical deck provide room for passengers and fishing gear. With capacity for up to 10 passengers and 2 crew, it is suited to guided fishing trips, coastal outings, and days spent exploring offshore waters.",
    heroImage:
      "/Img/11.5M_FRP_SPORTS_FISHING_BOAT/WhatsApp Image 2026-10-01 at 10.08.57 PM (1).jpeg",
    gallery: [
      "/Img/11.5M_FRP_SPORTS_FISHING_BOAT/WhatsApp Image 2026-10-01 at 10.08.57 PM.jpeg",
      "/Img/11.5M_FRP_SPORTS_FISHING_BOAT/WhatsApp Image 2026-10-01 at 10.08.58 PM (1).jpeg",
      "/Img/11.5M_FRP_SPORTS_FISHING_BOAT/WhatsApp Image 2026-10-01 at 10.08.58 PM.jpeg",
      "/Img/11.5M_FRP_SPORTS_FISHING_BOAT/WhatsApp Image 2026-10-01 at 10.08.59 PM (1).jpeg",
    ],
    specifications: [
      { label: "Length Overall", value: "11.5 m" },
      { label: "Breadth Overall", value: "3.2 m" },
      { label: "Depth", value: "1.7 m" },
      { label: "Draught", value: "0.5 m" },
      { label: "Capacity", value: "10+2 persons" },
      { label: "Engine", value: "OBM 2 x 250 HP" },
      { label: "Frame Spacing", value: "750 mm" },
      { label: "Speed", value: "25 knots" },
    ],
  },
  {
    slug: "game-fishing-7-2",
    name: "Game Fishing 7.2",
    category: "Game Fishing",
    description: "7.20 m · 5+2 passengers",
    detailDescription:
      "The 7.2-meter Game Fishing Boat is built for serious anglers seeking adventure and reliability on the water. Designed for high performance and durability, this vessel is equipped with powerful engines, a stable hull, and plenty of deck space for handling big catches. Whether you’re targeting deep-sea fish or enjoying a day of coastal fishing, this boat provides a smooth ride in both calm and rough conditions. It features specialized fishing amenities such as rod holders, a live bait well, and ample storage for gear. Ideal for both recreational and competitive fishing, it’s your perfect companion for the ultimate fishing experience.",
    heroImage: "/Img/Game_Fishing_boat/1.jpeg",
    gallery: [
      "/Img/Game_Fishing_boat/2.jpeg",
      "/Img/Game_Fishing_boat/3.jpeg",
      "/Img/Game_Fishing_boat/4.jpeg",
      "/Img/Game_Fishing_boat/5.jpeg",
      "/Img/Game_Fishing_boat/6.jpeg",
      "/Img/Game_Fishing_boat/7.jpeg",
    ],
    specifications: [
      { label: "Length Overall", value: "7.20 m" },
      { label: "Beam Overall", value: "2.40 m" },
      { label: "Depth", value: "1.20 m" },
      { label: "Material", value: "FRP" },
      { label: "Passengers capacity", value: "5+2 Passengers" },
      { label: "Speed", value: "28 Knots" },
      { label: "Engine", value: "150HP OBM Engine" },
      { label: "Class", value: "IRS" },
      { label: "Type of vessel", value: "Game Fishing / Pleasure Craft" },
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
