import { apiClient } from "@/services/api/apiClient";
import { API_ENDPOINTS } from "@/services/api/endpoints";
import type { OrderSummary } from "@shared/types";
import type { ProfileType } from "@shared/types/user";

export const profileService = {
  async getProfileData(): Promise<ProfileType> {
    const data = await apiClient.get<{ profileData: ProfileType }>(
      API_ENDPOINTS.PROFILE,
    );
    return data.profileData;
  },

  async getUserOrders(): Promise<OrderSummary[]> {
    const data = await apiClient.get<{ orders: OrderSummary[] }>(
      API_ENDPOINTS.ORDERS,
    );
    
    return data.orders;
  },
};
