import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type { CartRepresentation, StoredCartItem } from "@shared/types";



export const cartService = {
  async getCartData(body: StoredCartItem[]): Promise<CartRepresentation> {
    const url = `${API_ENDPOINTS.CART}/preview`;
    const data = await apiClient.post<{ cartData: CartRepresentation }>(
      url,
      body,
    );

    return data.cartData;
  },
};
