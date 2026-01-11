import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';
import {
  LayoutDashboard,
  Building2,
  CreditCard,
  Users,
  Activity,
  Settings,
  ShieldAlert,
  LogOut,
  Menu,
  Search,
  Bell,
  Globe
} from 'lucide-react';

interface SuperAdminLayoutProps {
  children: ReactNode;
}

function SuperAdminLayoutContent({ children }: SuperAdminLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { href: '/super-admin/dashboard', label: 'Global Dashboard', icon: <LayoutDashboard size={20} /> },
    { href: '/super-admin/schools', label: 'School Registry', icon: <Building2 size={20} /> },
    { href: '/super-admin/plans', label: 'Subscription Plans', icon: <CreditCard size={20} /> },
    { href: '/super-admin/users', label: 'User Directory', icon: <Users size={20} /> },
    { href: '/super-admin/system-logs', label: 'System Health', icon: <Activity size={20} /> },
  ];

  const sysItems = [
    { href: '/super-admin/settings', label: 'Global Settings', icon: <Settings size={20} /> },
    { href: '/super-admin/security', label: 'Security Audit', icon: <ShieldAlert size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex">
      {/* Sidebar - Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-slate-900 border-r border-slate-800 text-white
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center px-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <Globe size={24} />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-tight text-white">EduNexus</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Super Admin</p>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-4 py-8 space-y-8 overflow-y-auto">
            <div>
              <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Core Modules</p>
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = router.pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                          ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 font-bold'
                          : 'text-slate-400 hover:bg-slate-800 hover:text-white font-medium'
                        }`}
                    >
                      <span className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}>
                        {item.icon}
                      </span>
                      <span className="text-sm tracking-wide">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">System Config</p>
              <div className="space-y-1">
                {sysItems.map((item) => {
                  const isActive = router.pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                          ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 font-bold'
                          : 'text-slate-400 hover:bg-slate-800 hover:text-white font-medium'
                        }`}
                    >
                      <span className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}>
                        {item.icon}
                      </span>
                      <span className="text-sm tracking-wide">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-800">
            <div className="bg-slate-800 rounded-2xl p-4 flex items-center gap-4">
              <div className="size-10 rounded-full bg-slate-700 overflow-hidden flex items-center justify-center text-slate-300 font-bold">
                {user?.firstName?.[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{user?.firstName} {user?.lastName}</p>
                <p className="text-xs text-slate-400 truncate">Root Access</p>
              </div>
              <button onClick={logout} className="text-slate-400 hover:text-rose-500 transition-colors">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300">
        {/* Header */}
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 px-8 flex items-center justify-between">
          <button
            className="lg:hidden p-2 -ml-2 text-slate-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-2.5 w-96">
            <Search size={18} className="text-slate-400 mr-3" />
            <input
              type="text"
              placeholder="Search registry, logs, or users..."
              className="bg-transparent border-none text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 w-full"
            />
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 px-2 py-1 bg-white dark:bg-slate-700 rounded-lg">
              CMD + K
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <button className="size-10 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all">
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 size-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function SuperAdminLayout({ children }: SuperAdminLayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN]}>
        <SuperAdminLayoutContent>{children}</SuperAdminLayoutContent>
      </RoleGuard>
    </AuthGuard>
  );
}
