export type StoredCartItem = {
  variantId: string;
  quantity: number;
  price: string;
};

export type StoredCart = {
  items: StoredCartItem[];
};
