import { Decimal } from './../../server/src/generated/prisma/internal/prismaNamespace';

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
  description?: string | undefined | null;
  isMain: boolean;
  productId?: string;

  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductVariant = {
  id: string;
  sizeML: number;
  price: Decimal | string;
  stock: number;
  label?: string | null;
  isActive?: boolean;

  createdAt?: Date;
  updatedAt?: Date;
};

export type ProductReview = {
  id: string;
  name: string;
  rating: number;
  review: string;
  imageUrl?: string | null;

  createdAt?: string;
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
  vibes?: string;

  bestSeasons?: Weather[];

  isBestSeller: boolean;
  isNew: boolean;
  images: ProductImage[];
  variants: ProductVariant[];
  reviews?: ProductReview[];

  createdAt?: Date;
  updatedAt?: Date;
};
