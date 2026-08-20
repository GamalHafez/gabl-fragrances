import type { StoredCart, StoredCartItem } from "@shared/types";

export const addItem = (cart: StoredCart, item: StoredCartItem): StoredCart => {
  const existingItem = cart.items.find(
    (cartItem) => cartItem.variantId === item.variantId,
  );

  const items = existingItem
    ? cart.items.map((cartItem) =>
        cartItem.variantId === item.variantId
          ? {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            }
          : cartItem,
      )
    : [...cart.items, item];

  return { items };
};

export const removeItem = (cart: StoredCart, variantId: string): StoredCart => {
  return {
    items: cart.items.filter((item) => item.variantId !== variantId),
  };
};

export const updateQuantity = (
  cart: StoredCart,
  variantId: string,
  quantity: number,
): StoredCart => {
  if (quantity <= 0) {
    return removeItem(cart, variantId);
  }

  return {
    items: cart.items.map((item) =>
      item.variantId === variantId ? { ...item, quantity } : item,
    ),
  };
};

export const clearCart = (): StoredCart => {
  return {
    items: [],
  };
};
