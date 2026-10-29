import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { productsService } from "@/services/products/products.service";
import type { SearchProductsParams } from "@shared/types/product";

export const useSearchProducts = (params: SearchProductsParams = {}) => {
  return useQuery({
    queryKey: ["products", "search", params],
    queryFn: () => productsService.searchProducts(params),
    staleTime: 60_000,
    placeholderData: keepPreviousData,
  });
};
