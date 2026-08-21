export type StoredCartItem = {
  variantId: string;
  quantity: number;
};

export type StoredCart = {
  items: StoredCartItem[];
};

export type CartVariant = {
  id: string;
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
};
