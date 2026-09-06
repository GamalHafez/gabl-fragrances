import type { CreateOrderInput, OrderType } from "@shared/types/index.ts";
import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";

type OrderResponse = {
  order: OrderType;
};

export const ordersService = {
  async getOrder(orderId: string): Promise<OrderType> {
    const data = await apiClient.get<OrderResponse>(
      `${API_ENDPOINTS.ORDERS}/${orderId}`,
    );
    return data.order;
  },

  async createOrder(body: CreateOrderInput): Promise<OrderType> {
    const data = await apiClient.post<OrderResponse>(
      API_ENDPOINTS.ORDERS,
      body,
    );

    return data.order;
  },
};
