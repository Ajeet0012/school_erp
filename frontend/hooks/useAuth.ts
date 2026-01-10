import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { User, LoginCredentials } from '@/utils/types';
import { authService } from '@/services/auth.service';
import { isValidRole } from '@/utils/role-config';

const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  USER: 'user',
} as const;

export const useAuth = () => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      if (typeof window === 'undefined') {
        setLoading(false);
        return;
      }

      const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
      
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // Try to get user from localStorage first
        const storedUserStr = localStorage.getItem(STORAGE_KEYS.USER);
        
        if (storedUserStr) {
          const storedUser = JSON.parse(storedUserStr);
          
          // Validate user data
          if (storedUser && storedUser.id && storedUser.email && isValidRole(storedUser.role)) {
            setUser(storedUser);
            setAuthenticated(true);
            setLoading(false);
            return;
          }
        }

        // If no valid user in storage, fetch from backend
        const fetchedUser = await authService.getProfile();
        
        if (fetchedUser && isValidRole(fetchedUser.role)) {
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(fetchedUser));
          setUser(fetchedUser);
          setAuthenticated(true);
        } else {
          // Invalid user data - clear storage
          localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
          localStorage.removeItem(STORAGE_KEYS.USER);
        }
      } catch (error) {
        // Token invalid or expired - clear storage
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<User> => {
      const response = await authService.login(credentials);

      if (!response || !response.access_token) {
        throw new Error('Invalid response from server');
      }

      if (!response.user || !isValidRole(response.user.role)) {
        throw new Error('Invalid user data received from server');
      }

      // Save token and user to localStorage (consistent with api-client)
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, response.access_token);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(response.user));

      // Update state
      setUser(response.user);
      setAuthenticated(true);

      return response.user;
    },
    []
  );

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch (error) {
      // Log error but continue with logout
    } finally {
      // Always clear local storage
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);

      setUser(null);
      setAuthenticated(false);
      
      // Redirect to login
      router.push('/auth/login');
    }
  }, [router]);

  const isAuthenticated = useCallback((): boolean => {
    return authenticated && user !== null;
  }, [authenticated, user]);

  return {
    user,
    loading,
    authenticated,
    login,
    logout,
    isAuthenticated,
  };
};
