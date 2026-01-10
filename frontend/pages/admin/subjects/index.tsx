import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function SubjectManagement() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showAddPanel, setShowAddPanel] = useState(false);

    const subjects = [
        { id: 1, name: 'Mathematics 101', code: 'MTH101', dept: 'Science', deptColor: 'bg-blue-50 text-blue-700', credits: 4.0, type: 'Core', status: 'Active', statusColor: 'bg-emerald-500' },
        { id: 2, name: 'World History', code: 'HIS200', dept: 'Humanities', deptColor: 'bg-orange-50 text-orange-700', credits: 3.0, type: 'Core', status: 'Active', statusColor: 'bg-emerald-500' },
        { id: 3, name: 'Intro to Robotics', code: 'ROB101', dept: 'Science', deptColor: 'bg-blue-50 text-blue-700', credits: 2.0, type: 'Elective', status: 'Inactive', statusColor: 'bg-slate-300', isInactive: true },
        { id: 4, name: 'French Literature', code: 'FRE305', dept: 'Languages', deptColor: 'bg-purple-50 text-purple-700', credits: 3.0, type: 'Elective', status: 'Active', statusColor: 'bg-emerald-500' },
        { id: 5, name: 'Physical Education', code: 'PHY100', dept: 'General', deptColor: 'bg-teal-50 text-teal-700', credits: 1.0, type: 'Core', status: 'Active', statusColor: 'bg-emerald-500' },
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <Head>
                    <title>Subject Management - School ERP</title>
                </Head>

                <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-hidden flex h-screen w-full relative">
                    {/* Sidebar (Matching other pages) */}
                    <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 transform lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                        <div className="p-6 flex items-center gap-3">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-10 shadow-sm" style={{ backgroundImage: "linear-gradient(135deg, #137fec 0%, #60a5fa 100%)" }}></div>
                            <div className="flex flex-col">
                                <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">School ERP</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Admin Console</p>
                            </div>
                        </div>
                        <nav className="flex flex-col gap-1 px-4 py-2 flex-1 overflow-y-auto">
                            <Link href="/super-admin/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors group">
                                <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">dashboard</span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </Link>
                            <div className="mt-4 mb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Management</div>
                            <Link href="/admin/subjects" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary-400">
                                <span className="material-symbols-outlined fill-1">menu_book</span>
                                <span className="text-sm font-medium">Subjects</span>
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
                        <header className="flex items-center justify-between px-8 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0 z-10">
                            <div className="flex items-center gap-4 lg:hidden">
                                <button onClick={() => setSidebarOpen(true)} className="text-slate-500 p-1">
                                    <span className="material-symbols-outlined">menu</span>
                                </button>
                            </div>
                            {/* Breadcrumbs */}
                            <div className="flex items-center text-sm font-medium">
                                <Link href="/super-admin/dashboard" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-slate-400 text-lg mx-2">chevron_right</span>
                                <span className="text-slate-500 dark:text-slate-400">Academics</span>
                                <span className="material-symbols-outlined text-slate-400 text-lg mx-2">chevron_right</span>
                                <span className="text-slate-900 dark:text-white font-semibold">Subjects</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="hidden lg:flex relative group">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                                    <input className="h-10 pl-10 pr-4 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/50 w-64 transition-all" placeholder="Search anything..." type="text" />
                                </div>
                                <button className="relative p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors">
                                    <span className="material-symbols-outlined">notifications</span>
                                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                                </button>
                            </div>
                        </header>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
                            <div className="max-w-7xl mx-auto space-y-8">
                                {/* Page Heading */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Subject Management</h2>
                                        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage curriculum, elective options, and subject details.</p>
                                    </div>
                                    <button onClick={() => setShowAddPanel(true)} className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg shadow-sm shadow-primary/30 transition-all active:scale-95 font-medium">
                                        <span className="material-symbols-outlined">add</span>
                                        <span>Add New Subject</span>
                                    </button>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Total Subjects</span>
                                            <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
                                                <span className="material-symbols-outlined">library_books</span>
                                            </div>
                                        </div>
                                        <div className="flex items-baseline gap-2 mt-2">
                                            <span className="text-3xl font-bold text-slate-900 dark:text-white">42</span>
                                            <span className="text-sm font-medium text-emerald-500 flex items-center">
                                                <span className="material-symbols-outlined text-base">trending_up</span>
                                                +2 this week
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Active Depts</span>
                                            <div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                                                <span className="material-symbols-outlined">domain</span>
                                            </div>
                                        </div>
                                        <div className="flex items-baseline gap-2 mt-2">
                                            <span className="text-3xl font-bold text-slate-900 dark:text-white">8</span>
                                            <span className="text-sm text-slate-400">across 3 wings</span>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Electives</span>
                                            <div className="p-2 bg-orange-50 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                                                <span className="material-symbols-outlined">stars</span>
                                            </div>
                                        </div>
                                        <div className="flex items-baseline gap-2 mt-2">
                                            <span className="text-3xl font-bold text-slate-900 dark:text-white">12</span>
                                            <span className="text-sm text-slate-400">offerings</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Table */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                                    {/* Toolbar */}
                                    <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between">
                                        <div className="relative w-full md:max-w-xs group">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                                            <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all dark:text-white dark:placeholder-slate-500" placeholder="Search by name or code..." type="text" />
                                        </div>
                                        <div className="flex items-center gap-3 w-full md:w-auto">
                                            <button className="p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary transition-colors" title="Export Data">
                                                <span className="material-symbols-outlined text-xl">download</span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* The Table */}
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                                    <th className="p-5 w-10"><input className="rounded border-slate-300 text-primary focus:ring-primary/50 cursor-pointer size-4" type="checkbox" /></th>
                                                    <th className="p-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Subject Name</th>
                                                    <th className="p-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Code</th>
                                                    <th className="p-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Department</th>
                                                    <th className="p-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Credits</th>
                                                    <th className="p-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Type</th>
                                                    <th className="p-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                                                    <th className="p-5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                                                {subjects.map((sub) => (
                                                    <tr key={sub.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                                        <td className="p-5"><input className="rounded border-slate-300 text-primary focus:ring-primary/50 cursor-pointer size-4" type="checkbox" /></td>
                                                        <td className="p-5 font-medium text-slate-900 dark:text-white">{sub.name}</td>
                                                        <td className="p-5 text-slate-500 dark:text-slate-400 font-mono text-xs">{sub.code}</td>
                                                        <td className="p-5">
                                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${sub.deptColor} dark:bg-opacity-20`}>{sub.dept}</span>
                                                        </td>
                                                        <td className="p-5 text-slate-600 dark:text-slate-300">{sub.credits}</td>
                                                        <td className="p-5 text-slate-500 dark:text-slate-400">{sub.type}</td>
                                                        <td className="p-5">
                                                            <div className="flex items-center gap-2">
                                                                <span className="relative flex h-2.5 w-2.5">
                                                                    {!sub.isInactive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
                                                                    <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${sub.statusColor}`}></span>
                                                                </span>
                                                                <span className="text-slate-700 dark:text-slate-200">{sub.status}</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-5 text-right">
                                                            <button className="text-slate-400 hover:text-primary p-1 rounded transition-colors">
                                                                <span className="material-symbols-outlined">more_vert</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* Pagination */}
                                    <div className="p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                        <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1-5 of 42 subjects</span>
                                        <div className="flex items-center gap-2">
                                            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50">Previous</button>
                                            <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-sm font-medium">1</button>
                                            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">2</button>
                                            <button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide-over Panel for New Subject */}
                        {showAddPanel && (
                            <>
                                <div className="absolute inset-0 bg-black/50 z-40 transition-opacity" onClick={() => setShowAddPanel(false)}></div>
                                <div className="absolute inset-y-0 right-0 w-full sm:w-[480px] bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl z-50 flex flex-col animate-slide-in-right">
                                    <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">New Subject</h3>
                                        <button onClick={() => setShowAddPanel(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                                            <span className="material-symbols-outlined">close</span>
                                        </button>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Subject Name</label>
                                            <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none" placeholder="e.g. Advanced Physics" type="text" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Code</label>
                                                <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none uppercase font-mono" placeholder="e.g. PHY400" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Credits</label>
                                                <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none" placeholder="4" type="number" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Department</label>
                                            <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none">
                                                <option disabled selected value="">Select Department</option>
                                                <option>Science</option>
                                                <option>Mathematics</option>
                                                <option>Humanities</option>
                                                <option>Languages</option>
                                                <option>Arts</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Description</label>
                                            <textarea className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none resize-none" placeholder="Brief description of the curriculum..." rows={4}></textarea>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-slate-900 dark:text-white">Elective Subject</span>
                                                <span className="text-xs text-slate-500 dark:text-slate-400">Students can choose this optional course</span>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input className="sr-only peer" type="checkbox" value="" />
                                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                        <div className="flex gap-3">
                                            <button onClick={() => setShowAddPanel(false)} className="flex-1 px-4 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                                            <button className="flex-1 px-4 py-2.5 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg shadow-sm transition-colors">Create Subject</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                    </main>
                </div>
            </RoleGuard>
        </AuthGuard>
    );
}
