import { editProfileService } from "@/services/profile/editProfile.service";
import { useQuery } from "@tanstack/react-query";

export const useDefaultAddress = () => {
  return useQuery({
    queryKey: ["Default Address"],
    queryFn: () => editProfileService.getDefaultAddress(),
  });
};
