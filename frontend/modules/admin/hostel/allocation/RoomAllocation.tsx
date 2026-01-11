import { useState, useEffect } from 'react';
import {
    Users,
    MapPin,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Activity,
    Calendar,
    User,
    ExternalLink,
    ChevronRight,
    ShieldCheck,
    Zap,
    Clock,
    ArrowRight,
    TrendingUp,
    AlertTriangle
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useHostel } from '@/hooks/useHostel';
import Button from '@/components/ui/Button';
import Skeleton from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';

const allocationSchema = z.object({
    studentId: z.string().min(1, 'Student identity required'),
    hostelId: z.string().min(1, 'Hostel node required'),
    roomNo: z.string().min(1, 'Room identifier required'),
    admissionDate: z.string().min(1, 'Synchronized date required'),
});

type AllocationFormValues = z.infer<typeof allocationSchema>;

export default function RoomAllocation() {
    const [activeTab, setActiveTab] = useState<'matrix' | 'allocate'>('matrix');
    const { loading, allocations, hostels, fetchAllocations, fetchHostels, allocateRoom } = useHostel();
    const [assigning, setAssigning] = useState(false);

    const { register, handleSubmit, reset } = useForm<AllocationFormValues>({
        resolver: zodResolver(allocationSchema),
    });

    useEffect(() => {
        fetchAllocations();
        fetchHostels();
    }, [fetchAllocations, fetchHostels]);

    const onAllocate = async (data: AllocationFormValues) => {
        setAssigning(true);
        const success = await allocateRoom(data);
        if (success) {
            reset();
            setActiveTab('matrix');
        }
        setAssigning(false);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Resource Allocation: Room Matrix</h1>
                    <p className="text-sm font-medium text-slate-500 italic">Manage residential status sync and student-to-node mapping across institutional hostels.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => setActiveTab('allocate')}
                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-6 py-6 h-auto font-black text-xs uppercase tracking-widest gap-2 shadow-xl shadow-primary/20"
                    >
                        <Plus size={18} />
                        Execute Allocation
                    </Button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="p-10">
                    {activeTab === 'allocate' ? (
                        <div className="space-y-10">
                            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-8">
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Synchronized Allocation Protocol</h2>
                                <button onClick={() => setActiveTab('matrix')} className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Return to Matrix</button>
                            </div>
                            <form onSubmit={handleSubmit(onAllocate)} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Student Identity Node (ID)</label>
                                        <input
                                            {...register('studentId')}
                                            placeholder="STU-NODE-2024-X42..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Target Residential Hub</label>
                                        <select
                                            {...register('hostelId')}
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                                        >
                                            <option value="">Select Target Hub...</option>
                                            {hostels.map(h => <option key={h.id} value={h.id}>{h.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Temporal Node (Admission Date)</label>
                                        <input
                                            type="date"
                                            {...register('admissionDate')}
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Room Identifier Node</label>
                                        <input
                                            {...register('roomNo')}
                                            placeholder="A-302 / OLYMPUS..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    <Button
                                        type="submit"
                                        disabled={assigning}
                                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-12 py-6 h-auto font-black text-xs uppercase tracking-widest gap-3 shadow-xl shadow-primary/20 transition-all active:scale-95"
                                    >
                                        {assigning ? <Activity size={18} className="animate-spin" /> : <Users size={18} />}
                                        Commit Allocation
                                    </Button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="relative group max-w-md w-full">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Sync Allocation Registry..."
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-slate-900 dark:text-white outline-none ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-primary transition-all"
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button variant="secondary" className="rounded-xl px-6 py-4 h-auto font-black text-[10px] uppercase tracking-widest gap-2 border-2 text-slate-400">
                                        <Filter size={14} />
                                        Matrix Filter
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 overflow-hidden shadow-xl">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b-2 border-slate-100 dark:border-slate-800">
                                            <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Identity Node</th>
                                            <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Residential Hub</th>
                                            <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Room Mapping</th>
                                            <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Status Code</th>
                                            <th className="px-10 py-6"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                        {loading ? (
                                            Array.from({ length: 5 }).map((_, i) => (
                                                <tr key={i}>
                                                    <td className="px-10 py-6"><Skeleton className="h-6 w-32" /></td>
                                                    <td className="px-10 py-6"><Skeleton className="h-6 w-40" /></td>
                                                    <td className="px-10 py-6"><Skeleton className="h-6 w-20" /></td>
                                                    <td className="px-10 py-6"><Skeleton className="h-6 w-24" /></td>
                                                    <td className="px-10 py-6"><Skeleton className="size-8 ml-auto" /></td>
                                                </tr>
                                            ))
                                        ) : allocations.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="px-10 py-24 text-center">
                                                    <div className="flex flex-col items-center gap-4">
                                                        <div className="size-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-200">
                                                            <Users size={32} />
                                                        </div>
                                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic tracking-[0.3em]">Allocation Matrix Offline</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            allocations.map((alloc) => (
                                                <tr key={alloc.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                                    <td className="px-10 py-6">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 font-black text-[10px]">
                                                                {alloc.studentId.substring(0, 2)}
                                                            </div>
                                                            <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tight">{alloc.studentId}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-6">
                                                        <div className="flex items-center gap-2">
                                                            <Home size={12} className="text-primary" />
                                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">{alloc.hostelId}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-6">
                                                        <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest border-2">
                                                            NODE: {alloc.roomNo}
                                                        </Badge>
                                                    </td>
                                                    <td className="px-10 py-6">
                                                        <div className="flex items-center gap-2">
                                                            <div className="size-2 rounded-full bg-emerald-500"></div>
                                                            <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">RESIDENT</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-6 text-right">
                                                        <button className="size-10 rounded-xl hover:bg-white dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 transition-shadow">
                                                            <MoreVertical size={20} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
