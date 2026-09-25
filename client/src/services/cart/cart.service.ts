import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type {
  CartRepresentation,
  StoredCartItem,
  DiscountPreview,
} from "@shared/types";

type GetCartDataBody = {
  items: StoredCartItem[];
  discount: DiscountPreview | null;
};

export const cartService = {
  async getCartData(body: GetCartDataBody): Promise<CartRepresentation> {
    const url = `${API_ENDPOINTS.CART}/preview`;
    const data = await apiClient.post<{ cartData: CartRepresentation }>(
      url,
      body,
    );

    return data.cartData;
  },
};
