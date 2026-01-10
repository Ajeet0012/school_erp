/**
 * Super Admin Layout Component
 * Shared layout for all super admin pages
 * 
 * This layout automatically handles:
 * - Authentication (AuthGuard)
 * - Authorization (RoleGuard for SUPER_ADMIN role)
 * - Shared UI (Sidebar, Navbar, Shell)
 * 
 * Pages using this layout should contain ONLY UI/content.
 */

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

interface SuperAdminLayoutProps {
  children: ReactNode;
}

function SuperAdminLayoutContent({ children }: SuperAdminLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { href: '/super-admin/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/super-admin/schools', label: 'Schools Management', icon: 'domain' },
    { href: '/super-admin/plans', label: 'Subscriptions & Plans', icon: 'verified_user' },
    { href: '/super-admin/users', label: 'User Management', icon: 'people_alt' },
    { href: '/super-admin/system-logs', label: 'System Logs', icon: 'analytics' },
  ];

  const adminItems = [
    { href: '/super-admin/settings', label: 'Global Settings', icon: 'settings' },
    { href: '/super-admin/security', label: 'Security Audit', icon: 'security' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased transition-colors duration-200">
      {/* Sidebar for Desktop */}
      <aside className={`w-64 flex-shrink-0 bg-card-light dark:bg-card-dark border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} fixed lg:relative z-50 h-full`}>
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
            <span className="material-icons-outlined text-3xl">school</span>
            <span>EduNexus</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          <div className="px-3 mb-2 text-xs font-semibold text-muted-light dark:text-muted-dark uppercase tracking-wider">Core</div>
          {navItems.map((item) => {
            const isActive = router.pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                  ? 'bg-primary/10 text-primary dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-indigo-400'
                  }`}
              >
                <span className="material-icons-outlined mr-3">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}

          <div className="px-3 mt-6 mb-2 text-xs font-semibold text-muted-light dark:text-muted-dark uppercase tracking-wider">System</div>
          {adminItems.map((item) => {
            const isActive = router.pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive
                  ? 'bg-primary/10 text-primary dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-indigo-400'
                  }`}
              >
                <span className="material-icons-outlined mr-3">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold border-2 border-primary overflow-hidden">
              {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-light dark:text-white truncate">{user?.firstName} {user?.lastName}</p>
              <p className="text-xs text-muted-light dark:text-gray-400">Super Admin</p>
            </div>
            <button onClick={logout} className="text-gray-400 hover:text-red-500 transition-colors">
              <span className="material-icons-outlined">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-16 flex items-center justify-between px-6 bg-card-light dark:bg-card-dark border-b border-gray-200 dark:border-gray-700 shadow-sm z-10">
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <span className="material-icons-outlined">menu</span>
            </button>
          </div>

          <div className="hidden md:flex relative w-96">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-icons-outlined text-gray-400">search</span>
            </span>
            <input
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-gray-50 dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm text-gray-900 dark:text-white transition duration-150 ease-in-out"
              placeholder="Search schools, users, or settings..."
              type="text"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <span className="material-icons-outlined">dark_mode</span>
            </button>
            <button className="relative p-2 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <span className="material-icons-outlined">notifications</span>
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white dark:border-gray-800"></span>
            </button>
            <button className="hidden sm:flex relative p-2 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <span className="material-icons-outlined">help_outline</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
          {children}

          <footer className="mt-8 border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-muted-light dark:text-muted-dark">
            <p>© 2024 EduNexus ERP System. All rights reserved. <a className="text-primary hover:underline" href="#">Privacy Policy</a></p>
          </footer>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

/**
 * Super Admin Layout with built-in authentication and authorization
 * Wraps content with AuthGuard and RoleGuard for SUPER_ADMIN role
 */
export default function SuperAdminLayout({ children }: SuperAdminLayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN]}>
        <SuperAdminLayoutContent>{children}</SuperAdminLayoutContent>
      </RoleGuard>
    </AuthGuard>
  );
}
