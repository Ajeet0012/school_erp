import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function StudentDownloads() {
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
        {/* Active Item */}
        <Link href="/student/downloads" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary">
          <span className="material-symbols-outlined text-xl font-variation-fill">download</span>
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

  const resources = [
    { title: 'Academic Year Syllabus 2023-24', type: 'PDF', size: '2.5 MB', date: 'Aug 15, 2023', icon: 'picture_as_pdf', color: 'text-red-500 bg-red-50' },
    { title: 'Holiday Homework - Autumn Break', type: 'ZIP', size: '15 MB', date: 'Oct 01, 2023', icon: 'folder_zip', color: 'text-yellow-600 bg-yellow-50' },
    { title: 'Science Project Guidelines', type: 'DOCX', size: '500 KB', date: 'Oct 10, 2023', icon: 'description', color: 'text-blue-500 bg-blue-50' },
    { title: 'Math Formulas Cheat Sheet', type: 'PDF', size: '1.2 MB', date: 'Sep 20, 2023', icon: 'picture_as_pdf', color: 'text-red-500 bg-red-50' },
    { title: 'School Newsletter - October Edition', type: 'PDF', size: '4.8 MB', date: 'Oct 05, 2023', icon: 'newspaper', color: 'text-purple-500 bg-purple-50' },
  ];

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.STUDENT]}>
        <Head>
          <title>Downloads - School ERP</title>
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
                <span className="text-slate-900 dark:text-white font-medium">Downloads</span>
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
              <div className="max-w-5xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1">Downloads & Resources</h2>
                    <p className="text-[#4c739a] text-sm font-normal leading-normal">Access study materials, assignments, and school documents.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.map((resource, index) => (
                    <div key={index} className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`size-12 rounded-lg flex items-center justify-center ${resource.color}`}>
                          <span className="material-symbols-outlined text-2xl">{resource.icon}</span>
                        </div>
                        <button className="text-gray-400 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined">more_vert</span>
                        </button>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 line-clamp-2 min-h-[56px]">{resource.title}</h3>
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-4">
                        <span>{resource.date}</span>
                        <span>{resource.size}</span>
                      </div>
                      <button className="w-full mt-4 flex items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 py-2 rounded-lg font-medium transition-colors text-sm">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Download
                      </button>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </main>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
