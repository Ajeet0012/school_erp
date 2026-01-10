import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function StudentHomework() {
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
        {/* Active Item */}
        <Link href="/student/homework" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary">
          <span className="material-symbols-outlined text-xl font-variation-fill">assignment</span>
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

  // Dummy Data
  const assignments = [
    {
      id: 1,
      title: 'Math Homework - Algebra 101',
      description: 'Ch 4: Quadratic Equations',
      subject: 'Mathematics',
      subjectInitial: 'M',
      subjectColor: 'bg-blue-100 text-blue-600',
      dueDate: 'Oct 12, 2023',
      status: 'Submitted',
      statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-green-200 dark:border-green-800',
      grade: 'A',
      score: '95/100'
    },
    {
      id: 2,
      title: 'History Essay - WWII',
      description: 'Causes and Effects',
      subject: 'History',
      subjectInitial: 'H',
      subjectColor: 'bg-orange-100 text-orange-600',
      dueDate: 'Oct 15, 2023',
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800',
      grade: '-',
      score: '-'
    },
    {
      id: 3,
      title: 'Physics Lab Report',
      description: 'Motion and Velocity',
      subject: 'Science',
      subjectInitial: 'S',
      subjectColor: 'bg-purple-100 text-purple-600',
      dueDate: 'Sep 28, 2023',
      status: 'Graded',
      statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border-blue-200 dark:border-blue-800',
      grade: 'B+',
      score: '88/100'
    },
    {
      id: 4,
      title: 'English Literature Review',
      description: 'To Kill a Mockingbird',
      subject: 'English',
      subjectInitial: 'E',
      subjectColor: 'bg-pink-100 text-pink-600',
      dueDate: 'Oct 20, 2023',
      status: 'Overdue',
      statusColor: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 border-red-200 dark:border-red-800',
      grade: '-',
      score: '-'
    }
  ];

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.STUDENT]}>
        <Head>
          <title>My Homework - School ERP</title>
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
                <span className="text-slate-900 dark:text-white font-medium">My Homework</span>
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
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1">My Homework</h2>
                    <p className="text-[#4c739a] text-sm font-normal leading-normal">Track your assignments and submission status.</p>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Pending</p>
                    </div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">2</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Submitted</p>
                    </div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">15</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Overdue</p>
                      <span className="material-symbols-outlined text-red-500 text-lg">warning</span>
                    </div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">1</p>
                  </div>
                </div>

                {/* Assignment Table */}
                <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                        <tr>
                          <th className="px-6 py-4 font-bold" scope="col">Assignment</th>
                          <th className="px-6 py-4 font-bold" scope="col">Subject</th>
                          <th className="px-6 py-4 font-bold" scope="col">Due Date</th>
                          <th className="px-6 py-4 font-bold" scope="col">Grade</th>
                          <th className="px-6 py-4 font-bold" scope="col">Status</th>
                          <th className="px-6 py-4 font-bold text-right" scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        {assignments.map((assignment) => (
                          <tr key={assignment.id} className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                              <div className="flex items-center gap-3">
                                <div className={`size-10 rounded-lg ${assignment.subjectColor} flex items-center justify-center shrink-0`}>
                                  <span className="material-symbols-outlined">description</span>
                                </div>
                                <div>
                                  <div className="font-bold">{assignment.title}</div>
                                  <div className="text-xs text-slate-500">{assignment.description}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                              {assignment.subject}
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                                <span className="material-symbols-outlined text-slate-400" style={{ fontSize: '18px' }}>calendar_today</span>
                                <span>{assignment.dueDate}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                              {assignment.score !== '-' ? `${assignment.grade} (${assignment.score})` : '-'}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${assignment.statusColor}`}>
                                {assignment.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                              {assignment.status === 'Pending' || assignment.status === 'Overdue' ? (
                                <button className="text-primary hover:text-primary/80 font-medium text-sm mr-2 border border-primary px-3 py-1 rounded transition-colors hover:bg-primary hover:text-white">Submit</button>
                              ) : (
                                <button className="text-slate-500 hover:text-slate-700 font-medium text-sm mr-2">View</button>
                              )}
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
