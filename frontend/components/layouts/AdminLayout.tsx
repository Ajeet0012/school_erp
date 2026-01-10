/**
 * Admin Layout Component
 * Shared layout for all admin (SCHOOL_ADMIN) pages
 * 
 * This layout automatically handles:
 * - Authentication (AuthGuard)
 * - Authorization (RoleGuard for SCHOOL_ADMIN role)
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

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayoutContent({ children }: AdminLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: 'dashboard' },
    { name: 'Students', href: '/admin/students', icon: 'graduation_cap' },
    { name: 'Teachers', href: '/admin/teachers', icon: 'people' },
    { name: 'Classes', href: '/admin/classes', icon: 'book' },
    { name: 'Attendance', href: '/admin/attendance', icon: 'calendar_today' },
    { name: 'Reports', href: '/admin/reports', icon: 'description' },
  ];

  const secondaryNav = [
    { name: 'Settings', href: '/admin/settings', icon: 'settings' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-200">
      {/* Sidebar for Desktop */}
      <aside className={`w-72 flex-shrink-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-500 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} fixed lg:relative z-50 h-full`}>
        <div className="h-24 flex items-center px-8">
          <Link href="/admin/dashboard" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
              <span className="material-icons-round text-2xl">school</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">EduCore</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80">Campus Pro</span>
            </div>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 custom-scrollbar">
          <div>
            <div className="px-4 mb-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Management Console</div>
            <nav className="space-y-1.5">
              {navigation.map((item) => {
                const isActive = router.pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-4 py-3.5 text-sm font-bold rounded-2xl transition-all duration-300 group ${isActive
                      ? 'bg-primary text-white shadow-xl shadow-primary/25 translate-x-1'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary'
                      }`}
                  >
                    <span className={`material-icons-round mr-3 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110 text-slate-400 dark:text-slate-500 group-hover:text-primary'}`}>{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <div className="px-4 mb-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">System Protocols</div>
            <nav className="space-y-1.5">
              {secondaryNav.map((item) => {
                const isActive = router.pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-4 py-3.5 text-sm font-bold rounded-2xl transition-all duration-300 group ${isActive
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl translate-x-1'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary dark:hover:text-primary'
                      }`}
                  >
                    <span className={`material-icons-round mr-3 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110 text-slate-400 dark:text-slate-500 group-hover:text-primary'}`}>{item.icon}</span>
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] p-4 border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-black shadow-inner">
                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-slate-900 dark:text-white truncate">{user?.firstName} {user?.lastName}</p>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">School Admin</p>
                </div>
              </div>
              <button onClick={logout} className="p-2.5 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all active:scale-95">
                <span className="material-icons-round text-xl">logout</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-24 flex items-center justify-between px-10 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-10">
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-all"
            >
              <span className="material-icons-round">menu</span>
            </button>
          </div>

          <div className="hidden md:flex relative w-96 group">
            <span className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <span className="material-icons-round text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            </span>
            <input
              className="block w-full pl-12 pr-5 py-3.5 bg-slate-100/50 dark:bg-slate-800/50 border-none rounded-[1.25rem] text-sm font-bold text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              placeholder="Query system protocols..."
              type="text"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="h-12 w-12 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-all active:scale-95">
              <span className="material-icons-round text-2xl">dark_mode</span>
            </button>
            <button className="relative h-12 w-12 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-all active:scale-95">
              <span className="material-icons-round text-2xl">notifications</span>
              <span className="absolute top-3.5 right-3.5 h-2.5 w-2.5 rounded-full bg-rose-500 border-2 border-white dark:border-slate-900"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 custom-scrollbar scroll-smooth">
          {children}

          <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400">
            <div className="flex items-center gap-2 font-black uppercase text-[10px] tracking-widest">
              <span className="text-primary italic">EduCore</span>
              <span>© 2024 Terminal Operations</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Protocol Version 4.0.2</Link>
              <Link href="#" className="hover:text-primary transition-colors text-[10px] font-bold uppercase tracking-widest">Security Audit</Link>
            </div>
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
 * Admin Layout with built-in authentication and authorization
 * Wraps content with AuthGuard and RoleGuard for SCHOOL_ADMIN role
 */
export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.SCHOOL_ADMIN]}>
        <AdminLayoutContent>{children}</AdminLayoutContent>
      </RoleGuard>
    </AuthGuard>
  );
}
