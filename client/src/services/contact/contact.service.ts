import { API_ENDPOINTS } from "../api/endpoints";
import { apiClient } from "../api/apiClient";
import type { ContactInput } from "@shared/validators/contactSchema";

export const contactService = {
  async sendMessage(data: ContactInput): Promise<{ id: string }> {
    return apiClient.post<{ id: string }>(API_ENDPOINTS.CONTACT, data);
  },
};
