import type { Product } from "@shared/types/index.ts";
import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type {
  BestSellerProduct,
  FeaturedProduct,
  ProductSample,
  SearchProductsParams,
  SearchProductsResult,
} from "@shared/types/product";
import type { Gender } from "@shared/types/enums";
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

  async getBestSellers(gender?: Gender): Promise<BestSellerProduct[]> {
    const params = gender ? `?gender=${gender}` : "";

    const data = await apiClient.get<{ bestSellers: BestSellerProduct[] }>(
      `${API_ENDPOINTS.PRODUCTS}/best-sellers${params}`,
    );

    return data.bestSellers;
  },

  async getFeaturedProducts(limit = 8): Promise<FeaturedProduct[]> {
    const data = await apiClient.get<{ featuredProducts: FeaturedProduct[] }>(
      `${API_ENDPOINTS.PRODUCTS}/featured?limit=${limit}`,
    );
    return data.featuredProducts;
  },

  async searchProducts(
    params: SearchProductsParams = {},
  ): Promise<SearchProductsResult> {
    const search = new URLSearchParams();

    if (params.q) search.set("q", params.q);
    if (params.gender) search.set("gender", params.gender);
    if (params.sort) search.set("sort", params.sort);
    if (params.page) search.set("page", String(params.page));
    if (params.limit) search.set("limit", String(params.limit));

    const queryString = search.toString();

    return apiClient.get<SearchProductsResult>(
      `${API_ENDPOINTS.PRODUCTS}/search${queryString ? `?${queryString}` : ""}`,
    );
  },
};
