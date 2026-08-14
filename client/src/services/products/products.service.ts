import type { Product } from "@shared/types/index.ts";
import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";

export const productsService = {
  async getProducts(): Promise<Product[]> {
    return apiClient.get<Product[]>(API_ENDPOINTS.PRODUCTS);
  },
};
