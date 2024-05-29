import { api } from '@/lib/ky';
import { StockResponse } from './types';

export const stockService = {
  async get() {
    const response = api.get('stock');

    return response.json<StockResponse[]>();
  }
};
