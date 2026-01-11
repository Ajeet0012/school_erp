/**
 * Communication service
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

class CommunicationService {
  // Notices
  async getNotices(params?: any) {
    const response = await apiClient.get(API_ENDPOINTS.COMMUNICATION.NOTICES, { params });
    return (response as any).data || response;
  }

  async createNotice(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.COMMUNICATION.NOTICES, data);
    return (response as any).data || response;
  }

  // SMS
  async sendSMS(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.COMMUNICATION.SMS, data);
    return (response as any).data || response;
  }

  async getSMSHistory(params?: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.COMMUNICATION.SMS}/history`, { params });
    return (response as any).data || response;
  }

  // Email
  async sendEmail(data: any) {
    const response = await apiClient.post(API_ENDPOINTS.COMMUNICATION.EMAIL, data);
    return (response as any).data || response;
  }

  async getEmailHistory(params?: any) {
    const response = await apiClient.get(`${API_ENDPOINTS.COMMUNICATION.EMAIL}/history`, { params });
    return (response as any).data || response;
  }

  // Chat
  async getConversations() {
    const response = await apiClient.get(API_ENDPOINTS.COMMUNICATION.CHAT);
    return (response as any).data || response;
  }

  async getConversation(userId: string) {
    const response = await apiClient.get(`${API_ENDPOINTS.COMMUNICATION.CHAT}/conversation/${userId}`);
    return (response as any).data || response;
  }

  async sendMessage(data: any) {
    const response = await apiClient.post(`${API_ENDPOINTS.COMMUNICATION.CHAT}/send`, data);
    return (response as any).data || response;
  }
}

export const communicationService = new CommunicationService();
