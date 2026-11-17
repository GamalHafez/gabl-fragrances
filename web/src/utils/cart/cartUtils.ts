import type { StoredCartItem } from "@shared/types";

export const getCartTotalQuantity = (items: StoredCartItem[]): number => {
  return items?.reduce((total, item) => total + item.quantity, 0);
};