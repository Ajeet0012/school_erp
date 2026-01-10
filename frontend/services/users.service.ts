/**
 * Users service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

class UsersService {
  async getAll(params?: any) {
    const response = await apiClient.get(API_ENDPOINTS.USERS, { params });
    return response.data!;
  }

  async getById(id: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.USERS}/${id}`);
    return response.data;
  }

  async create(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.USERS, data);
    return response.data;
  }

  async update(id: string, data: any) {
    const response = await apiClient.patch(`${API_ENDPOINTS.USERS}/${id}`, data);
    return response.data;
  }

  async delete(id: string) {
    await apiClient.delete(`${API_ENDPOINTS.USERS}/${id}`);
  }

  async getLoginHistory(userId: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.USERS}/${userId}/login-history`);
    return response.data || [];
  }
}

export const usersService = new UsersService();
