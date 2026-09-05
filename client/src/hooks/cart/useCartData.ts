import { useQuery } from "@tanstack/react-query";
import { cartService } from "@/services/cart/cart.service";
import type { StoredCartItem } from "@shared/types";

const getCartKey = (items: StoredCartItem[]) => {
  // Sort so item order in the array (e.g. after add/remove/reorder)
  // doesn't change the key when the actual contents are identical
  const sorted = [...items].sort((a, b) =>
    a?.productVariantId?.localeCompare(b?.productVariantId),
  );

  return ["cart-data", sorted] as const;
};

export const useCartData = (items: StoredCartItem[]) => {
  return useQuery({
    queryKey: getCartKey(items),
    queryFn: () => cartService.getCartData(items),
    enabled: items.length > 0,
    staleTime: 30_000,
  });
};
