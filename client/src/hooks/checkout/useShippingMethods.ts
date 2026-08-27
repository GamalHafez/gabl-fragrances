import { shippingMethodsService } from "@/services/checkout/ShippingMethods.service";
import { useQuery } from "@tanstack/react-query";

export const useShippingMethods = () => {
  return useQuery({
    queryKey: ["shippingMethods"],
    queryFn: shippingMethodsService.getShippingMethods,
  });
};
