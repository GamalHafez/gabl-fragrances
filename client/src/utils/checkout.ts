const GENERIC_CHECKOUT_ERROR =
  "Something went wrong. Please check your order and try again.";

const NETWORK_ERROR_MESSAGE =
  "We couldn't reach the server. Please check your connection and try again.";

const looksLikeRawValidationError = (message: string): boolean =>
  /expected .+, received|invalid_type|invalid input/i.test(message);

// Narrow shape we actually rely on, regardless of what class (if any)
// apiClient throws on failure.
type HttpErrorLike = {
  status?: number;
  message?: string;
};

const isHttpErrorLike = (error: unknown): error is HttpErrorLike => {
  return typeof error === "object" && error !== null && "message" in error;
};

export const getCheckoutErrorMessage = (error: unknown): string => {
  if (!isHttpErrorLike(error)) {
    // Not even error-shaped (e.g. a thrown string, or fetch itself
    // failed before producing a structured error) — likely a network issue.
    return NETWORK_ERROR_MESSAGE;
  }

  if (!error.status) {
    return NETWORK_ERROR_MESSAGE;
  }

  const isClientError = error.status >= 400 && error.status < 500;
  const message = error.message?.trim();
  const hasUsableMessage =
    Boolean(message) && !looksLikeRawValidationError(message as string);

  if (isClientError && hasUsableMessage) {
    return message as string;
  }

  return GENERIC_CHECKOUT_ERROR;
};
