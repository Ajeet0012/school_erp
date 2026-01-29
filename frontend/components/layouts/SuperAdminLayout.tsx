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
    { href: '/super-admin/dashboard', label: 'Global Dashboard', icon: LayoutDashboard },
    { href: '/super-admin/schools', label: 'School Registry', icon: Building2 },
    { href: '/super-admin/plans', label: 'Subscription Plans', icon: CreditCard },
    { href: '/super-admin/users', label: 'User Directory', icon: Users },
    { href: '/super-admin/system-logs', label: 'System Health', icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex overflow-hidden">
      {/* Sidebar - Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-72 
        bg-white border-r border-slate-200
        transition-transform duration-300 ease-in-out shadow-sm
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* Logo */}
          <div className="h-20 flex items-center px-8 border-b border-slate-200 bg-white relative z-10">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                <Globe size={20} />
              </div>
              <div>
                <span className="text-xl font-display font-bold tracking-tight text-slate-900 leading-none">EduNexus</span>
                <span className="block text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-[0.1em]">Super Admin</span>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto no-scrollbar relative z-10">
            {navItems.map((item) => {
              const isActive = router.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group
                    ${isActive
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  <item.icon
                    size={20}
                    className={`transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-500 group-hover:text-slate-700'}`}
                  />
                  <span className="text-sm tracking-wide">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-200 bg-white relative z-10">
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 flex items-center gap-3">
              <div className="size-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-600 font-bold">
                {user?.firstName?.[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{user?.firstName} {user?.lastName}</p>
                <p className="text-xs text-indigo-500 truncate">System Owner</p>
              </div>
              <button
                onClick={logout}
                className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-md"
                title="Logout"
              >
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
        {/* Header */}
        <header className="h-20 sticky top-0 z-30 px-8 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            <div className="hidden md:flex items-center bg-slate-50 rounded-lg px-4 py-2 w-96 border border-slate-200 focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
              <Search size={18} className="text-slate-400 mr-3" />
              <input
                type="text"
                placeholder="Search tenants & systems..."
                className="bg-transparent border-none text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-0 w-full outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all border border-transparent">
              <Bell size={20} />
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
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
