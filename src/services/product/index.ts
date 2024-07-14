import { api } from '@/lib/ky';
import { PostProps, ProductResponse } from './types';

export const productService = {
  async get() {
    const response = api.get('product');

    return response.json<ProductResponse[]>();
  },
  async post(data: PostProps) {
    const response = api.post('product', {
      json: {
        ...data,
        costPrice: parseFloat(data.costPrice),
        sellingPrice: parseFloat(data.sellingPrice)
      },
      cache: 'no-cache'
    });

    return response.json();
  }
};
