import type { CheckoutFormOutput, OrderType } from "@shared/types/index.ts";
import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";

type CreateOrderResponse = {
  order: OrderType;
};

export const ordersService = {
  async createOrder(body: CheckoutFormOutput): Promise<OrderType> {
    const data = await apiClient.post<CreateOrderResponse>(
      API_ENDPOINTS.ORDERS,
      body,
    );

    return data.order;
  },
};
