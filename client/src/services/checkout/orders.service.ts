import type {
  CheckoutDefaults,
  CreateOrderInput,
  GuestOrderSummary,
  OrderType,
} from "@shared/types/index.ts";
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

  async findGuestOrders(): Promise<GuestOrderSummary[]> {
    const data = await apiClient.get<{ orders: GuestOrderSummary[] }>(
      `${API_ENDPOINTS.ORDERS}/guest`,
    );
    return data.orders;
  },

  async linkGuestOrders(): Promise<number> {
    const data = await apiClient.post<{ linkedCount: number }>(
      `${API_ENDPOINTS.ORDERS}/guest/link`,
      {},
    );
    return data.linkedCount;
  },

  async getCheckoutDefaults(): Promise<CheckoutDefaults> {
    const data = await apiClient.get<{ defaults: CheckoutDefaults }>(
      `${API_ENDPOINTS.ORDERS}/checkout-defaults`,
    );
    return data.defaults;
  },
};
