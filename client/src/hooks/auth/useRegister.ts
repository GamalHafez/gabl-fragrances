// hooks/auth/useRegister.ts
import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth/auth.service";
import { useAuth } from "@/context/auth/useAuth";

export const useRegister = () => {
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: authService.register,
    onSuccess: (user) => {
      setUser(user);
    },
  });
};
