import { useQuery } from "@tanstack/react-query";
import { profileService } from "@/services/profile/profile.service";
import { useAuth } from "@/context/auth/useAuth";

export const useProfileData = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ["profile"],
    queryFn: () => profileService.getProfileData(),
    enabled: isAuthenticated,
    staleTime: 5 * 60_000,
  });
};
