/**
 * Role-based Access Guard
 * Protects routes based on user role
 * Redirects to appropriate dashboard if role doesn't match
 * Uses localStorage for user data
 */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getDashboardRoute, isValidRole, hasRole, UserRole } from '@/utils/role-config';

interface RoleGuardProps {
  children: React.ReactNode;
  allowedRoles: UserRole[]; // Use centralized role types
  redirectTo?: string;
}

export default function RoleGuard({ children, allowedRoles, redirectTo }: RoleGuardProps) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem('access_token');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
      router.push('/auth/login');
      return;
    }

    try {
      const user = JSON.parse(userStr);
      const userRole = user.role as string;

      // Validate role
      if (!isValidRole(userRole)) {
        // Invalid role - redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        router.push('/auth/login');
        return;
      }

      // Check if user has required role
      if (!hasRole(userRole, allowedRoles)) {
        // Redirect to user's dashboard if role doesn't match
        const dashboard = getDashboardRoute(userRole) || '/auth/login';
        router.push(redirectTo || dashboard);
        return;
      }

      setAuthorized(true);
    } catch (error) {
      // Invalid user data, redirect to login
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      router.push('/auth/login');
    } finally {
      setLoading(false);
    }
  }, [router, allowedRoles, redirectTo]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!authorized) {
    return null; // Don't render until authorization check
  }

  return <>{children}</>;
}
