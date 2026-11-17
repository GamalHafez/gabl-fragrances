import { ordersService } from "@/services/checkout/orders.service";
import { useMutation } from "@tanstack/react-query";
import type { CreateOrderInput } from "@/types/index.ts";

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: (body: CreateOrderInput) => ordersService.createOrder(body),
  });
};
