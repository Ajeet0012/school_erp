import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function ReportCards() {
    const [template, setTemplate] = useState('standard');

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN, USER_ROLES.TEACHER]}>
                <Head>
                    <title>Report Card Generation - School ERP</title>
                </Head>

                <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden flex h-screen w-full flex-col">
                    {/* Top Navigation Bar */}
                    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] px-10 py-3 z-20">
                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                                <div className="size-8 text-primary flex items-center justify-center rounded-lg bg-primary/10">
                                    <span className="material-symbols-outlined text-2xl">school</span>
                                </div>
                                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">School ERP</h2>
                            </div>
                            <div className="hidden md:flex items-center gap-9">
                                <Link href="/super-admin/dashboard" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors">Dashboard</Link>
                                <Link href="/admin/students" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors">Students</Link>
                                <Link href="/admin/exams" className="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors">Academics</Link>
                                <Link href="/admin/reports/cards" className="text-slate-900 dark:text-white text-sm font-medium leading-normal">Reports</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-50 dark:bg-slate-800">
                                    <div className="text-slate-400 flex items-center justify-center pl-4 rounded-l-lg border-r-0">
                                        <span className="material-symbols-outlined text-[20px]">search</span>
                                    </div>
                                    <input className="w-full bg-transparent border-none text-sm px-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0" placeholder="Search" />
                                </div>
                            </div>
                            <button className="relative text-slate-500 hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2632]"></span>
                            </button>
                            <div className="size-10 rounded-full bg-center bg-cover border-2 border-white dark:border-slate-700 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxgdHy_v2BdacNIzH10ubfuFZElMbdF4X007vb4qRfXIwIizkrk95cIW6sJzpsGrCGMSrrwOcq9nm3PO-o8b7kqzxRr4EYKnyBNAEP_BCnEb7eSMwYXL2QIXUvqhkFSfXOnWUsIlNyktKpO4sVpVF_VRlkdUKKUM4oJ8QrvXSb7kj6KHsTqFDp4dOpnwltcRq_zTKn376M6_FOkxZgTE-cEm3SNz64v3YllfrwCdi1lTfJWDTVcmTQQaf9n80PfR6IPBcFiPT-gaBI')" }}></div>
                        </div>
                    </header>
                    {/* Main Layout */}
                    <div className="flex flex-1 overflow-hidden">
                        {/* Sidebar */}
                        <aside className="hidden lg:flex w-64 flex-col bg-white dark:bg-[#1a2632] border-r border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col gap-4 p-4">
                                <div className="flex flex-col gap-1">
                                    <Link href="/super-admin/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined">dashboard</span>
                                        <p className="text-sm font-medium leading-normal">Dashboard</p>
                                    </Link>
                                    <Link href="/admin/students" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined">group</span>
                                        <p className="text-sm font-medium leading-normal">Students</p>
                                    </Link>
                                    <Link href="/admin/exams" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined">assignment_turned_in</span>
                                        <p className="text-sm font-medium leading-normal">Examinations</p>
                                    </Link>
                                    <Link href="/admin/reports/cards" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined fill-1">assessment</span>
                                        <p className="text-sm font-medium leading-normal">Reports</p>
                                    </Link>
                                    <div className="pl-11 pr-3 pb-2 flex flex-col gap-2">
                                        <span className="text-sm text-slate-900 dark:text-white font-medium">Card Generation</span>
                                        <span className="text-sm text-slate-500 hover:text-primary transition-colors cursor-pointer">Performance Analytics</span>
                                        <span className="text-sm text-slate-500 hover:text-primary transition-colors cursor-pointer">Archived Reports</span>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Content Area */}
                        <main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
                            {/* Header & Breadcrumbs */}
                            <div className="px-6 py-4 bg-white/50 dark:bg-[#1a2632]/50 backdrop-blur-sm sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800">
                                <div className="flex flex-col gap-2 mb-2">
                                    <div className="flex flex-wrap gap-2 items-center text-sm">
                                        <Link href="/super-admin/dashboard" className="text-slate-500 hover:text-primary">Home</Link>
                                        <span className="text-slate-400">/</span>
                                        <span className="text-slate-500">Reports</span>
                                        <span className="text-slate-400">/</span>
                                        <span className="text-slate-900 dark:text-white font-medium">Generation</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between items-center gap-4">
                                    <div>
                                        <h1 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">Report Card Generation</h1>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Configure, preview, and generate student report cards.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="flex items-center gap-2 cursor-pointer rounded-lg h-9 px-4 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700">
                                            <span className="material-symbols-outlined text-[18px]">history</span>
                                            History
                                        </button>
                                        <button className="flex items-center gap-2 cursor-pointer rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">print</span>
                                            Bulk Generate
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Content Grid */}
                            <div className="flex-1 overflow-auto p-6">
                                <div className="grid grid-cols-12 gap-6 h-full min-h-[800px]">
                                    {/* Left Panel: Filters & Student List */}
                                    <div className="col-span-12 xl:col-span-5 flex flex-col gap-6">
                                        {/* configuration */}
                                        <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 p-5 shadow-sm">
                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="material-symbols-outlined text-primary">tune</span>
                                                <h3 className="font-bold text-slate-900 dark:text-white">Configuration</h3>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <label className="flex flex-col gap-1.5">
                                                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Academic Year</span>
                                                    <select className="w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary">
                                                        <option>2023 - 2024</option>
                                                        <option>2022 - 2023</option>
                                                    </select>
                                                </label>
                                                <label className="flex flex-col gap-1.5">
                                                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Exam Term</span>
                                                    <select className="w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary">
                                                        <option>Final Term</option>
                                                        <option>Mid Term</option>
                                                    </select>
                                                </label>
                                                <label className="flex flex-col gap-1.5">
                                                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Class</span>
                                                    <select className="w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary">
                                                        <option>Class 10</option>
                                                        <option>Class 9</option>
                                                    </select>
                                                </label>
                                                <label className="flex flex-col gap-1.5">
                                                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Section</span>
                                                    <select className="w-full appearance-none rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary">
                                                        <option>Section A</option>
                                                        <option>Section B</option>
                                                    </select>
                                                </label>
                                            </div>
                                            {/* Template Style */}
                                            <div className="mt-6">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Template Style</span>
                                                    <button className="text-xs text-primary font-medium hover:underline">View All</button>
                                                </div>
                                                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                                                    <label className="cursor-pointer group flex-shrink-0">
                                                        <input type="radio" name="template" value="standard" checked={template === 'standard'} onChange={() => setTemplate('standard')} className="sr-only peer" />
                                                        <div className="w-24 h-32 rounded-lg border-2 peer-checked:border-primary peer-checked:bg-primary/5 p-2 flex flex-col gap-1 border-slate-200 hover:border-primary/50 transition-all bg-white">
                                                            <div className="flex-1 bg-slate-100 rounded border border-slate-200 overflow-hidden flex flex-col gap-1 p-1">
                                                                <div className="h-2 w-full bg-slate-300"></div>
                                                                <div className="h-1 w-2/3 bg-slate-300 rounded-full"></div>
                                                            </div>
                                                            <span className="text-[10px] font-bold text-center peer-checked:text-primary text-slate-500">Standard</span>
                                                        </div>
                                                    </label>
                                                    {/* More templates */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Student List */}
                                        <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 flex-1 flex flex-col shadow-sm overflow-hidden min-h-[400px]">
                                            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col gap-3">
                                                <div className="flex justify-between items-center">
                                                    <h3 className="font-bold text-slate-900 dark:text-white">Student List</h3>
                                                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold px-2 py-1 rounded-full">42 Students</span>
                                                </div>
                                                <div className="relative">
                                                    <input className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-9 pr-3 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary dark:text-white placeholder:text-slate-400" placeholder="Search..." />
                                                    <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-[20px]">search</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 overflow-y-auto">
                                                <table className="w-full text-left text-sm">
                                                    <thead className="bg-slate-50 dark:bg-slate-900 sticky top-0 z-10 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
                                                        <tr>
                                                            <th className="px-4 py-3 w-10"><input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary size-4" /></th>
                                                            <th className="px-4 py-3">Name</th>
                                                            <th className="px-4 py-3 text-right">Roll No</th>
                                                            <th className="px-4 py-3 text-center">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-slate-900 dark:text-white">
                                                        <tr className="hover:bg-primary/5 cursor-pointer bg-primary/5 border-l-4 border-l-primary transition-colors">
                                                            <td className="px-4 py-3"><input type="checkbox" checked className="rounded border-gray-300 text-primary focus:ring-primary size-4" /></td>
                                                            <td className="px-4 py-3 font-medium">John Doe</td>
                                                            <td className="px-4 py-3 text-right text-slate-500 dark:text-slate-400">10A01</td>
                                                            <td className="px-4 py-3 text-center"><span className="inline-flex items-center rounded-full bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20 px-2 py-1 text-xs font-medium">Ready</span></td>
                                                        </tr>
                                                        {/* More rows */}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Panel: Preview */}
                                    <div className="col-span-12 xl:col-span-7 flex flex-col gap-6">
                                        {/* Toolbar */}
                                        <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 p-4 flex flex-wrap items-center gap-6 shadow-sm">
                                            <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                <span className="material-symbols-outlined text-primary text-[20px]">visibility</span>
                                                Show:
                                            </span>
                                            {['Attendance', 'Remarks', 'Rank'].map(opt => (
                                                <label key={opt} className="inline-flex items-center cursor-pointer gap-2">
                                                    <input type="checkbox" defaultChecked className="sr-only peer" />
                                                    <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                                                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{opt}</span>
                                                </label>
                                            ))}
                                            <div className="flex-1"></div>
                                            <div className="flex gap-2">
                                                <button className="text-slate-500 hover:text-primary p-1"><span className="material-symbols-outlined">refresh</span></button>
                                                <button className="text-slate-500 hover:text-primary p-1"><span className="material-symbols-outlined">fullscreen</span></button>
                                            </div>
                                        </div>

                                        {/* Live Preview Area */}
                                        <div className="flex-1 bg-slate-200/50 dark:bg-black/20 rounded-xl border border-slate-200 dark:border-slate-700 flex justify-center p-8 overflow-y-auto relative shadow-inner">
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="bg-black/75 text-white text-xs px-2 py-1 rounded backdrop-blur">Live Preview: John Doe</span>
                                            </div>

                                            {/* The Report Card */}
                                            <div className="bg-white w-full max-w-[650px] min-h-[800px] shadow-lg p-10 flex flex-col gap-8 text-slate-900">
                                                {/* Header */}
                                                <div className="flex justify-between items-center border-b-2 border-primary pb-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                            <span className="material-symbols-outlined text-3xl">school</span>
                                                        </div>
                                                        <div>
                                                            <h1 className="text-2xl font-bold text-primary">Green Valley High School</h1>
                                                            <p className="text-sm text-gray-500">123 Education Lane, Springfield</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <h2 className="text-xl font-bold uppercase tracking-wide text-gray-800">Report Card</h2>
                                                        <p className="text-sm font-medium text-gray-600 mt-1">Academic Year: 2023-2024</p>
                                                    </div>
                                                </div>

                                                {/* Student Details */}
                                                <div className="grid grid-cols-2 gap-x-8 gap-y-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                                    <div className="flex justify-between border-b border-gray-200 pb-1">
                                                        <span className="text-sm font-semibold text-gray-500">Student Name</span>
                                                        <span className="text-sm font-bold">John Doe</span>
                                                    </div>
                                                    <div className="flex justify-between border-b border-gray-200 pb-1">
                                                        <span className="text-sm font-semibold text-gray-500">Roll Number</span>
                                                        <span className="text-sm font-bold">10A01</span>
                                                    </div>
                                                    {/* More details */}
                                                </div>

                                                {/* Grades Table */}
                                                <div>
                                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-primary text-lg">bar_chart</span>
                                                        Academic Performance
                                                    </h3>
                                                    <table className="w-full border-collapse">
                                                        <thead>
                                                            <tr className="bg-primary/5 border-b-2 border-primary/20">
                                                                <th className="text-left p-3 text-sm font-bold text-primary">Subject</th>
                                                                <th className="text-center p-3 text-sm font-bold text-primary">Max Marks</th>
                                                                <th className="text-center p-3 text-sm font-bold text-primary">Obtained</th>
                                                                <th className="text-center p-3 text-sm font-bold text-primary">Grade</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100">
                                                            <tr>
                                                                <td className="p-3 text-sm font-medium">Mathematics</td>
                                                                <td className="text-center p-3 text-sm text-gray-600">100</td>
                                                                <td className="text-center p-3 text-sm font-bold">95</td>
                                                                <td className="text-center p-3 text-sm font-bold text-green-600">A+</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-3 text-sm font-medium">Science</td>
                                                                <td className="text-center p-3 text-sm text-gray-600">100</td>
                                                                <td className="text-center p-3 text-sm font-bold">88</td>
                                                                <td className="text-center p-3 text-sm font-bold text-green-600">A</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                {/* Remarks */}
                                                <div className="mt-2 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                                                    <h4 className="text-sm font-bold text-yellow-800 mb-1">Class Teacher&apos;s Remarks</h4>
                                                    <p className="text-sm text-yellow-900 italic">&quot;John has shown excellent improvement in Mathematics this term. He is a diligent student but could participate more in class discussions.&quot;</p>
                                                </div>

                                                <div className="flex-1"></div>

                                                {/* Signatures */}
                                                <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
                                                    <div className="text-center w-40">
                                                        <div className="h-12 w-full mb-2 flex items-end justify-center">
                                                            <span className="font-cursive text-2xl text-blue-900 opacity-60 italic">Sarah J.</span>
                                                        </div>
                                                        <p className="text-xs font-bold border-t border-gray-400 pt-1">Class Teacher</p>
                                                    </div>
                                                    <div className="text-center w-40">
                                                        <div className="h-12 w-full mb-2 flex items-end justify-center">
                                                            <span className="font-cursive text-2xl text-blue-900 opacity-60 italic">Dr. A. Smith</span>
                                                        </div>
                                                        <p className="text-xs font-bold border-t border-gray-400 pt-1">Principal</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </RoleGuard>
        </AuthGuard>
    );
}
