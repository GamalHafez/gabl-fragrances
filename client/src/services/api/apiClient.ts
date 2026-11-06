import { normalizeError } from "@/utils/errors";
import { API_ENDPOINTS } from "./endpoints";

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

const API_URL = import.meta.env.VITE_API_URL;

const NO_REFRESH = /\/(login|signup|refresh|logout)$/;

let refreshPromise: Promise<boolean> | null = null;

const refreshSession = (): Promise<boolean> => {
  refreshPromise ??= fetch(`${API_URL}/${API_ENDPOINTS.AUTH}/refresh`, {
    method: "POST",
    credentials: "include",
  })
    .then((response) => response.ok)
    .catch(() => false)
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
};

const send = (endpoint: string, init: RequestInit) =>
  fetch(`${API_URL}/${endpoint}`, { ...init, credentials: "include" });

async function request<T>(
  endpoint: string,
  init: RequestInit = {},
): Promise<T> {
  try {
    let response = await send(endpoint, init);

    if (
      response.status === 401 &&
      !NO_REFRESH.test(endpoint.split("?")[0]) &&
      (await refreshSession())
    ) {
      response = await send(endpoint, init); // retry once with the new cookies
    }

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
}

export const apiClient = {
  get<T>(endpoint: string): Promise<T> {
    return request<T>(endpoint);
  },

  post<T>(endpoint: string, body?: unknown): Promise<T> {
    return request<T>(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  },

  patch<T>(endpoint: string, body?: unknown): Promise<T> {
    return request<T>(endpoint, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  },
};
