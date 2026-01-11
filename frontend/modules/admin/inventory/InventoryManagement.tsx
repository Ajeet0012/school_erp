import { useState, useEffect } from 'react';
import {
    Package,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Activity,
    Tag,
    Layers,
    Archive,
    ArrowUpRight,
    TrendingDown,
    AlertTriangle,
    History,
    User,
    CheckCircle2,
    ShoppingCart
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useInventory } from '@/hooks/useInventory';
import Button from '@/components/ui/Button';
import Skeleton from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';

const itemSchema = z.object({
    name: z.string().min(3, 'Asset identifier too short'),
    category: z.string().min(1, 'Category node required'),
    quantity: z.number().min(0, 'Quantity node required'),
    price: z.string().optional(),
});

type ItemFormValues = z.infer<typeof itemSchema>;

export default function InventoryManagement() {
    const [activeTab, setActiveTab] = useState<'inventory' | 'history' | 'add'>('inventory');
    const { loading, items, history, fetchItems, fetchHistory, createItem } = useInventory();
    const [registering, setRegistering] = useState(false);

    const { register, handleSubmit, reset } = useForm<ItemFormValues>({
        resolver: zodResolver(itemSchema),
    });

    useEffect(() => {
        if (activeTab === 'inventory') fetchItems();
        if (activeTab === 'history') fetchHistory();
    }, [activeTab, fetchItems, fetchHistory]);

    const onRegister = async (data: ItemFormValues) => {
        setRegistering(true);
        const success = await createItem(data);
        if (success) {
            reset();
            setActiveTab('inventory');
        }
        setRegistering(false);
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Institutional Inventory Node</h1>
                    <p className="text-sm font-medium text-slate-500 italic">Monitor resource lifecycle, asset deployment metrics, and supply chain synchronization.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => setActiveTab('add')}
                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-6 py-6 h-auto font-black text-xs uppercase tracking-widest gap-2 shadow-xl shadow-primary/20"
                    >
                        <Plus size={18} />
                        Register Asset Node
                    </Button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="flex border-b border-slate-100 dark:border-slate-800">
                    <button
                        onClick={() => setActiveTab('inventory')}
                        className={`flex-1 py-6 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'inventory' ? 'text-primary bg-primary/5 border-b-2 border-primary' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Resource Matrix
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`flex-1 py-6 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'history' ? 'text-primary bg-primary/5 border-b-2 border-primary' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Issuance Logs
                    </button>
                </div>

                <div className="p-10">
                    {activeTab === 'add' ? (
                        <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-8">
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Asset Registration Protocol</h2>
                                <button onClick={() => setActiveTab('inventory')} className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Return to Matrix</button>
                            </div>
                            <form onSubmit={handleSubmit(onRegister)} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Resource Identifier (Name)</label>
                                        <input
                                            {...register('name')}
                                            placeholder="Quantum Lab Terminal X1..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Classification Hub (Category)</label>
                                        <select
                                            {...register('category')}
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                                        >
                                            <option value="">Select Category Node...</option>
                                            <option value="ELECTRONICS">Matrix: Electronics</option>
                                            <option value="FURNITURE">Matrix: Infrastructure</option>
                                            <option value="STATIONERY">Matrix: Consumables</option>
                                            <option value="SPORTS">Matrix: Athletics</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Node Count (Quantity)</label>
                                        <input
                                            type="number"
                                            {...register('quantity', { valueAsNumber: true })}
                                            placeholder="150"
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Financial Token (Price per Unit)</label>
                                        <input
                                            {...register('price')}
                                            placeholder="$1,240.00"
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    <Button
                                        type="submit"
                                        disabled={registering}
                                        className="bg-primary hover:bg-primary/90 text-white rounded-[2rem] px-12 py-6 h-auto font-black text-xs uppercase tracking-widest gap-3 shadow-xl shadow-primary/20 transition-all active:scale-95"
                                    >
                                        {registering ? <Activity size={18} className="animate-spin" /> : <Archive size={18} />}
                                        Commit Asset Node
                                    </Button>
                                </div>
                            </form>
                        </div>
                    ) : activeTab === 'inventory' ? (
                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="relative group max-w-md w-full">
                                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Sync Resource Identifier..."
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-slate-900 dark:text-white outline-none ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-primary transition-all"
                                    />
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button variant="secondary" className="rounded-xl px-6 py-4 h-auto font-black text-[10px] uppercase tracking-widest gap-2 border-2 text-slate-400">
                                        <Filter size={14} />
                                        Categorical Sync
                                    </Button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {loading ? (
                                    Array.from({ length: 3 }).map((_, i) => (
                                        <Skeleton key={i} className="h-64 rounded-[2.5rem]" />
                                    ))
                                ) : items.length === 0 ? (
                                    <div className="col-span-full py-20 text-center bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border-4 border-dashed border-slate-100 dark:border-slate-800">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="size-20 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-slate-200">
                                                <Package size={40} />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Resource Matrix Offline</p>
                                        </div>
                                    </div>
                                ) : (
                                    items.map((item) => (
                                        <div key={item.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 p-8 space-y-6 hover:border-primary transition-all shadow-xl group overflow-hidden relative">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-1 text-left">
                                                    <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight truncate max-w-[180px]">{item.name}</h3>
                                                    <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-500 border-none text-[8px] font-black uppercase tracking-widest px-3">
                                                        {item.category}
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
                                                            <ShoppingCart size={16} className="text-primary" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Execute Issuance</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer text-rose-500">
                                                            <TrendingDown size={16} />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Write-off Node</span>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-3xl flex flex-col items-center gap-2">
                                                    <Layers size={20} className="text-primary" />
                                                    <div className="text-center">
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Stock</p>
                                                        <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase">{item.quantity} UNITS</p>
                                                    </div>
                                                </div>
                                                <div className="bg-slate-50 dark:bg-slate-800/80 p-5 rounded-3xl flex flex-col items-center gap-2">
                                                    {item.quantity < 10 ? <AlertTriangle size={20} className="text-rose-500 animate-pulse" /> : <CheckCircle2 size={20} className="text-emerald-500" />}
                                                    <div className="text-center">
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status</p>
                                                        <p className={`text-[10px] font-black uppercase ${item.quantity < 10 ? 'text-rose-500' : 'text-emerald-500'}`}>
                                                            {item.quantity < 10 ? 'LOW_STOCK' : 'SUFFICIENT'}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Tag size={12} className="text-slate-400" />
                                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.price || '$0.00'} / UNIT</span>
                                                </div>
                                                <ArrowUpRight size={16} className="text-slate-300 group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Issuance Node Logs</h2>
                                <Button variant="ghost" className="text-[10px] font-black text-primary uppercase tracking-widest hover:bg-primary/5 rounded-xl gap-2 h-auto px-4 py-2">
                                    <Archive size={14} />
                                    Export Protocol
                                </Button>
                            </div>

                            <div className="rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 overflow-hidden shadow-xl">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b-2 border-slate-100 dark:border-slate-800">
                                            <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Asset Node</th>
                                            <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Issued To Identity</th>
                                            <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Temporal Node</th>
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
                                                    <td className="px-10 py-6"><Skeleton className="h-6 w-24" /></td>
                                                    <td className="px-10 py-6"><Skeleton className="h-6 w-16" /></td>
                                                    <td className="px-10 py-6"><Skeleton className="size-8 ml-auto" /></td>
                                                </tr>
                                            ))
                                        ) : history.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="px-10 py-24 text-center">
                                                    <div className="flex flex-col items-center gap-4">
                                                        <div className="size-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-200">
                                                            <History size={32} />
                                                        </div>
                                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">No Historical Data Found</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) : (
                                            history.map((log) => (
                                                <tr key={log.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                                    <td className="px-10 py-6">
                                                        <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tight">{log.itemName}</p>
                                                    </td>
                                                    <td className="px-10 py-6">
                                                        <div className="flex items-center gap-3">
                                                            <User size={14} className="text-primary" />
                                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">{log.issuedTo}</p>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">{new Date(log.issuedDate).toLocaleDateString()}</td>
                                                    <td className="px-10 py-6">
                                                        <Badge className="bg-emerald-500/10 text-emerald-500 border-none text-[8px] font-black uppercase tracking-widest">ISSUED</Badge>
                                                    </td>
                                                    <td className="px-10 py-6 text-right">
                                                        <button className="size-10 rounded-xl hover:bg-white dark:hover:bg-slate-800 flex items-center justify-center text-slate-400">
                                                            <ExternalLink size={18} />
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
