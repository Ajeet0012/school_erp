/**
 * Application constants
 */

export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000').trim();

// API endpoints
export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    CHANGE_PASSWORD: '/auth/change-password',
  },
  // Super Admin
  SUPER_ADMIN: {
    SCHOOLS: '/super-admin/schools',
    PLANS: '/super-admin/plans',
    SYSTEM_LOGS: '/super-admin/system-logs',
  },
  // Admin modules
  USERS: '/users',
  STUDENTS: '/students',
  PARENTS: '/parents',
  TEACHERS: '/teachers',
  CLASSES: '/classes',
  SECTIONS: '/sections',
  SUBJECTS: '/subjects',
  ATTENDANCE: '/attendance',
  TIMETABLE: '/timetable',
  EXAMS: '/exams',
  HOMEWORK: '/homework',
  FEES: '/fees',
  LIBRARY: '/library',
  TRANSPORT: '/transport',
  HOSTEL: '/hostel',
  COMMUNICATION: {
    NOTICES: '/communication/notices',
    SMS: '/communication/sms',
    EMAIL: '/communication/email',
    CHAT: '/chat',
  },
  DOCUMENTS: '/documents',
  REPORTS: '/reports',
  SETTINGS: '/settings',
  AUDIT: '/audit',
  SUPPORT: '/support',
} as const;

// Cookie names
export const COOKIE_NAMES = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
} as const;

// Storage keys
export const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'token',
} as const;
