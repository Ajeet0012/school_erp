/**
 * Super Admin service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

class SuperAdminService {
  // Schools
  async getSchools(params?: any) {
    const response = await apiClient.get(API_ENDPOINTS.SUPER_ADMIN.SCHOOLS, { params });
    return response.data!;
  }

  async getSchoolById(id: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.SUPER_ADMIN.SCHOOLS}/${id}`);
    return response.data;
  }

  async createSchool(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.SUPER_ADMIN.SCHOOLS, data);
    return response.data;
  }

  async updateSchool(id: string, data: any) {
    const response = await apiClient.patch(`${API_ENDPOINTS.SUPER_ADMIN.SCHOOLS}/${id}`, data);
    return response.data;
  }

  // Plans
  async getPlans() {
    const response = await apiClient.get(API_ENDPOINTS.SUPER_ADMIN.PLANS);
    return response.data!;
  }

  async getPlanById(id: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.SUPER_ADMIN.PLANS}/${id}`);
    return response.data;
  }

  async createPlan(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.SUPER_ADMIN.PLANS, data);
    return response.data;
  }

  async updatePlan(id: string, data: any) {
    const response = await apiClient.patch(`${API_ENDPOINTS.SUPER_ADMIN.PLANS}/${id}`, data);
    return response.data;
  }

  // System Logs
  async getSystemLogs(params?: any) {
    const response = await apiClient.get(API_ENDPOINTS.SUPER_ADMIN.SYSTEM_LOGS, { params });
    return response.data!;
  }
}

export const superAdminService = new SuperAdminService();
