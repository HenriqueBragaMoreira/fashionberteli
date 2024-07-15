import { api } from '@/lib/ky';
import { PostProps } from './types';

export const inputsService = {
  async post(data: PostProps) {
    const response = api.post('input', {
      json: {
        inputs: data
      },
      cache: 'no-cache'
    });

    return response.json();
  }
};
