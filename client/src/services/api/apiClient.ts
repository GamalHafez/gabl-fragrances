import { normalizeError } from "@/utils";

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    try {
      const url = `${import.meta.env.VITE_API_URL}/${endpoint}`;

      const response = await fetch(url, {
        credentials: "include",
      });

      const res = await response.json();

      if (!response.ok) {
        throw new Error(res.error || res.message || "Request failed");
      }

      return res.data as T;
    } catch (err) {
      throw normalizeError(err);
    }
  },

  async post<T>(endpoint: string, body: unknown): Promise<T> {
    // fetch POST request
  },

  async patch<T>(endpoint: string, body: unknown): Promise<T> {
    // fetch PATCH request
  },

  async delete<T>(endpoint: string): Promise<T> {
    // fetch DELETE request
  },
};
