import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type { User } from "@shared/types";

export const authService = {
  async getCurrentUser(): Promise<User> {
    const url = `${API_ENDPOINTS.AUTH}/me`;
    const data = await apiClient.get<{ user: User }>(url);

    return data.user;
  },
};
