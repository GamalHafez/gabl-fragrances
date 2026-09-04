import { ordersService } from "@/services/checkout/orders.service";
import { useMutation } from "@tanstack/react-query";
import type { CheckoutFormOutput } from "@shared/types/index.ts";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (body: CheckoutFormOutput) => ordersService.createOrder(body),
  });
};
