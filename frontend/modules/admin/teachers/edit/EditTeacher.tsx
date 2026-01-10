import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';

export default function EditTeacher() {
    const [activeTab, setActiveTab] = useState('personal');

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Edit Teacher - School ERP</title>
                    </Head>

                    <div className="flex flex-col gap-6">
                        {/* Breadcrumbs */}
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Link href="/admin/dashboard" className="hover:text-primary transition-colors">Home</Link>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <Link href="/admin/teachers" className="hover:text-primary transition-colors">Teachers</Link>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span className="text-slate-900 dark:text-white font-medium">Edit Teacher</span>
                        </div>

                        {/* Page Header */}
                        <div className="flex flex-wrap justify-between items-center gap-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Edit Teacher: Mrs. Davis</h1>
                                <p className="mt-1 text-slate-500 dark:text-slate-400">Update teacher profile and employment details.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-6 py-2.5 rounded-lg bg-primary text-white hover:bg-blue-600 transition-colors text-sm font-bold shadow-sm">
                                    <span className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[20px]">save</span>
                                        <span>Update Changes</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-slate-200 dark:border-slate-700 gap-8">
                            <button onClick={() => setActiveTab('personal')} className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 transition-colors ${activeTab === 'personal' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
                                <span className="material-symbols-outlined text-[20px]">person</span>
                                <p className="text-sm font-bold tracking-wide">Personal Info</p>
                            </button>
                            <button onClick={() => setActiveTab('professional')} className={`flex items-center gap-2 border-b-[3px] pb-3 pt-2 transition-colors ${activeTab === 'professional' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
                                <span className="material-symbols-outlined text-[20px]">work</span>
                                <p className="text-sm font-bold tracking-wide">Professional Info</p>
                            </button>
                        </div>

                        {/* Form Content */}
                        <div className="max-w-5xl flex flex-col gap-8 pb-20">
                            {/* Section: Personal Info */}
                            <section className={activeTab === 'personal' ? 'flex flex-col gap-5 animate-fade-in' : 'hidden'}>
                                <div className="bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 lg:p-8">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        {/* Photo Upload */}
                                        <div className="flex flex-col items-center gap-3 shrink-0">
                                            <div className="relative group cursor-pointer">
                                                <div className="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-700 bg-cover bg-center border-2 border-slate-200" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2zqY990DeqkZM4dJJNI-IccxSoiaA02z-K4lW83JW79qtT8tST09OTED0BFcLFcDRd8AzjGUPCi--aKOJwoEiaHnC1htT0OVh0y-GoP0GErdHBTtCgo1RZyUdFfxQ3dzYHObN7bHPJHpmlc3Wxz6fEH-dUu338jVymJfMoL5apF7s1GK36Q1X0NbxCtD9YEggaa2fqtS2xPN5MdAizrJD1Vf99sWHWdZBASaQF6IQAcISVAAHo2Yjoc7z14dCR0zN9PWKkPvGauzp')" }}></div>
                                                <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1.5 shadow-md border-2 border-white dark:border-[#1e2936]">
                                                    <span className="material-symbols-outlined text-[16px] block">edit</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Fields Grid */}
                                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                                                <input className="input-field" defaultValue="Sarah" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                                                <input className="input-field" defaultValue="Davis" type="text" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                                                <input className="input-field" defaultValue="davis@school.edu" type="email" />
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone</label>
                                                <input className="input-field" defaultValue="(555) 987-6543" type="tel" />
                                            </div>
                                            <div className="flex flex-col gap-1.5 md:col-span-2">
                                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Address</label>
                                                <textarea className="input-field resize-none" rows={2} defaultValue="123 Oak Avenue, Springfield"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section: Professional Info */}
                            <section className={activeTab === 'professional' ? 'flex flex-col gap-5' : 'hidden'}>
                                <div className="bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 lg:p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Employee ID</label>
                                            <input className="input-field bg-slate-100 text-slate-500" readOnly type="text" value="T-2023-001" />
                                        </div>
                                        <div className="flex flex-col gap-1.5 ">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Department</label>
                                            <select className="input-field" defaultValue="Primary Education">
                                                <option value="Mathematics">Mathematics</option>
                                                <option value="Science">Science</option>
                                                <option value="Languages">Languages</option>
                                                <option value="Primary Education">Primary Education</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Designation</label>
                                            <input className="input-field" defaultValue="Senior Teacher" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Joining Date</label>
                                            <input className="input-field" defaultValue="2018-09-01" type="date" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Qualification</label>
                                            <input className="input-field" defaultValue="M.Ed, B.Sc" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <style jsx>{`
                        .input-field {
                            @apply w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm;
                        }
                    `}</style>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
