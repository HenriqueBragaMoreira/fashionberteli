import { api } from '@/lib/ky';
import { ProductResponse } from './types';

export const stockService = {
  async get() {
    const response = api.get('product');

    return response.json<ProductResponse[]>();
  }
};
