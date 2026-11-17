import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/auth/useAuth";
import { profileService } from "@/services/profile/profile.service";

export const useUserOrders = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["orders"],
    queryFn: () => profileService.getUserOrders(),
    enabled: isAuthenticated,
    staleTime: 2 * 60_000,
  });
};
