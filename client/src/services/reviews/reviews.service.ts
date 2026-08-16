import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type { ProductReview } from "@shared/types/product";
import z from "zod";
import type { createReviewSchema } from "@shared/validators/reviewSchema";

type GetReviewsResponse = {
  reviews: ProductReview[];
};

type CreateReviewBody = z.infer<typeof createReviewSchema>;

export const reviewsService = {
  async getReviews(productSlug: string): Promise<ProductReview[]> {
    const url = `${API_ENDPOINTS.PRODUCTS}/${productSlug}/reviews`;
    const data = await apiClient.get<GetReviewsResponse>(url);

    return data.reviews;
  },

  async createReview(
    productSlug: string,
    body: CreateReviewBody,
  ): Promise<ProductReview> {
    const url = `${API_ENDPOINTS.PRODUCTS}/${productSlug}/reviews`;
    const data = await apiClient.post<{ review: ProductReview }>(url, body);

    return data.review;
  },
};
