import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type { DiscountPreview } from "@shared/types";

export const discountsService = {
  async checkDiscountCode(code: string): Promise<DiscountPreview> {
    const data = await apiClient.get<{ discount: DiscountPreview }>(
      `${API_ENDPOINTS.DISCOUNTS}?code=${encodeURIComponent(code)}`,
    );

    return data.discount;
  },
};
