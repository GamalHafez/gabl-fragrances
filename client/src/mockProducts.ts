// will be deleted...

export type Product = {
  id: number;
  slug: string;

  name: string;
  description: string;
  image: string;

  collection: "Men" | "Women";

  size: 50 | 100;

  price: number;

  inStock: boolean;

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
    collection: "Men",
    size: 50,
    price: 45,
    inStock: true,
    isNew: true,
  },
  {
    id: 2,
    slug: "fresh-ocean-men-100",
    name: "Fresh Ocean",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=2",
    collection: "Men",
    size: 100,
    price: 75,
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 3,
    slug: "rose-bliss-women-50",
    name: "Rose Bliss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=3",
    collection: "Women",
    size: 50,
    price: 50,
    inStock: false,
  },
  {
    id: 4,
    slug: "rose-bliss-women-100",
    name: "Rose Bliss",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=4",
    collection: "Women",
    size: 100,
    price: 85,
    inStock: true,
    isBestSeller: true,
  },
  {
    id: 5,
    slug: "citrus-energy-men-50",
    name: "Citrus Energy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=5",
    collection: "Men",
    size: 50,
    price: 40,
    inStock: true,
  },
  {
    id: 6,
    slug: "citrus-energy-men-100",
    name: "Citrus Energy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=6",
    collection: "Men",
    size: 100,
    price: 70,
    inStock: true,
    isNew: true,
  },
  {
    id: 7,
    slug: "vanilla-dream-women-50",
    name: "Vanilla Dream",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=7",
    collection: "Women",
    size: 50,
    price: 55,
    inStock: true,
  },
  {
    id: 8,
    slug: "vanilla-dream-women-100",
    name: "Vanilla Dream",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, impedit natus quos veritatis quasi nemo amet ipsa",
    image: "https://picsum.photos/300/400?random=8",
    collection: "Women",
    size: 100,
    price: 90,
    inStock: true,
    isBestSeller: true,
  },
];
