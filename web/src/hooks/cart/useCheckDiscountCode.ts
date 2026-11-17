import { discountsService } from "@/services/cart/discounts.service";
import { useMutation } from "@tanstack/react-query";

export const useCheckDiscountCode = () => {
  return useMutation({
    mutationFn: discountsService.checkDiscountCode,
  });
};
