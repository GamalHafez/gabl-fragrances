import { getCartTotalQuantity } from "@/utils/cart";
import type {
  DiscountPreview,
  StoredCart,
  StoredCartItem,
} from "@shared/types";
import { createContext, useEffect, useState } from "react";
import {
  addItem,
  applyDiscount,
  clearCart,
  removeDiscount,
  removeItem,
  replaceCart,
  updateQuantity,
} from "./cartOperations";
import { getItem, setItem } from "@/utils";

type CartContextValue = {
  items: StoredCartItem[];
  totalQuantity: number;
  discount: DiscountPreview | null;

  handleAddItem: (item: StoredCartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  replaceCart: (items: StoredCartItem[]) => void;
  handleApplyDiscount: (discount: DiscountPreview) => void;
  handleRemoveDiscount: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const getInitialCart = (): StoredCart => {
  const stored = getItem<StoredCart>("cart");
  return {
    items: stored?.items ?? [],
    discount: stored?.discount ?? null, // guards against pre-existing carts without this field
  };
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<StoredCart>(getInitialCart);
  const totalQuantity = getCartTotalQuantity(cart.items);

  const handleAddItem = (item: StoredCartItem) => {
    setCart((currentCart) => addItem(currentCart, item));
  };

  const handleRemoveItem = (variantId: string) => {
    setCart((currentCart) => removeItem(currentCart, variantId));
  };

  const handleUpdateQuantity = (variantId: string, quantity: number) => {
    setCart((currentCart) => updateQuantity(currentCart, variantId, quantity));
  };

  const handleClearCart = () => {
    setCart(clearCart());
  };

  const handleReplaceCart = (items: StoredCartItem[]) => {
    setCart(replaceCart(items));
  };

  const handleApplyDiscount = (discount: DiscountPreview) => {
    setCart((currentCart) => applyDiscount(currentCart, discount));
  };

  const handleRemoveDiscount = () => {
    setCart((currentCart) => removeDiscount(currentCart));
  };

  useEffect(() => {
    setItem("cart", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        // Cart Data
        items: cart.items,
        totalQuantity,
        discount: cart.discount,

        // Cart Operations
        handleAddItem,
        removeItem: handleRemoveItem,
        updateQuantity: handleUpdateQuantity,
        clearCart: handleClearCart,
        replaceCart: handleReplaceCart,
        handleApplyDiscount,
        handleRemoveDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
