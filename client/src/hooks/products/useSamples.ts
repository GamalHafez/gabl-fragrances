import { productsService } from "@/services/products/products.service";
import { useQuery } from "@tanstack/react-query";

export const useSamples = () => {
  return useQuery({
    queryKey: ["samples"],
    queryFn: productsService.getSamples,
  });
};
