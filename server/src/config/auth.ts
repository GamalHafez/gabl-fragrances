import type { StringValue } from 'ms';

export const authConfig = {
  accessTokenExpiresIn: (process.env.ACCESS_TOKEN_EXPIRES_IN ||
    '15m') as StringValue,

  refreshTokenExpiresIn: (process.env.REFRESH_TOKEN_EXPIRES_IN ||
    '30d') as StringValue,
};
