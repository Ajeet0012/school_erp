/**
 * Attendance service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

class AttendanceService {
  async markStudentAttendance(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.ATTENDANCE}/students`, data);
    return response.data;
  }

  async markTeacherAttendance(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.ATTENDANCE}/teachers`, data);
    return response.data;
  }

  async markBulkAttendance(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.ATTENDANCE}/bulk`, data);
    return response.data;
  }

  async getStudentAttendance(params: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.ATTENDANCE}/students`, { params });
    return response;
  }

  async getTeacherAttendance(params: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.ATTENDANCE}/teachers`, { params });
    return response;
  }

  async getReports(params: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.ATTENDANCE}/reports`, { params });
    return response.data!;
  }
}

export const attendanceService = new AttendanceService();
