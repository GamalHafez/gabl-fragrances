import { normalizeError } from "@/utils/errors";

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const apiClient = {
  async get<T>(endpoint: string): Promise<T> {
    try {
      const url = `${import.meta.env.VITE_API_URL}/${endpoint}`;

      const response = await fetch(url, {
        credentials: "include",
      });

      const res = await response.json();

      if (!response.ok) {
        throw new ApiError(
          res.error || res.message || "Request failed",
          response.status,
        );
      }

      return res.data as T;
    } catch (err) {
      throw normalizeError(err);
    }
  },

  async post<T>(endpoint: string, body?: unknown): Promise<T> {
    try {
      const url = `${import.meta.env.VITE_API_URL}/${endpoint}`;

      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const res = await response.json();

      if (!response.ok) {
        throw new ApiError(
          res.error || res.message || "Request failed",
          response.status,
        );
      }

      return res.data as T;
    } catch (err) {
      throw normalizeError(err);
    }
  },

  // async patch<T>(endpoint: string, body: unknown): Promise<T> {
  //   // fetch PATCH request
  // },

  // async delete<T>(endpoint: string): Promise<T> {
  //   // fetch DELETE request
  // },
};
