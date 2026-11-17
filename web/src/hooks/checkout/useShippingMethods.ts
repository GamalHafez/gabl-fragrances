import { shippingMethodsService } from "@/services/checkout/ShippingMethods.service";
import { useQuery } from "@tanstack/react-query";

export const useShippingMethods = () => {
  return useQuery({
    queryKey: ["shippingMethods"],
    queryFn: shippingMethodsService.getShippingMethods,
    staleTime: 5 * 60_000, // shipping options rarely change mid-session
  });
};
