import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function StudentExams() {
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
        <Link href="/student/timetable" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">event_note</span>
          <span className="text-sm font-medium">Timetable</span>
        </Link>
        <Link href="/student/homework" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">assignment</span>
          <span className="text-sm font-medium">Homework</span>
        </Link>
        {/* Active Item */}
        <Link href="/student/exams" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary">
          <span className="material-symbols-outlined text-xl font-variation-fill">assignment_turned_in</span>
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

  // Dummy Data for Student Exams
  const exams = [
    {
      id: 1,
      name: 'Mid-Term Mathematics',
      date: 'Oct 24, 2023',
      time: '09:00 AM - 11:00 AM',
      subject: 'Math',
      subjectInitial: 'M',
      subjectColor: 'bg-blue-100 text-blue-600',
      room: 'Hall A, Room 101',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800'
    },
    {
      id: 2,
      name: 'Physics Practical',
      date: 'Oct 25, 2023',
      time: '01:00 PM - 03:00 PM',
      subject: 'Science',
      subjectInitial: 'S',
      subjectColor: 'bg-purple-100 text-purple-600',
      room: 'Lab 2',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800'
    },
    {
      id: 3,
      name: 'English Literature',
      date: 'Oct 26, 2023',
      time: '10:00 AM - 12:00 PM',
      subject: 'English',
      subjectInitial: 'E',
      subjectColor: 'bg-emerald-100 text-emerald-600',
      room: 'Room 204',
      status: 'Upcoming',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800'
    },
    {
      id: 4,
      name: 'History Quiz',
      date: 'Oct 20, 2023',
      time: '09:00 AM - 10:00 AM',
      subject: 'History',
      subjectInitial: 'H',
      subjectColor: 'bg-yellow-100 text-yellow-600',
      room: 'Room 103',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800'
    }
  ];

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.STUDENT]}>
        <Head>
          <title>My Exams - School ERP</title>
        </Head>

        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white h-screen overflow-hidden flex font-display">
          <Sidebar />

          <main className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Mobile Header Toggle */}
            <div className="lg:hidden h-16 bg-white dark:bg-[#1a2632] border-b border-gray-200 dark:border-gray-700 flex items-center px-4 justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl">school</span>
                <span className="font-semibold text-lg">School ERP</span>
              </div>
              <button className="text-gray-500 dark:text-gray-400 material-symbols-outlined" onClick={() => setSidebarOpen(!sidebarOpen)}>menu</button>
            </div>

            {/* Top Header */}
            <header className="hidden lg:flex flex-none items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-gray-800 bg-white dark:bg-[#1a2632] px-10 py-3 z-20">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Link href="/student/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                <span>/</span>
                <span className="text-slate-900 dark:text-white font-medium">My Exams</span>
              </div>
              <div className="flex flex-1 justify-end gap-6 items-center">
                <div className="flex items-center gap-3">
                  <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d141b] dark:text-white">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                </div>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 lg:p-8 scroll-smooth">
              <div className="max-w-7xl mx-auto space-y-8">
                {/* Page Heading */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1">My Exams</h2>
                    <p className="text-[#4c739a] text-sm font-normal leading-normal">Prepare well for your upcoming assessments.</p>
                  </div>
                  <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-primary">calendar_month</span>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Oct 2023</span>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Stat 1 */}
                  <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-primary text-xl">event_upcoming</span>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Upcoming Exams</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">3</p>
                  </div>

                  {/* Stat 3 */}
                  <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-green-50 dark:bg-green-900/30 p-2 rounded-lg">
                        <span className="material-symbols-outlined text-green-500 text-xl">check_circle</span>
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Completed</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">12</p>
                  </div>
                </div>

                {/* Exam List */}
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
                  <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Exam Schedule</h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/50">
                          <th className="p-4 pl-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</th>
                          <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Exam Name</th>
                          <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date & Time</th>
                          <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Room</th>
                          <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                          <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right pr-6">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {exams.map((exam) => (
                          <tr key={exam.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="p-4 pl-6">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded ${exam.subjectColor} flex items-center justify-center text-sm font-bold`}>{exam.subjectInitial}</div>
                                <span className="text-sm font-medium text-slate-900 dark:text-white">{exam.subject}</span>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-300 font-medium">
                              {exam.name}
                            </td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                              <div className="flex flex-col">
                                <span className="font-bold">{exam.date}</span>
                                <span className="text-xs text-slate-400">{exam.time}</span>
                              </div>
                            </td>
                            <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                              {exam.room}
                            </td>
                            <td className="p-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${exam.statusColor}`}>
                                {exam.status}
                              </span>
                            </td>
                            <td className="p-4 text-right pr-6">
                              <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
