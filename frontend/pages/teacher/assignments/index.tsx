import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function AssignmentManagement() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const assignments = [
        {
            id: 1,
            title: 'Math Homework - Algebra 101',
            subtitle: 'Ch 4: Quadratic Equations',
            icon: 'functions',
            iconColor: 'bg-blue-100 text-blue-600',
            class: 'Grade 10-A',
            date: 'Oct 12, 2023',
            dateIcon: 'calendar_today',
            turnedIn: '24/30',
            percentage: 80,
            status: 'Active',
            statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-green-200 dark:border-green-800'
        },
        {
            id: 2,
            title: 'History Essay - WWII',
            subtitle: 'Causes and Effects',
            icon: 'history_edu',
            iconColor: 'bg-orange-100 text-orange-600',
            class: 'Grade 11-C',
            date: 'Oct 15, 2023',
            dateIcon: 'calendar_today',
            turnedIn: '0/30',
            percentage: 0,
            status: 'Draft',
            statusColor: 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600'
        },
        {
            id: 3,
            title: 'Physics Lab Report',
            subtitle: 'Motion and Velocity',
            icon: 'science',
            iconColor: 'bg-purple-100 text-purple-600',
            class: 'Grade 10-A',
            date: 'Sep 28, 2023',
            dateIcon: 'event_available',
            turnedIn: '30/30',
            percentage: 100,
            percentageColor: 'text-green-600',
            progressBarColor: 'bg-green-500',
            status: 'Graded',
            statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border-blue-200 dark:border-blue-800'
        },
        {
            id: 4,
            title: 'English Literature Review',
            subtitle: 'To Kill a Mockingbird',
            icon: 'menu_book',
            iconColor: 'bg-pink-100 text-pink-600',
            class: 'Grade 10-B',
            date: 'Yesterday',
            dateIcon: 'warning',
            dateColor: 'text-red-600 font-medium',
            turnedIn: '28/30',
            percentage: 93,
            status: 'Late',
            statusColor: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 border-red-200 dark:border-red-800'
        }
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN, USER_ROLES.TEACHER]}>
                <Head>
                    <title>School ERP - Assignments</title>
                </Head>

                <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden flex min-h-screen w-full">
                    {/* Sidebar */}
                    <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="flex h-full flex-col justify-between p-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3 px-2 py-4 items-center">
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrGZXdrAPVeSMaJYTYAep5vd9hk3omrl_DXS6R3aHkcR6ANn8VELklbnLfrvvo3iwLLEH5H878KaRq_asxTU9HtCQb3AhTqg-c1b4k-Zogvwghm9fOKyhPhw3WD2XEkrwf1ceiDoYnwUR7M4MFaVWlw_B85r2f2vBI3p8Sn9thaFVJe6WNXrhO4PSrOCwQz-7H_BliniTLF0qD3rlncocN_qG72v-Od6xbvLsDdlcqRQEyR9KhtJ6xtmKqfEb2UJiQKl20IWx8cGUk')" }}></div>
                                    <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">School ERP</h1>
                                </div>
                                <nav className="flex flex-col gap-2">
                                    <Link href="/teacher/dashboard" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined">dashboard</span>
                                        <span className="text-sm font-medium">Dashboard</span>
                                    </Link>
                                    <Link href="/teacher/assignments" className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined fill-1">book</span>
                                        <span className="text-sm font-medium">Assignments</span>
                                    </Link>
                                    <Link href="/teacher/students" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined">group</span>
                                        <span className="text-sm font-medium">Students</span>
                                    </Link>
                                    <Link href="/teacher/grades" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined">school</span>
                                        <span className="text-sm font-medium">Gradebook</span>
                                    </Link>
                                </nav>
                            </div>
                            <div className="flex items-center gap-3 px-3 py-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBg1QsNVt1pSzfsJBTb_wsXu2E9ipk7U4JdJET4Ti3Rihl4dKj_G4a8nzkh6vb1oMb3gARlk-mKoEjql3QPvH9Y_gETFNWzpzZ0TywDNLQwzJ4lVEkLjsMrYb9Bbu_C2CNrFUgCoqCbhEBmOS1Z-g6APMSFFu9EtvppcbAabLchrAUihNSaMpD-_1cf1zWjd8L8zuSvlFo3uKV9V_oPhBVLsy10GKgJniYh0qbqGID9Muhd25WC0j9Va_fhmtti_Yw3UilQdV_4vuIy')" }}></div>
                                <div className="flex flex-col">
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Mr. Anderson</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Math Teacher</p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Overlay */}
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}

                    {/* Main Content */}
                    <main className="flex-1 flex flex-col lg:ml-72 min-h-screen">
                        {/* Header */}
                        <header className="sticky top-0 z-10 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 py-4">
                            <div className="flex items-center gap-4 text-slate-900 dark:text-white lg:hidden">
                                <button onClick={() => setSidebarOpen(true)} className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                                <h2 className="text-lg font-bold leading-tight">Assignments</h2>
                            </div>
                            <div className="hidden lg:flex gap-2 items-center text-sm">
                                <Link href="/teacher/dashboard" className="text-slate-500 hover:text-primary transition-colors">Dashboard</Link>
                                <span className="text-slate-300">/</span>
                                <span className="text-slate-900 dark:text-white font-medium">Assignments</span>
                            </div>
                            <div className="flex flex-1 justify-end gap-4 items-center">
                                <div className="relative w-full max-w-xs hidden md:block">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">search</span>
                                    <input className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border-none text-sm focus:ring-2 focus:ring-primary text-slate-900 dark:text-white placeholder-slate-400" placeholder="Search..." type="text" />
                                </div>
                                <button className="relative flex items-center justify-center rounded-lg size-10 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-symbols-outlined">notifications</span>
                                    <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                                </button>
                                <button className="flex items-center justify-center rounded-lg size-10 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-symbols-outlined">chat</span>
                                </button>
                            </div>
                        </header>

                        {/* Content */}
                        <div className="p-6 md:p-10 flex flex-col gap-8 max-w-7xl mx-auto w-full">
                            {/* Heading Section */}
                            <div className="flex flex-wrap justify-between items-end gap-4">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Assignments</h1>
                                    <p className="text-slate-500 dark:text-slate-400 text-base">Manage homework, quizzes, and projects across all your classes.</p>
                                </div>
                                <button className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-white px-5 py-2.5 text-sm font-bold shadow-sm transition-all active:scale-95">
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                    <span>Create Assignment</span>
                                </button>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                    <div className="flex justify-between items-start">
                                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Active Assignments</p>
                                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+2%</span>
                                    </div>
                                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">12</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                    <div className="flex justify-between items-start">
                                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Pending Grading</p>
                                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold px-2 py-1 rounded-full">+5 submitted</span>
                                    </div>
                                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">45</p>
                                </div>
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-1">
                                    <div className="flex justify-between items-start">
                                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">Avg Class Score</p>
                                        <span className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold px-2 py-1 rounded-full">-1%</span>
                                    </div>
                                    <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">88%</p>
                                </div>
                            </div>

                            {/* Filter Toolbar */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex flex-wrap gap-3 w-full md:w-auto">
                                    <div className="relative">
                                        <select className="appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-3 pr-10 py-2.5">
                                            <option>All Subjects</option>
                                            <option>Mathematics</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[20px]">expand_more</span>
                                    </div>
                                    <div className="relative">
                                        <select className="appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-3 pr-10 py-2.5">
                                            <option>All Classes</option>
                                            <option>Grade 10-A</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[20px]">expand_more</span>
                                    </div>
                                    <div className="relative">
                                        <select className="appearance-none bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-3 pr-10 py-2.5">
                                            <option>Status: Any</option>
                                            <option>Active</option>
                                        </select>
                                        <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[20px]">expand_more</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 w-full md:w-auto justify-end">
                                    <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
                                        <span className="material-symbols-outlined">view_list</span>
                                    </button>
                                    <button className="p-2 text-slate-400 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
                                        <span className="material-symbols-outlined">grid_view</span>
                                    </button>
                                </div>
                            </div>

                            {/* Assignment Table */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs text-slate-500 dark:text-slate-400 uppercase bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                                            <tr>
                                                <th className="px-6 py-4 font-bold">Assignment</th>
                                                <th className="px-6 py-4 font-bold">Class</th>
                                                <th className="px-6 py-4 font-bold">Due Date</th>
                                                <th className="px-6 py-4 font-bold">Submissions</th>
                                                <th className="px-6 py-4 font-bold">Status</th>
                                                <th className="px-6 py-4 font-bold text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                            {assignments.map((assignment) => (
                                                <tr key={assignment.id} className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`size-10 rounded-lg ${assignment.iconColor} flex items-center justify-center shrink-0`}>
                                                                <span className="material-symbols-outlined">{assignment.icon}</span>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{assignment.title}</div>
                                                                <div className="text-xs text-slate-500">{assignment.subtitle}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{assignment.class}</td>
                                                    <td className="px-6 py-4">
                                                        <div className={`flex items-center gap-1.5 ${assignment.dateColor || 'text-slate-600 dark:text-slate-300'}`}>
                                                            <span className="material-symbols-outlined text-[18px] text-slate-400">{assignment.dateIcon}</span>
                                                            <span>{assignment.date}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 min-w-[200px]">
                                                        <div className="flex flex-col gap-1.5">
                                                            <div className="flex justify-between text-xs font-medium text-slate-500">
                                                                <span>{assignment.turnedIn} Turned in</span>
                                                                <span className={`${assignment.percentageColor || 'text-primary'}`}>{assignment.percentage}%</span>
                                                            </div>
                                                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                                                <div className={`${assignment.progressBarColor || 'bg-primary'} h-2 rounded-full`} style={{ width: `${assignment.percentage}%` }}></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${assignment.statusColor}`}>
                                                            {assignment.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-primary hover:text-primary/80 font-medium text-sm mr-2">{assignment.status === 'Graded' ? 'Review' : assignment.status === 'Draft' ? 'Edit' : 'Grade'}</button>
                                                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {/* Pagination */}
                                <div className="flex items-center justify-between p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-semibold text-slate-900 dark:text-white">1-4</span> of <span className="font-semibold text-slate-900 dark:text-white">12</span></span>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md disabled:opacity-50" disabled>Previous</button>
                                        <button className="px-3 py-1 text-sm font-medium text-primary bg-white dark:bg-slate-800 border border-primary rounded-md">1</button>
                                        <button className="px-3 py-1 text-sm font-medium text-slate-500 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700">Next</button>
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
