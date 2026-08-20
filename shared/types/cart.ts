export type StoredCartItem = {
  variantId: string;
  quantity: number;
};

export type StoredCart = {
  items: StoredCartItem[];
};
