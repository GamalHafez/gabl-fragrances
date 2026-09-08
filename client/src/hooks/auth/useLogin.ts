import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/auth/auth.service";
import { useAuth } from "@/context/auth/useAuth";

export const useLogin = () => {
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (user) => {
      setUser(user);
    },
  });
};
