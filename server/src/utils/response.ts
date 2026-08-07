import type { Response } from 'express';

export type SendSuccessOptions<T> = {
  statusCode: number;
  message: string;
  data?: T;
};

export const sendSuccess = <T>(
  res: Response,
  { statusCode, message, data }: SendSuccessOptions<T>,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    ...(data !== undefined && { data }),
  });
};

export type SendErrorOptions = {
  statusCode: number;
  message: string;
  errors?: unknown;
};

export const sendError = (
  res: Response,
  { statusCode, message, errors }: SendErrorOptions,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(errors !== undefined && { errors }),
  });
};
