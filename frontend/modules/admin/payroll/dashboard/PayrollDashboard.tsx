import Head from 'next/head';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';

export default function PayrollDashboard() {
    const payrollData = [
        {
            id: 'EMP-1024',
            name: 'Sarah Jenkins',
            role: 'Senior Teacher',
            dept: 'Science Dept',
            basicPay: 4200.00,
            additions: 300.00,
            deductions: 150.00,
            netSalary: 4350.00,
            status: 'Pending',
            statusColor: 'amber'
        },
        {
            id: 'EMP-1045',
            name: 'Michael Chen',
            role: 'Admin Officer',
            dept: 'Finance',
            basicPay: 3800.00,
            additions: 0.00,
            deductions: 200.00,
            netSalary: 3600.00,
            status: 'Paid',
            statusColor: 'green'
        },
        {
            id: 'EMP-1102',
            name: 'Emily Davis',
            role: 'Lab Assistant',
            dept: 'Physics Lab',
            basicPay: 2500.00,
            additions: 150.00,
            deductions: 100.00,
            netSalary: 2550.00,
            status: 'Paid',
            statusColor: 'green'
        },
        {
            id: 'EMP-0988',
            name: 'James Wilson',
            role: 'Coach',
            dept: 'Sports Dept',
            basicPay: 3100.00,
            additions: 500.00,
            deductions: 180.00,
            netSalary: 3420.00,
            status: 'Pending',
            statusColor: 'amber'
        },
        {
            id: 'EMP-1156',
            name: 'Linda Moore',
            role: 'Librarian',
            dept: 'Library',
            basicPay: 3000.00,
            additions: 0.00,
            deductions: 120.00,
            netSalary: 2880.00,
            status: 'Paid',
            statusColor: 'green'
        }
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Payroll Management - School ERP</title>
                    </Head>

                    <div className="flex flex-col gap-6">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Payroll Management</h2>
                                <p className="text-slate-500 dark:text-slate-400">Manage salaries, deductions, and process monthly payments.</p>
                            </div>
                            <div className="flex items-center gap-3 flex-wrap">
                                <div className="relative group">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary transition-colors shadow-sm">
                                        <span className="material-symbols-outlined text-slate-500 text-[20px]">calendar_month</span>
                                        <span className="font-medium text-sm text-slate-700 dark:text-slate-200">October 2023</span>
                                        <span className="material-symbols-outlined text-slate-400 text-[18px]">expand_more</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm font-medium text-sm">
                                    <span className="material-symbols-outlined text-[20px]">download</span>
                                    Export Report
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-lg shadow-md transition-all font-medium text-sm">
                                    <span className="material-symbols-outlined text-[20px]">play_arrow</span>
                                    Run Payroll
                                </button>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white dark:bg-[#1e2936] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Payroll Cost</p>
                                    <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-md text-green-600 dark:text-green-400">
                                        <span className="material-symbols-outlined text-[20px]">attach_money</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$142,500</h3>
                                    <div className="flex items-center gap-1 mt-1 text-xs font-medium text-green-600 dark:text-green-400">
                                        <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                        <span>+2.5% from last month</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#1e2936] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Net Salary Payout</p>
                                    <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400">
                                        <span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$120,000</h3>
                                    <div className="flex items-center gap-1 mt-1 text-xs font-medium text-green-600 dark:text-green-400">
                                        <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                        <span>+1.2% increase</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#1e2936] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Payments</p>
                                    <div className="p-1.5 bg-amber-100 dark:bg-amber-900/30 rounded-md text-amber-600 dark:text-amber-400">
                                        <span className="material-symbols-outlined text-[20px]">pending_actions</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">4 Staff</h3>
                                    <div className="flex items-center gap-1 mt-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                                        <span>Action required</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-[#1e2936] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Processed</p>
                                    <div className="p-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-md text-purple-600 dark:text-purple-400">
                                        <span className="material-symbols-outlined text-[20px]">donut_large</span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">124/128</h3>
                                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mt-2 overflow-hidden">
                                        <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '96%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Data Table Section */}
                        <div className="flex flex-col bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-h-[400px]">
                            {/* Table Toolbar */}
                            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4 justify-between items-center">
                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <div className="relative w-full sm:w-64">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">search</span>
                                        <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 outline-none" placeholder="Search by name or ID..." type="text" />
                                    </div>
                                    <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500">
                                        <span className="material-symbols-outlined text-[20px]">filter_list</span>
                                    </button>
                                </div>
                                <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                                    <select className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary cursor-pointer">
                                        <option>All Departments</option>
                                        <option>Teaching Staff</option>
                                        <option>Administration</option>
                                        <option>Support Staff</option>
                                    </select>
                                    <select className="px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 outline-none focus:border-primary cursor-pointer">
                                        <option>All Status</option>
                                        <option>Paid</option>
                                        <option>Pending</option>
                                        <option>Processing</option>
                                    </select>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto flex-1">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider text-slate-500 font-semibold">
                                            <th className="px-6 py-4">Employee</th>
                                            <th className="px-6 py-4">Role / Dept</th>
                                            <th className="px-6 py-4 text-right">Basic Pay</th>
                                            <th className="px-6 py-4 text-right">Additions</th>
                                            <th className="px-6 py-4 text-right">Deductions</th>
                                            <th className="px-6 py-4 text-right">Net Salary</th>
                                            <th className="px-6 py-4 text-center">Status</th>
                                            <th className="px-6 py-4 text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                                        {payrollData.map((row) => (
                                            <tr key={row.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-xs uppercase">
                                                            {row.name.split(' ').map(n => n[0]).join('')}
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="font-medium text-slate-900 dark:text-white">{row.name}</span>
                                                            <span className="text-xs text-slate-500">ID: {row.id}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col">
                                                        <span className="text-slate-900 dark:text-slate-200">{row.role}</span>
                                                        <span className="text-xs text-slate-500">{row.dept}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-right font-medium text-slate-600 dark:text-slate-400">${row.basicPay.toFixed(2)}</td>
                                                <td className="px-6 py-4 text-right text-green-600 dark:text-green-400">+${row.additions.toFixed(2)}</td>
                                                <td className="px-6 py-4 text-right text-red-500 dark:text-red-400">-${row.deductions.toFixed(2)}</td>
                                                <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">${row.netSalary.toFixed(2)}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${row.statusColor === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400 border-green-200 dark:border-green-800' : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-400 border-amber-200 dark:border-amber-800'}`}>
                                                        {row.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button className="p-1.5 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Edit">
                                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                                        </button>
                                                        <button className="p-1.5 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="View Slip">
                                                            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Table Pagination */}
                            <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between mt-auto">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 5 of 124 entries</span>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm disabled:opacity-50 hover:bg-slate-50 dark:hover:bg-slate-800" disabled>Previous</button>
                                    <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
