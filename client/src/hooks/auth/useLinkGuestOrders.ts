import { useMutation } from "@tanstack/react-query";
import { ordersService } from "@/services/checkout/orders.service";

export const useLinkGuestOrders = () => {
  return useMutation({ mutationFn: ordersService.linkGuestOrders });
};
