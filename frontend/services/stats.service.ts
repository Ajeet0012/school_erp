/**
 * Stats service
 * Handles dashboard statistics API calls
 */

import { apiClient } from '@/utils/api-client';
import { API_ENDPOINTS } from '@/utils/constants';

export interface DashboardStats {
    totalStudents: number;
    totalTeachers: number;
    totalParents: number;
    totalEarnings: number;
    totalClasses: number;
    totalSubjects: number;
}

class StatsService {
    /**
     * Get dashboard statistics
     */
    async getStats(): Promise<DashboardStats> {
        // Note: You might need to add a STATS endpoint to constants if it doesn't exist
        // For now, assuming a general stats endpoint or using a placeholder
        const response = await apiClient.get<DashboardStats>('/stats/dashboard');
        return response.data!;
    }

    async getTeacherStats(): Promise<any> {
        const response = await apiClient.get('/stats/teacher');
        return response.data!;
    }

    async getStudentStats(): Promise<any> {
        const response = await apiClient.get('/stats/student');
        return response.data!;
    }
}

export const statsService = new StatsService();

// Temporary constants to prevent breakage until backend provides these
export const ATTENDANCE_DATA = [
    { name: 'Mon', present: 400, absent: 24 },
    { name: 'Tue', present: 300, absent: 13 },
    { name: 'Wed', present: 200, absent: 98 },
    { name: 'Thu', present: 278, absent: 39 },
    { name: 'Fri', present: 189, absent: 48 },
];

export const FEES_DATA = [
    { name: 'Jan', collected: 4000, pending: 2400 },
    { name: 'Feb', collected: 3000, pending: 1398 },
    { name: 'Mar', collected: 2000, pending: 9800 },
    { name: 'Apr', collected: 2780, pending: 3908 },
    { name: 'May', collected: 1890, pending: 4800 },
    { name: 'Jun', collected: 2390, pending: 3800 },
];
