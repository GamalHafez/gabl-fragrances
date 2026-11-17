import { useQuery } from "@tanstack/react-query";
import { productsService } from "@/services/products/products.service";
import type { Gender } from "@shared/types/enums";

export const useBestSellers = (gender?: Gender) => {
  return useQuery({
    queryKey: ["products", "best-sellers", gender ?? "all"],
    queryFn: () => productsService.getBestSellers(gender),
    staleTime: 10 * 60_000,
  });
};
