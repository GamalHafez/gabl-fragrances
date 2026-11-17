export type StoredCartItem = {
  productVariantId: string;
  quantity: number;
};

export type StoredCart = {
  items: StoredCartItem[];
  discount: DiscountPreview | null;
};

export type CartVariant = {
  productVariantId: string;
  sizeML: number;
  price: string;
  quantity: number;
  stock: number;

  product: {
    id: string;
    name: string;
    slug: string;
    image: {
      url: string;
      description?: string | null;
    } | null;
  };
};

export type CartRepresentation = {
  items: CartVariant[];
  totalQuantity: number;
  subtotal: string;
  discount: CartDiscount;
  total: string;
};

export type CartDiscount =
  | (DiscountPreview & {
      amount: string;
    })
  | null;

type DiscountType = 'FIXED' | 'PERCENTAGE';

export type DiscountPreview = {
  code: string;
  type: DiscountType;
  value: string;
};
