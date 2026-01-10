/**
 * Fees service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

class FeesService {
  async getStructure() {
    const response = await apiClient.get(`${API_ENDPOINTS.FEES}/structure`);
    return response.data!;
  }

  async createStructure(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.FEES}/structure`, data);
    return response.data;
  }

  async assignFees(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.FEES}/assign`, data);
    return response.data;
  }

  async collectPayment(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.FEES}/collection`, data);
    return response.data;
  }

  async getPayments(params?: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.FEES}/payments`, { params });
    return response.data!;
  }

  async getReports(params?: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.FEES}/reports`, { params });
    return response.data!;
  }

  async processRefund(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.FEES}/refunds`, data);
    return response.data;
  }
}

export const feesService = new FeesService();
