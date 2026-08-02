// will be deleted...
// add badges in BackEnd

export type Product = {
  id: number;
  slug: string;

  name: string;
  description: string;
  image: string;
  inspiredBy: string;

  collection: "Men" | "Women";

  size: 50 | 100;

  price: number;

  inStock: boolean;
  topNotes: string[];
  midNotes: string[];
  baseNotes: string[];
  vibes: string;
  bestWeather: string;

  isNew?: boolean;
  isBestSeller?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "fresh-ocean-men-50",
    name: "Fresh Ocean",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=1",
    inspiredBy: "Acqua di Gio",
    collection: "Men",
    size: 50,
    price: 45,
    inStock: true,
    topNotes: ["Bergamot", "Lemon", "Marine Accord"],
    midNotes: ["Lavender", "Jasmine"],
    baseNotes: ["Amber", "Musk", "Cedarwood"],
    vibes: "Fresh & Aquatic",
    bestWeather: "Spring & Summer",
    isNew: true,
  },
  {
    id: 2,
    slug: "fresh-ocean-men-100",
    name: "Fresh Ocean",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=2",
    inspiredBy: "Acqua di Gio",
    collection: "Men",
    size: 100,
    price: 75,
    inStock: true,
    topNotes: ["Bergamot", "Lemon", "Marine Accord"],
    midNotes: ["Lavender", "Jasmine"],
    baseNotes: ["Amber", "Musk", "Cedarwood"],
    vibes: "Fresh & Aquatic",
    bestWeather: "Spring & Summer",
    isBestSeller: true,
  },
  {
    id: 3,
    slug: "rose-bliss-women-50",
    name: "Rose Bliss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=3",
    inspiredBy: "Delina",
    collection: "Women",
    size: 50,
    price: 50,
    inStock: false,
    topNotes: ["Lychee", "Rhubarb", "Bergamot"],
    midNotes: ["Rose", "Peony", "Lily of the Valley"],
    baseNotes: ["Vanilla", "Cashmeran", "White Musk"],
    vibes: "Floral & Elegant",
    bestWeather: "Spring",
  },
  {
    id: 4,
    slug: "rose-bliss-women-100",
    name: "Rose Bliss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=4",
    inspiredBy: "Delina",
    collection: "Women",
    size: 100,
    price: 85,
    inStock: true,
    topNotes: ["Lychee", "Rhubarb", "Bergamot"],
    midNotes: ["Rose", "Peony", "Lily of the Valley"],
    baseNotes: ["Vanilla", "Cashmeran", "White Musk"],
    vibes: "Floral & Elegant",
    bestWeather: "Spring",
    isBestSeller: true,
  },
  {
    id: 5,
    slug: "citrus-energy-men-50",
    name: "Citrus Energy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=5",
    inspiredBy: "Bleu de Chanel",
    collection: "Men",
    size: 50,
    price: 40,
    inStock: true,
    topNotes: ["Grapefruit", "Mint", "Pink Pepper"],
    midNotes: ["Ginger", "Nutmeg"],
    baseNotes: ["Incense", "Sandalwood", "Vetiver"],
    vibes: "Energetic & Modern",
    bestWeather: "Summer",
  },
  {
    id: 6,
    slug: "citrus-energy-men-100",
    name: "Citrus Energy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=6",
    inspiredBy: "Bleu de Chanel",
    collection: "Men",
    size: 100,
    price: 70,
    inStock: true,
    topNotes: ["Grapefruit", "Mint", "Pink Pepper"],
    midNotes: ["Ginger", "Nutmeg"],
    baseNotes: ["Incense", "Sandalwood", "Vetiver"],
    vibes: "Energetic & Modern",
    bestWeather: "Summer",
    isNew: true,
  },
  {
    id: 7,
    slug: "vanilla-dream-women-50",
    name: "Vanilla Dream",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=7",
    inspiredBy: "Black Opium",
    collection: "Women",
    size: 50,
    price: 55,
    inStock: true,
    topNotes: ["Pear", "Pink Pepper", "Orange Blossom"],
    midNotes: ["Coffee", "Jasmine"],
    baseNotes: ["Vanilla", "Patchouli", "Cedarwood"],
    vibes: "Warm & Sweet",
    bestWeather: "Autumn & Winter",
  },
  {
    id: 8,
    slug: "vanilla-dream-women-100",
    name: "Vanilla Dream",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=8",
    inspiredBy: "Black Opium",
    collection: "Women",
    size: 100,
    price: 90,
    inStock: true,
    topNotes: ["Pear", "Pink Pepper", "Orange Blossom"],
    midNotes: ["Coffee", "Jasmine"],
    baseNotes: ["Vanilla", "Patchouli", "Cedarwood"],
    vibes: "Warm & Sweet",
    bestWeather: "Autumn & Winter",
    isBestSeller: true,
  },
];
