import type { CookieSerializeOptions } from 'cookie';

export const authToken = '@gsm/auth-token';

export const authCookieOptions = {
  sameSite: 'strict'
} satisfies CookieSerializeOptions;
