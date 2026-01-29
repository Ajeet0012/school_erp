import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';
import {
  Menu,
  LogOut,
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  Calendar,
  CreditCard,
  Bell,
  Search,
  School
} from 'lucide-react';

interface StudentLayoutProps {
  children: ReactNode;
}

function StudentLayoutContent({ children }: StudentLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { href: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/student/assignments', label: 'Assignments', icon: BookOpen },
    { href: '/student/attendance', label: 'Attendance', icon: Calendar },
    { href: '/student/fees', label: 'Fees & Payments', icon: CreditCard },
    { href: '/student/results', label: 'Exam Results', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex overflow-hidden">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-72 
        bg-white border-r border-slate-200
        transition-transform duration-300 ease-in-out shadow-sm
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full relative overflow-hidden">
          <div className="h-20 flex items-center px-8 border-b border-slate-200 bg-white relative z-10">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-sm">
                <School size={24} />
              </div>
              <div>
                <span className="text-xl font-display font-bold tracking-tight text-slate-900 leading-none">EduCore</span>
                <span className="block text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-[0.1em]">Student</span>
              </div>
            </div>
          </div>

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
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }
                  `}
                >
                  <item.icon
                    size={20}
                    className={`transition-colors ${isActive ? 'text-blue-600' : 'text-slate-500 group-hover:text-slate-700'}`}
                  />
                  <span className="text-sm tracking-wide">{item.label}</span>
                  {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-200 bg-white relative z-10">
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 flex items-center gap-3">
              <div className="size-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-600 font-bold">
                {user?.firstName?.[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{user?.firstName} {user?.lastName}</p>
                <p className="text-xs text-slate-500 truncate">Student</p>
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

      <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
        <header className="h-20 sticky top-0 z-30 px-8 flex items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-display font-bold text-slate-900 tracking-tight lg:hidden">Dashboard</h1>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <div className="hidden md:flex items-center bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
              <span className="size-2 bg-emerald-500 rounded-full animate-pulse mr-2" />
              <span className="text-xs font-semibold">Active Session</span>
            </div>
            <button className="relative p-2 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all border border-transparent">
              <Bell size={20} />
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.STUDENT]}>
        <StudentLayoutContent>{children}</StudentLayoutContent>
      </RoleGuard>
    </AuthGuard>
  );
}
