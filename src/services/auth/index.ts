import { api } from '@/lib/ky';
import { checkParams, checkResponse, loginParams, loginResponse } from './types';

export const authService = {
  async login(data: loginParams) {
    const response = api.post('auth/login', {
      json: data,
      cache: 'no-store'
    });

    return await response.json<loginResponse>();
  },
  async check({ token }: checkParams): Promise<checkResponse> {
    const res = await api.post('auth/validation', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return await res.json();
  }
};
