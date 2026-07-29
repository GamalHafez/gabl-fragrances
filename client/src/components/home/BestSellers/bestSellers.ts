// To be deleted...

import placeholder from "@/assets/placeholder.webp";

export const bestSellers = {
  men: [
    {
      id: "royal-oud",
      name: "Royal Oud",
      image: placeholder,
      size: "100ml",
      price: 1200,
      description: "A refined woody fragrance with a warm oriental character.",
      notes: ["Bergamot", "Oud", "Amber"],
    },
    {
      id: "black-noir",
      name: "Black Noir",
      image: placeholder,
      size: "100ml",
      price: 1150,
      description: "Dark spices balanced with smoky woods and soft musk.",
      notes: ["Black Pepper", "Cedarwood", "Musk"],
    },
    {
      id: "golden-amber",
      name: "Golden Amber",
      image: placeholder,
      size: "100ml",
      price: 1250,
      description: "A luxurious amber fragrance with vanilla undertones.",
      notes: ["Amber", "Vanilla", "Sandalwood"],
    },
    {
      id: "desert-wind",
      name: "Desert Wind",
      image: placeholder,
      size: "100ml",
      price: 1100,
      description: "Fresh citrus opening followed by warm woody accords.",
      notes: ["Lemon", "Vetiver", "Patchouli"],
    },
  ],

  women: [
    {
      id: "white-bloom",
      name: "White Bloom",
      image: placeholder,
      size: "100ml",
      price: 1180,
      description: "A delicate floral scent with a soft powdery finish.",
      notes: ["Jasmine", "White Rose", "Musk"],
    },
    {
      id: "velvet-rose",
      name: "Velvet Rose",
      image: placeholder,
      size: "100ml",
      price: 1220,
      description: "Elegant roses blended with creamy vanilla.",
      notes: ["Rose", "Vanilla", "Tonka Bean"],
    },
    {
      id: "pink-orchid",
      name: "Pink Orchid",
      image: placeholder,
      size: "100ml",
      price: 1190,
      description: "Bright fruity notes with an elegant floral heart.",
      notes: ["Pear", "Orchid", "White Musk"],
    },
    {
      id: "moonlight",
      name: "Moonlight",
      image: placeholder,
      size: "100ml",
      price: 1260,
      description: "A sensual fragrance with warm amber and soft woods.",
      notes: ["Amber", "Cashmere Wood", "Musk"],
    },
  ],
} as const;

export type BestSellerCategory = keyof typeof bestSellers;
export type BestSeller = (typeof bestSellers)[BestSellerCategory][number];
export type Category = keyof typeof bestSellers;
export const categoryNames = Object.keys(bestSellers) as Category[];
