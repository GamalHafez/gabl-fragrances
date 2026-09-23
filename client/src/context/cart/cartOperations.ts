import type {
  DiscountPreview,
  StoredCart,
  StoredCartItem,
} from "@shared/types";

export const addItem = (cart: StoredCart, item: StoredCartItem): StoredCart => {
  const existingItem = cart.items.find(
    (cartItem) => cartItem.productVariantId === item.productVariantId,
  );

  const items = existingItem
    ? cart.items.map((cartItem) =>
        cartItem.productVariantId === item.productVariantId
          ? {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            }
          : cartItem,
      )
    : [...cart.items, item];

  return {
    items,
    discount: cart.discount,
  };
};

export const removeItem = (cart: StoredCart, variantId: string): StoredCart => {
  return {
    items: cart.items.filter((item) => item.productVariantId !== variantId),
    discount: cart.discount,
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
      item.productVariantId === variantId ? { ...item, quantity } : item,
    ),
    discount: cart.discount,
  };
};

export const clearCart = (): StoredCart => {
  return {
    items: [],
    discount: null,
  };
};

export const replaceCart = (items: StoredCartItem[]): StoredCart => {
  return { items, discount: null };
};

export const applyDiscount = (
  cart: StoredCart,
  discount: DiscountPreview,
): StoredCart => ({ ...cart, discount });

export const removeDiscount = (cart: StoredCart): StoredCart => ({
  ...cart,
  discount: null,
});
