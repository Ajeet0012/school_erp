import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';

export default function TransportDashboard() {
    const routes = [
        {
            id: 'Route A - North',
            time: '07:30 AM - 08:45 AM',
            driverName: 'John Doe',
            driverAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPTkjftOTGjBC8JXU5q3eQOu7z6LFJ8Aeyj-Gp04BlqdKxvA-AVi7a3gU4BzoByZJRwus9DO-w1526s0C8xo7axFXxmbwhaIrp9LQd7wbDrqf3KCfGR_oca1op2XfUvjMOMDCyxJS1RCMss1fEvfdB8vuBDUdMGRLnA8ahTmuq2lwxt4Uustd0mSLs6a8GlFMpi72lv5x1u4o7QNqLeifP4UveU_7wBaWN9bBLvts5oJdHX_mVZXoQWHXsMiOI-SglS-TRYVniUh9J',
            busNo: '#BUS-04',
            capacity: 48,
            totalCapacity: 60,
            status: 'On Route',
            color: 'green'
        },
        {
            id: 'Route B - East Lake',
            time: '07:15 AM - 08:30 AM',
            driverName: 'Mike Smith',
            driverAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4ckikweHm1INGAYBb74R65AeRrdPXOXgC2EnXw_GbJqZmtng7PH5pHxDsOrAUraCXarZrca2yJd82AHEbjhsS24i7preMsLUTCSROd4HuRvgajCi4sYRggmkpsll4YdTE7Gnv3eZzWUJ68sasP-gkTmm2zOn4hsT66QpHys9QT8gUdTMoxcghEJ8sttK6P0mhXA_rxuBBUWfHMsW6TY8y3sC7tLd9mp_uESbrqR-pGGyVT6ldufipjp8gZBoSxMjaIkVaTwemnB-m',
            busNo: '#BUS-02',
            capacity: 58,
            totalCapacity: 60,
            status: 'Completed',
            color: 'blue'
        },
        {
            id: 'Route C - Downtown',
            time: '07:45 AM - 09:00 AM',
            driverName: 'Unassigned',
            driverAvatar: '',
            busNo: '#BUS-09',
            capacity: 0,
            totalCapacity: 60,
            status: 'Maintenance',
            color: 'orange'
        },
        {
            id: 'Route D - West Valley',
            time: '06:50 AM - 08:00 AM',
            driverName: 'Sarah Jenkins',
            driverAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDComX8XkPtSSQD3T_ksyR5DLo8j7sEQ3SvpJICTiufmNVfUzhJkAS3y7TZbzXSepUqtdfBSb7xqkK3-JyDkCzDuUW3ua7VerGYdJ9ZN1feqkoXv3e1_8rEbdhaWtwm7n9-mIsQ1PQ1bzPt_ZKwMuOrhyIRVHWeagzAok8DX5aBE_HL1ykU9t8HBtjLp2AtZzfQVNkxHUeTJYGj3oYoR9ycAJlfWMUV6josFKtNqqbJNxJZNu50PuhnWQoLSbMm8bO0HeWibXqfvImH',
            busNo: '#BUS-11',
            capacity: 36,
            totalCapacity: 60,
            status: 'On Route',
            color: 'green'
        }
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Transport Management - School ERP</title>
                    </Head>

                    <div className="flex flex-col h-full overflow-hidden relative">
                        {/* Header Area */}
                        <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
                            <div className="flex flex-col gap-1">
                                <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">Transport Management</h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Manage routes, track fleet maintenance, and assign drivers.</p>
                            </div>
                            <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm shadow-blue-500/20 flex items-center gap-2 transition-all active:scale-95">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>add</span>
                                Add New Route
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto">
                            <div className="max-w-[1280px] mx-auto flex flex-col gap-8">
                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="bg-white dark:bg-[#1e2936] rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex items-start justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Buses</p>
                                            <p className="text-slate-900 dark:text-white text-2xl font-bold">12</p>
                                        </div>
                                        <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>directions_bus</span>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-[#1e2936] rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex items-start justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Routes</p>
                                            <p className="text-slate-900 dark:text-white text-2xl font-bold">8</p>
                                        </div>
                                        <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-green-600 dark:text-green-400" style={{ fontSize: '24px' }}>alt_route</span>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-[#1e2936] rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex items-start justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Students Assigned</p>
                                            <p className="text-slate-900 dark:text-white text-2xl font-bold">450</p>
                                        </div>
                                        <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-purple-600 dark:text-purple-400" style={{ fontSize: '24px' }}>groups</span>
                                        </div>
                                    </div>
                                    <div className="bg-white dark:bg-[#1e2936] rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm flex items-start justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Maintenance</p>
                                            <p className="text-slate-900 dark:text-white text-2xl font-bold">1</p>
                                        </div>
                                        <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-orange-600 dark:text-orange-400" style={{ fontSize: '24px' }}>build_circle</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabs & Controls */}
                                <div className="flex flex-col gap-4">
                                    <div className="border-b border-slate-200 dark:border-slate-700">
                                        <div className="flex gap-8">
                                            <button className="pb-3 border-b-[3px] border-primary text-primary font-bold text-sm px-1">Routes</button>
                                            <button className="pb-3 border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-medium text-sm px-1 transition-colors">Vehicles</button>
                                            <button className="pb-3 border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-medium text-sm px-1 transition-colors">Drivers</button>
                                            <button className="pb-3 border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 font-medium text-sm px-1 transition-colors">Allocations</button>
                                        </div>
                                    </div>
                                </div>

                                {/* Content View (Split Layout) */}
                                <div className="flex flex-col xl:flex-row gap-6 h-full min-h-[500px]">
                                    {/* List / Table View */}
                                    <div className="flex-1 bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden flex flex-col">
                                        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
                                            <h3 className="font-semibold text-slate-800 dark:text-white">Active Routes</h3>
                                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">8 Routes</span>
                                        </div>
                                        <div className="overflow-y-auto flex-1">
                                            <table className="w-full text-left text-sm">
                                                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 sticky top-0">
                                                    <tr>
                                                        <th className="px-5 py-3 font-medium">Route ID</th>
                                                        <th className="px-5 py-3 font-medium">Driver</th>
                                                        <th className="px-5 py-3 font-medium">Bus No.</th>
                                                        <th className="px-5 py-3 font-medium">Capacity</th>
                                                        <th className="px-5 py-3 font-medium">Status</th>
                                                        <th className="px-5 py-3 font-medium text-right">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                                    {routes.map((route, i) => (
                                                        <tr key={i} className="group hover:bg-blue-50/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer border-l-4 border-transparent hover:border-primary">
                                                            <td className="px-5 py-4 font-medium text-slate-900 dark:text-white">
                                                                <div className="flex flex-col">
                                                                    <span>{route.id}</span>
                                                                    <span className="text-xs text-slate-400 font-normal">{route.time}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-5 py-4">
                                                                <div className="flex items-center gap-2">
                                                                    {route.driverAvatar ? (
                                                                        <div className="size-6 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${route.driverAvatar}')` }}></div>
                                                                    ) : (
                                                                        <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-medium text-slate-500 dark:text-slate-300">N/A</div>
                                                                    )}
                                                                    <span className={`text-slate-700 dark:text-slate-300 ${!route.driverAvatar ? 'italic text-slate-400' : ''}`}>{route.driverName}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-5 py-4 text-slate-600 dark:text-slate-400">{route.busNo}</td>
                                                            <td className="px-5 py-4 text-slate-600 dark:text-slate-400">
                                                                <div className="flex items-center gap-2">
                                                                    <div className="w-16 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                                        <div className={`h-full bg-${route.color === 'orange' ? 'slate-400' : route.color === 'blue' ? 'yellow-500' : 'green-500'} w-[${(route.capacity / route.totalCapacity) * 100}%]`}></div>
                                                                    </div>
                                                                    <span className="text-xs">{route.capacity}/{route.totalCapacity}</span>
                                                                </div>
                                                            </td>
                                                            <td className="px-5 py-4">
                                                                <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-${route.color}-100 text-${route.color}-800 dark:bg-${route.color}-900/30 dark:text-${route.color}-400`}>
                                                                    <span className={`size-1.5 rounded-full bg-${route.color}-500`}></span>
                                                                    {route.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-5 py-4 text-right">
                                                                <button className="text-slate-400 hover:text-primary transition-colors">
                                                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>more_vert</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
