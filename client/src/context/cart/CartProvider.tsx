import { getCartTotalQuantity } from "@/utils/cart";
import type { StoredCart, StoredCartItem } from "@shared/types";
import { createContext, useEffect, useState } from "react";
import {
  addItem,
  clearCart,
  removeItem,
  replaceCart,
  updateQuantity,
} from "./cartOperations";
import { getItem, setItem } from "@/utils";

type CartContextValue = {
  items: StoredCartItem[];
  totalQuantity: number;

  handleAddItem: (item: StoredCartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  replaceCart: (items: StoredCartItem[]) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<StoredCart>(
    () => getItem<StoredCart>("cart") ?? { items: [] },
  );
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

  useEffect(() => {
    setItem("cart", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        // Cart Data
        items: cart.items,
        totalQuantity,

        // Cart Operations
        handleAddItem,
        removeItem: handleRemoveItem,
        updateQuantity: handleUpdateQuantity,
        clearCart: handleClearCart,
        replaceCart: handleReplaceCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
