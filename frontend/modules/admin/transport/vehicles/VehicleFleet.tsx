import { useState, useEffect } from 'react';
import {
    Bus,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Activity,
    Fuel,
    Tool,
    ShieldCheck,
    Calendar,
    User,
    ExternalLink,
    ChevronRight,
    TrendingUp,
    AlertTriangle
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTransport } from '@/hooks/useTransport';
import Button from '@/components/ui/Button';
import Skeleton from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';

const vehicleSchema = z.object({
    vehicleNo: z.string().min(3, 'Registration protocol required'),
    vehicleModel: z.string().min(2, 'Asset model required'),
    driverName: z.string().min(3, 'Operator identity required'),
    driverPhone: z.string().min(10, 'Contact sync protocol required'),
    capacity: z.number().min(1, 'Capacity node required'),
});

type VehicleFormValues = z.infer<typeof vehicleSchema>;

export default function VehicleFleet() {
    const [activeTab, setActiveTab] = useState<'fleet' | 'add'>('fleet');
    const { loading, vehicles, fetchVehicles, createVehicle } = useTransport();
    const [adding, setAdding] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<VehicleFormValues>({
        resolver: zodResolver(vehicleSchema),
    });

    useEffect(() => {
        fetchVehicles();
    }, [fetchVehicles]);

    const onAdd = async (data: VehicleFormValues) => {
        setAdding(true);
        const success = await createVehicle(data);
        if (success) {
            reset();
            setActiveTab('fleet');
        }
        setAdding(false);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Transit Assets: Vehicle Fleet</h1>
                    <p className="text-sm font-medium text-slate-500 italic">Monitor fleet operational status, operator metrics, and institutional asset deployment.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => setActiveTab('add')}
                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-6 py-6 h-auto font-black text-xs uppercase tracking-widest gap-2 shadow-xl shadow-primary/20"
                    >
                        <Plus size={18} />
                        Add Fleet Asset
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Fleet Magnitude', value: '24 Nodes', icon: <Bus className="text-primary" /> },
                    { label: 'Operational Sync', value: '100%', icon: <ShieldCheck className="text-emerald-500" /> },
                    { label: 'Maintenance Log', value: '0 Critical', icon: <AlertTriangle className="text-amber-500" /> },
                    { label: 'Efficiency Index', value: '94.2%', icon: <Activity className="text-indigo-500" /> },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative group hover:border-primary/50 transition-all">
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="size-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{stat.value}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="p-10">
                    {activeTab === 'add' ? (
                        <div className="space-y-10">
                            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-8">
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Fleet Expansion Registry</h2>
                                <button onClick={() => setActiveTab('fleet')} className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Return to Fleet Matrix</button>
                            </div>
                            <form onSubmit={handleSubmit(onAdd)} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Registration protocol (Vehicle No)</label>
                                        <input
                                            {...register('vehicleNo')}
                                            placeholder="TRANS-INST-2024-42..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Asset Architecture (Model)</label>
                                        <input
                                            {...register('vehicleModel')}
                                            placeholder="Solaris Transit X400..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Primary Operator (Driver Name)</label>
                                        <input
                                            {...register('driverName')}
                                            placeholder="Captain Robert Miller..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Sync Protocol (Phone)</label>
                                            <input
                                                {...register('driverPhone')}
                                                placeholder="+1-SYNC-NODE..."
                                                className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Payload Limit</label>
                                            <input
                                                type="number"
                                                {...register('capacity', { valueAsNumber: true })}
                                                placeholder="56"
                                                className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    <Button
                                        type="submit"
                                        disabled={adding}
                                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-12 py-6 h-auto font-black text-xs uppercase tracking-widest gap-3 shadow-xl shadow-primary/20 transition-all active:scale-95"
                                    >
                                        {adding ? <Activity size={18} className="animate-spin" /> : <Plus size={18} />}
                                        Register Fleet Asset
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
                                        placeholder="Sync Asset registration..."
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-slate-900 dark:text-white outline-none ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-primary transition-all"
                                    />
                                </div>
                                <Button variant="secondary" className="rounded-xl px-6 py-4 h-auto font-black text-[10px] uppercase tracking-widest gap-2 border-2 text-slate-400">
                                    <Filter size={14} />
                                    Fleet categorization
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {loading ? (
                                    Array.from({ length: 3 }).map((_, i) => (
                                        <Skeleton key={i} className="h-80 rounded-[2.5rem]" />
                                    ))
                                ) : vehicles.length === 0 ? (
                                    <div className="col-span-full py-20 text-center bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border-4 border-dashed border-slate-100 dark:border-slate-800">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="size-20 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-slate-200">
                                                <Bus size={40} />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Fleet Registry Empty</p>
                                        </div>
                                    </div>
                                ) : (
                                    vehicles.map((v) => (
                                        <div key={v.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 p-8 space-y-8 hover:border-primary transition-all shadow-xl group cursor-pointer overflow-hidden relative">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{v.vehicleNo}</h3>
                                                        <Badge color="emerald" className="bg-emerald-500/10 text-emerald-500 border-none text-[8px] font-black uppercase tracking-widest">STABLE</Badge>
                                                    </div>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{v.vehicleModel}</p>
                                                </div>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <button className="size-10 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400">
                                                            <MoreVertical size={20} />
                                                        </button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl">
                                                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer">
                                                            <Activity size={16} className="text-primary" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Operations Log</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer">
                                                            <Fuel size={16} className="text-amber-500" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Efficiency Metrics</span>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80">
                                                    <div className="size-10 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-primary">
                                                        <User size={18} />
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Operator Node</p>
                                                        <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase truncate">{v.driverName}</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 flex flex-col gap-1">
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 text-center">Payload</p>
                                                        <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase text-center">{v.capacity} UNITS</p>
                                                    </div>
                                                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 flex flex-col gap-1">
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1 text-center">Status</p>
                                                        <p className="text-[10px] font-black text-emerald-500 uppercase text-center">SYNCED</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={12} className="text-slate-400" />
                                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">CERTIFIED: DEC-2024</span>
                                                </div>
                                                <span className="text-[9px] font-black text-primary uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                                    Asset Detail
                                                    <ChevronRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
