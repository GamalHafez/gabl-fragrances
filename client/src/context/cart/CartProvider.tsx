import { getCartTotalPrice, getCartTotalQuantity } from "@/utils/cart";
import type { StoredCart, StoredCartItem } from "@shared/types";
import { createContext, useState } from "react";
import {
  addItem,
  clearCart,
  removeItem,
  updateQuantity,
} from "./cartOperations";

type CartContextValue = {
  items: StoredCartItem[];
  totalQuantity: number;
  totalPrice: number;

  addItem: (item: StoredCartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<StoredCart>({ items: [] });
  const totalQuantity = getCartTotalQuantity(cart.items);
  const totalPrice = getCartTotalPrice(cart.items);

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        totalQuantity,
        totalPrice,

        // Cart Operations
        addItem: (item) => addItem(item, setCart),
        removeItem: (variantId) => removeItem(variantId, setCart),
        updateQuantity: (variantId, quantity) =>
          updateQuantity(variantId, quantity, setCart),
        clearCart: () => clearCart(setCart),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
