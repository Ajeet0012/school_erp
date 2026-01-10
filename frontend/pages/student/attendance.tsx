import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function StudentAttendance() {
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
        {/* Active Item */}
        <Link href="/student/attendance" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary">
          <span className="material-symbols-outlined text-xl font-variation-fill">calendar_month</span>
          <span className="text-sm font-medium">Attendance</span>
        </Link>
        <Link href="/student/timetable" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">event_note</span>
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
          <title>My Attendance - School ERP</title>
        </Head>

        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white h-screen overflow-hidden flex font-display">
          <Sidebar />

          <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900 p-4 lg:p-8 relative">
            {/* Mobile Header Toggle */}
            <div className="lg:hidden h-16 bg-white dark:bg-[#1a2632] border-b border-gray-200 dark:border-gray-700 flex items-center px-4 justify-between shrink-0 mb-4 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">school</span>
                <span className="font-semibold text-lg">School ERP</span>
              </div>
              <button className="text-gray-500 dark:text-gray-400 material-symbols-outlined" onClick={() => setSidebarOpen(!sidebarOpen)}>menu</button>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">My Attendance</h1>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Track your daily attendance record.</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm flex flex-col justify-center items-center">
                  <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-2">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">180</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">Total Days</span>
                </div>
                <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500"></div>
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">175</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">Present</span>
                </div>
                <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-full bg-rose-500"></div>
                  <span className="text-2xl font-bold text-rose-600 dark:text-rose-400">5</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">Absent</span>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 p-4 flex gap-4 items-center shadow-sm">
                <label className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Month</span>
                  <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2">
                    <option>October 2023</option>
                    <option>September 2023</option>
                  </select>
                </label>
              </div>

              {/* Attendance Table */}
              <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                    <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Date</th>
                        <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Day</th>
                        <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                        <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {[
                        { date: 'Oct 24, 2023', day: 'Tuesday', status: 'Present', color: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400' },
                        { date: 'Oct 23, 2023', day: 'Monday', status: 'Present', color: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400' },
                        { date: 'Oct 20, 2023', day: 'Friday', status: 'Absent', color: 'text-rose-700 bg-rose-50 dark:bg-rose-900/20 dark:text-rose-400', remark: 'Sick Leave' },
                        { date: 'Oct 19, 2023', day: 'Thursday', status: 'Present', color: 'text-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400' },
                        { date: 'Oct 18, 2023', day: 'Wednesday', status: 'Late', color: 'text-amber-700 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400', remark: 'Bus delayed' },
                      ].map((record, index) => (
                        <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{record.date}</td>
                          <td className="px-6 py-4">{record.day}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${record.color}`}>
                              {record.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-500 italic">{record.remark || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </main>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
