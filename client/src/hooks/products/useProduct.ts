import { productsService } from "@/services/products/products.service";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (productSlug: string) => {
  return useQuery({
    queryKey: ["product", productSlug],
    queryFn: () => productsService.getProduct(String(productSlug)),
    enabled: !!productSlug,
  });
};
