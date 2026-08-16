import { reviewsService } from "@/services/reviews/reviews.service";
import { useQuery } from "@tanstack/react-query";

export const useReviews = (productSlug?: string) => {
  return useQuery({
    queryKey: ["reviews", productSlug],
    queryFn: () => {
      if (!productSlug) {
        throw new Error("Product slug is required");
      }

      return reviewsService.getReviews(productSlug);
    },
    enabled: !!productSlug,
  });
};
