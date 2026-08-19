import type { StoredCartItem } from "@shared/types";

export const getCartTotalQuantity = (items: StoredCartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

export const getCartTotalPrice = (items: StoredCartItem[]): number => {
  return items.reduce((total, item) => {
    const itemPrice = item.price ?? 0;
    return total + item.quantity * Number(itemPrice);
  }, 0);
};
