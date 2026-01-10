/**
 * Exams service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

class ExamsService {
  async getAll() {
    const response = await apiClient.get(API_ENDPOINTS.EXAMS);
    return response.data!;
  }

  async getById(id: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.EXAMS}/${id}`);
    return response.data;
  }

  async create(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.EXAMS, data);
    return response.data;
  }

  async update(id: string, data: any) {
    const response = await apiClient.patch(`${API_ENDPOINTS.EXAMS}/${id}`, data);
    return response.data;
  }

  async getSchedule(params: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.EXAMS}/schedule`, { params });
    return response.data!;
  }

  async enterMarks(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.EXAMS}/marks`, data);
    return response.data;
  }

  async getResults(params: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.EXAMS}/results`, { params });
    return response.data!;
  }

  async getAnalytics(params: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.EXAMS}/analytics`, { params });
    return response.data!;
  }
}

export const examsService = new ExamsService();
