import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type { ProductReview } from "@shared/types/product";

type GetReviewsResponse = {
  reviews: ProductReview[];
};

export const reviewsService = {
  async getReviews(productSlug: string): Promise<ProductReview[]> {
    const url = `${API_ENDPOINTS.PRODUCTS}/${productSlug}/reviews`;
    const data = await apiClient.get<GetReviewsResponse>(url);

    return data.reviews;
  },
};
