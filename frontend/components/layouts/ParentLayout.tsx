import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';
import { ParentProvider, useParent } from '@/contexts/ParentContext';
import {
  LayoutDashboard,
  Calendar,
  CreditCard,
  BarChart3,
  MessageSquare,
  Menu,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  Users
} from 'lucide-react';

interface ParentLayoutProps {
  children: ReactNode;
}

function ParentLayoutContent({ children }: ParentLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const { selectedChildId, setSelectedChildId, childrenList } = useParent();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [childDropdownOpen, setChildDropdownOpen] = useState(false);

  const navItems = [
    { href: '/parent/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { href: '/parent/attendance', label: 'Attendance', icon: <Calendar size={20} /> },
    { href: '/parent/fees', label: 'Fees', icon: <CreditCard size={20} /> },
    { href: '/parent/results', label: 'Results', icon: <BarChart3 size={20} /> },
    { href: '/parent/messages', label: 'Messages', icon: <MessageSquare size={20} /> },
  ];

  const selectedChild = selectedChildId === 'ALL'
    ? { name: 'Family Overview', avatar: '' }
    : childrenList.find(c => c.id === selectedChildId);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex">
      {/* Sidebar - Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-white border-r border-slate-200 
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center px-8 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-sm shadow-blue-600/20">
                <Users size={24} />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-tight text-slate-900">EduCore</h1>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Parent Portal</p>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = router.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group ${isActive
                    ? 'bg-blue-50 text-blue-700 font-bold'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium'
                    }`}
                >
                  <span className={isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}>
                    {item.icon}
                  </span>
                  <span className="text-sm tracking-wide">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-slate-100">
            <div className="bg-slate-50 rounded-2xl p-4 flex items-center gap-4 border border-slate-200">
              <div className="size-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center text-slate-500">
                <Users size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900 truncate">{user?.firstName} {user?.lastName}</p>
                <p className="text-xs text-slate-400 truncate">Guardian</p>
              </div>
              <button onClick={logout} className="text-slate-400 hover:text-rose-500 transition-colors">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white sticky top-0 z-30 border-b border-slate-200 px-8 flex items-center justify-between shadow-sm">
          <button
            className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="hidden md:flex items-center bg-slate-50 rounded-xl px-4 py-2.5 w-64 border border-slate-200">
            <Search size={18} className="text-slate-400 mr-3" />
            <input
              type="text"
              placeholder="Search activity..."
              className="bg-transparent border-none text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:ring-0 w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            {/* Child Switcher */}
            <div className="relative">
              <button
                onClick={() => setChildDropdownOpen(!childDropdownOpen)}
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl pl-2 pr-4 py-1.5 hover:border-blue-300 transition-all shadow-sm"
              >
                {selectedChildId === 'ALL' ? (
                  <div className="size-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                    <Users size={16} />
                  </div>
                ) : (
                  <img src={selectedChild?.avatar} alt="" className="size-8 rounded-lg bg-slate-200" />
                )}
                <div className="text-left hidden sm:block">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest leading-none mb-0.5">Viewing</p>
                  <p className="text-xs font-bold text-slate-900 leading-none">{selectedChild?.name}</p>
                </div>
                <ChevronDown size={14} className="text-slate-400 ml-2" />
              </button>

              {childDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setChildDropdownOpen(false)} />
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-20">
                    <button
                      onClick={() => { setSelectedChildId('ALL'); setChildDropdownOpen(false); }}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${selectedChildId === 'ALL' ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-50 text-slate-700'}`}
                    >
                      <div className="size-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <Users size={16} />
                      </div>
                      <span className="font-bold text-sm">Family Overview</span>
                    </button>
                    <div className="h-px bg-slate-100 my-2" />
                    {childrenList.map(child => (
                      <button
                        key={child.id}
                        onClick={() => { setSelectedChildId(child.id); setChildDropdownOpen(false); }}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${selectedChildId === child.id ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-50 text-slate-700'}`}
                      >
                        <img src={child.avatar} alt="" className="size-8 rounded-lg bg-slate-200" />
                        <div className="text-left">
                          <p className="text-sm font-bold">{child.name}</p>
                          <p className="text-[10px] text-slate-400">{child.grade}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="relative">
              <button className="size-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-slate-50 transition-all shadow-sm">
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 size-2 bg-rose-500 rounded-full border-2 border-white" />
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

export default function ParentLayout({ children }: ParentLayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.PARENT]}>
        <ParentProvider>
          <ParentLayoutContent>{children}</ParentLayoutContent>
        </ParentProvider>
      </RoleGuard>
    </AuthGuard>
  );
}
