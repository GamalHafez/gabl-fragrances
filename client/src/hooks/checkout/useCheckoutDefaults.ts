import { useQuery } from "@tanstack/react-query";
import { ordersService } from "@/services/checkout/orders.service";
import { useAuth } from "@/context/auth/useAuth";

export const useCheckoutDefaults = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["checkout-defaults"],
    queryFn: () => ordersService.getCheckoutDefaults(),
    enabled: isAuthenticated,
    staleTime: 5 * 60_000,
  });
};
