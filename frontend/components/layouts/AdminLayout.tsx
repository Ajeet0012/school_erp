import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  CalendarCheck,
  FileText,
  Settings,
  LogOut,
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
  title?: string;
}

function AdminLayoutContent({ children, title }: AdminLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from system preference or localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Students', href: '/admin/students', icon: GraduationCap },
    { name: 'Teachers', href: '/admin/teachers', icon: Users },
    { name: 'Classes', href: '/admin/classes', icon: BookOpen },
    { name: 'Attendance', href: '/admin/attendance', icon: CalendarCheck },
    { name: 'Reports', href: '/admin/reports', icon: FileText },
  ];

  const secondaryItems = [
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const NavItem = ({ item }: { item: any }) => {
    const isActive = router.pathname.startsWith(item.href);
    return (
      <Link
        href={item.href}
        className={`nav-item flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-200 group ${isActive
            ? 'nav-item-active'
            : ''
          }`}
      >
        <item.icon size={20} className={isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'} />
        <span>{item.name}</span>
        {isActive && <ChevronRight size={16} className="ml-auto opacity-50" />}
      </Link>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground antialiased font-sans transition-colors duration-300">
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-muted-foreground/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-72 bg-card border-r border-border transform lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-24 flex items-center px-8 shrink-0">
          <Link href="/admin/dashboard" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-soft shadow-primary/30 group-hover:rotate-6 transition-transform">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-foreground">EduCore</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">ERP Enterprise</span>
            </div>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar space-y-8">
          <div>
            <p className="px-4 mb-3 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Navigation</p>
            <nav className="space-y-1">
              {menuItems.map((item) => <NavItem key={item.href} item={item} />)}
            </nav>
          </div>

          <div>
            <p className="px-4 mb-3 text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Management</p>
            <nav className="space-y-1">
              {secondaryItems.map((item) => <NavItem key={item.href} item={item} />)}
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-border">
          <div className="bg-secondary rounded-2xl p-4 flex items-center gap-3 border border-border">
            <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black">
              {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-foreground truncate">{user?.firstName} {user?.lastName}</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Admin</p>
            </div>
            <button onClick={logout} className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all active:scale-95">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 bg-card/50 backdrop-blur-md border-b border-border shrink-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-muted-foreground hover:bg-secondary rounded-lg"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-black text-foreground tracking-tight lg:block hidden">
              {title || 'Management Console'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex relative group mr-4">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search resources..."
                className="input-field w-64 pl-10 pr-4 py-2 text-sm font-bold"
              />
            </div>

            <button onClick={toggleDarkMode} className="p-2.5 text-muted-foreground hover:bg-secondary rounded-xl transition-all active:scale-95">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="relative p-2.5 text-muted-foreground hover:bg-secondary rounded-xl transition-all active:scale-95">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 size-2 bg-destructive rounded-full border-2 border-background"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-6 lg:px-10 py-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto page-transition">
            {children}
          </div>
          <footer className="mt-20 py-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-[10px] font-black uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-primary italic">EduCore</span>
              <span>© 2024 Systems Architecture</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="hover:text-primary transition-colors cursor-default">Privacy</span>
              <span className="hover:text-primary transition-colors cursor-default">Terms</span>
              <span className="hover:text-primary transition-colors cursor-default">Support</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout(props: AdminLayoutProps) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.SCHOOL_ADMIN]}>
        <AdminLayoutContent {...props} />
      </RoleGuard>
    </AuthGuard>
  );
}
