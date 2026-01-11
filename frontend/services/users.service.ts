/**
 * User Management service
 * Handles all user, role, and permission related API calls
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';
import { User, PaginationParams, PaginatedResponse } from '@/utils/types';

class UsersService {
  /**
   * Get all users with optional filtering and pagination
   */
  async getAll(params?: PaginationParams & { role?: string; search?: string }): Promise<PaginatedResponse<User>> {
    const response = await apiClient.get<PaginatedResponse<User>>(API_ENDPOINTS.USERS, { params });
    // If response is wrapped in { data: ... }, extract it
    return (response as any).data || response;
  }

  /**
   * Get a single user by ID
   */
  async getById(id: string): Promise<User> {
    const response = await apiClient.get<User>(`${API_ENDPOINTS.USERS}/${id}`);
    return (response as any).data || response;
  }

  /**
   * Create a new user
   */
  async create(data: Partial<User>): Promise<User> {
    const response = await apiClient.post<User>(API_ENDPOINTS.USERS, data);
    return (response as any).data || response;
  }

  /**
   * Update an existing user
   */
  async update(id: string, data: Partial<User>): Promise<User> {
    const response = await apiClient.put<User>(`${API_ENDPOINTS.USERS}/${id}`, data);
    return (response as any).data || response;
  }

  /**
   * Delete a user
   */
  async delete(id: string): Promise<void> {
    await apiClient.delete(`${API_ENDPOINTS.USERS}/${id}`);
  }

  /**
   * Get all roles
   */
  async getRoles(): Promise<string[]> {
    try {
      const response = await apiClient.get<string[]>('/roles');
      return (response as any).data || response;
    } catch (error) {
      return ['SUPER_ADMIN', 'ADMIN', 'TEACHER', 'STUDENT', 'PARENT', 'ACCOUNTANT'];
    }
  }

  /**
   * Update user role
   */
  async updateRole(userId: string, role: string): Promise<void> {
    await apiClient.patch(`${API_ENDPOINTS.USERS}/${userId}/role`, { role });
  }

  /**
   * Get permissions matrix
   */
  async getPermissions(): Promise<any> {
    const response = await apiClient.get('/permissions');
    return (response as any).data || response;
  }

  /**
   * Update role permissions
   */
  async updateRolePermissions(role: string, permissions: string[]): Promise<void> {
    await apiClient.put(`/roles/${role}/permissions`, { permissions });
  }
}

export const usersService = new UsersService();
