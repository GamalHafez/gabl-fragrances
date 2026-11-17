import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewsService } from "@/services/reviews/reviews.service";
import type z from "zod";
import type { createReviewSchema } from "@shared/validators/reviewSchema";
type CreateReviewBody = z.infer<typeof createReviewSchema>;

export const useCreateReview = (productSlug: string) => {
  const queryClient = useQueryClient();
  if (!productSlug) {
    throw new Error("Product slug is required");
  }

  return useMutation({
    mutationFn: (data: CreateReviewBody) =>
      reviewsService.createReview(productSlug, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", productSlug],
      });
    },
  });
};
