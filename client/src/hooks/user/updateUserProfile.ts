import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfileService } from "@/services/profile/editProfile.service";
import type { UpdatePersonalInfoRequest } from "@shared/validators/editProfileSchemas";

export const useUpdatePersonalInfo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (personalInfo: UpdatePersonalInfoRequest) =>
      editProfileService.updatePersonalInfo(personalInfo),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
};
