import type { StoredCartItem } from "@/types";

export const getCartTotalQuantity = (items: StoredCartItem[]): number => {
  return items?.reduce((total, item) => total + item.quantity, 0);
};