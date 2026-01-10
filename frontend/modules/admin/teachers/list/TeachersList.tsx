import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';

export default function TeachersList() {
    const [filterDept, setFilterDept] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    // Mock Data
    const teachers = [
        { id: 'T-2023-001', name: 'Mrs. Davis', email: 'davis@school.edu', department: 'Primary Education', subject: 'Class Teacher (5B)', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2zqY990DeqkZM4dJJNI-IccxSoiaA02z-K4lW83JW79qtT8tST09OTED0BFcLFcDRd8AzjGUPCi--aKOJwoEiaHnC1htT0OVh0y-GoP0GErdHBTtCgo1RZyUdFfxQ3dzYHObN7bHPJHpmlc3Wxz6fEH-dUu338jVymJfMoL5apF7s1GK36Q1X0NbxCtD9YEggaa2fqtS2xPN5MdAizrJD1Vf99sWHWdZBASaQF6IQAcISVAAHo2Yjoc7z14dCR0zN9PWKkPvGauzp' },
        { id: 'T-2023-002', name: 'Mr. Anderson', email: 'anderson@school.edu', department: 'Mathematics', subject: 'Advanced Math', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWKnu2bhx3mv5dqm9g9HIAkgZEZdX8W4-fie7YP5xcRFeNMJjZm5ziDRuvYZy7eerJhLhZZWE1t04X69gjlJ-rAxOTwX_fBowaio9BrYaVpf0ExSTFNEhi8IsrorHGzB_cP58nHrZBUFNP93Y8JdhJYx-L6PmYdYvAQp2eurV5vgsNC4QcH1qeIKASSq_nqgEl98DApwUdVn3iXC0a_Da5tolOhJ8tqojKS9xEFugKvGrbFfBL5hi35xQVG3Pg7ZRoQwSpJ17Hk65f' },
        { id: 'T-2023-003', name: 'Ms. Curie', email: 'curie@school.edu', department: 'Science', subject: 'Physics', status: 'On Leave', avatar: '' },
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Teachers List - School ERP</title>
                    </Head>

                    <div className="space-y-6">
                        {/* Breadcrumbs */}
                        <nav className="flex items-center text-sm text-slate-500">
                            <Link href="/admin/dashboard" className="hover:text-primary transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-[16px] mx-2">chevron_right</span>
                            <span className="text-slate-900 dark:text-white font-medium">Teachers</span>
                        </nav>

                        {/* Page Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Teacher Management</h1>
                                <p className="mt-1 text-slate-500 dark:text-slate-400">Manage faculty members and assignments.</p>
                            </div>
                            <Link href="/admin/teachers/add" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary hover:bg-blue-600 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all active:scale-95">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                <span>Add New Teacher</span>
                            </Link>
                        </div>

                        {/* Filters */}
                        <div className="bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                                <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                                    <div className="relative min-w-[140px]">
                                        <select
                                            className="w-full pl-3 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
                                            value={filterDept}
                                            onChange={(e) => setFilterDept(e.target.value)}
                                        >
                                            <option value="">All Departments</option>
                                            <option value="Mathematics">Mathematics</option>
                                            <option value="Science">Science</option>
                                            <option value="Languages">Languages</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">expand_more</span>
                                    </div>
                                    <div className="relative min-w-[140px]">
                                        <select
                                            className="w-full pl-3 pr-10 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-200 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
                                            value={filterStatus}
                                            onChange={(e) => setFilterStatus(e.target.value)}
                                        >
                                            <option value="">Any Status</option>
                                            <option value="Active">Active</option>
                                            <option value="On Leave">On Leave</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[20px]">expand_more</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                                    <div className="relative w-full sm:w-80">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-[20px]">search</span>
                                        <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-primary focus:border-primary" placeholder="Search teacher..." type="text" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
                                        <tr>
                                            <th className="px-6 py-4 w-12"><input className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></th>
                                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Teacher</th>
                                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Employee ID</th>
                                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Department</th>
                                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white">Status</th>
                                            <th className="px-6 py-4 font-semibold text-slate-900 dark:text-white text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        {teachers.map((teacher, i) => (
                                            <tr key={i} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                <td className="px-6 py-4"><input className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        {teacher.avatar ? (
                                                            <div className="h-9 w-9 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${teacher.avatar}')` }}></div>
                                                        ) : (
                                                            <div className="h-9 w-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 font-bold text-xs">{teacher.name.substring(0, 2).toUpperCase()}</div>
                                                        )}
                                                        <div>
                                                            <div className="font-medium text-slate-900 dark:text-white">{teacher.name}</div>
                                                            <div className="text-xs text-slate-500">{teacher.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 font-mono text-slate-600 dark:text-slate-300">{teacher.id}</td>
                                                <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                                                    <div>{teacher.department}</div>
                                                    <div className="text-xs text-slate-500">{teacher.subject}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${teacher.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                                                        {teacher.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Link href="/admin/teachers/edit" className="p-1.5 text-slate-400 hover:text-primary transition-colors rounded">
                                                            <span className="material-symbols-outlined text-[20px]">edit</span>
                                                        </Link>
                                                        <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors rounded">
                                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                <div className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 3 of 42 results</div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1 text-sm border rounded text-slate-600 hover:bg-slate-50">Previous</button>
                                    <button className="px-3 py-1 text-sm border rounded text-slate-600 hover:bg-slate-50">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
