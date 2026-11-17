import { useQuery } from "@tanstack/react-query";
import { cartService } from "@/services/cart/cart.service";
import type { DiscountPreview, StoredCartItem } from "@shared/types";

const getCartKey = (
  items: StoredCartItem[],
  discount: DiscountPreview | null,
) => {
  const sorted = [...items].sort((a, b) =>
    a.productVariantId.localeCompare(b.productVariantId),
  );

  return ["cart-data", sorted, discount?.code ?? null] as const;
};

export const useCartData = (
  items: StoredCartItem[],
  discount: DiscountPreview | null,
) => {
  return useQuery({
    queryKey: getCartKey(items, discount),
    queryFn: () => cartService.getCartData({ items, discount }),
    enabled: items.length > 0,
    staleTime: 30_000,
  });
};
