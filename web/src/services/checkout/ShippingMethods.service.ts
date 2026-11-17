import type { ShippingMethodType } from "@shared/types/index.ts";
import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
type GetShippingMethodsResponse = {
  shippingMethods: ShippingMethodType[];
};

export const shippingMethodsService = {
  async getShippingMethods(): Promise<ShippingMethodType[]> {
    const data = await apiClient.get<GetShippingMethodsResponse>(
      API_ENDPOINTS.SHIPPING_METHODS,
    );

    return data.shippingMethods;
  },
};
