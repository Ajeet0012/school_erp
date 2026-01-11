/**
 * Student Layout Component
 * Shared layout for all student pages
 * 
 * This layout automatically handles:
 * - Authentication (AuthGuard)
 * - Authorization (RoleGuard for STUDENT role)
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

interface StudentLayoutProps {
  children: ReactNode;
}

function StudentLayoutContent({ children }: StudentLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();

  const navItems = [
    { href: '/student/dashboard', label: 'Dashboard' },
    { href: '/student/attendance', label: 'Attendance' },
    { href: '/student/timetable', label: 'Timetable' },
    { href: '/student/homework', label: 'Homework' },
    { href: '/student/exams', label: 'Exams' },
    { href: '/student/results', label: 'Results' },
    { href: '/student/fees', label: 'Fees' },
    { href: '/student/downloads', label: 'Downloads' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-foreground">School ERP - Student</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{user?.firstName} {user?.lastName}</span>
              <button
                onClick={logout}
                className="btn-primary px-4 py-2 text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-card shadow-soft min-h-[calc(100vh-4rem)] border-r border-border">
          <nav className="p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`nav-item block px-4 py-2 rounded-md text-sm ${isActive
                          ? 'nav-item-active'
                          : ''
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
 * Student Layout with built-in authentication and authorization
 * Wraps content with AuthGuard and RoleGuard for STUDENT role
 */
export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.STUDENT]}>
        <StudentLayoutContent>{children}</StudentLayoutContent>
      </RoleGuard>
    </AuthGuard>
  );
}
