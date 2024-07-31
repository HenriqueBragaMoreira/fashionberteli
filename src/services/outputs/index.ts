import { api } from '@/lib/ky';
import { PostProps } from './types';

export const outputsService = {
  async post(data: PostProps) {
    const response = api.post('output', {
      json: {
        outputs: data
      },
      cache: 'no-cache'
    });

    return response.json();
  }
};
