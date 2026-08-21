import { useMutation } from "@tanstack/react-query";
import { cartService } from "@/services/cart/cart.service";
import type { StoredCartItem } from "@shared/types";

export const useCartData = () => {
  return useMutation({
    mutationFn: (data: StoredCartItem[]) => cartService.getCartData(data),
  });
};
