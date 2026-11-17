import { ordersService } from "@/services/checkout/orders.service";
import { useQuery } from "@tanstack/react-query";

export const useOrder = (orderId: string) => {
  return useQuery({
    queryKey: ["order", orderId],
    queryFn: () => {
      if (!orderId) {
        throw new Error("Order ID is required");
      }

      return ordersService.getOrder(orderId);
    },
    staleTime: 5 * 60_000,
    enabled: !!orderId,
  });
};
