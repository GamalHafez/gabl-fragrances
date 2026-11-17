import { productsService } from "@/services/products/products.service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productsService.getProducts,
  });
};
