import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth/auth.service";

export const useCheckEmail = () => {
  return useMutation({
    mutationFn: (email: string) => authService.checkEmail(email),
  });
};
