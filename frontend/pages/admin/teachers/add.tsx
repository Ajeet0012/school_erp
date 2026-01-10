import Head from 'next/head';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';
import Link from 'next/link';

export default function AddTeacher() {
    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <Head>
                    <title>Add New Teacher - School ERP</title>
                </Head>
                <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden min-h-screen">
                    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
                        {/* Top Navigation */}
                        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 shadow-sm">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                                    <div className="size-8 text-primary">
                                        <span className="material-symbols-outlined text-4xl">school</span>
                                    </div>
                                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">School ERP</h2>
                                </div>
                                <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 overflow-hidden">
                                        <div className="text-slate-500 flex items-center justify-center pl-4 pr-2">
                                            <span className="material-symbols-outlined text-[20px]">search</span>
                                        </div>
                                        <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-slate-900 dark:text-white focus:outline-0 bg-transparent placeholder:text-slate-400 px-2 text-sm font-normal leading-normal border-none focus:ring-0" placeholder="Search..." />
                                    </div>
                                </label>
                            </div>
                            <div className="flex flex-1 justify-end gap-8 items-center">
                                <nav className="hidden lg:flex items-center gap-9">
                                    <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" href="/super-admin/dashboard">Dashboard</Link>
                                    <Link className="text-primary text-sm font-medium leading-normal" href="/admin/teachers">Teachers</Link>
                                    <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" href="/admin/students">Students</Link>
                                    <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Classes</Link>
                                    <Link className="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Finance</Link>
                                </nav>
                                <div className="flex items-center gap-4">
                                    <button className="flex items-center justify-center rounded-full size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                        <span className="material-symbols-outlined">notifications</span>
                                    </button>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-slate-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-2XN1c7iYHOIsk4tM41C14FsUC1tt3SwU_TNW5PLhK901QBHiLnvq_DYcT4tw-8O1P8NKzy4vIL16mdwG8x2bG4wvj3BjUQus2wcPXbwzmpu-ZEkE70hGvIsF8Tj5MnjXhcCHs1JwJ95Xb2O9G6tDpx5288tBndm37B04vCTfixQAe1Yh4DBrADLztKNwaHbrVUC8ZuqnTctCCwFPztLqdbS2gJ-wTuxaNINfDUUi7QIrVpLS1ln4JgwEi042laNzz6cBfhqvcRjQ')" }}></div>
                                </div>
                            </div>
                        </header>
                        <main className="layout-container flex h-full grow flex-col w-full max-w-[1200px] mx-auto p-4 md:px-10 py-8">
                            {/* Breadcrumbs */}
                            <div className="flex flex-wrap gap-2 pb-6 items-center">
                                <Link className="text-slate-500 hover:text-primary text-sm font-medium leading-normal transition-colors" href="/super-admin/dashboard">Dashboard</Link>
                                <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                                <Link className="text-slate-500 hover:text-primary text-sm font-medium leading-normal transition-colors" href="/admin/teachers">Teachers</Link>
                                <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                                <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal">Add New</span>
                            </div>
                            {/* Page Heading */}
                            <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Add New Teacher</h1>
                                    <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Enter the details below to register a new faculty member.</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                                </div>
                            </div>
                            {/* Main Form Card */}
                            <form className="flex flex-col gap-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 md:p-8">
                                {/* Section 1: Personal Information */}
                                <div className="flex flex-col gap-6">
                                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                                        <span className="material-symbols-outlined text-primary">person</span>
                                        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Personal Information</h2>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                        {/* Photo Upload Column */}
                                        <div className="lg:col-span-3 flex flex-col gap-4">
                                            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Profile Photo</label>
                                            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-8 text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                    <span className="material-symbols-outlined text-3xl">add_a_photo</span>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Upload Photo</p>
                                                    <p className="text-slate-500 text-xs">PNG, JPG up to 5MB</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Fields Column */}
                                        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                                                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Sarah" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                                                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Connor" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">mail</span>
                                                    <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400" placeholder="sarah.connor@school.edu" type="email" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                                                <div className="relative">
                                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">call</span>
                                                    <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400" placeholder="+1 (555) 000-0000" type="tel" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date of Birth</label>
                                                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-500" type="date" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Gender</label>
                                                <div className="relative">
                                                    <select className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                                        <option disabled selected value="">Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined pointer-events-none">expand_more</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1.5 md:col-span-2">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Residential Address</label>
                                                <textarea className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 resize-none" placeholder="Street address, City, State, Zip Code" rows={2}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 2: Academic & Professional */}
                                <div className="flex flex-col gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                                        <span className="material-symbols-outlined text-primary">school</span>
                                        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Academic Details</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Highest Qualification</label>
                                            <div className="relative">
                                                <select className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                                    <option disabled selected value="">Select Degree</option>
                                                    <option>PhD</option>
                                                    <option>Masters</option>
                                                    <option>Bachelors</option>
                                                    <option>Diploma</option>
                                                </select>
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined pointer-events-none">expand_more</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">University / College</label>
                                            <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400" placeholder="e.g. Stanford University" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Total Experience</label>
                                            <div className="relative">
                                                <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400" placeholder="Years" type="number" />
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">Yrs</span>
                                            </div>
                                        </div>
                                        {/* CV Upload */}
                                        <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-3">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Upload CV / Resume</label>
                                            <div className="flex items-center justify-between rounded-lg border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50 p-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary">
                                                        <span className="material-symbols-outlined">description</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-sm font-medium text-slate-900 dark:text-white">Drag & drop files here</span>
                                                        <span className="text-xs text-slate-500">or click to browse from your computer</span>
                                                    </div>
                                                </div>
                                                <button className="text-sm font-bold text-primary hover:text-blue-600 transition-colors" type="button">Browse</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Section 3: School Configuration */}
                                <div className="flex flex-col gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                                        <span className="material-symbols-outlined text-primary">work</span>
                                        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">School Role Configuration</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Employee ID</label>
                                            <input className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-500 px-4 py-2.5 text-sm cursor-not-allowed" readOnly type="text" value="EMP-2023-045" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Department</label>
                                            <div className="relative">
                                                <select className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                                    <option disabled selected value="">Select Department</option>
                                                    <option>Mathematics</option>
                                                    <option>Science</option>
                                                    <option>Humanities</option>
                                                    <option>Arts</option>
                                                    <option>Physical Education</option>
                                                </select>
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined pointer-events-none">expand_more</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Designation</label>
                                            <div className="relative">
                                                <select className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                                    <option disabled selected value="">Select Role</option>
                                                    <option>Junior Teacher</option>
                                                    <option>Senior Teacher</option>
                                                    <option>Head of Department</option>
                                                    <option>Lab Assistant</option>
                                                </select>
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined pointer-events-none">expand_more</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Date of Joining</label>
                                            <input className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-slate-500" type="date" />
                                        </div>
                                        <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-4">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject Specializations</label>
                                            <div className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-2.5 min-h-[46px] flex flex-wrap items-center gap-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                                                {/* Tags Placeholder */}
                                                <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                                                    <span>Mathematics</span>
                                                    <button className="material-symbols-outlined text-[16px] hover:text-blue-700" type="button">close</button>
                                                </div>
                                                <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium">
                                                    <span>Algebra</span>
                                                    <button className="material-symbols-outlined text-[16px] hover:text-blue-700" type="button">close</button>
                                                </div>
                                                <input className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 min-w-[200px]" placeholder="Type and press Enter to add subjects..." type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Action Footer */}
                                <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-slate-100 dark:border-slate-800 mt-2">
                                    <button className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" type="button">Save & Add Another</button>
                                    <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2" type="submit">
                                        <span className="material-symbols-outlined text-[20px]">check</span>
                                        Create Teacher
                                    </button>
                                </div>
                            </form>
                        </main>
                    </div>
                </div>
            </RoleGuard>
        </AuthGuard>
    );
}
