import type { Product } from "@shared/types/index.ts";
import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type { ProductSample } from "@shared/types/product";
type GetProductsResponse = {
  products: Product[];
};

type GetProductResponse = {
  product: Product;
};

type GetRelatedProductsResponse = {
  relatedProducts: Product[];
};

type GetSamplesResponse = {
  samples: ProductSample[];
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

  async getRelatedProducts(productSlug: string): Promise<Product[]> {
    const url = `${API_ENDPOINTS.PRODUCTS}/${productSlug}/related`;
    const data = await apiClient.get<GetRelatedProductsResponse>(url);

    return data.relatedProducts;
  },

  async getSamples(): Promise<ProductSample[]> {
    const url = `${API_ENDPOINTS.PRODUCTS}/samples`;
    const data = await apiClient.get<GetSamplesResponse>(url);

    return data.samples;
  },
};
