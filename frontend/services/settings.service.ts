/**
 * Settings service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

class SettingsService {
  async getSchoolProfile() {
    const response = await apiClient.get(`${API_ENDPOINTS.SETTINGS}/school-profile`);
    return response.data;
  }

  async updateSchoolProfile(data: any) {
    const response = await apiClient.patch(`${API_ENDPOINTS.SETTINGS}/school-profile`, data);
    return response.data;
  }

  async getAcademicYear() {
    const response = await apiClient.get(`${API_ENDPOINTS.SETTINGS}/academic-year`);
    return response.data;
  }

  async updateAcademicYear(data: any) {
    const response = await apiClient.patch(`${API_ENDPOINTS.SETTINGS}/academic-year`, data);
    return response.data;
  }

  async getRolesPermissions() {
    const response = await apiClient.get(`${API_ENDPOINTS.SETTINGS}/roles-permissions`);
    return response.data;
  }

  async updateRolesPermissions(data: any) {
    const response = await apiClient.patch(`${API_ENDPOINTS.SETTINGS}/roles-permissions`, data);
    return response.data;
  }

  async getBranding() {
    const response = await apiClient.get(`${API_ENDPOINTS.SETTINGS}/branding`);
    return response.data;
  }

  async updateBranding(data: any) {
    const response = await apiClient.patch(`${API_ENDPOINTS.SETTINGS}/branding`, data);
    return response.data;
  }
}

export const settingsService = new SettingsService();
