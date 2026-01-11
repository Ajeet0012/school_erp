/**
 * Examinations & Results service
 * Handles exam scheduling, marks entry, and report card generation
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';
import { Exam, PaginationParams, PaginatedResponse } from '@/utils/types';

class ExamsService {
  /**
   * Get all exams with optional filtering
   */
  async getExams(params?: PaginationParams & { status?: string }): Promise<PaginatedResponse<Exam>> {
    const response = await apiClient.get<PaginatedResponse<Exam>>(API_ENDPOINTS.EXAMS, { params });
    return (response as any).data || response;
  }

  /**
   * Get exam by ID
   */
  async getExamById(id: string): Promise<Exam> {
    const response = await apiClient.get<Exam>(`${API_ENDPOINTS.EXAMS}/${id}`);
    return (response as any).data || response;
  }

  /**
   * Create a new exam
   */
  async createExam(data: Partial<Exam>): Promise<Exam> {
    const response = await apiClient.post<Exam>(API_ENDPOINTS.EXAMS, data);
    return (response as any).data || response;
  }

  /**
   * Update exam details
   */
  async updateExam(id: string, data: Partial<Exam>): Promise<Exam> {
    const response = await apiClient.put<Exam>(`${API_ENDPOINTS.EXAMS}/${id}`, data);
    return (response as any).data || response;
  }

  /**
   * Delete exam
   */
  async deleteExam(id: string): Promise<void> {
    await apiClient.delete(`${API_ENDPOINTS.EXAMS}/${id}`);
  }

  /**
   * Save marks for an exam and subject
   */
  async saveMarks(examId: string, subjectId: string, marksData: any[]): Promise<void> {
    await apiClient.post(`${API_ENDPOINTS.EXAMS}/${examId}/subjects/${subjectId}/marks`, { marks: marksData });
  }

  /**
   * Get marks for an exam
   */
  async getMarks(examId: string, params?: { subjectId?: string; classId?: string }): Promise<any[]> {
    const response = await apiClient.get(`${API_ENDPOINTS.EXAMS}/${examId}/marks`, { params });
    return (response as any).data || response;
  }

  /**
   * Generate report card for a student
   */
  async generateReportCard(studentId: string, academicYearId: string): Promise<any> {
    const response = await apiClient.get(`/reports/report-cards/${studentId}`, { params: { academicYearId } });
    return (response as any).data || response;
  }
}

export const examsService = new ExamsService();
