import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function StudentFees() {
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
        {/* Active Item */}
        <Link href="/student/fees" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary">
          <span className="material-symbols-outlined text-xl font-variation-fill">payments</span>
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
          <title>My Fees - School ERP</title>
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
                <span className="text-slate-900 dark:text-white font-medium">My Fees</span>
              </div>
              <div className="flex flex-1 justify-end gap-6 items-center">
                <div className="flex items-center gap-3">
                  <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d141b] dark:text-white">
                    <span className="material-symbols-outlined">notifications</span>
                  </button>
                </div>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth">
              <div className="max-w-7xl mx-auto flex flex-col gap-6">

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                        <span className="material-symbols-outlined">attach_money</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1">Total Paid</p>
                    <h3 className="text-2xl font-bold tracking-tight">$4,500</h3>
                  </div>

                  <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                        <span className="material-symbols-outlined">money_off</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1">Outstanding Balance</p>
                    <h3 className="text-2xl font-bold tracking-tight">$1,500</h3>
                  </div>

                  <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                        <span className="material-symbols-outlined">event</span>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-1">Next Due Date</p>
                    <h3 className="text-2xl font-bold tracking-tight">Nov 01, 2023</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                  {/* Transaction History */}
                  <div className="lg:col-span-2 bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-border-light dark:border-border-dark">
                      <h3 className="text-lg font-bold">Transaction History</h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-background-light dark:bg-background-dark text-text-secondary-light dark:text-text-secondary-dark uppercase text-xs font-semibold tracking-wider border-b border-border-light dark:border-border-dark">
                          <tr>
                            <th className="px-6 py-4">Transaction ID</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Description</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border-light dark:divide-border-dark">
                          {[
                            { id: '#TRX-9821', date: 'Oct 24, 2023', desc: 'Tuition Fee - Term 1', amount: '$1,200.00', status: 'Paid' },
                            { id: '#TRX-9818', date: 'Sep 15, 2023', desc: 'Library Fine', amount: '$50.00', status: 'Paid' },
                            { id: '#TRX-9750', date: 'Aug 01, 2023', desc: 'Annual Development Fee', amount: '$500.00', status: 'Paid' },
                          ].map((tx) => (
                            <tr key={tx.id} className="hover:bg-background-light/50 dark:hover:bg-background-dark/50 transition-colors">
                              <td className="px-6 py-4 font-mono text-xs text-text-secondary-light dark:text-text-secondary-dark">{tx.id}</td>
                              <td className="px-6 py-4 text-text-secondary-light dark:text-text-secondary-dark">{tx.date}</td>
                              <td className="px-6 py-4 font-medium">{tx.desc}</td>
                              <td className="px-6 py-4 font-bold">{tx.amount}</td>
                              <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                  <span className="size-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                                  {tx.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Upcoming Dues */}
                  <div className="bg-white dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6">
                    <h3 className="text-lg font-bold mb-4">Upcoming Dues</h3>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/50">
                        <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded-lg flex-shrink-0">
                          <span className="material-symbols-outlined text-[20px]">warning</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold truncate">Tuition Fee - Term 2</p>
                          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Due in 2 days</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold">$1,200</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/50">
                        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-lg flex-shrink-0">
                          <span className="material-symbols-outlined text-[20px]">directions_bus</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold truncate">Bus Fee</p>
                          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">Due Nov 01</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold">$300</p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full mt-6 bg-primary hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-bold transition-colors">
                      Pay Now
                    </button>
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
