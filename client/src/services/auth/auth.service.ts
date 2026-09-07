import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type { User } from "@shared/types";
import type { RegisterBody } from "@shared/schemas/auth.validators";

export const authService = {
  async getCurrentUser(): Promise<User> {
    const url = `${API_ENDPOINTS.AUTH}/me`;
    const data = await apiClient.get<{ user: User }>(url);

    return data.user;
  },

  async register(body: RegisterBody): Promise<User> {
    const url = `${API_ENDPOINTS.AUTH}/signup`;
    const data = await apiClient.post<{ user: User }>(url, body);

    return data.user;
  },
};
