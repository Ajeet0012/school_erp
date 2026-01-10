import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function ExamManagement() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const exams = [
        {
            id: 1,
            name: 'Mid-Term Mathematics',
            class: 'Grade 10 - Section A',
            date: 'Oct 24, 2023',
            time: '09:00 AM - 11:00 AM',
            subject: 'Math',
            subjectColor: 'bg-blue-100 text-blue-600',
            subjectInitial: 'M',
            room: 'Hall A, Room 101',
            status: 'Published',
            statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800'
        },
        {
            id: 2,
            name: 'Physics Practical',
            class: 'Grade 12 - Science',
            date: 'Oct 25, 2023',
            time: '01:00 PM - 03:00 PM',
            subject: 'Physics',
            subjectColor: 'bg-purple-100 text-purple-600',
            subjectInitial: 'P',
            room: 'Unassigned',
            isUnassigned: true,
            status: 'Draft',
            statusColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800'
        },
        {
            id: 3,
            name: 'English Literature',
            class: 'Grade 11 - All Sections',
            date: 'Oct 26, 2023',
            time: '10:00 AM - 12:00 PM',
            subject: 'English',
            subjectColor: 'bg-emerald-100 text-emerald-600',
            subjectInitial: 'E',
            room: 'Room 204, 205',
            status: 'Published',
            statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800'
        },
        {
            id: 4,
            name: 'History: World War II',
            class: 'Grade 9 - Section B',
            date: 'Oct 27, 2023',
            time: '09:00 AM - 10:30 AM',
            subject: 'History',
            subjectColor: 'bg-yellow-100 text-yellow-600',
            subjectInitial: 'H',
            room: 'Room 103',
            status: 'Conflict',
            statusColor: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800'
        }
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <Head>
                    <title>Exam Management - School ERP</title>
                </Head>

                <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-hidden flex h-screen w-full relative">
                    {/* Sidebar (Matching other pages) */}
                    <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 transform lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="p-6 flex items-center gap-3">
                            <div className="bg-primary/10 rounded-lg p-2">
                                <span className="material-symbols-outlined text-primary text-2xl">school</span>
                            </div>
                            <div>
                                <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">School ERP</h1>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Admin Console</p>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-1 px-4 py-2 flex-1 overflow-y-auto">
                            <Link href="/super-admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                                <span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </Link>
                            <Link href="/admin/students" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                                <span className="material-symbols-outlined group-hover:text-primary transition-colors">person</span>
                                <span className="text-sm font-medium">Students</span>
                            </Link>
                            <Link href="/admin/exams" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-400">
                                <span className="material-symbols-outlined fill-1">assignment_turned_in</span>
                                <span className="text-sm font-bold">Exams</span>
                            </Link>
                            {/* Other links */}
                        </nav>
                    </aside>

                    {/* Overlay for Sidebar */}
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}

                    {/* Main Content */}
                    <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                        {/* Header */}
                        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 lg:px-8 flex-shrink-0 z-10">
                            <div className="flex items-center gap-4 lg:hidden">
                                <button onClick={() => setSidebarOpen(true)} className="text-slate-500 p-1">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Link href="/super-admin/dashboard" className="text-slate-500 hover:text-primary transition-colors">Home</Link>
                                <span className="text-slate-400">/</span>
                                <span className="font-medium text-slate-900 dark:text-white">Exam Management</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors relative">
                                    <span className="material-symbols-outlined text-xl">notifications</span>
                                    <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
                                </button>
                            </div>
                        </header>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 lg:p-8 scroll-smooth bg-background-light dark:bg-background-dark">
                            <div className="max-w-7xl mx-auto space-y-8">
                                {/* Page Heading */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-1">Exam Management</h2>
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-lg">calendar_month</span>
                                            <span className="text-sm font-medium">Current Term: Fall 2023</span>
                                        </div>
                                    </div>
                                    <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-blue-500/20 flex items-center gap-2 transition-all active:scale-95">
                                        <span className="material-symbols-outlined text-lg">add</span>
                                        Create New Exam
                                    </button>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                                                <span className="material-symbols-outlined text-primary text-xl">event_upcoming</span>
                                            </div>
                                            <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+5 this week</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Upcoming Exams</p>
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">45</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="bg-orange-50 dark:bg-orange-900/30 p-2 rounded-lg">
                                                <span className="material-symbols-outlined text-orange-500 text-xl">description</span>
                                            </div>
                                            <span className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-xs font-bold px-2 py-1 rounded-full">-2 pending</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Papers Pending</p>
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">7</p>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="bg-purple-50 dark:bg-purple-900/30 p-2 rounded-lg">
                                                <span className="material-symbols-outlined text-purple-500 text-xl">meeting_room</span>
                                            </div>
                                            <span className="bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded-full">Alert</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Rooms Unassigned</p>
                                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">10%</p>
                                    </div>
                                </div>

                                {/* Main Workspace */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col min-h-[600px]">
                                    {/* Tabs */}
                                    <div className="border-b border-slate-200 dark:border-slate-800 px-6">
                                        <div className="flex gap-8 overflow-x-auto no-scrollbar">
                                            <button className="relative py-4 text-sm font-bold text-primary dark:text-blue-400 border-b-2 border-primary">Schedule</button>
                                            <button className="relative py-4 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-b-2 border-transparent transition-colors">Invigilators</button>
                                            <button className="relative py-4 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-b-2 border-transparent transition-colors">Rooms</button>
                                            <button className="relative py-4 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 border-b-2 border-transparent transition-colors">Papers</button>
                                        </div>
                                    </div>
                                    {/* Toolbar */}
                                    <div className="p-6 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center bg-slate-50/50 dark:bg-slate-800/30">
                                        <div className="relative w-full lg:w-96 group">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-primary transition-colors">search</span>
                                            <input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none dark:text-white dark:placeholder-slate-500 transition-all shadow-sm" placeholder="Search exams by name, subject..." type="text" />
                                        </div>
                                        <div className="flex gap-3 w-full lg:w-auto overflow-x-auto">
                                            <button className="px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-medium whitespace-nowrap">
                                                <span className="material-symbols-outlined text-lg">filter_list</span>
                                                More Filters
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content Grid */}
                                    <div className="flex-1 flex flex-col lg:flex-row">
                                        {/* Table Section */}
                                        <div className="flex-1 overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/50">
                                                        <th className="p-4 pl-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-10">
                                                            <input className="rounded border-slate-300 text-primary focus:ring-primary size-4" type="checkbox" />
                                                        </th>
                                                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Exam Name</th>
                                                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date & Time</th>
                                                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</th>
                                                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Room</th>
                                                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                                                        <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right pr-6">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                                    {exams.map((exam) => (
                                                        <tr key={exam.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                                            <td className="p-4 pl-6">
                                                                <input className="rounded border-slate-300 text-primary focus:ring-primary size-4" type="checkbox" />
                                                            </td>
                                                            <td className="p-4">
                                                                <div className="flex flex-col">
                                                                    <span className="font-bold text-slate-900 dark:text-white text-sm">{exam.name}</span>
                                                                    <span className="text-xs text-slate-500 dark:text-slate-400">{exam.class}</span>
                                                                </div>
                                                            </td>
                                                            <td className="p-4 text-sm text-slate-600 dark:text-slate-300">
                                                                {exam.date}<br />
                                                                <span className="text-xs text-slate-400">{exam.time}</span>
                                                            </td>
                                                            <td className="p-4">
                                                                <div className="flex items-center gap-2">
                                                                    <div className={`size-6 rounded flex items-center justify-center text-xs font-bold ${exam.subjectColor}`}>{exam.subjectInitial}</div>
                                                                    <span className="text-sm text-slate-700 dark:text-slate-300">{exam.subject}</span>
                                                                </div>
                                                            </td>
                                                            <td className={`p-4 text-sm ${exam.isUnassigned ? 'text-red-500 font-medium flex items-center gap-1' : 'text-slate-600 dark:text-slate-300'}`}>
                                                                {exam.isUnassigned && <span className="material-symbols-outlined text-sm">warning</span>}
                                                                {exam.room}
                                                            </td>
                                                            <td className="p-4">
                                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${exam.statusColor}`}>
                                                                    {exam.status}
                                                                </span>
                                                            </td>
                                                            <td className="p-4 text-right pr-6">
                                                                <button className="text-slate-400 hover:text-primary transition-colors p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
                                                                    <span className="material-symbols-outlined">more_vert</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* Right Rail */}
                                        <div className="w-full lg:w-72 bg-slate-50/50 dark:bg-slate-800/20 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6">
                                            <div>
                                                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Quick Actions</h3>
                                                <div className="flex flex-col gap-2">
                                                    <button className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow hover:border-primary/50 transition-all text-left group">
                                                        <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded text-primary">
                                                            <span className="material-symbols-outlined text-xl">print</span>
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary">Print Tickets</span>
                                                    </button>
                                                    <button className="flex items-center gap-3 p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow hover:border-primary/50 transition-all text-left group">
                                                        <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded text-primary">
                                                            <span className="material-symbols-outlined text-xl">mail</span>
                                                        </div>
                                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary">Email Invigilators</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Recent Alerts</h3>
                                                <div className="space-y-3">
                                                    <div className="flex gap-3 items-start">
                                                        <span className="material-symbols-outlined text-red-500 text-lg mt-0.5">error</span>
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Room Conflict</p>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Room 103 is double booked on Oct 27.</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3 items-start">
                                                        <span className="material-symbols-outlined text-amber-500 text-lg mt-0.5">warning</span>
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Missing Paper</p>
                                                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Physics Practical paper pending upload.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Pagination */}
                                    <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 rounded-b-xl flex items-center justify-between">
                                        <p className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-bold text-slate-900 dark:text-white">1-4</span> of <span className="font-bold text-slate-900 dark:text-white">45</span> exams</p>
                                        <div className="flex gap-2">
                                            <button disabled className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 disabled:opacity-50">Previous</button>
                                            <button className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">Next</button>
                                        </div>
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
