import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function ParentFees() {
  const [selectedChild, setSelectedChild] = useState('Alex Doe');

  const transactions = [
    { id: '#INV-2023-001', date: 'Oct 01, 2023', description: 'Tuition Fee - Term 1', amount: '$450.00', status: 'Paid', method: 'Credit Card' },
    { id: '#INV-2023-002', date: 'Sep 15, 2023', description: 'Transport Fee - September', amount: '$50.00', status: 'Paid', method: 'Bank Transfer' },
    { id: '#INV-2023-003', date: 'Aug 20, 2023', description: 'Annual Library Fee', amount: '$30.00', status: 'Paid', method: 'Cash' },
    { id: '#INV-2023-004', date: 'Nov 01, 2023', description: 'Tuition Fee - Term 2', amount: '$450.00', status: 'Pending', method: '-' },
  ];

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.PARENT]}>
        <Head>
          <title>Fees & Payments - Parent Portal</title>
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
                <Link href="/parent/attendance" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Attendance</Link>
                <Link href="/parent/fees" className="text-sm font-bold text-primary">Fees</Link>
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
                <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Fees & Payments</h1>
                <p className="text-slate-500 mt-1">Manage tuition fees and view payment history.</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-bold shadow-md shadow-blue-200 dark:shadow-none hover:bg-blue-600 transition">
                <span className="material-symbols-outlined">payments</span>
                Pay Online
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-blue-100 font-medium mb-1">Total Due</p>
                  <h3 className="text-4xl font-bold mb-4">$450.00</h3>
                  <p className="text-xs bg-white/20 inline-block px-2 py-1 rounded backdrop-blur-sm">Due Date: Nov 01, 2023</p>
                </div>
                <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-white/10">account_balance_wallet</span>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <p className="text-slate-500 font-medium">Last Payment</p>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$450.00</h3>
                <p className="text-xs text-slate-400 mt-1">On Oct 01, 2023 via Credit Card</p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                    <span className="material-symbols-outlined">receipt_long</span>
                  </div>
                  <p className="text-slate-500 font-medium">Total Paid (YTD)</p>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$1,380.00</h3>
                <p className="text-xs text-slate-400 mt-1">Academic Year 2023-2024</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <h3 className="text-lg font-bold">Payment History</h3>
                <button className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-lg">download</span> Download Statement
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 font-medium border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-4">Invoice ID</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Description</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Method</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                    {transactions.map((tx, i) => (
                      <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{tx.id}</td>
                        <td className="px-6 py-4 text-slate-500">{tx.date}</td>
                        <td className="px-6 py-4 text-slate-900 dark:text-white">{tx.description}</td>
                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{tx.amount}</td>
                        <td className="px-6 py-4 text-slate-500">{tx.method}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${tx.status === 'Paid' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                              'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                            }`}>
                            {tx.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">print</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
