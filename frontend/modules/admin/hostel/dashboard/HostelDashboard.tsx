import Head from 'next/head';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';

export default function HostelDashboard() {
    const roomBlocks = [
        {
            name: 'Block A - Boys Hostel',
            floor: 'Ground Floor',
            rooms: [
                { id: '101', number: '101', status: '1 Spot Left', statusColor: 'green', capacity: 3, occupied: 2, type: 'occupied' },
                { id: '102', number: '102', status: 'Full', statusColor: 'slate', capacity: 2, occupied: 2, type: 'full' },
                { id: '103', number: '103', status: 'Vacant', statusColor: 'green', capacity: 2, occupied: 0, type: 'vacant' },
                { id: '104', number: '104', status: 'Maint.', statusColor: 'orange', capacity: 2, occupied: 0, type: 'maintenance' },
                { id: '105', number: '105', status: 'Full', statusColor: 'slate', capacity: 3, occupied: 3, type: 'full' },
            ]
        },
        {
            name: 'Block B - Girls Hostel',
            floor: 'Ground Floor',
            rooms: [
                { id: 'G-01', number: 'G-01', status: 'Full', statusColor: 'slate', capacity: 2, occupied: 2, type: 'full' },
                { id: 'G-02', number: 'G-02', status: 'Full', statusColor: 'slate', capacity: 2, occupied: 2, type: 'full' },
                { id: 'G-03', number: 'G-03', status: '1 Spot Left', statusColor: 'green', capacity: 2, occupied: 1, type: 'occupied' },
                { id: 'G-04', number: 'G-04', status: 'Vacant', statusColor: 'green', capacity: 2, occupied: 0, type: 'vacant' },
            ]
        }
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Hostel Management - School ERP</title>
                    </Head>

                    <div className="flex flex-col gap-8">
                        {/* Header */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap justify-between items-end gap-4">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Hostel Management</h1>
                                    <p className="text-slate-500 dark:text-slate-400 text-base">Manage student accommodation, room allocations, and facilities.</p>
                                </div>
                                <button className="group flex items-center justify-center gap-2 cursor-pointer overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-sm transition-all">
                                    <span className="material-symbols-outlined text-[20px]">add</span>
                                    <span className="truncate">Allocate Room</span>
                                </button>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Capacity</p>
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 rounded-md">bed</span>
                                </div>
                                <div className="flex items-end gap-2 mt-2">
                                    <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">500 Beds</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Occupancy Rate</p>
                                    <span className="material-symbols-outlined text-green-600 bg-green-100 dark:bg-green-900/30 p-1.5 rounded-md">trending_up</span>
                                </div>
                                <div className="flex items-end gap-2 mt-2">
                                    <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">85%</p>
                                    <span className="text-green-600 text-xs font-bold mb-1 px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 rounded">+2%</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mt-3">
                                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Vacant Beds</p>
                                    <span className="material-symbols-outlined text-slate-500 bg-slate-100 dark:bg-slate-700 p-1.5 rounded-md">door_open</span>
                                </div>
                                <div className="flex items-end gap-2 mt-2">
                                    <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">75 Beds</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-[#1e2936] border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Pending Requests</p>
                                    <span className="material-symbols-outlined text-orange-500 bg-orange-100 dark:bg-orange-900/30 p-1.5 rounded-md">pending_actions</span>
                                </div>
                                <div className="flex items-end gap-2 mt-2">
                                    <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">12</p>
                                    <span className="text-orange-600 text-xs font-bold mb-1 px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 rounded">New</span>
                                </div>
                            </div>
                        </div>

                        {/* Tabs & Content */}
                        <div className="flex flex-col gap-0 bg-white dark:bg-[#1e2936] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            {/* Tabs Header */}
                            <div className="flex flex-wrap items-center justify-between border-b border-slate-200 dark:border-slate-700 px-4 pt-2 bg-slate-50/50 dark:bg-slate-800/50">
                                <div className="flex gap-6 overflow-x-auto">
                                    <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 pt-2 px-1">
                                        <p className="text-sm font-bold leading-normal tracking-wide">Room View</p>
                                    </button>
                                    <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pb-3 pt-2 px-1 transition-colors">
                                        <p className="text-sm font-bold leading-normal tracking-wide">Student List</p>
                                    </button>
                                    <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pb-3 pt-2 px-1 transition-colors">
                                        <p className="text-sm font-bold leading-normal tracking-wide">Facilities & Maintenance</p>
                                    </button>
                                </div>
                            </div>

                            {/* Filters Toolbar */}
                            <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex flex-wrap gap-3 items-center justify-between">
                                <div className="flex flex-wrap gap-3 flex-1">
                                    <div className="relative w-full max-w-[280px]">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">search</span>
                                        <input className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" placeholder="Search room or student..." type="text" />
                                    </div>
                                    <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:border-primary cursor-pointer">
                                        <option>All Blocks</option>
                                        <option>Block A (Boys)</option>
                                        <option>Block B (Girls)</option>
                                    </select>
                                    <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:border-primary cursor-pointer">
                                        <option>All Floors</option>
                                        <option>Ground Floor</option>
                                        <option>1st Floor</option>
                                        <option>2nd Floor</option>
                                    </select>
                                    <select className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:border-primary cursor-pointer">
                                        <option>Status: Any</option>
                                        <option>Vacant</option>
                                        <option>Occupied</option>
                                        <option>Maintenance</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-500"></div> Vacant</div>
                                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-primary"></div> Occupied</div>
                                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-orange-500"></div> Maint.</div>
                                </div>
                            </div>

                            {/* Tab Content Area */}
                            <div className="p-6 bg-slate-50/30 dark:bg-slate-800/20 min-h-[500px]">
                                {roomBlocks.map((block, idx) => (
                                    <div key={idx} className="mb-8 last:mb-0">
                                        <div className="flex items-center gap-3 mb-4">
                                            <h2 className="text-slate-900 dark:text-white text-lg font-bold">{block.name}</h2>
                                            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">{block.floor}</span>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                            {block.rooms.map((room) => (
                                                <div key={room.id} className={`group flex flex-col border rounded-lg p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden ${room.type === 'maintenance' ? 'bg-orange-50/50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800/30' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                                                    {room.type === 'maintenance' && (
                                                        <div className="absolute -right-3 -top-3 opacity-10">
                                                            <span className="material-symbols-outlined text-[80px] text-orange-500">build</span>
                                                        </div>
                                                    )}
                                                    <div className="flex justify-between items-center mb-3 relative z-10">
                                                        <h3 className="font-bold text-slate-800 dark:text-slate-100">Room {room.number}</h3>
                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${room.statusColor === 'green' ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' : room.statusColor === 'orange' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'}`}>
                                                            {room.status}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 mb-3 relative z-10">
                                                        {[...Array(room.capacity)].map((_, i) => (
                                                            <span key={i} className={`material-symbols-outlined text-[24px] ${i < room.occupied ? 'text-primary' : room.type === 'maintenance' ? 'text-orange-300' : 'text-slate-300 dark:text-slate-600'}`}>{room.occupied > i ? 'bed' : 'bed'}</span>
                                                        ))}
                                                    </div>
                                                    <div className={`mt-auto pt-3 border-t flex justify-between items-center text-xs relative z-10 ${room.type === 'maintenance' ? 'border-orange-100 dark:border-orange-800/30 text-orange-600 dark:text-orange-400' : 'border-slate-100 dark:border-slate-700 text-slate-500'}`}>
                                                        <span>{room.type === 'maintenance' ? 'Repairs ongoing' : `${room.capacity} Bed Capacity`}</span>
                                                        <span className="group-hover:text-primary font-medium transition-colors">{room.type === 'maintenance' ? 'Report →' : 'Details →'}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
