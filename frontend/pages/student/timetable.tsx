import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function StudentTimetable() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Student Sidebar Component
  const Sidebar = () => (
    <aside className={`w-64 bg-white dark:bg-[#1a2632] border-r border-gray-200 dark:border-gray-700 flex-col h-full shrink-0 z-20 transition-all duration-300 ${sidebarOpen ? 'absolute inset-y-0 left-0 flex' : 'hidden lg:flex'}`}>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-2">
            <span className="material-symbols-outlined text-primary text-2xl">school</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold leading-tight">School ERP</h1>
            <p className="text-[#4c739a] dark:text-gray-400 text-xs font-normal">Student Portal</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 flex flex-col gap-2 overflow-y-auto">
        <Link href="/student/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">dashboard</span>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <Link href="/student/attendance" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">calendar_month</span>
          <span className="text-sm font-medium">Attendance</span>
        </Link>
        {/* Active Item */}
        <Link href="/student/timetable" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary">
          <span className="material-symbols-outlined text-xl font-variation-fill">event_note</span>
          <span className="text-sm font-medium">Timetable</span>
        </Link>
        <Link href="/student/homework" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">assignment</span>
          <span className="text-sm font-medium">Homework</span>
        </Link>
        <Link href="/student/exams" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">assignment_turned_in</span>
          <span className="text-sm font-medium">Exams</span>
        </Link>
        <Link href="/student/results" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">insights</span>
          <span className="text-sm font-medium">Results</span>
        </Link>
        <Link href="/student/fees" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">payments</span>
          <span className="text-sm font-medium">Fees</span>
        </Link>
        <Link href="/student/downloads" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">download</span>
          <span className="text-sm font-medium">Downloads</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="bg-center bg-no-repeat bg-cover rounded-full h-9 w-9 border border-gray-200 dark:border-gray-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsH4VI2xOCEl14yJnytidJPv5svddnBuhlMvEsiQyg5zCYSa-flwuQ_B1gp7BMuDa17vDl8kUqo9Y3LwG5NWDpa4nBTzzjbxlKgRpQvQf0YgmZP1C8Fd5egLz26pg7ieLUI6HqIkrojLVqPmgsIaIfgsgv59tncDfsbSb77lFLw6GfG2-51C1pX74zYxpNvehPjsjR2ZxL5bCAFNMhqosIy4Pnidz2O7gOrfnFyCM6ogxJED8Pja-vv8FoIBhK0DG6pj-iezYK3-mf')" }}></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-medium truncate">Lisa Simpson</p>
            <p className="text-xs text-[#4c739a] dark:text-gray-400 truncate">Student - Grade 4</p>
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.STUDENT]}>
        <Head>
          <title>My Timetable - School ERP</title>
        </Head>

        <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white font-display overflow-hidden h-screen flex">
          <Sidebar />

          <div className="flex flex-1 flex-col h-full overflow-hidden relative">
            {/* Mobile Header Toggle */}
            <div className="lg:hidden h-16 bg-white dark:bg-[#1a2632] border-b border-gray-200 dark:border-gray-700 flex items-center px-4 justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">school</span>
                <span className="font-semibold text-lg">School ERP</span>
              </div>
              <button className="text-gray-500 dark:text-gray-400 material-symbols-outlined" onClick={() => setSidebarOpen(!sidebarOpen)}>menu</button>
            </div>

            {/* Content Wrapper */}
            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background-light dark:bg-background-dark">
              {/* Header */}
              <div className="px-6 py-6 md:px-8 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632]">
                <div className="flex flex-wrap justify-between items-end gap-4">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight tracking-[-0.033em]">My Timetable</h1>
                    <p className="text-[#4c739a] text-sm font-normal leading-normal">Academic Year 2023-2024 • Grade 10 - Section A</p>
                  </div>
                  <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#0d141b] dark:text-white text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">print</span>
                    <span className="hidden sm:inline">Print Schedule</span>
                  </button>
                </div>
              </div>

              {/* Timetable Grid */}
              <div className="p-6 md:p-8 flex-1 overflow-auto">
                <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 min-w-[800px] overflow-hidden">
                  {/* Grid Header */}
                  <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr_1fr] border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                    <div className="p-4 border-r border-gray-200 dark:border-gray-700"></div>
                    <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0">
                      <span className="block text-sm font-bold text-[#0d141b] dark:text-white">Monday</span>
                    </div>
                    <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0 bg-primary/5">
                      <span className="block text-sm font-bold text-primary">Tuesday</span>
                      <span className="block text-xs text-primary/80 mt-1">Today</span>
                    </div>
                    <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0">
                      <span className="block text-sm font-bold text-[#0d141b] dark:text-white">Wednesday</span>
                    </div>
                    <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0">
                      <span className="block text-sm font-bold text-[#0d141b] dark:text-white">Thursday</span>
                    </div>
                    <div className="p-3 text-center">
                      <span className="block text-sm font-bold text-[#0d141b] dark:text-white">Friday</span>
                    </div>
                  </div>

                  {/* Grid Body */}
                  <div className="relative grid grid-cols-[80px_1fr_1fr_1fr_1fr_1fr] auto-rows-[100px] divide-y divide-gray-100 dark:divide-gray-800">
                    {/* Current Time Indicator (Visual Mockup) */}
                    <div className="absolute left-[80px] right-0 top-[240px] border-t-2 border-primary z-10 flex items-center pointer-events-none">
                      <div className="absolute left-[-6px] size-3 bg-primary rounded-full"></div>
                    </div>

                    {/* 08:00 */}
                    <div className="p-2 text-xs font-medium text-gray-400 text-right pr-4 border-r border-gray-100 dark:border-gray-800 relative">
                      <span className="-top-3 relative">08:00 AM</span>
                    </div>
                    <div className="border-r border-gray-100 dark:border-gray-800 p-1">
                      <div className="h-full w-full bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-400 rounded-md p-2 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold text-orange-900 dark:text-orange-100">Maths</span>
                          <span className="material-symbols-outlined text-[14px] text-orange-700 dark:text-orange-300">calculate</span>
                        </div>
                        <div className="text-[10px] text-orange-800 dark:text-orange-200 font-medium mt-auto">Mr. Anderson • Rm 101</div>
                      </div>
                    </div>
                    <div className="border-r border-gray-100 dark:border-gray-800 p-1 bg-blue-50/30"></div>
                    <div className="border-r border-gray-100 dark:border-gray-800 p-1">
                      <div className="h-full w-full bg-purple-100 dark:bg-purple-900/30 border-l-4 border-purple-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold text-purple-900 dark:text-purple-100">English</span>
                          <span className="material-symbols-outlined text-[14px] text-purple-700 dark:text-purple-300">menu_book</span>
                        </div>
                        <div className="text-[10px] text-purple-800 dark:text-purple-200 font-medium mt-auto">Ms. Davis • Rm 204</div>
                      </div>
                    </div>
                    <div className="border-r border-gray-100 dark:border-gray-800 p-1"></div>
                    <div className="p-1">
                      <div className="h-full w-full bg-emerald-100 dark:bg-emerald-900/30 border-l-4 border-emerald-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold text-emerald-900 dark:text-emerald-100">Biology</span>
                          <span className="material-symbols-outlined text-[14px] text-emerald-700 dark:text-emerald-300">biotech</span>
                        </div>
                        <div className="text-[10px] text-emerald-800 dark:text-emerald-200 font-medium mt-auto">Dr. Wilson • Lab 3</div>
                      </div>
                    </div>

                    {/* 09:00 */}
                    <div className="p-2 text-xs font-medium text-gray-400 text-right pr-4 border-r border-gray-100 dark:border-gray-800 relative">
                      <span className="-top-3 relative">09:00 AM</span>
                    </div>
                    <div className="border-r border-gray-100 dark:border-gray-800 p-1">
                      <div className="h-full w-full bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold text-blue-900 dark:text-blue-100">Physics</span>
                          <span className="material-symbols-outlined text-[14px] text-blue-700 dark:text-blue-300">science</span>
                        </div>
                        <div className="text-[10px] text-blue-800 dark:text-blue-200 font-medium mt-auto">Mr. Clark • Lab 1</div>
                      </div>
                    </div>
                    <div className="border-r border-gray-100 dark:border-gray-800 p-1 bg-blue-50/30">
                      <div className="h-full w-full bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-400 rounded-md p-2 flex flex-col gap-1 shadow-sm ring-2 ring-primary ring-offset-1 dark:ring-offset-gray-900 z-10">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold text-orange-900 dark:text-orange-100">Maths</span>
                          <span className="material-symbols-outlined text-[14px] text-orange-700 dark:text-orange-300">calculate</span>
                        </div>
                        <div className="text-[10px] text-orange-800 dark:text-orange-200 font-medium mt-auto">Mr. Anderson • Rm 101</div>
                      </div>
                    </div>
                    <div className="border-r border-gray-100 dark:border-gray-800 p-1"></div>
                    <div className="border-r border-gray-100 dark:border-gray-800 p-1">
                      <div className="h-full w-full bg-rose-100 dark:bg-rose-900/30 border-l-4 border-rose-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold text-rose-900 dark:text-rose-100">History</span>
                          <span className="material-symbols-outlined text-[14px] text-rose-700 dark:text-rose-300">history_edu</span>
                        </div>
                        <div className="text-[10px] text-rose-800 dark:text-rose-200 font-medium mt-auto">Mrs. Lee • Rm 105</div>
                      </div>
                    </div>
                    <div className="p-1"></div>

                    {/* 10:00 Break */}
                    <div className="p-2 text-xs font-medium text-gray-400 text-right pr-4 border-r border-gray-100 dark:border-gray-800 relative">
                      <span className="-top-3 relative">10:00 AM</span>
                    </div>
                    <div className="col-span-5 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Morning Break</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
