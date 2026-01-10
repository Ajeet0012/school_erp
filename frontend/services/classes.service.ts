/**
 * Classes service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';
import { Class, CreateClassDto, UpdateClassDto, Section } from '@/utils/types';

class ClassesService {
  async getAll(): Promise<Class[]> {
    const response = await apiClient.get(API_ENDPOINTS.CLASSES);
    return response.data!;
  }

  async getById(id: string): Promise<Class> {
    const response = await apiClient.get(`${API_ENDPOINTS.CLASSES}/${id}`);
    return response.data;
  }

  async create(data: CreateClassDto): Promise<Class> {
    const response = await apiClient.post(API_ENDPOINTS.CLASSES, data);
    return response.data;
  }

  async update(id: string, data: UpdateClassDto): Promise<Class> {
    const response = await apiClient.patch(`${API_ENDPOINTS.CLASSES}/${id}`, data);
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await apiClient.delete(`${API_ENDPOINTS.CLASSES}/${id}`);
  }

  async getSections(classId: string): Promise<Section[]> {
    const response = await apiClient.get(`${API_ENDPOINTS.CLASSES}/${classId}/sections`);
    return response.data || [];
  }
}

export const classesService = new ClassesService();
