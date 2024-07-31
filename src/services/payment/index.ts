import { api } from '@/lib/ky';
import { PaymentResponse } from './types';

export const paymentService = {
  async get() {
    const response = api.get('payment');

    return response.json<PaymentResponse[]>();
  }
};
