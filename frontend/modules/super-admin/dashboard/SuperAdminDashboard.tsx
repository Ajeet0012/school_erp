import React from 'react';
import Link from 'next/link';

export default function SuperAdminDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">System Overview</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Real-time insights across all registered institutions.</p>
                </div>
                <div className="flex gap-3">
                    <button className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95">
                        <span className="material-icons-outlined text-sm mr-2">download</span>
                        Export Report
                    </button>
                    <button className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-hover border border-transparent rounded-xl shadow-lg shadow-primary/25 text-sm font-bold text-white transition-all transform hover:-translate-y-0.5 active:scale-95">
                        <span className="material-icons-outlined text-sm mr-2">add</span>
                        Onboard School
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Active Schools', value: '1,248', trend: '+12%', trendUp: true, icon: 'school', color: 'blue' },
                    { label: 'Total Students', value: '450k', trend: '+5.4%', trendUp: true, icon: 'group', color: 'indigo' },
                    { label: 'Monthly Revenue', value: '$8.2M', trend: '-2.1%', trendUp: false, icon: 'payments', color: 'purple' },
                    { label: 'System Uptime', value: '99.9%', trend: 'Stable', trendUp: null, icon: 'dns', color: 'orange' }
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-card-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600 dark:text-${stat.color}-400 group-hover:scale-110 transition-transform`}>
                                <span className="material-icons-outlined text-2xl">{stat.icon}</span>
                            </div>
                            {stat.trendUp !== null && (
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trendUp ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400'}`}>
                                    {stat.trend}
                                </span>
                            )}
                            {stat.trendUp === null && (
                                <span className="text-xs font-bold px-2 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                    {stat.trend}
                                </span>
                            )}
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</h3>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Charts & Health Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart Placeholder */}
                <div className="lg:col-span-2 bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Revenue Analysis</h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Monthly breakdown vs active users</p>
                        </div>
                        <div className="flex gap-2">
                            {['7D', '30D', '1Y'].map((t) => (
                                <button key={t} className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${t === '30D' ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-slate-50 dark:bg-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Simplified Bar Visualization */}
                    <div className="h-64 flex items-end justify-between gap-3 px-2">
                        {[40, 65, 52, 88, 70, 45, 95, 100, 82, 60, 75, 90].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full justify-end group">
                                <div className="w-full max-w-[32px] bg-slate-50 dark:bg-slate-800/50 rounded-lg overflow-hidden relative h-full">
                                    <div
                                        className={`absolute bottom-0 w-full transition-all duration-1000 ease-out rounded-lg ${i === 7 ? 'bg-primary' : 'bg-primary/20 group-hover:bg-primary/40'}`}
                                        style={{ height: `${h}%` }}
                                    ></div>
                                </div>
                                <span className={`text-[10px] font-bold ${i === 7 ? 'text-primary' : 'text-slate-400'}`}>M{i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Health */}
                <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">System Health</h2>
                    <div className="space-y-8">
                        {[
                            { label: 'Server Load', value: '42%', color: 'blue' },
                            { label: 'Database Resp', value: '18ms', color: 'emerald' },
                            { label: 'Storage Usage', value: '76%', color: 'amber' }
                        ].map((health, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{health.label}</span>
                                    <span className={`text-sm font-black text-${health.color === 'emerald' ? 'emerald-500' : health.color === 'amber' ? 'amber-500' : 'primary'}`}>{health.value}</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className={`h-full rounded-full bg-${health.color === 'emerald' ? 'emerald-500' : health.color === 'amber' ? 'amber-500' : 'primary'}`}
                                        style={{ width: health.value.includes('%') ? health.value : '90%' }}
                                    ></div>
                                </div>
                            </div>
                        ))}

                        <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Critical Alerts</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-3 rounded-xl bg-rose-50/50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/20">
                                    <span className="material-icons-outlined text-rose-500 mt-0.5">error_outline</span>
                                    <div>
                                        <p className="text-sm font-bold text-rose-900 dark:text-rose-400">Failed Backups - Node A</p>
                                        <p className="text-xs text-rose-600/70 dark:text-rose-400/60 mt-0.5">24 mins ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-3 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20">
                                    <span className="material-icons-outlined text-blue-500 mt-0.5">info</span>
                                    <div>
                                        <p className="text-sm font-bold text-blue-900 dark:text-blue-400">V2.4.1 Successfully Deployed</p>
                                        <p className="text-xs text-blue-600/70 dark:text-blue-400/60 mt-0.5">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Onboarded Schools Table */}
            <div className="bg-white dark:bg-card-dark rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="px-8 py-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/30">
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recently Onboarded Schools</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Found 1,248 schools registered in the system.</p>
                    </div>
                    <button className="text-sm font-bold text-primary hover:underline flex items-center gap-1 group">
                        View All
                        <span className="material-icons-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
                            <tr>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Institution Info</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Subscription Plan</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Administrator</th>
                                <th className="px-8 py-5 text-left text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Status</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black text-slate-400 uppercase tracking-widest">Management</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                            {[
                                { name: 'Springfield International', city: 'London, UK', plan: 'Enterprise', cycle: 'Yearly', admin: 'Sarah Connor', email: 'sarah@springfield.edu', status: 'Active', color: 'emerald', students: 1402 },
                                { name: 'Westside High Tech', city: 'New York, USA', plan: 'Basic', cycle: 'Monthly', admin: 'John Doe', email: 'admin@westside.edu', status: 'Pending Setup', color: 'amber', students: 850 },
                                { name: 'Riverdale Academy', city: 'Vancouver, CA', plan: 'Pro', cycle: 'Yearly', admin: 'Alice Smith', email: 'principal@riverdale.ca', status: 'Active', color: 'emerald', students: 2100 }
                            ].map((school, i) => (
                                <tr key={i} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <span className="material-icons-outlined text-slate-400">school</span>
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{school.name}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{school.city}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="inline-flex flex-col">
                                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{school.plan}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">{school.cycle}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{school.admin}</p>
                                            <p className="text-xs text-slate-400 mt-1">{school.email}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${school.status === 'Active' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600' : 'bg-amber-50 dark:bg-amber-900/20 text-amber-600'}`}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${school.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`}></span>
                                            {school.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                                                <span className="material-icons-outlined text-lg">edit</span>
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 rounded-lg transition-all">
                                                <span className="material-icons-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
