import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function ParentAttendance() {
  const [selectedChild, setSelectedChild] = useState('Alex Doe');

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.PARENT]}>
        <Head>
          <title>Attendance - Parent Portal</title>
        </Head>
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden min-h-screen flex flex-col">
          {/* Top Navigation */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white dark:bg-slate-900 px-6 py-3 shadow-sm dark:border-slate-800">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-primary">EduConnect</h2>
              </div>
              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center gap-6">
                <Link href="/parent/dashboard" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Dashboard</Link>
                <Link href="/parent/attendance" className="text-sm font-bold text-primary">Attendance</Link>
                <Link href="/parent/fees" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Fees</Link>
                <Link href="/parent/results" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Results</Link>
                <Link href="/parent/messages" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Messages</Link>
              </nav>
              {/* Child Switcher (Context) */}
              <div className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 pr-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border border-white shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB61LnBfKMdDnc_-6OYmVQgzGo7S1yUh5ghynaP9JMwuqY2GiIpY1NN8vm7i7PApXmCn9xdZMS4PFUc0ATQryqPNM6mQTS4zC4GGgAlnMEQE9AzaCSNApMs85R5rfJMJiuA6V1KlS6Au4m4T3qmlIvpUfv-1iu_Nt5Vh-BQELm26WVB0HiU2743VMGYUdDPVjnrCsAz-5kzEoxEWoVIg_GLg5s6sNSWDZY6qbED7gX4XqCPoXG2eJ_5o9D9BQpg0XRgehh4zSOWOVqb')" }}></div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-none">Viewing</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{selectedChild}</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-lg ml-2">expand_more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Search (Collapsed for cleaner look) */}
              <div className="hidden lg:flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 px-3 h-10 w-64">
                <span className="material-symbols-outlined text-slate-400">search</span>
                <input className="w-full bg-transparent border-none focus:ring-0 text-sm px-2 text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Search..." />
              </div>
              <button className="relative flex size-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-800"></span>
              </button>
              <button className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">PD</div>
                <span className="text-sm font-medium hidden sm:block">Parent User</span>
              </button>
            </div>
          </header>

          <main className="flex-1 w-full max-w-[1200px] mx-auto p-6 md:p-10 flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Attendance Record</h1>
                <p className="text-slate-500 mt-1">Detailed attendance view for {selectedChild}.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 px-4 flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-slate-500">calendar_month</span>
                  <span className="text-sm font-medium">October 2023</span>
                  <span className="material-symbols-outlined text-slate-500">arrow_drop_down</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center text-center">
                <div className="size-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-2xl">check_circle</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">95%</h3>
                <p className="text-slate-500 text-sm font-medium">Total Attendance</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center text-center">
                <div className="size-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-2xl">cancel</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">2</h3>
                <p className="text-slate-500 text-sm font-medium">Days Absent</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col items-center text-center">
                <div className="size-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-2xl">watch_later</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">1</h3>
                <p className="text-slate-500 text-sm font-medium">Late Arrival</p>
              </div>
            </div>

            {/* Calendar View (Placeholder/Simplified) */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Monthly Overview</h3>
                <div className="flex gap-2 text-sm text-slate-500">
                  <div className="flex items-center gap-1"><div className="size-3 rounded-full bg-green-500"></div>Present</div>
                  <div className="flex items-center gap-1"><div className="size-3 rounded-full bg-red-500"></div>Absent</div>
                  <div className="flex items-center gap-1"><div className="size-3 rounded-full bg-orange-500"></div>Late</div>
                  <div className="flex items-center gap-1"><div className="size-3 rounded-full bg-slate-200"></div>Holiday</div>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm font-bold text-slate-400 py-2">{day}</div>
                ))}
                {/* Days */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
                  let statusClass = 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white';
                  // Dummy logic for coloring
                  if (day === 5 || day === 20) statusClass = 'bg-red-500 text-white';
                  else if (day === 12) statusClass = 'bg-orange-500 text-white';
                  else if (day % 7 === 0 || day % 7 === 1) statusClass = 'bg-slate-100 dark:bg-slate-800 text-slate-400';
                  else statusClass = 'bg-green-500 text-white';

                  return (
                    <div key={day} className={`h-12 rounded-lg flex items-center justify-center text-sm font-bold ${statusClass}`}>
                      {day}
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
