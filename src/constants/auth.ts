import type { CookieSerializeOptions } from 'cookie';

export const authToken = '@fashionberteli/auth-token';

export const authCookieOptions = {
  sameSite: 'strict'
} satisfies CookieSerializeOptions;
