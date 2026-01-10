import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function TimetableManagement() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN, USER_ROLES.TEACHER, USER_ROLES.STUDENT, USER_ROLES.PARENT]}>
                <Head>
                    <title>Timetable Management - SchoolERP</title>
                </Head>

                <div className="bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white font-display overflow-x-hidden transition-colors duration-200">
                    <div className="relative flex h-screen w-full flex-col overflow-hidden">
                        {/* Top Navigation Bar */}
                        <header className="flex flex-none items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-gray-800 bg-white dark:bg-[#1a2632] px-10 py-3 z-20">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-4 text-[#0d141b] dark:text-white">
                                    <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
                                        <span className="material-symbols-outlined text-2xl">school</span>
                                    </div>
                                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">SchoolERP</h2>
                                </div>
                                <div className="flex items-center gap-6 hidden lg:flex">
                                    <Link href="/super-admin/dashboard" className="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal">Dashboard</Link>
                                    <Link href="/admin/classes" className="text-primary text-sm font-bold leading-normal">Academics</Link>
                                    <Link href="/admin/students" className="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal">Students</Link>
                                    <Link href="#" className="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal">Reports</Link>
                                    <Link href="#" className="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal">Settings</Link>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-end gap-6 items-center">
                                <label className="flex flex-col min-w-40 !h-10 max-w-64 hidden md:flex">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                        <div className="text-[#4c739a] flex border-none bg-[#e7edf3] dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                                            <span className="material-symbols-outlined text-[20px]">search</span>
                                        </div>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] dark:bg-gray-800 focus:border-none h-full placeholder:text-[#4c739a] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Search..." type="text" />
                                    </div>
                                </label>
                                <div className="flex items-center gap-3">
                                    <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d141b] dark:text-white">
                                        <span className="material-symbols-outlined">notifications</span>
                                    </button>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white dark:border-gray-700 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADZnZWx4zIuSAQSQlRKLhfgjgjzntGDl7tf6sHjTrauOMT4qWR1cYozebXlozLxRNtpo5rBXlfxF-6MbOgpumnqZCzXZoG6zZRKmUdsD5Rbw2csuoWUVFsmeI358PzUeDc4Silddh4Qym3vMNs0E2k7Jk8XQiu6A489EhzeR3vAb5ir8Qt6X0UP-akCOmJtnWHMuFUyRTt_ZEh9Rt3yHhFVQkbGduL7ttGJ04REUtmbxkrm2kq2jQO7VK3X4gjdNtG9FFPvm2tn25_')" }}></div>
                                </div>
                            </div>
                        </header>

                        {/* Main Content Wrapper */}
                        <div className="flex flex-1 overflow-hidden">
                            {/* Main Scrollable Area */}
                            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-background-light dark:bg-background-dark">
                                {/* Breadcrumbs & Header */}
                                <div className="px-6 py-4 md:px-8 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632]">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Link href="/super-admin/dashboard" className="text-[#4c739a] text-sm font-medium leading-normal hover:underline">Home</Link>
                                        <span className="text-[#4c739a] text-sm font-medium leading-normal">/</span>
                                        <Link href="#" className="text-[#4c739a] text-sm font-medium leading-normal hover:underline">Academics</Link>
                                        <span className="text-[#4c739a] text-sm font-medium leading-normal">/</span>
                                        <span className="text-[#0d141b] dark:text-white text-sm font-medium leading-normal">Timetable Management</span>
                                    </div>
                                    <div className="flex flex-wrap justify-between items-end gap-4">
                                        <div className="flex flex-col gap-1">
                                            <h1 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight tracking-[-0.033em]">Timetable Management</h1>
                                            <p className="text-[#4c739a] text-sm font-normal leading-normal">Academic Year 2023-2024 • Term 1</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#0d141b] dark:text-white text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">print</span>
                                                <span className="hidden sm:inline">Print</span>
                                            </button>
                                            <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">publish</span>
                                                <span>Publish Timetable</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Filters Toolbar */}
                                    <div className="mt-6 flex flex-wrap gap-4 items-end">
                                        <div className="flex-1 min-w-[200px] max-w-[240px]">
                                            <label className="text-[#0d141b] dark:text-gray-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Context</label>
                                            <div className="relative">
                                                <select className="appearance-none w-full bg-[#f0f4f8] dark:bg-gray-800 border-none rounded-lg py-2.5 pl-4 pr-10 text-sm font-medium text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary outline-none">
                                                    <option>Class View</option>
                                                    <option>Teacher View</option>
                                                    <option>Room View</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-[200px] max-w-[240px]">
                                            <label className="text-[#0d141b] dark:text-gray-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Select Class</label>
                                            <div className="relative">
                                                <select className="appearance-none w-full bg-[#f0f4f8] dark:bg-gray-800 border-none rounded-lg py-2.5 pl-4 pr-10 text-sm font-medium text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary outline-none">
                                                    <option>Grade 10 - Section A</option>
                                                    <option>Grade 10 - Section B</option>
                                                    <option>Grade 11 - Science</option>
                                                    <option>Grade 12 - Commerce</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                                    <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 ml-auto mt-4 sm:mt-0">
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">View:</span>
                                            <div className="flex bg-[#f0f4f8] dark:bg-gray-800 rounded-lg p-1">
                                                <button className="px-3 py-1.5 rounded-md bg-white dark:bg-gray-700 shadow-sm text-xs font-bold text-primary">Week</button>
                                                <button className="px-3 py-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-xs font-medium">Day</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Timetable Grid Area */}
                                <div className="p-6 md:p-8 flex-1 overflow-auto">
                                    <div className="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 min-w-[800px] overflow-hidden">
                                        {/* Grid Header */}
                                        <div className="grid grid-cols-[80px_1fr_1fr_1fr_1fr_1fr] border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                                            <div className="p-4 border-r border-gray-200 dark:border-gray-700"></div>
                                            <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0">
                                                <span className="block text-sm font-bold text-[#0d141b] dark:text-white">Monday</span>
                                                <span className="block text-xs text-gray-500 mt-1">12 Oct</span>
                                            </div>
                                            <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0 bg-primary/5">
                                                <span className="block text-sm font-bold text-primary">Tuesday</span>
                                                <span className="block text-xs text-primary/80 mt-1">13 Oct</span>
                                            </div>
                                            <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0">
                                                <span className="block text-sm font-bold text-[#0d141b] dark:text-white">Wednesday</span>
                                                <span className="block text-xs text-gray-500 mt-1">14 Oct</span>
                                            </div>
                                            <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700 last:border-r-0">
                                                <span className="block text-sm font-bold text-[#0d141b] dark:text-white">Thursday</span>
                                                <span className="block text-xs text-gray-500 mt-1">15 Oct</span>
                                            </div>
                                            <div className="p-3 text-center">
                                                <span className="block text-sm font-bold text-[#0d141b] dark:text-white">Friday</span>
                                                <span className="block text-xs text-gray-500 mt-1">16 Oct</span>
                                            </div>
                                        </div>

                                        {/* Grid Body */}
                                        <div className="relative grid grid-cols-[80px_1fr_1fr_1fr_1fr_1fr] auto-rows-[100px] divide-y divide-gray-100 dark:divide-gray-800">
                                            {/* Current Time Indicator Line (Absolute) */}
                                            {/* This would need real-time logic, hardcoded for now */}
                                            <div className="absolute left-[80px] right-0 top-[240px] border-t-2 border-primary z-10 flex items-center pointer-events-none">
                                                <div className="absolute left-[-6px] size-3 bg-primary rounded-full"></div>
                                            </div>

                                            {/* 08:00 Row */}
                                            <div className="p-2 text-xs font-medium text-gray-400 text-right pr-4 border-r border-gray-100 dark:border-gray-800 relative">
                                                <span className="-top-3 relative">08:00 AM</span>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative group hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer">
                                                <div className="h-full w-full bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-400 rounded-md p-2 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-xs font-bold text-orange-900 dark:text-orange-100">Maths</span>
                                                        <span className="material-symbols-outlined text-[14px] text-orange-700 dark:text-orange-300">calculate</span>
                                                    </div>
                                                    <div className="text-[10px] text-orange-800 dark:text-orange-200 font-medium mt-auto">Mr. Anderson • Rm 101</div>
                                                </div>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative group hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer bg-blue-50/30">
                                                <div className="hidden group-hover:flex absolute inset-0 items-center justify-center text-primary/50">
                                                    <span className="material-symbols-outlined">add</span>
                                                </div>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer">
                                                <div className="h-full w-full bg-purple-100 dark:bg-purple-900/30 border-l-4 border-purple-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-xs font-bold text-purple-900 dark:text-purple-100">English</span>
                                                        <span className="material-symbols-outlined text-[14px] text-purple-700 dark:text-purple-300">menu_book</span>
                                                    </div>
                                                    <div className="text-[10px] text-purple-800 dark:text-purple-200 font-medium mt-auto">Ms. Davis • Rm 204</div>
                                                </div>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer"></div>
                                            <div className="p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer">
                                                <div className="h-full w-full bg-emerald-100 dark:bg-emerald-900/30 border-l-4 border-emerald-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-xs font-bold text-emerald-900 dark:text-emerald-100">Biology</span>
                                                        <span className="material-symbols-outlined text-[14px] text-emerald-700 dark:text-emerald-300">biotech</span>
                                                    </div>
                                                    <div className="text-[10px] text-emerald-800 dark:text-emerald-200 font-medium mt-auto">Dr. Wilson • Lab 3</div>
                                                </div>
                                            </div>

                                            {/* 09:00 Row */}
                                            <div className="p-2 text-xs font-medium text-gray-400 text-right pr-4 border-r border-gray-100 dark:border-gray-800 relative">
                                                <span className="-top-3 relative">09:00 AM</span>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer">
                                                <div className="h-full w-full bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-xs font-bold text-blue-900 dark:text-blue-100">Physics</span>
                                                        <span className="material-symbols-outlined text-[14px] text-blue-700 dark:text-blue-300">science</span>
                                                    </div>
                                                    <div className="text-[10px] text-blue-800 dark:text-blue-200 font-medium mt-auto">Mr. Clark • Lab 1</div>
                                                </div>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer bg-blue-50/30">
                                                <div className="h-full w-full bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-400 rounded-md p-2 flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow ring-2 ring-primary ring-offset-1 dark:ring-offset-gray-900 z-10">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-xs font-bold text-orange-900 dark:text-orange-100">Maths</span>
                                                        <span className="material-symbols-outlined text-[14px] text-orange-700 dark:text-orange-300">calculate</span>
                                                    </div>
                                                    <div className="text-[10px] text-orange-800 dark:text-orange-200 font-medium mt-auto">Mr. Anderson • Rm 101</div>
                                                </div>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer"></div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer">
                                                <div className="h-full w-full bg-rose-100 dark:bg-rose-900/30 border-l-4 border-rose-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-xs font-bold text-rose-900 dark:text-rose-100">History</span>
                                                        <span className="material-symbols-outlined text-[14px] text-rose-700 dark:text-rose-300">history_edu</span>
                                                    </div>
                                                    <div className="text-[10px] text-rose-800 dark:text-rose-200 font-medium mt-auto">Mrs. Lee • Rm 105</div>
                                                </div>
                                            </div>
                                            <div className="p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer"></div>

                                            {/* 10:00 Row */}
                                            <div className="p-2 text-xs font-medium text-gray-400 text-right pr-4 border-r border-gray-100 dark:border-gray-800 relative">
                                                <span className="-top-3 relative">10:00 AM</span>
                                            </div>
                                            {/* Break Time */}
                                            <div className="col-span-5 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
                                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Morning Break</span>
                                            </div>

                                            {/* 11:00 Row */}
                                            <div className="p-2 text-xs font-medium text-gray-400 text-right pr-4 border-r border-gray-100 dark:border-gray-800 relative">
                                                <span className="-top-3 relative">11:00 AM</span>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer">
                                                <div className="h-full w-full bg-emerald-100 dark:bg-emerald-900/30 border-l-4 border-emerald-400 rounded-md p-2 flex flex-col gap-1 shadow-sm opacity-50 border-dashed">
                                                    <div className="flex justify-center items-center h-full text-emerald-700/50">
                                                        <span className="text-xs">Drag here</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer bg-blue-50/30">
                                                <div className="h-full w-full bg-teal-100 dark:bg-teal-900/30 border-l-4 border-teal-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-xs font-bold text-teal-900 dark:text-teal-100">Comp Sci</span>
                                                        <span className="material-symbols-outlined text-[14px] text-teal-700 dark:text-teal-300">computer</span>
                                                    </div>
                                                    <div className="text-[10px] text-teal-800 dark:text-teal-200 font-medium mt-auto">Mr. Gates • Lab 2</div>
                                                </div>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer">
                                                <div className="h-full w-full bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-xs font-bold text-blue-900 dark:text-blue-100">Physics</span>
                                                        <span className="material-symbols-outlined text-[14px] text-blue-700 dark:text-blue-300">science</span>
                                                    </div>
                                                    <div className="text-[10px] text-blue-800 dark:text-blue-200 font-medium mt-auto">Mr. Clark • Lab 1</div>
                                                </div>
                                            </div>
                                            <div className="border-r border-gray-100 dark:border-gray-800 p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer"></div>
                                            <div className="p-1 relative hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors cursor-pointer">
                                                <div className="h-full w-full bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-400 rounded-md p-2 flex flex-col gap-1 shadow-sm">
                                                    <div className="flex justify-between items-start">
                                                        <span className="text-xs font-bold text-orange-900 dark:text-orange-100">Maths</span>
                                                        <span className="material-symbols-outlined text-[14px] text-orange-700 dark:text-orange-300">calculate</span>
                                                    </div>
                                                    <div className="text-[10px] text-orange-800 dark:text-orange-200 font-medium mt-auto">Mr. Anderson • Rm 101</div>
                                                </div>
                                            </div>
                                            {/* 12:00 Row */}
                                            <div className="p-2 text-xs font-medium text-gray-400 text-right pr-4 border-r border-gray-100 dark:border-gray-800 relative">
                                                <span className="-top-3 relative">12:00 PM</span>
                                            </div>
                                            <div className="col-span-5 border-b border-gray-100 dark:border-gray-800"></div>
                                        </div>
                                    </div>
                                </div>
                            </main>

                            {/* Right Resource Sidebar */}
                            <aside className="w-80 bg-white dark:bg-[#1a2632] border-l border-gray-200 dark:border-gray-800 flex flex-col z-10 shadow-lg hidden xl:flex">
                                <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                                    <h3 className="font-bold text-[#0d141b] dark:text-white text-lg">Unscheduled Classes</h3>
                                    <p className="text-sm text-[#4c739a] mt-1">Drag and drop to assign</p>
                                    <div className="mt-4 flex bg-[#e7edf3] dark:bg-gray-800 p-1 rounded-lg">
                                        <button className="flex-1 text-xs font-bold text-primary bg-white dark:bg-gray-700 shadow-sm py-1.5 rounded-md">Pending</button>
                                        <button className="flex-1 text-xs font-medium text-gray-500 dark:text-gray-400 py-1.5 rounded-md hover:text-gray-900 dark:hover:text-gray-200">Conflicts</button>
                                    </div>
                                </div>
                                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                    {/* Draggable Card 1 */}
                                    <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:border-primary cursor-grab active:cursor-grabbing group transition-all">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                                                    <span className="material-symbols-outlined text-[18px]">biotech</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[#0d141b] dark:text-white">Biology</p>
                                                    <p className="text-xs text-gray-500">3 periods left</p>
                                                </div>
                                            </div>
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary text-[20px]">drag_indicator</span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="bg-center bg-no-repeat bg-cover rounded-full size-6 border border-white dark:border-gray-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCT1wL3o_eBhafc82hhz2M95743RD8UDsEk8N-9y_ekVc1Z0FMyAN4WSNGUZtHXO6CyI2sksJsNnZWNjixyX1iVW0C-jHYz6kt9ccIId9FLsWW-j9WWsc4tl5RLEYbHHezgWffLIdZSkssajIlkYdaiN8vq2hZ5-Yo6gPSWBgTo7IrFL9mCcAJGzJyJMB6v4UAdC3BaxLSGRoBzdJCwwCiI294IcjAlEFtYb1ro0cm0YOHaQD5SX02DSjvtPFezTrzTq8fMuggDV47N')" }}></div>
                                            <span className="text-xs text-gray-600 dark:text-gray-300">Dr. Wilson</span>
                                            <span className="text-xs text-gray-400 ml-auto">1h duration</span>
                                        </div>
                                    </div>
                                    {/* Draggable Card 2 */}
                                    <div className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md hover:border-primary cursor-grab active:cursor-grabbing group transition-all">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="p-1.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                                                    <span className="material-symbols-outlined text-[18px]">brush</span>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[#0d141b] dark:text-white">Art & Design</p>
                                                    <p className="text-xs text-gray-500">2 periods left</p>
                                                </div>
                                            </div>
                                            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary text-[20px]">drag_indicator</span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="bg-center bg-no-repeat bg-cover rounded-full size-6 border border-white dark:border-gray-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBbfIwXIuv5RggycD_FQ1LjD0GYdMxYSHhmNTkgyMa-W1cUnCiKL6JPKfBCigc3CF81fAW9a9DWdpoKyj7cucgEOcvchYGakDCz1OA_urFzqXaaLzGEgqDvaeAdmMOQsIA621NIx4UiOaMDDPPdKb3Mjx9-3if4TNWCjELAryVXQDmI01bmUupvgckYPqmJuJXARZ4al9dZZFP-erHPh6jEl9GNRXcL_Ls69vcr_IMrJ7niPvb05-EXAaLHdM-4qqNAVkvc0lu32Tu')" }}></div>
                                            <span className="text-xs text-gray-600 dark:text-gray-300">Ms. Bella</span>
                                            <span className="text-xs text-gray-400 ml-auto">2h duration</span>
                                        </div>
                                    </div>
                                    {/* Alert Card */}
                                    <div className="mt-auto p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                        <div className="flex gap-2">
                                            <span className="material-symbols-outlined text-red-600 text-sm mt-0.5">error</span>
                                            <div>
                                                <p className="text-xs font-bold text-red-700 dark:text-red-300">Scheduling Conflict</p>
                                                <p className="text-[10px] text-red-600 dark:text-red-400 mt-1">Mr. Clark is double booked on Wed 10:00 AM.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#15202b]">
                                    <button className="w-full flex items-center justify-center gap-2 rounded-lg h-9 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-[#0d141b] dark:text-white text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">add</span>
                                        Create New Class
                                    </button>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>

            </RoleGuard>
        </AuthGuard>
    );
}
