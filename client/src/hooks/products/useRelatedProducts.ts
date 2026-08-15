import { productsService } from "@/services/products/products.service";
import { useQuery } from "@tanstack/react-query";

export const useRelatedProducts = (productSlug?: string) => {
  return useQuery({
    queryKey: ["relatedProducts", productSlug],
    queryFn: () => productsService.getRelatedProducts(productSlug!),
    enabled: !!productSlug,
  });
};
