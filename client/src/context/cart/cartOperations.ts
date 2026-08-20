import type { StoredCart, StoredCartItem } from "@shared/types";
import type { Dispatch, SetStateAction } from "react";

type SetCart = Dispatch<SetStateAction<StoredCart>>;

export const addItem = (item: StoredCartItem, setCart: SetCart) => {
  setCart((currentCart) => {
    const existingItem = currentCart.items.find(
      (cartItem) => cartItem.variantId === item.variantId,
    );

    const items = existingItem
      ? currentCart.items.map((cartItem) =>
          cartItem.variantId === item.variantId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + item.quantity,
              }
            : cartItem,
        )
      : [...currentCart.items, item];

    return { items };
  });
};

export const removeItem = (variantId: string, setCart: SetCart) => {
  setCart((currentCart) => ({
    items: currentCart.items.filter((item) => item.variantId !== variantId),
  }));
};

export const updateQuantity = (
  variantId: string,
  quantity: number,
  setCart: SetCart,
) => {
  if (quantity <= 0) {
    removeItem(variantId, setCart);
    return;
  }

  setCart((currentCart) => ({
    items: currentCart.items.map((item) =>
      item.variantId === variantId ? { ...item, quantity } : item,
    ),
  }));
};

export const clearCart = (setCart: SetCart) => {
  setCart({ items: [] });
};
