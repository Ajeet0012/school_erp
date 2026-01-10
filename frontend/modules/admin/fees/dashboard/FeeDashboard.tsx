import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';

export default function FeeDashboard() {
    const transactions = [
        {
            id: '#TRX-9821',
            studentName: 'Michael Scott',
            studentAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBk3Brw82uUrJYYqyAl9XVMfhAeHTSz18zeumuwW39B89mFclWNyLLCz7uk--uF0ouTp78tbEwFSEIiESJjOTJeJ0AIle3k7LCnnj8o0_hetZYZnTVlKPdd6nIRGtF-Z7-z9X7rHeLLe9SBBlJqgNXsIlp7C3zzVnkOcP4p6faxXgqss1CBvOR_l_fmyb2OnvsFBy18Xoe-nNfe_LojkEN-oG8RiHQsw5ZxIfH7ZUI47dnMpsVB2ZWBXu6yaXDqZ1MPIiqbsuai-9kP',
            class: 'Grade 10-A',
            date: 'Oct 24, 2023',
            amount: '$1,200.00',
            status: 'Paid',
        },
        {
            id: '#TRX-9822',
            studentName: 'Pam Beesly',
            studentAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-79JSFjzlWNq_1OxLnpZsoe-IY4H4BTAcTg0NddyN7gq-Q-NVTvRzSyel--geBDR1kUM-yxWYWuB9Gg2y2QXASjUm1xPlrJBhllZHsLMUBjmfA8IXVkkLlqtbjsNoLcroEJgPmPqOg9KdNZW369xvE2knDkcU17DNqVpGGRUqTD2v7Pc06bAb1VIZyIBuLJTPJ9XH-0hla66N42jqSpfG0BSpQlgMwDYuYjW0jycIgIhyMKe_VZ8qddKHGPtrDJSxVOnQ3Y7yvGLh',
            class: 'Grade 8-B',
            date: 'Oct 24, 2023',
            amount: '$850.00',
            status: 'Partial',
        },
        {
            id: '#TRX-9823',
            studentName: 'Jim Halpert',
            studentAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtyxlb6_TnkrLhi1L1Nqkzg_Pg2ull0LVy3Qgb7pHjR39QCCnKL9t1i0d_oeBat34TloffS5UUMfTDuS-G9kiG83vKkm_tqLVRyKQIxOqxWXXSXJKnyqXUlYS8gHhK45vlKxYkf5Cs97uB-4yAuiIo9l0rBAOJ1LU_3LQH98AUIKnjc3os2BbRHxeDz5uyrAeKvrU3yAzTMDYQPiW7PsGW8k6BHqz0GZx4YGO51F4Svpah4uABRqwKfjm4j5tEU_cz4vkJ0STciqxa',
            class: 'Grade 12-C',
            date: 'Oct 23, 2023',
            amount: '$1,500.00',
            status: 'Overdue',
        },
        {
            id: '#TRX-9824',
            studentName: 'Dwight Schrute',
            studentAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhLQPXwOvKjPGlUpJdXzvSlFVpcyMlDqqGBO4C9c008q8p7TwysslDQHL1hl8rGbs_Vw_N9K90tVjtW-3Heo7n5YdCNvH6Np838KEm4XXa56JE0SWJmEuyrwVR4QIID9yBG-UR1C9or-zmoP1Ge_RY9Ss4f1LxHSFzAEd6e8UL5OgOIetUGAC1v4HyHxYsfzvZ_nG5j1bot3b7yFuOcUBWCkxrmOYurchlZeTCUye2IKXQLX0ly3g4n_7GyPR6n2fJKdPPwktBH572',
            class: 'Grade 9-A',
            date: 'Oct 22, 2023',
            amount: '$900.00',
            status: 'Paid',
        },
    ];

    const dues = [
        { title: 'Grade 10 - Term 2', desc: 'Due in 2 days', amount: '$12k', color: 'red', icon: 'warning' },
        { title: 'Grade 8 - Bus Fee', desc: 'Due in 5 days', amount: '$4.5k', color: 'yellow', icon: 'schedule' },
        { title: 'Sports Academy Fee', desc: 'Due in 1 week', amount: '$2.1k', color: 'blue', icon: 'calendar_today' },
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Fee Management - School ERP</title>
                    </Head>

                    <div className="flex flex-col gap-6">
                        {/* Page Header */}
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Fee Management</h1>
                                <p className="text-slate-500 dark:text-slate-400">Financial Overview & Collections</p>
                            </div>
                            <div className="flex gap-3">
                                <Link href="/admin/fees/collection" className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition-colors">
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                    <span>Collect Fee</span>
                                </Link>
                            </div>
                        </div>

                        {/* KPI Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white dark:bg-[#1e2936] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                                        <span className="material-symbols-outlined">attach_money</span>
                                    </div>
                                    <span className="flex items-center text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+12.5%</span>
                                </div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Fees Collected</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$1,250,000</h3>
                            </div>
                            <div className="bg-white dark:bg-[#1e2936] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                                        <span className="material-symbols-outlined">money_off</span>
                                    </div>
                                    <span className="flex items-center text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded-full">+5.2%</span>
                                </div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Outstanding Balance</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$45,000</h3>
                            </div>
                            <div className="bg-white dark:bg-[#1e2936] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">event_available</span>
                                    </div>
                                    <span className="flex items-center text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">Stable</span>
                                </div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Today's Collection</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$12,400</h3>
                            </div>
                            <div className="bg-white dark:bg-[#1e2936] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                                        <span className="material-symbols-outlined">school</span>
                                    </div>
                                    <span className="flex items-center text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">+2 New</span>
                                </div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Scholarships Awarded</p>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">15</h3>
                            </div>
                        </div>

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Chart Section (Placeholder for Chart) */}
                            <div className="lg:col-span-2 bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Monthly Collection Overview</h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Academic Year 2023-2024</p>
                                    </div>
                                    <select className="bg-slate-50 dark:bg-slate-800 border-none ring-1 ring-slate-200 dark:ring-slate-700 rounded-lg text-sm px-3 py-1.5 focus:ring-2 focus:ring-primary cursor-pointer">
                                        <option>Last 6 Months</option>
                                        <option>This Year</option>
                                    </select>
                                </div>

                                {/* CSS Bar Chart */}
                                <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 px-2">
                                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month, index) => {
                                        const heights = [40, 55, 45, 80, 35, 65, 90];
                                        const height = heights[index];
                                        return (
                                            <div key={month} className="flex flex-col items-center gap-2 flex-1 h-full justify-end group cursor-pointer">
                                                <div className={`relative w-full max-w-[40px] bg-primary/20 rounded-t-sm group-hover:bg-primary/30 transition-all duration-300`} style={{ height: `${height}%` }}>
                                                    <div className="absolute bottom-0 w-full bg-primary rounded-t-sm h-full animate-grow"></div>
                                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 dark:bg-white text-white dark:text-black text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 font-bold">${height}k</div>
                                                </div>
                                                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{month}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Due Reminders */}
                            <div className="bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm flex flex-col">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Upcoming Dues</h3>
                                    <Link href="#" className="text-sm text-primary hover:underline font-medium">View All</Link>
                                </div>
                                <div className="flex flex-col gap-3 overflow-y-auto max-h-[300px] pr-2">
                                    {dues.map((due, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                                            <div className={`bg-${due.color}-100 dark:bg-${due.color}-900/30 text-${due.color}-600 dark:text-${due.color}-400 p-2 rounded-lg flex-shrink-0`}>
                                                <span className="material-symbols-outlined text-[20px]">{due.icon}</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{due.title}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">{due.desc}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm font-bold text-slate-900 dark:text-white">{due.amount}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-auto pt-4 w-full flex items-center justify-center gap-2 text-primary font-bold text-sm hover:underline">
                                    <span className="material-symbols-outlined text-[18px]">send</span> Send Bulk Reminders
                                </button>
                            </div>
                        </div>

                        {/* Recent Transactions Table */}
                        <div className="bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Transactions</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Latest fee payments across all classes</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                        Filter
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">download</span>
                                        Export
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase text-xs font-semibold tracking-wider border-b border-slate-200 dark:border-slate-700">
                                        <tr>
                                            <th className="px-6 py-4">Transaction ID</th>
                                            <th className="px-6 py-4">Student Name</th>
                                            <th className="px-6 py-4">Class</th>
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4">Amount</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                        {transactions.map((trx, i) => (
                                            <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                                <td className="px-6 py-4 font-mono text-xs text-slate-500 dark:text-slate-400">{trx.id}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-8" style={{ backgroundImage: `url('${trx.studentAvatar}')` }}></div>
                                                        <span className="font-semibold text-slate-900 dark:text-white">{trx.studentName}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{trx.class}</td>
                                                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{trx.date}</td>
                                                <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{trx.amount}</td>
                                                <td className="px-6 py-4">
                                                    {trx.status === 'Paid' && (
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                            <span className="size-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                                                            Paid
                                                        </span>
                                                    )}
                                                    {trx.status === 'Partial' && (
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                            <span className="size-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400"></span>
                                                            Partial
                                                        </span>
                                                    )}
                                                    {trx.status === 'Overdue' && (
                                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                                                            <span className="size-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>
                                                            Overdue
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-slate-400 hover:text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
