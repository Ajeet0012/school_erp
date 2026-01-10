import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function ParentResults() {
  const [selectedChild, setSelectedChild] = useState('Alex Doe');

  const terms = [
    { name: 'Mid-Term Examination 2023', gpa: '3.8', status: 'Published', date: 'Oct 15, 2023' },
    { name: 'Term 1 Final Assessment', gpa: '3.9', status: 'Published', date: 'Jul 20, 2023' },
  ];

  const subjects = [
    { name: 'Mathematics', grade: 'A', score: 92, remarks: 'Excellent performance' },
    { name: 'Science', grade: 'A-', score: 88, remarks: 'Very good' },
    { name: 'English Literature', grade: 'B+', score: 79, remarks: 'Can improve in grammar' },
    { name: 'History', grade: 'A', score: 95, remarks: 'Outstanding' },
    { name: 'Computer Science', grade: 'A+', score: 98, remarks: 'Exceptional' },
  ];

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.PARENT]}>
        <Head>
          <title>Results & Reports - Parent Portal</title>
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
                <Link href="/parent/fees" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Fees</Link>
                <Link href="/parent/results" className="text-sm font-bold text-primary">Results</Link>
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
                <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Academic Results</h1>
                <p className="text-slate-500 mt-1">View examination results and progress reports.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                  <span className="material-symbols-outlined">history</span> View History
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar List of Exams */}
              <div className="col-span-1 flex flex-col gap-4">
                <h3 className="text-lg font-bold px-1">Term Reports</h3>
                {terms.map((term, i) => (
                  <div key={i} className={`p-5 rounded-xl border cursor-pointer hover:shadow-md transition-all ${i === 0 ? 'bg-primary text-white border-primary shadow-lg shadow-blue-200 dark:shadow-none' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={`font-bold text-lg ${i === 0 ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{term.name}</h4>
                      {i === 0 && <span className="material-symbols-outlined text-white/50">check_circle</span>}
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className={`text-sm ${i === 0 ? 'text-blue-100' : 'text-slate-500'}`}>Published on {term.date}</p>
                        <span className={`inline-block mt-2 px-2 py-0.5 rounded text-xs font-bold ${i === 0 ? 'bg-white/20 text-white' : 'bg-green-100 text-green-700 dark:bg-green-900/30'}`}>
                          {term.status}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm ${i === 0 ? 'text-blue-100' : 'text-slate-500'}`}>GPA</p>
                        <p className={`text-2xl font-black ${i === 0 ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{term.gpa}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Report Detail View */}
              <div className="col-span-1 lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mid-Term Examination 2023</h3>
                    <p className="text-slate-500 text-sm">Detailed Performance Breakdown</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 transition">
                    <span className="material-symbols-outlined">download</span> Download PDF
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-sm font-medium">
                      <tr>
                        <th className="px-6 py-4">Subject</th>
                        <th className="px-6 py-4">Score</th>
                        <th className="px-6 py-4">Grade</th>
                        <th className="px-6 py-4">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                      {subjects.map((sub, i) => (
                        <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4">
                            <span className="font-bold text-slate-900 dark:text-white">{sub.name}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{sub.score}%</span>
                              <div className="w-16 h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${sub.score}%` }}></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex size-8 items-center justify-center rounded-lg font-bold text-sm ${sub.grade.startsWith('A') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                sub.grade.startsWith('B') ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                  'bg-slate-100 text-slate-700'
                              }`}>
                              {sub.grade}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-slate-500 text-sm">{sub.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                      <tr>
                        <td colSpan={2} className="px-6 py-4 font-bold text-slate-900 dark:text-white">Total Score: 452/500</td>
                        <td colSpan={2} className="px-6 py-4 font-bold text-slate-900 dark:text-white text-right">Aggregate Percentage: 90.4%</td>
                      </tr>
                    </tfoot>
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
