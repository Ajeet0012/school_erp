import { useState, useEffect } from 'react';
import {
    Home,
    MapPin,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Activity,
    ShieldCheck,
    Zap,
    Coffee,
    Bed,
    Layers,
    ChevronRight,
    TrendingUp,
    AlertCircle
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

const hostelSchema = z.object({
    name: z.string().min(3, 'Hostel identifier too short'),
    type: z.enum(['BOYS', 'GIRLS', 'STAFF', 'GUEST']).default('BOYS'),
    address: z.string().min(10, 'Spatial node (address) required'),
    capacity: z.number().min(1, 'Capacity node required'),
});

type HostelFormValues = z.infer<typeof hostelSchema>;

export default function HostelRegistry() {
    const [activeTab, setActiveTab] = useState<'registry' | 'create'>('registry');
    const { loading, hostels, fetchHostels, createHostel } = useHostel();
    const [registering, setRegistering] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<HostelFormValues>({
        resolver: zodResolver(hostelSchema),
        defaultValues: { type: 'BOYS' }
    });

    useEffect(() => {
        fetchHostels();
    }, [fetchHostels]);

    const onRegister = async (data: HostelFormValues) => {
        setRegistering(true);
        const success = await createHostel(data);
        if (success) {
            reset();
            setActiveTab('registry');
        }
        setRegistering(false);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Residential Node: Hostel Registry</h1>
                    <p className="text-sm font-medium text-slate-500 italic">Curate institutional residential infrastructure and monitor occupancy metrics.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => setActiveTab('create')}
                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-6 py-6 h-auto font-black text-xs uppercase tracking-widest gap-2 shadow-xl shadow-primary/20"
                    >
                        <Plus size={18} />
                        Register Residential Hub
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Residential Hubs', value: '08 Nodes', icon: <Home className="text-primary" /> },
                    { label: 'Capacity Node', value: '1,240 Units', icon: <Layers className="text-indigo-500" /> },
                    { label: 'Occupancy Rate', value: '92.4%', icon: <ShieldCheck className="text-emerald-500" /> },
                    { label: 'System Alerts', value: 'STABLE', icon: <Zap className="text-amber-500" /> },
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
                    {activeTab === 'create' ? (
                        <div className="space-y-10">
                            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-8">
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Hostel Architecture Registry</h2>
                                <button onClick={() => setActiveTab('registry')} className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Return to Registry</button>
                            </div>
                            <form onSubmit={handleSubmit(onRegister)} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Hostel Identifier (Name)</label>
                                        <input
                                            {...register('name')}
                                            placeholder="Olympus North Wing..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Demographic Classification</label>
                                        <select
                                            {...register('type')}
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                                        >
                                            <option value="BOYS">Identity: Male Synergy</option>
                                            <option value="GIRLS">Identity: Female Synergy</option>
                                            <option value="STAFF">Identity: Faculty Lounge</option>
                                            <option value="GUEST">Identity: Guest Protocol</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Payload Units (Capacity)</label>
                                        <input
                                            type="number"
                                            {...register('capacity', { valueAsNumber: true })}
                                            placeholder="250"
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Spatial Node (Address)</label>
                                        <textarea
                                            {...register('address')}
                                            rows={3}
                                            placeholder="Hostel Complex B, Sector 4, Infrastructure City..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    <Button
                                        type="submit"
                                        disabled={registering}
                                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-12 py-6 h-auto font-black text-xs uppercase tracking-widest gap-3 shadow-xl shadow-primary/20 transition-all active:scale-95"
                                    >
                                        {registering ? <Activity size={18} className="animate-spin" /> : <Home size={18} />}
                                        Deploy Residential Node
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
                                        placeholder="Sync Hostel Hub..."
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-slate-900 dark:text-white outline-none ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-primary transition-all"
                                    />
                                </div>
                                <Button variant="secondary" className="rounded-xl px-6 py-4 h-auto font-black text-[10px] uppercase tracking-widest gap-2 border-2 text-slate-400">
                                    <Filter size={14} />
                                    Attribute Filter
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {loading ? (
                                    Array.from({ length: 3 }).map((_, i) => (
                                        <Skeleton key={i} className="h-80 rounded-[3rem]" />
                                    ))
                                ) : hostels.length === 0 ? (
                                    <div className="col-span-full py-20 text-center bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border-4 border-dashed border-slate-100 dark:border-slate-800">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="size-20 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-slate-200">
                                                <Home size={40} />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Residential Registry Empty</p>
                                        </div>
                                    </div>
                                ) : (
                                    hostels.map((hostel) => (
                                        <div key={hostel.id} className="bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-slate-50 dark:border-slate-800 p-8 space-y-8 hover:border-primary transition-all shadow-xl group cursor-pointer overflow-hidden relative">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-1">
                                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{hostel.name}</h3>
                                                    <Badge className={`bg-primary/10 text-primary border-none text-[8px] font-black uppercase tracking-widest px-3`}>
                                                        {hostel.type} HUB
                                                    </Badge>
                                                </div>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <button className="size-10 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400">
                                                            <MoreVertical size={20} />
                                                        </button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl">
                                                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer">
                                                            <Zap size={16} className="text-amber-500" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Utility Metrics</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer">
                                                            <Coffee size={16} className="text-primary" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Dining Protocol</span>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="flex items-center gap-4 p-4 rounded-3xl bg-slate-50 dark:bg-slate-800/80">
                                                    <div className="size-12 rounded-2xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                        <MapPin size={20} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Spatial Node</p>
                                                        <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase truncate">{hostel.address}</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/80 flex flex-col items-center gap-2">
                                                        <Bed size={18} className="text-indigo-500" />
                                                        <div>
                                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Payload</p>
                                                            <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase text-center">{hostel.capacity} UNITS</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/80 flex flex-col items-center gap-2">
                                                        <TrendingUp size={18} className="text-emerald-500" />
                                                        <div>
                                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-center">Occupancy</p>
                                                            <p className="text-[10px] font-black text-emerald-500 uppercase text-center">92% SYNC</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                    <ShieldCheck size={14} className="text-emerald-500" />
                                                    CERTIFIED_HUB
                                                </span>
                                                <Button variant="ghost" className="text-[9px] font-black text-primary uppercase tracking-widest hover:bg-primary/5 rounded-xl flex items-center gap-2 h-auto px-4 py-2 group-hover:gap-3 transition-all">
                                                    Inspect Matrix
                                                    <ChevronRight size={14} />
                                                </Button>
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
