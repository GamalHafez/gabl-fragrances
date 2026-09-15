import { useQuery } from "@tanstack/react-query";
import { productsService } from "@/services/products/products.service";
import type { ProductGender } from "@shared/types/product";

export const useBestSellers = (gender?: ProductGender) => {
  return useQuery({
    queryKey: ["products", "best-sellers", gender ?? "all"],
    queryFn: () => productsService.getBestSellers(gender),
    staleTime: 10 * 60_000,
  });
};
