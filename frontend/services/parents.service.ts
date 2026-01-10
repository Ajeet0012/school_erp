/**
 * Parents service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

class ParentsService {
  async getAll(params?: any) {
    const response = await apiClient.get(API_ENDPOINTS.PARENTS, { params });
    return response.data!;
  }

  async getById(id: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.PARENTS}/${id}`);
    return response.data;
  }

  async create(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.PARENTS, data);
    return response.data;
  }

  async update(id: string, data: any) {
    const response = await apiClient.patch(`${API_ENDPOINTS.PARENTS}/${id}`, data);
    return response.data;
  }

  async delete(id: string) {
    await apiClient.delete(`${API_ENDPOINTS.PARENTS}/${id}`);
  }
}

export const parentsService = new ParentsService();
