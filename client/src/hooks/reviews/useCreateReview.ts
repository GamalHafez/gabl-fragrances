import { useMutation, useQueryClient } from "@tanstack/react-query";
import { reviewsService } from "@/services/reviews/reviews.service";
import type { ProductReview } from "@shared/types/product";

export const useCreateReview = (productSlug: string) => {
  const queryClient = useQueryClient();
  if (!productSlug) {
    throw new Error("Product slug is required");
  }

  return useMutation({
    mutationFn: (data: ProductReview) =>
      reviewsService.createReview(productSlug, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", productSlug],
      });
    },
  });
};
