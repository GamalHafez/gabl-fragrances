const GENERIC_ERROR_MESSAGE = "Something went wrong. Please try again.";

const NETWORK_ERROR_MESSAGE =
  "We couldn't reach the server. Please check your connection and try again.";

type HttpErrorLike = {
  status?: number;
  message?: string;
};

const looksLikeRawValidationError = (message: string): boolean => {
  return /expected .+, received|invalid_type|invalid input/i.test(message);
};

const isHttpErrorLike = (error: unknown): error is HttpErrorLike => {
  if (typeof error !== "object" || error === null) {
    return false;
  }

  const candidate = error as Record<string, unknown>;

  return (
    typeof candidate.status === "number" ||
    typeof candidate.message === "string"
  );
};

export const getApiErrorMessage = (error: unknown): string => {
  if (!isHttpErrorLike(error)) {
    return NETWORK_ERROR_MESSAGE;
  }

  const { status, message } = error;

  // No HTTP status usually means the request never
  // successfully reached the server.
  if (typeof status !== "number") {
    return NETWORK_ERROR_MESSAGE;
  }

  const isClientError = status >= 400 && status < 500;
  const trimmedMessage = message?.trim();

  // 4xx errors may contain intentional business/user-facing
  // messages from the backend.
  if (
    isClientError &&
    trimmedMessage &&
    !looksLikeRawValidationError(trimmedMessage)
  ) {
    return trimmedMessage;
  }

  return GENERIC_ERROR_MESSAGE;

  // Don't expose server errors or raw validation errors.
  return GENERIC_ERROR_MESSAGE;
};
