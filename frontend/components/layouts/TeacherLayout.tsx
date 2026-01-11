/**
 * Teacher Layout Component
 * Shared layout for all teacher pages
 * 
 * This layout automatically handles:
 * - Authentication (AuthGuard)
 * - Authorization (RoleGuard for TEACHER role)
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

interface TeacherLayoutProps {
  children: ReactNode;
}

function TeacherLayoutContent({ children }: TeacherLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();

  const navItems = [
    { href: '/teacher/dashboard', label: 'Dashboard' },
    { href: '/teacher/attendance', label: 'Attendance' },
    { href: '/teacher/timetable', label: 'Timetable' },
    { href: '/teacher/exams', label: 'Exams' },
    { href: '/teacher/messages', label: 'Messages' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-foreground">School ERP - Teacher</h1>
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
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${router.pathname === item.href ? 'nav-item-active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

/**
 * Teacher Layout with built-in authentication and authorization
 * Wraps content with AuthGuard and RoleGuard for TEACHER role
 */
export default function TeacherLayout({ children }: TeacherLayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.TEACHER]}>
        <TeacherLayoutContent>{children}</TeacherLayoutContent>
      </RoleGuard>
    </AuthGuard>
  );
}
