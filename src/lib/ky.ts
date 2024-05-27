import ky from 'ky';

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BASE_URL
});
