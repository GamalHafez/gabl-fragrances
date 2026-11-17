import { reviewsService } from "@/services/reviews/reviews.service";
import { useQuery } from "@tanstack/react-query";

export const useApprovedReviews = (limit: number) => {
  return useQuery({
    queryKey: ["approvedReviews", "limit"],
    queryFn: () => reviewsService.getApprovedReviews(limit),
  });
};
