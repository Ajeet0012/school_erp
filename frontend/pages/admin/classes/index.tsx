import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function ClassManagement() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const classes = [
        {
            id: 1,
            name: 'Advanced Mathematics',
            grade: 'Grade 10',
            gradeColor: 'bg-blue-50 text-blue-600',
            teacher: 'Sarah Jenkins',
            role: 'Lead Instructor',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa49VlfANudEgjpc-Ju8MbOQTOAEkw9KMdNK1s7AQByWA425jsb5_tTK2UtBKZnc-elARPEUBzayzBGWu7hqja2lyqsBo1Hq5MQStRiygLWV8tQXlCcSTmRrL70-sRCGRL1WiHenpZN6MO6YbjLe1pKmV2ma3wOHj8iKKIdj0DfsMmkTqE81jgC-_QCWGKwD-vcvBR9EkPeHTaFUZrEDQqnbfLtcO_NQDY7iYSvhLkWy4V5hzEgMkT1TtO0caYT8Gf2SF8SxW0ph7v',
            room: 'Room 304',
            time: '09:00 AM',
            days: 'Mon, Wed, Fri',
            capacity: 28,
            maxCapacity: 30,
            progress: 93,
            progressColor: 'bg-primary',
            isActive: true,
        },
        {
            id: 2,
            name: 'Physics Lab B',
            grade: 'Grade 11',
            gradeColor: 'bg-green-50 text-green-600',
            teacher: 'Michael Ross',
            role: 'Lab Coordinator',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjd1UZpwAPYR8p8K-GT-uXyyiD73ZwXLvxISGb1t_6EpoAu8fnUedcAe5dhHrHXB1DVwZ_RORmHBxFgOfEMOIChr6BU9ySXQlGiLQOJsFi_D8TdTCMCElDyu-iQ5CQwOhASiS3Mhh2T-EXmP_RwM_xcpEwa3AlAXjLZpQC4q3r3hSxdTId1HQpl-AeO8uyP0UOQF0JgBWJ8W6hCCH2mljfpamE6jhftIPP2tnWQ20oA0n7CRdqWKJwy8waTFPIebpsNljPVlL569RS',
            room: 'Lab 2',
            time: '11:30 AM',
            days: 'Tue, Thu',
            capacity: 15,
            maxCapacity: 20,
            progress: 75,
            progressColor: 'bg-primary',
            isActive: true,
        },
        {
            id: 3,
            name: 'English Literature',
            grade: 'Grade 9',
            gradeColor: 'bg-purple-50 text-purple-600',
            teacher: 'Emily Chen',
            role: 'Senior Teacher',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC83TGo_vndbd5FLt0LGIjsrRgqPr8xinDK6wd-iMUWqo0Ch4cKSihnQiT4QMYaamdlzI2bB0s6_CFjJHexaHJMBhgIYJhbPg3n-pPZ-CTiW4ofBNyI_MIecPACTLeUg9gmlDgQ-7UHbLLpCDZaLxoi_CWKAw0Qu9vY3Kkn3R8lueFWwgDQyX9KhjNWbmlcs_yHGZdIN7FWE0TJ2hfrDSmEYSimd7haLh92N4jKQUTbZ-HusyuM8xjhZI66fYpjICXaHl1O2oPw4y_S',
            room: 'Room 101',
            time: '01:00 PM',
            days: 'Mon, Wed, Fri',
            capacity: 32,
            maxCapacity: 30,
            progress: 100,
            progressColor: 'bg-red-500',
            isOverbooked: true,
            isActive: false,
        },
        {
            id: 4,
            name: 'World History',
            grade: 'Grade 12',
            gradeColor: 'bg-orange-50 text-orange-600',
            teacher: 'David Kim',
            role: 'History Dept Head',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9L9COozztjybVbEpt0PiSDXSRg1EP6utM4AKZFqqOwwK8fcSZ9HB4reUOg_rzMw6E-KP5K5R0t-CzJIudXaXtfb5bDMliCj9VAbXBdCQjn763281Y4SSEEdf8zHuBXRWm0gMuvPNI_sJGQcEMa1YtmV9KwOsEnLR_LJNQpQJYn7ir_mnQLvJATNCh-MwKEI8Mljno3tUqI3qHP8pj7Kcua8JtqzGTzQyVZvZkBcExIQrfUp_H-ZRuLsYZuYktSWFbQFNq5zn0Goyq',
            room: 'Room 208',
            time: '10:00 AM',
            days: 'Tue, Thu',
            capacity: 22,
            maxCapacity: 25,
            progress: 88,
            progressColor: 'bg-primary',
            isActive: true,
        },
        {
            id: 5,
            name: 'Biology 101',
            grade: 'Grade 10',
            gradeColor: 'bg-teal-50 text-teal-600',
            teacher: 'Jessica Lee',
            role: 'Biology Teacher',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlm6KJHFIezPP4qVYK3vpHYhoR_x-DJ33N8bK6r4zuoWZ9553A1Unsh5Qh1xlg4I0D4cziHlyV8zyUH0P9UVb-neFnYzLKCOJLTDN0AQ2WtC0HS4CuwwHLhKh_9LQ3GQaZUONjvdlgdMZw6W8_K6zOxgPoYSvwgtMALlfpeEFoWeiihadiMnE3mUfcVHTmFmTpGqHsVkGAnkikgHIqUWnLRJCZiGJezW8ZWfGzpNveHXT2tZB8Hb4yzU6-cqaDAEQK4O_XeeKFgp6f',
            room: 'Lab 1',
            time: '02:30 PM',
            days: 'Mon, Wed',
            capacity: 12,
            maxCapacity: 25,
            progress: 48,
            progressColor: 'bg-primary',
            isActive: true,
        },
        {
            id: 6,
            name: 'Art & Design',
            grade: 'Grade 8',
            gradeColor: 'bg-pink-50 text-pink-600',
            teacher: 'Marcus Johnson',
            role: 'Art Instructor',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu0jvDZnXVVEjRnSHd3D0jv8GLBbp4alc-7T1xvP8Hh3coFQ7GfmLR6V69ii0E7AzwPGsQQu7wxH3U6Vv2xtnyRgNFARv2TOQfsFChTwlwo4NufYSaQGnU1E49DEcrnIqU2V0H2Dxtq5NWkEA63wUzyvvMoXUlOiZQBeQyCfseMr5Cv0fHYA_qAphVgdoZeLRQlvkLmqjisJsidMvFFxTmWWUXtb8D52AZY1XIDng-mydePoFRVi9KkuiYViJbF4BL_yuf9c8iZvYn',
            room: 'Studio A',
            time: '09:00 AM',
            days: 'Fri',
            capacity: 18,
            maxCapacity: 20,
            progress: 90,
            progressColor: 'bg-primary',
            isActive: true,
        }
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN, USER_ROLES.TEACHER]}>
                <Head>
                    <title>Class Management - School ERP</title>
                </Head>

                <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-hidden flex h-screen w-full">
                    {/* Sidebar (Matching other pages) */}
                    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-50 dark:bg-[#1a2632] border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 transform lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="p-6 flex items-center gap-3">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAf9WofTz5W9ubEoFehfqdWDV79l7btDNmBPL48yMPjSLwncm_45cH4db9SNtsdEYUdu58r2btjUUNXo6bxPDfvB1Lg0AQKyqFjkpgX-9k8XVsDga94KbghVLC1meU20H2J-w5GGuuP3d5INaFCFbtk34rxFaKI1CZ4cUhgZ-S-ZqqSu-KH3Kfg3g75rO8F_Q1uJp-ROvMF6_q9C_t3ZiuhM9RVaVZNUQIEbYUYgToE2mrEA0yUylIes9VPJxeQUblesc4RNmLPRBtq')" }}></div>
                            <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-normal tracking-tight">School ERP</h1>
                        </div>
                        <nav className="flex flex-col gap-2 px-4 py-2 flex-1 overflow-y-auto">
                            <Link href="/super-admin/dashboard" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group">
                                <span className="material-symbols-outlined text-2xl group-hover:text-slate-900 dark:group-hover:text-white">dashboard</span>
                                <p className="text-sm font-medium leading-normal">Dashboard</p>
                            </Link>
                            <Link href="/admin/classes" className="flex items-center gap-3 px-3 py-3 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-2xl fill-1">class</span>
                                <p className="text-sm font-medium leading-normal">Class Management</p>
                            </Link>
                            <Link href="/admin/students" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors group">
                                <span className="material-symbols-outlined text-2xl group-hover:text-slate-900 dark:group-hover:text-white">school</span>
                                <p className="text-sm font-medium leading-normal">Students</p>
                            </Link>
                            {/* Additional Links */}
                        </nav>
                    </aside>

                    {/* Overlay for Sidebar */}
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}

                    {/* Main Content */}
                    <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-background-light dark:bg-background-dark">
                        {/* Header */}
                        <header className="h-16 flex items-center justify-between px-6 py-3 bg-white dark:bg-[#1a2632] border-b border-slate-200 dark:border-slate-800 shrink-0 z-10">
                            <div className="flex items-center gap-4 lg:hidden">
                                <button onClick={() => setSidebarOpen(true)} className="text-slate-500 p-1">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                                <h2 className="text-slate-900 dark:text-white text-lg font-bold">Class Management</h2>
                            </div>
                            <div className="hidden md:flex flex-1 max-w-lg">
                                <label className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                        <span className="material-symbols-outlined">search</span>
                                    </div>
                                    <input className="block w-full rounded-lg border-0 py-2 pl-10 pr-4 text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 sm:text-sm sm:leading-6" placeholder="Search classes, teachers, or rooms..." type="text" />
                                </label>
                            </div>
                            <div className="flex items-center gap-4 ml-auto">
                                <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                                    <span className="material-symbols-outlined">notifications</span>
                                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                                </button>
                            </div>
                        </header>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
                            {/* Page Heading */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">Class Management</h1>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Manage academic classes, teachers, and schedules for the current semester.</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex items-center justify-center gap-2 h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                                        <span className="material-symbols-outlined text-[20px]">filter_list</span>
                                        <span>Filter</span>
                                    </button>
                                    <button className="flex items-center justify-center gap-2 h-10 px-4 bg-primary hover:bg-blue-600 text-white rounded-lg text-sm font-bold transition-colors shadow-md shadow-blue-200 dark:shadow-none">
                                        <span className="material-symbols-outlined text-[20px]">add</span>
                                        <span>Create New Class</span>
                                    </button>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <div className="flex justify-between items-start">
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Total Classes</p>
                                        <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-md text-primary">
                                            <span className="material-symbols-outlined text-[20px]">class</span>
                                        </div>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold leading-tight">42</p>
                                        <span className="text-green-600 bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs font-medium">+5%</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <div className="flex justify-between items-start">
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Total Students</p>
                                        <div className="p-1.5 bg-purple-50 dark:bg-purple-900/30 rounded-md text-purple-600 dark:text-purple-400">
                                            <span className="material-symbols-outlined text-[20px]">school</span>
                                        </div>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold leading-tight">1,250</p>
                                        <span className="text-green-600 bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs font-medium">+12%</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-800 shadow-sm">
                                    <div className="flex justify-between items-start">
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal">Teachers Assigned</p>
                                        <div className="p-1.5 bg-orange-50 dark:bg-orange-900/30 rounded-md text-orange-600 dark:text-orange-400">
                                            <span className="material-symbols-outlined text-[20px]">person_check</span>
                                        </div>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-slate-900 dark:text-white tracking-tight text-2xl font-bold leading-tight">38</p>
                                        <span className="text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-xs font-medium">0%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Filters Toolbar */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-1">
                                <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
                                    <button className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-semibold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                                        All Classes
                                    </button>
                                    <button className="whitespace-nowrap px-4 py-2 rounded-full bg-transparent text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                                        Science
                                    </button>
                                    <button className="whitespace-nowrap px-4 py-2 rounded-full bg-transparent text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                                        Mathematics
                                    </button>
                                    <button className="whitespace-nowrap px-4 py-2 rounded-full bg-transparent text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 text-sm font-medium hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
                                        Literature
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 self-end sm:self-auto">
                                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mr-1">View</span>
                                    <button className="p-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-primary shadow-sm">
                                        <span className="material-symbols-outlined text-[20px]">grid_view</span>
                                    </button>
                                    <button className="p-1.5 bg-transparent border border-transparent rounded text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm">
                                        <span className="material-symbols-outlined text-[20px]">view_list</span>
                                    </button>
                                </div>
                            </div>

                            {/* Class Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-8">
                                {classes.map((cls) => (
                                    <div key={cls.id} className="group bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden">
                                        <div className="p-5 flex flex-col gap-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-2 uppercase tracking-wide ${cls.gradeColor} dark:bg-opacity-20`}>{cls.grade}</span>
                                                    <h3 className="text-slate-900 dark:text-white text-lg font-bold">{cls.name}</h3>
                                                </div>
                                                <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full p-1 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                                    <span className="material-symbols-outlined">more_vert</span>
                                                </button>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-full bg-cover bg-center border border-slate-100 dark:border-slate-700" style={{ backgroundImage: `url('${cls.avatar}')` }}></div>
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{cls.teacher}</p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">{cls.role}</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 py-2 border-y border-dashed border-slate-100 dark:border-slate-700">
                                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                                    <span className="material-symbols-outlined text-[18px]">meeting_room</span>
                                                    <span>{cls.room}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                                                    <span>{cls.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 col-span-2">
                                                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                                    <span>{cls.days}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="font-medium text-slate-500 dark:text-slate-400">Capacity</span>
                                                    <span className="font-bold text-slate-900 dark:text-white">{cls.capacity} <span className="text-slate-400 font-normal">/ {cls.maxCapacity}</span></span>
                                                </div>
                                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                                                    <div className={`${cls.progressColor} h-2 rounded-full`} style={{ width: `${cls.progress}%` }}></div>
                                                </div>
                                                {cls.isOverbooked && (
                                                    <span className="text-[10px] text-red-500 font-medium text-right mt-[-4px]">Overbooked by {cls.capacity - cls.maxCapacity}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-800/50 px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center mt-auto">
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cls.isActive ? 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400' : 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                                                {cls.isActive ? 'Active' : 'Review'}
                                            </span>
                                            <button className="text-sm font-bold text-primary hover:text-blue-700 dark:hover:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                                View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </RoleGuard>
        </AuthGuard>
    );
}
