import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/auth/auth.service";
import { useAuth } from "@/context/auth/useAuth";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      setUser(null);
      queryClient.clear();
      navigate("/");
    },
  });
};
