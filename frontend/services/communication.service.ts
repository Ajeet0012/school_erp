/**
 * Communication service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

class CommunicationService {
  // Notices
  async getNotices(params?: any) {
    const response = await apiClient.get(API_ENDPOINTS.COMMUNICATION.NOTICES, { params });
    return response.data!;
  }

  async createNotice(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.COMMUNICATION.NOTICES, data);
    return response.data;
  }

  // SMS
  async sendSMS(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.COMMUNICATION.SMS, data);
    return response.data;
  }

  async getSMSHistory(params?: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.COMMUNICATION.SMS}/history`, { params });
    return response.data!;
  }

  // Email
  async sendEmail(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.COMMUNICATION.EMAIL, data);
    return response.data;
  }

  async getEmailHistory(params?: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.COMMUNICATION.EMAIL}/history`, { params });
    return response.data!;
  }

  // Chat
  async getConversations() {
    const response = await apiClient.get(API_ENDPOINTS.COMMUNICATION.CHAT);
    return response.data!;
  }

  async getConversation(userId: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.COMMUNICATION.CHAT}/conversation/${userId}`);
    return response.data;
  }

  async sendMessage(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.COMMUNICATION.CHAT}/send`, data);
    return response.data;
  }
}

export const communicationService = new CommunicationService();
