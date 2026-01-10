/**
 * Parent Layout Component
 * Shared layout for all parent pages
 * 
 * This layout automatically handles:
 * - Authentication (AuthGuard)
 * - Authorization (RoleGuard for PARENT role)
 * - Shared UI (Sidebar, Navbar, Shell)
 * 
 * Pages using this layout should contain ONLY UI/content.
 */

import { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

interface ParentLayoutProps {
  children: ReactNode;
}

function ParentLayoutContent({ children }: ParentLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();

  const navItems = [
    { href: '/parent/dashboard', label: 'Dashboard' },
    { href: '/parent/attendance', label: 'Attendance' },
    { href: '/parent/fees', label: 'Fees' },
    { href: '/parent/results', label: 'Results' },
    { href: '/parent/messages', label: 'Messages' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900">School ERP - Parent</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{user?.firstName} {user?.lastName}</span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white shadow-sm min-h-[calc(100vh-4rem)]">
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-md text-sm ${
                        isActive
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

/**
 * Parent Layout with built-in authentication and authorization
 * Wraps content with AuthGuard and RoleGuard for PARENT role
 */
export default function ParentLayout({ children }: ParentLayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.PARENT]}>
        <ParentLayoutContent>{children}</ParentLayoutContent>
      </RoleGuard>
    </AuthGuard>
  );
}
