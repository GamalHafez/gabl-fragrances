import type { PersonalInfoType } from "@shared/types/user";
import { apiClient } from "../api/apiClient";
import { API_ENDPOINTS } from "../api/endpoints";
import type { UpdatePersonalInfoRequest } from "@shared/validators/editProfileSchemas";

export const editProfileService = {
  async updatePersonalInfo(
    personalInfo: UpdatePersonalInfoRequest,
  ): Promise<PersonalInfoType> {
    const data = await apiClient.patch<{ user: PersonalInfoType }>(
      API_ENDPOINTS.USERS,
      personalInfo,
    );
    return data.user;
  },
};
