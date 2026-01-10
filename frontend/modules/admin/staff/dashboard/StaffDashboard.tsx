import React, { useState } from 'react';

// Mock Data
const staffData = [
    { id: 'NT-042', name: 'Sarah Jenkins', role: 'Admin Officer', dept: 'Administration', status: 'Active', email: 'sarah.j@school.edu', phone: '+1 (555) 012-3456', avatar: null },
    { id: 'NT-089', name: 'David Lo', role: 'Bus Driver', dept: 'Transport', status: 'On Leave', email: 'david.l@school.edu', phone: '+1 (555) 012-7890', avatar: null },
    { id: 'NT-091', name: 'Michael Chen', role: 'IT Support Lead', dept: 'Information Tech', status: 'Active', email: 'm.chen@school.edu', phone: '+1 (555) 012-9988', avatar: null },
    { id: 'NT-012', name: 'Emily Davis', role: 'Head Janitor', dept: 'Facilities', status: 'Resigned', email: 'e.davis@school.edu', phone: '+1 (555) 012-1122', avatar: null },
    { id: 'NT-098', name: 'Robert Fox', role: 'Accountant', dept: 'Finance', status: 'Active', email: 'r.fox@school.edu', phone: '+1 (555) 012-6655', avatar: null },
];

export default function StaffDashboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredStaff = staffData.filter(staff =>
        (filter === 'All' || staff.status === filter) &&
        (staff.name.toLowerCase().includes(searchTerm.toLowerCase()) || staff.id.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="flex-1 p-6 max-w-[1400px] w-full mx-auto">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                    { title: 'Total Staff', value: '142', change: '+2% this month', icon: 'groups', color: 'text-primary', bg: 'bg-blue-50 dark:bg-blue-900/30', changeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' },
                    { title: 'Active Staff', value: '130', change: '+1%', icon: 'verified_user', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/30', changeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' },
                    { title: 'On Leave', value: '8', change: '0% change', icon: 'beach_access', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/30', changeColor: 'text-slate-500 dark:text-slate-400' },
                    { title: 'New Hires', value: '4', change: '+4%', icon: 'person_add', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/30', changeColor: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30' },
                ].map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-[#1e2936] rounded-xl p-5 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.title}</p>
                            <div className={`p-1.5 rounded-md ${stat.bg} ${stat.color}`}>
                                <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                            </div>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                            <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${stat.changeColor}`}>{stat.change}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main List Container */}
            <div className="bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm flex flex-col min-h-[600px]">
                {/* Toolbar */}
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4 justify-between items-center">
                    {/* Tabs */}
                    <div className="flex items-center gap-6 w-full sm:w-auto overflow-x-auto no-scrollbar">
                        {['All', 'Active', 'On Leave', 'Resigned'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab)}
                                className={`relative py-2 text-sm font-bold ${filter === tab ? 'text-primary border-b-2 border-primary' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 border-b-2 border-transparent'}`}
                            >
                                {tab === 'All' ? 'All Staff' : tab}
                            </button>
                        ))}
                    </div>
                    {/* Search & Filters */}
                    <div className="flex gap-2 w-full sm:w-auto">
                        <div className="relative group w-full sm:w-64">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors material-symbols-outlined text-[20px]">search</span>
                            <input
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full h-10 pl-10 pr-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                placeholder="Search by name or ID..."
                                type="text"
                            />
                        </div>
                        <button className="h-10 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 text-sm font-medium">
                            <span className="material-symbols-outlined text-[20px]">filter_list</span>
                            <span className="hidden sm:inline">Filter</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto w-full">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                                <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-12">
                                    <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                </th>
                                <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 min-w-[200px]">Staff Member</th>
                                <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Role & Dept</th>
                                <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                                <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Contact</th>
                                <th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                            {filteredStaff.map((staff) => (
                                <tr key={staff.id} className="group hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors cursor-pointer">
                                    <td className="py-3 px-4">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`size-10 rounded-full flex items-center justify-center font-bold text-sm ${staff.id === 'NT-042' ? 'bg-indigo-100 text-indigo-700' : staff.id === 'NT-089' ? 'bg-amber-100 text-amber-700' : staff.id === 'NT-091' ? 'bg-blue-100 text-blue-700' : staff.id === 'NT-012' ? 'bg-pink-100 text-pink-700' : 'bg-teal-100 text-teal-700'}`}>
                                                {staff.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900 dark:text-white">{staff.name}</p>
                                                <p className="text-xs text-slate-500 dark:text-slate-400">ID: {staff.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">{staff.role}</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{staff.dept}</p>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${staff.status === 'Active' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                                staff.status === 'On Leave' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' :
                                                    'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}>
                                            <span className={`size-1.5 rounded-full ${staff.status === 'Active' ? 'bg-emerald-500' :
                                                    staff.status === 'On Leave' ? 'bg-amber-500' :
                                                        'bg-slate-400'}`}></span>
                                            {staff.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex flex-col gap-0.5">
                                            <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                                                <span className="material-symbols-outlined text-[14px]">mail</span>
                                                {staff.email}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                                <span className="material-symbols-outlined text-[14px]">call</span>
                                                {staff.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination - Simplified */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between mt-auto">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Showing <span className="font-medium text-slate-900 dark:text-white">1-{filteredStaff.length}</span> of <span className="font-medium text-slate-900 dark:text-white">142</span> staff members</p>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50">
                            <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
