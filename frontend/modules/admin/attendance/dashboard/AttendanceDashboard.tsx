import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';

export default function AttendanceDashboard() {
    const students = [
        { id: '2023001', name: 'John Doe', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2BXW-2Q3_aMIP104HVvG1kZytSl3QchhEYY8ditDQ4TkDRCTUf0YPqx14ZvrwzJqPMDeOC2zY-ApHtvhMWXZI9joFzgkgrp6Juyo_xSW-VfLoR-vTVnkspVfLiTg2WW5MpUx5d4Q5Lha3C4BPDlRRx9Vh3FXQDy3kfXdl9ACligo8r259YUfkHWLvEliFfekfuEj3CKIogHrJS4UWR6l-bV9X0EnYojNL6mD2Z64D2gEuDi5nKF0kNPwvbcB8HyXpD46-1Ace3K2O', status: 'Present', note: '' },
        { id: '2023002', name: 'Jane Smith', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL-XtNgK1b15GIk7xeMxMP5y9ULhcJs-vO8s8RbDi42bkUO3GIH2uGk2QapRMGDd2QSnutvRTXBsNJWs2CIh7UnvVbQuNTTn5-yy__YUTgh-RPoYim7AVtIQJMZ_bUOVhYg5U2PU_RhnWYBYhuldXS1xPlQyv-eUgthl_XA9fNceMiYP0G5Of62jJ5LOeESo56L1BlIQ6iyS1Ws4qlNi9Wh4DnMGm0GhGeupmS4c5OzxkEtvJvw6K8OVWfLY4wjyFTZWpVnAvUa9vW', status: 'Absent', note: 'Sick leave reported by parent' },
        { id: '2023003', name: 'Mike Johnson', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlDaZq2Qp5Qxr1oiWM8pReWLYvQFEuvafrKYAqVePhFmGnXmOHixZKrFRONaH0QgHFc-0VSPRsURsHaMcgOxQVilV1-QhVI4MC_Sttdh0-oaVx9xc8QGjmOTAhx_HrZnLWw-s5hfHhCUgNBzIWQIlfipfXSE0UhCQ6KyBtvCe9IoxaSEA8vFC50KaAFugFryjn_-xA_iVm1JnMut6ig7TRAcfV6hCROCrCjcQZJ0Z8fDDJz8Q0U1o9Z6IcXUVPEqYZdP14TycR3-dE', status: 'Present', note: '' },
        { id: '2023004', name: 'Emily Davis', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuKimzBT5dNuv5SHjS8jpMq-HBPHdg7itZojRU50LaV-tdN7oUXRRQ_YGqHwRYCCb62-AEqFVvMFQG4iNt3eOduB08Icx-Vfnd4RuqXDPIrQPdWggDP8erHedxs8-Vr2oAgra8fkfOkb9MUtp_xX2U2_FkNkk0xg1p0th36El-tqBKBDFq5V2VLUO2sTafK6wcUGq1BY07qyowAIXEW8PX8tUxcki9nwR6yTad5a9I-GSNK4kHPvOisIuPowD80hOGA_DQrqvi2DIm', status: 'Late', note: 'Arrived 15 mins late' },
        { id: '2023005', name: 'Robert Wilson', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWgD1s0qLn40Nf_K2aGoZceAHfz6e8HlXGuvV3LxQ3cSSf-MowXgZB9hvNTTVJyWIER_DGG_ta5zUngImSGLsQmvBUHnsPwQwk0R2J8kcL02h5_RxffgSSLG-7vGdkTaImLL6J53vd22I51PeaTtznNFw9WAdSQd0ha3n1oDFY0MkQS2qLZCtlF72YB2dXU0x6Edpx2YNUejhtuob5B28F6WPw7a3ufgtvZlH7RrIBXX9aZHUlLMlglqnUTm1eYLCeXRWKaahEQNHg', status: 'Present', note: '' },
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Attendance Management - School ERP</title>
                    </Head>

                    <div className="flex flex-col gap-6">
                        {/* Breadcrumbs & Header */}
                        <div className="flex flex-col gap-4">
                            <nav className="flex text-sm text-slate-500 dark:text-slate-400">
                                <Link href="/admin/dashboard" className="hover:text-primary transition-colors">Home</Link>
                                <span className="mx-2">/</span>
                                <span className="text-slate-900 dark:text-white font-medium">Attendance</span>
                            </nav>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Grade 5 - Mathematics</h1>
                                    <p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">calendar_today</span>
                                        Oct 24, 2023
                                        <span className="mx-1">•</span>
                                        Period 3 (09:00 AM - 10:00 AM)
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">download</span>
                                        Download Report
                                    </button>
                                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center gap-2">
                                        <span className="material-symbols-outlined text-lg">save</span>
                                        Save Attendance
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Filters & Stats Container */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            {/* Filters Panel */}
                            <div className="lg:col-span-8 bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Attendance Controls</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Class & Section</label>
                                        <div className="relative">
                                            <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 appearance-none">
                                                <option>Grade 5 - Section A</option>
                                                <option>Grade 5 - Section B</option>
                                                <option>Grade 6 - Section A</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-slate-500 text-lg">expand_more</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Subject</label>
                                        <div className="relative">
                                            <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 appearance-none">
                                                <option>Mathematics</option>
                                                <option>Science</option>
                                                <option>English</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-3 top-2.5 pointer-events-none text-slate-500 text-lg">expand_more</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-medium text-slate-500 dark:text-slate-400">Date</label>
                                        <div className="relative">
                                            <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5" type="date" defaultValue="2023-10-24" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-lg">info</span>
                                        <span className="text-xs text-slate-500">Auto-saved 2 mins ago</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Quick Action:</span>
                                        <button className="text-primary hover:bg-primary/10 px-3 py-1.5 rounded-md text-sm font-medium transition-colors border border-primary/20">Mark All Present</button>
                                    </div>
                                </div>
                            </div>

                            {/* Summary Stats */}
                            <div className="lg:col-span-4 flex flex-col gap-4">
                                <div className="flex gap-4 h-full">
                                    <div className="flex-1 bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm flex flex-col justify-center items-center">
                                        <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-2">
                                            <span className="material-symbols-outlined">group</span>
                                        </div>
                                        <span className="text-2xl font-bold text-slate-900 dark:text-white">5</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">Total</span>
                                    </div>
                                    <div className="flex-1 bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm flex flex-col justify-center items-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500"></div>
                                        <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">3</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">Present</span>
                                    </div>
                                    <div className="flex-1 bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm flex flex-col justify-center items-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-1 h-full bg-rose-500"></div>
                                        <span className="text-2xl font-bold text-rose-600 dark:text-rose-400">1</span>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-medium">Absent</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Student Roster Table */}
                        <div className="bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                                    <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                                        <tr>
                                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white w-16">#</th>
                                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white min-w-[200px]">Student Name</th>
                                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-center min-w-[300px]">Status</th>
                                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white w-full">Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {students.map((student, i) => (
                                            <tr key={student.id} className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group ${student.status === 'Absent' ? 'bg-rose-50/30 dark:bg-rose-900/10' : ''} ${student.status === 'Late' ? 'bg-amber-50/30 dark:bg-amber-900/10' : ''}`}>
                                                <td className={`px-6 py-4 font-medium ${student.status === 'Absent' ? 'text-rose-700 dark:text-rose-400' : ''} ${student.status === 'Late' ? 'text-amber-700 dark:text-amber-500' : ''}`}>{String(i + 1).padStart(2, '0')}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover" style={{ backgroundImage: `url('${student.avatar}')` }}></div>
                                                        <div>
                                                            <div className="font-medium text-slate-900 dark:text-white">{student.name}</div>
                                                            <div className="text-xs text-slate-500">ID: {student.id}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-lg p-1 w-fit mx-auto shadow-inner">
                                                        <button className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${student.status === 'Present' ? 'bg-white dark:bg-emerald-600 text-emerald-700 dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-transparent' : 'font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}>Present</button>
                                                        <button className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${student.status === 'Absent' ? 'bg-white dark:bg-rose-600 text-rose-700 dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-transparent' : 'font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}>Absent</button>
                                                        <button className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${student.status === 'Late' ? 'bg-white dark:bg-amber-600 text-amber-700 dark:text-white shadow-sm ring-1 ring-slate-200 dark:ring-transparent' : 'font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'}`}>Late</button>
                                                        <button className="px-4 py-1.5 rounded-md text-xs font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-all">Excused</button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <input className="w-full bg-transparent border-b border-transparent group-hover:border-slate-300 dark:group-hover:border-slate-600 focus:border-primary focus:ring-0 text-sm py-1 px-0 transition-colors placeholder:text-slate-400 text-slate-600 dark:text-slate-300" type="text" placeholder="Add note..." defaultValue={student.note} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination */}
                            <div className="bg-slate-50 dark:bg-slate-800 px-6 py-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                                <p className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-medium text-slate-900 dark:text-white">1</span> to <span className="font-medium text-slate-900 dark:text-white">5</span> of <span className="font-medium text-slate-900 dark:text-white">30</span> students</p>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50">
                                        <span className="material-symbols-outlined text-lg">chevron_left</span>
                                    </button>
                                    <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">
                                        <span className="material-symbols-outlined text-lg">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
