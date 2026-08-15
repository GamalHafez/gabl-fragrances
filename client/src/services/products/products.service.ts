import type { Product } from "@shared/types/index.ts";
import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
type GetProductsResponse = {
  products: Product[];
};

type GetProductResponse = {
  product: Product;
};

export const productsService = {
  async getProducts(): Promise<Product[]> {
    const data = await apiClient.get<GetProductsResponse>(
      API_ENDPOINTS.PRODUCTS,
    );

    return data.products;
  },

  async getProduct(productSlug: string): Promise<Product> {
    const url = `${API_ENDPOINTS.PRODUCTS}/${productSlug}`;
    const data = await apiClient.get<GetProductResponse>(url);

    return data.product;
  },
};
