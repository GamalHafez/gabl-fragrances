import { useQuery } from "@tanstack/react-query";
import { productsService } from "@/services/products/products.service";

export const useFeaturedProducts = (limit = 8) => {
  return useQuery({
    queryKey: ["products", "featured", limit],
    queryFn: () => productsService.getFeaturedProducts(limit),
    staleTime: 10 * 60_000,
  });
};
