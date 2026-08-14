export type ProductGender = 'MEN' | 'WOMEN' | 'UNISEX';

export type Weather = 'SUMMER' | 'WINTER' | 'SPRING' | 'AUTUMN' | 'ALL_SEASONS';

export type ProductCategory = {
  id: string;
  name: string;
  slug: string;
};

export type ProductImage = {
  id: string;
  url: string;
  publicId: string;
  description?: string | null;
  isMain: boolean;
  productId?: string;
};

export type ProductVariant = {
  id: string;
  sizeML: number;
  price: number;
  stock: number;
  label?: string;
};

export type ProductReview = {
  id: string;
  rating: number;
  comment: string | null;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description?: string;

  gender: ProductGender;
  inspiredBy: string | null;

  topNotes?: string[];
  midNotes?: string[];
  baseNotes?: string[];
  vibes?: string[];

  bestSeasons?: Weather[];

  isBestSeller: boolean;
  isNew: boolean;
  images: ProductImage[];
  variants: ProductVariant[];
  reviews?: ProductReview[];

  createdAt?: string;
  updatedAt?: string;
};
