import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfileService } from "@/services/profile/editProfile.service";
import type { UpdatePersonalInfoRequest } from "@shared/validators/editProfileSchemas";
import { useAuth } from "@/context/auth/useAuth";

export const useUpdatePersonalInfo = () => {
  const queryClient = useQueryClient();
  const { setUser } = useAuth();

  return useMutation({
    mutationFn: (personalInfo: UpdatePersonalInfoRequest) =>
      editProfileService.updatePersonalInfo(personalInfo),

    onSuccess: (user) => {
      setUser(user);

      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
};

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: editProfileService.updatePassword,
  });
};
