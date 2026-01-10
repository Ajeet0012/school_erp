/**
 * Authentication Guard
 * Protects routes that require authentication
 * Redirects to login if user is not authenticated
 * Uses localStorage for token check
 */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    const token = localStorage.getItem('access_token');
    
    if (!token) {
      router.push('/auth/login');
      return;
    }

    setIsAuthenticated(true);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Don't render until redirect
  }

  return <>{children}</>;
}
