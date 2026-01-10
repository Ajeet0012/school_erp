import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function TeacherProfile() {
    const [activeTab, setActiveTab] = useState('personal');

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <Head>
                    <title>Teacher Profile - School ERP</title>
                </Head>

                <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-hidden flex h-screen w-full">
                    {/* Sidebar (Desktop) */}
                    <aside className="hidden lg:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full flex-shrink-0 transition-all duration-300">
                        <div className="p-6 pb-2">
                            <div className="flex gap-3 items-center">
                                <div className="bg-center bg-no-repeat bg-cover rounded-lg size-10 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwmgJbX2yYuhowAxKBEtPSIl5D4tqg7x605scnb9-PJPvxsfQ61CLRcdiljngSH-PQB0LwPhhgUAnVRkj12n7zNyT7A_xHHT9PksxeaVdWhx5EJln0pzDfUcCkFy9t-lLFRP29j-qpN69LeAz5dOxJ6wL55__HkDVBsg8ltc2XBN1lHJrFYmcV3deTqUSpgG02MDVJEaT3T8wQ4JFnOnAW7NxSXRfbs0hgSwbYF0U4DZCdiMqfxgoFuw5DRQURPfLQT0gfF8FpXL3A')" }}></div>
                                <div className="flex flex-col">
                                    <h1 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Springfield High</h1>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Admin Panel</p>
                                </div>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-1 p-4 mt-2 overflow-y-auto flex-1">
                            <Link href="/admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                                <span className="material-symbols-outlined text-slate-500 group-hover:text-primary">dashboard</span>
                                <p className="text-sm font-medium">Dashboard</p>
                            </Link>
                            <Link href="/admin/teachers" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors">
                                <span className="material-symbols-outlined filled">person</span>
                                <p className="text-sm font-medium">Teachers</p>
                            </Link>
                            {/* Add other links as needed */}
                        </nav>
                    </aside>

                    {/* Main Content Wrapper */}
                    <main className="flex-1 flex flex-col h-full relative overflow-hidden">
                        {/* Top Navbar */}
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 shrink-0 z-20">
                            <div className="flex items-center gap-4 lg:hidden">
                                <button className="text-slate-500 hover:text-slate-700">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                                <h2 className="text-slate-900 dark:text-white text-lg font-bold">School ERP</h2>
                            </div>
                            {/* Desktop Title */}
                            <div className="hidden lg:flex items-center gap-4 text-slate-900 dark:text-white">
                                <h2 className="text-lg font-bold tracking-tight">Teacher Profile</h2>
                            </div>
                            {/* Search */}
                            <div className="hidden md:flex flex-1 max-w-md mx-6">
                                <div className="relative w-full text-slate-500 focus-within:text-primary">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-[20px]">search</span>
                                    </div>
                                    <input className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-slate-100 dark:bg-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Search teachers, students, IDs..." type="text" />
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-3">
                                <button className="flex items-center justify-center rounded-lg size-10 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors relative">
                                    <span className="material-symbols-outlined">notifications</span>
                                    <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                                </button>
                            </div>
                        </header>

                        {/* Scrollable Page Content */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                            <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
                                {/* Breadcrumbs & Actions */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <nav aria-label="Breadcrumb" className="flex">
                                        <ol className="inline-flex items-center space-x-1 md:space-x-2 text-sm">
                                            <li><Link href="/admin/teachers" className="text-slate-500 hover:text-primary transition-colors">Teachers</Link></li>
                                            <li className="text-slate-400">/</li>
                                            <li><span className="text-slate-500">Department of Mathematics</span></li>
                                            <li className="text-slate-400">/</li>
                                            <li aria-current="page" className="font-medium text-slate-900 dark:text-white">Profile</li>
                                        </ol>
                                    </nav>
                                    <div className="flex gap-3">
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
                                            <span className="material-symbols-outlined text-[18px]">print</span>
                                            <span>Export</span>
                                        </button>
                                        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                            <span>Edit Profile</span>
                                        </button>
                                    </div>
                                </div>

                                {/* 3-Column Grid Layout */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                                    {/* Left Column: Sticky Profile Card (Span 3) */}
                                    <div className="lg:col-span-3 lg:sticky lg:top-4 flex flex-col gap-6">
                                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center text-center relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/10 to-transparent"></div>
                                            <div className="relative z-10 mb-4 group">
                                                <div className="size-32 rounded-full border-4 border-white dark:border-slate-900 shadow-md bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFsMO8arCY5-VOWlqOudHxxO9v_YRULhMqQ4uvyHScXiDHrn5N7OdzpnUavjOHtPCT0TyASY-Z_ienycyAaHIWhXzrhvGpJRj32qWxzuHTHawOGMnlU8-ACXw1Ph28iKGz2Pb3JV9r_1h8b3P70yvDHOVq7W9cZf4U3uv8Dj81eeiTXmwyglK9Uk28eT9nj5CXBrzZ2oIF9u5NebYDMW6f1aKuxJCQPejjN8Kcly0kk8cCqI0XxZ-HLC7OI4tn5Js5RjrBhJJspfOm')" }}></div>
                                                <button className="absolute bottom-1 right-1 bg-white dark:bg-slate-800 p-1.5 rounded-full shadow-md border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
                                                    <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                                                </button>
                                            </div>
                                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Mrs. Sarah Jenkins</h2>
                                            <p className="text-sm text-primary font-medium mt-1">Senior Math Teacher</p>
                                            <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                                                Active Employee
                                            </div>
                                            <div className="mt-6 w-full flex justify-between gap-2">
                                                <button className="flex-1 flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400">
                                                    <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                                        <span className="material-symbols-outlined text-[20px]">call</span>
                                                    </div>
                                                    <span className="text-xs font-medium">Call</span>
                                                </button>
                                                <button className="flex-1 flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400">
                                                    <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                                        <span className="material-symbols-outlined text-[20px]">mail</span>
                                                    </div>
                                                    <span className="text-xs font-medium">Email</span>
                                                </button>
                                            </div>
                                            <div className="w-full mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-500">Employee ID</span>
                                                    <span className="font-medium text-slate-900 dark:text-white">TCR-2024-005</span>
                                                </div>
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-slate-500">Department</span>
                                                    <span className="font-medium text-slate-900 dark:text-white">Mathematics</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Center Column: Main Content (Span 6) */}
                                    <div className="lg:col-span-6 flex flex-col gap-6">
                                        {/* Tabs */}
                                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                                            <div className="border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
                                                <nav className="flex -mb-px">
                                                    {['Personal Info', 'Academic', 'Documents', 'Payroll'].map((tab) => (
                                                        <button
                                                            key={tab}
                                                            onClick={() => setActiveTab(tab.toLowerCase())}
                                                            className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.toLowerCase() ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-200'}`}
                                                        >
                                                            {tab}
                                                        </button>
                                                    ))}
                                                </nav>
                                            </div>
                                            <div className="p-6">
                                                {/* Content based on Tab - Showing Personal Info by default similar to HTML */}
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Basic Information</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                                    <div className="group">
                                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Full Name</label>
                                                        <div className="text-sm font-medium text-slate-900 dark:text-white">Sarah Marie Jenkins</div>
                                                    </div>
                                                    <div className="group">
                                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Email Address</label>
                                                        <div className="text-sm font-medium text-slate-900 dark:text-white">sarah.j@springfield.edu</div>
                                                    </div>
                                                    <div className="group">
                                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Phone Number</label>
                                                        <div className="text-sm font-medium text-slate-900 dark:text-white">+1 (555) 012-3456</div>
                                                    </div>
                                                    <div className="group">
                                                        <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Date of Birth</label>
                                                        <div className="text-sm font-medium text-slate-900 dark:text-white">March 15, 1985</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Widgets (Span 3) */}
                                    <div className="lg:col-span-3 flex flex-col gap-6">
                                        {/* Next Class Widget */}
                                        <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl shadow-lg shadow-blue-200 dark:shadow-none p-5 text-white relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                                <span className="material-symbols-outlined text-[80px]">school</span>
                                            </div>
                                            <div className="relative z-10">
                                                <p className="text-blue-100 text-xs font-medium uppercase tracking-wider mb-2">Up Next</p>
                                                <h3 className="text-2xl font-bold mb-1">10:45 AM</h3>
                                                <p className="text-blue-100 text-sm mb-4">Starts in 15 mins</p>
                                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                                    <p className="font-bold text-sm">Algebra II</p>
                                                    <p className="text-xs text-blue-100">Class 10-B • Room 302</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Teaching Stats */}
                                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5">
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Teaching Load</h3>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs">
                                                    <span className="text-slate-500">Mathematics</span>
                                                    <span className="font-medium text-slate-900 dark:text-white">18 hrs</span>
                                                </div>
                                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5">
                                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
                                                </div>
                                            </div>
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
