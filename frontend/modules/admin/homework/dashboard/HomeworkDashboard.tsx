import Head from 'next/head';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';

export default function HomeworkDashboard() {
    const assignments = [
        {
            id: 1,
            title: 'Math Homework - Algebra 101',
            description: 'Ch 4: Quadratic Equations',
            class: 'Grade 10-A',
            dueDate: 'Oct 12, 2023',
            turnedIn: 24,
            totalStudents: 30,
            percentage: 80,
            status: 'Active',
            statusColor: 'green',
            icon: 'functions',
            iconColor: 'blue'
        },
        {
            id: 2,
            title: 'History Essay - WWII',
            description: 'Causes and Effects',
            class: 'Grade 11-C',
            dueDate: 'Oct 15, 2023',
            turnedIn: 0,
            totalStudents: 30,
            percentage: 0,
            status: 'Draft',
            statusColor: 'slate',
            icon: 'history_edu',
            iconColor: 'orange'
        },
        {
            id: 3,
            title: 'Physics Lab Report',
            description: 'Motion and Velocity',
            class: 'Grade 10-A',
            dueDate: 'Sep 28, 2023',
            turnedIn: 30,
            totalStudents: 30,
            percentage: 100,
            status: 'Graded',
            statusColor: 'blue',
            icon: 'science',
            iconColor: 'purple'
        },
        {
            id: 4,
            title: 'English Literature Review',
            description: 'To Kill a Mockingbird',
            class: 'Grade 10-B',
            dueDate: 'Yesterday',
            turnedIn: 28,
            totalStudents: 30,
            percentage: 93,
            status: 'Late',
            statusColor: 'red',
            icon: 'menu_book',
            iconColor: 'pink'
        }
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Assignments - School ERP</title>
                    </Head>

                    <div className="flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-wrap justify-between items-end gap-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Assignments</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-base">Manage homework, quizzes, and projects across all your classes.</p>
                            </div>
                            <button className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-blue-600 text-white px-5 py-2.5 text-sm font-bold shadow-sm transition-all active:scale-95">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
                                <span>Create Assignment</span>
                            </button>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white dark:bg-[#1e2936] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Active Assignments</p>
                                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+2%</span>
                                </div>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">12</p>
                            </div>
                            <div className="bg-white dark:bg-[#1e2936] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Pending Grading</p>
                                    <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold px-2 py-1 rounded-full">+5 submitted</span>
                                </div>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">45</p>
                            </div>
                            <div className="bg-white dark:bg-[#1e2936] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                <div className="flex justify-between items-start">
                                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Avg Class Score</p>
                                    <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold px-2 py-1 rounded-full">-1%</span>
                                </div>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">88%</p>
                            </div>
                        </div>

                        {/* Filter Toolbar */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-[#1e2936] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <div className="flex flex-wrap gap-3 w-full md:w-auto">
                                <div className="relative">
                                    <select className="appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-3 pr-10 py-2.5">
                                        <option>All Subjects</option>
                                        <option>Mathematics</option>
                                        <option>Physics</option>
                                        <option>History</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" style={{ fontSize: '20px' }}>expand_more</span>
                                </div>
                                <div className="relative">
                                    <select className="appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-3 pr-10 py-2.5">
                                        <option>All Classes</option>
                                        <option>Grade 10-A</option>
                                        <option>Grade 10-B</option>
                                        <option>Grade 11-C</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" style={{ fontSize: '20px' }}>expand_more</span>
                                </div>
                                <div className="relative">
                                    <select className="appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-3 pr-10 py-2.5">
                                        <option>Status: Any</option>
                                        <option>Active</option>
                                        <option>Draft</option>
                                        <option>Graded</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" style={{ fontSize: '20px' }}>expand_more</span>
                                </div>
                            </div>
                            <div className="flex gap-2 w-full md:w-auto justify-end">
                                <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg" title="List View">
                                    <span className="material-symbols-outlined">view_list</span>
                                </button>
                                <button className="p-2 text-slate-400 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg" title="Grid View">
                                    <span className="material-symbols-outlined">grid_view</span>
                                </button>
                            </div>
                        </div>

                        {/* Assignment Table */}
                        <div className="bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                                        <tr>
                                            <th className="px-6 py-4 font-bold" scope="col">Assignment</th>
                                            <th className="px-6 py-4 font-bold" scope="col">Class</th>
                                            <th className="px-6 py-4 font-bold" scope="col">Due Date</th>
                                            <th className="px-6 py-4 font-bold" scope="col">Submissions</th>
                                            <th className="px-6 py-4 font-bold" scope="col">Status</th>
                                            <th className="px-6 py-4 font-bold text-right" scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                        {assignments.map((assignment) => (
                                            <tr key={assignment.id} className="bg-white dark:bg-[#1e2936] hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`size-10 rounded-lg bg-${assignment.iconColor}-100 text-${assignment.iconColor}-600 flex items-center justify-center shrink-0`}>
                                                            <span className="material-symbols-outlined">{assignment.icon}</span>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{assignment.title}</div>
                                                            <div className="text-xs text-slate-500">{assignment.description}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{assignment.class}</td>
                                                <td className="px-6 py-4">
                                                    <div className={`flex items-center gap-1.5 ${assignment.dueDate === 'Yesterday' ? 'text-red-600 font-medium' : 'text-slate-600 dark:text-slate-300'}`}>
                                                        <span className="material-symbols-outlined text-slate-400" style={{ fontSize: '18px' }}>{assignment.dueDate === 'Yesterday' ? 'warning' : 'calendar_today'}</span>
                                                        <span>{assignment.dueDate}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 min-w-[200px]">
                                                    <div className="flex flex-col gap-1.5">
                                                        <div className="flex justify-between text-xs font-medium text-slate-500">
                                                            <span>{assignment.turnedIn}/{assignment.totalStudents} Turned in</span>
                                                            <span className={assignment.percentage >= 80 ? 'text-green-600' : 'text-primary'}>{assignment.percentage}%</span>
                                                        </div>
                                                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                                            <div className={`bg-${assignment.percentage >= 80 ? 'green-500' : assignment.percentage === 0 ? 'slate-400' : 'primary'} h-2 rounded-full`} style={{ width: `${assignment.percentage}%` }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`bg-${assignment.statusColor}-100 text-${assignment.statusColor}-800 dark:bg-${assignment.statusColor}-900/50 dark:text-${assignment.statusColor}-300 text-xs font-bold px-2.5 py-1 rounded-md border border-${assignment.statusColor}-200 dark:border-${assignment.statusColor}-800`}>
                                                        {assignment.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-primary hover:text-primary/80 font-medium text-sm mr-2">{assignment.status === 'Graded' ? 'Review' : assignment.status === 'Draft' ? 'Edit' : 'Grade'}</button>
                                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>more_vert</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination */}
                            <div className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                                <span className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-semibold text-slate-900 dark:text-white">1-{assignments.length}</span> of <span className="font-semibold text-slate-900 dark:text-white">12</span></span>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50" disabled>Previous</button>
                                    <button className="px-3 py-1 text-sm font-medium text-primary bg-white dark:bg-slate-800 border border-primary rounded-md">1</button>
                                    <button className="px-3 py-1 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">2</button>
                                    <button className="px-3 py-1 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">3</button>
                                    <button className="px-3 py-1 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">Next</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
