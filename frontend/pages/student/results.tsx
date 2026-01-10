import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function StudentResults() {
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
        {/* Active Item */}
        <Link href="/student/results" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary">
          <span className="material-symbols-outlined text-xl font-variation-fill">insights</span>
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
          <title>My Results - School ERP</title>
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
                <span className="text-slate-900 dark:text-white font-medium">My Results</span>
              </div>
              <div className="flex flex-1 justify-end gap-6 items-center">
                <div className="flex items-center gap-3">
                  <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d141b] dark:text-white">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                </div>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto p-6 lg:p-8 scroll-smooth bg-slate-100 dark:bg-slate-900/50">
              <div className="max-w-4xl mx-auto space-y-6">

                {/* Controls */}
                <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 p-4 flex flex-wrap gap-4 items-center justify-between shadow-sm">
                  <div className="flex gap-4">
                    <label className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Academic Year</span>
                      <select className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm py-2 px-3 focus:ring-primary focus:border-primary">
                        <option>2023 - 2024</option>
                        <option>2022 - 2023</option>
                      </select>
                    </label>
                    <label className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Term</span>
                      <select className="rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm py-2 px-3 focus:ring-primary focus:border-primary">
                        <option>Mid Term</option>
                        <option>Final Term</option>
                      </select>
                    </label>
                  </div>
                  <button className="flex items-center gap-2 cursor-pointer rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    <span className="truncate">Download PDF</span>
                  </button>
                </div>

                {/* Report Card */}
                <div className="bg-white dark:bg-white w-full shadow-lg p-10 flex flex-col gap-8 text-[#0d141b] rounded-xl">
                  {/* Report Header */}
                  <div className="flex justify-between items-center border-b-2 border-primary pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl">school</span>
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-primary">Green Valley High School</h1>
                        <p className="text-sm text-gray-500">123 Education Lane, Springfield</p>
                        <p className="text-sm text-gray-500">Phone: (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h2 className="text-xl font-bold uppercase tracking-wide text-gray-800">Report Card</h2>
                      <p className="text-sm font-medium text-gray-600 mt-1">Academic Year: 2023-2024</p>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded mt-1 font-bold">Mid Term</span>
                    </div>
                  </div>

                  {/* Student Details */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="text-sm font-semibold text-gray-500">Student Name</span>
                      <span className="text-sm font-bold">Lisa Simpson</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="text-sm font-semibold text-gray-500">Roll Number</span>
                      <span className="text-sm font-bold">10A01</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="text-sm font-semibold text-gray-500">Class & Section</span>
                      <span className="text-sm font-bold">10 - A</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-1">
                      <span className="text-sm font-semibold text-gray-500">Date of Birth</span>
                      <span className="text-sm font-bold">15 May 2013</span>
                    </div>
                    <div className="flex justify-between col-span-2 pt-2">
                      <span className="text-sm font-semibold text-gray-500">Attendance</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[98%]"></div>
                        </div>
                        <span className="text-sm font-bold">98%</span>
                      </div>
                    </div>
                  </div>

                  {/* Grades Table */}
                  <div>
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">bar_chart</span>
                      Academic Performance
                    </h3>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-primary/5 border-b-2 border-primary/20">
                          <th className="text-left p-3 text-sm font-bold text-primary">Subject</th>
                          <th className="text-center p-3 text-sm font-bold text-primary">Max Marks</th>
                          <th className="text-center p-3 text-sm font-bold text-primary">Obtained</th>
                          <th className="text-center p-3 text-sm font-bold text-primary">Grade</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="p-3 text-sm font-medium">Mathematics</td>
                          <td className="text-center p-3 text-sm text-gray-600">100</td>
                          <td className="text-center p-3 text-sm font-bold">99</td>
                          <td className="text-center p-3 text-sm font-bold text-green-600">A+</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-sm font-medium">Science</td>
                          <td className="text-center p-3 text-sm text-gray-600">100</td>
                          <td className="text-center p-3 text-sm font-bold">96</td>
                          <td className="text-center p-3 text-sm font-bold text-green-600">A+</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-sm font-medium">English Literature</td>
                          <td className="text-center p-3 text-sm text-gray-600">100</td>
                          <td className="text-center p-3 text-sm font-bold">94</td>
                          <td className="text-center p-3 text-sm font-bold text-green-600">A</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-sm font-medium">History</td>
                          <td className="text-center p-3 text-sm text-gray-600">100</td>
                          <td className="text-center p-3 text-sm font-bold">92</td>
                          <td className="text-center p-3 text-sm font-bold text-green-600">A</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-sm font-medium">Music</td>
                          <td className="text-center p-3 text-sm text-gray-600">100</td>
                          <td className="text-center p-3 text-sm font-bold">100</td>
                          <td className="text-center p-3 text-sm font-bold text-green-600">O</td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-slate-50 border-t border-slate-200">
                        <tr>
                          <td className="p-3 text-sm font-bold">Total</td>
                          <td className="text-center p-3 text-sm font-bold">500</td>
                          <td className="text-center p-3 text-sm font-bold text-primary">481</td>
                          <td className="text-center p-3 text-sm font-bold">96.2%</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  {/* Remarks */}
                  <div className="mt-2 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <h4 className="text-sm font-bold text-yellow-800 mb-1">Class Teacher's Remarks</h4>
                    <p className="text-sm text-yellow-900 italic">"Lisa is an exceptional student. Her performance is outstanding across all subjects. Keep it up!"</p>
                  </div>

                  <div className="flex-1"></div>

                  {/* Signatures */}
                  <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center w-40">
                      <div className="h-12 w-full mb-2 flex items-end justify-center">
                        <span className="font-cursive text-2xl text-blue-900 opacity-60 italic">Sarah J.</span>
                      </div>
                      <p className="text-xs font-bold border-t border-gray-400 pt-1">Class Teacher</p>
                    </div>
                    <div className="text-center w-40">
                      <div className="h-12 w-full mb-2 flex items-end justify-center">
                        <span className="font-cursive text-2xl text-blue-900 opacity-60 italic">Dr. A. Smith</span>
                      </div>
                      <p className="text-xs font-bold border-t border-gray-400 pt-1">Principal</p>
                    </div>
                  </div>

                  <div className="text-center text-[10px] text-gray-400 mt-4">
                    Generated by School ERP System on Oct 24, 2023
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
