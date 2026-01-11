import { useState, useEffect } from 'react';
import {
    FileText,
    Plus,
    Search,
    Filter,
    MoreVertical,
    Activity,
    Layers,
    ShieldCheck,
    ChevronRight,
    Zap,
    BookOpen,
    User,
    ArrowRight,
    TrendingUp,
    AlertCircle,
    Layout,
    Clock,
    CheckCircle2,
    XCircle
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { homeworkService } from '@/services/homework.service';
import Button from '@/components/ui/Button';
import Skeleton from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/DropdownMenu';
import { toast } from 'react-hot-toast';

const homeworkSchema = z.object({
    title: z.string().min(1, 'Assignment title required'),
    classId: z.string().min(1, 'Academic node required'),
    subjectId: z.string().min(1, 'Subject identifier required'),
    dueDate: z.string().min(1, 'Temporal deadline required'),
    description: z.string().optional(),
});

type HomeworkFormValues = z.infer<typeof homeworkSchema>;

export default function HomeworkManagement() {
    const [homeworks, setHomeworks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'matrix' | 'deploy'>('matrix');
    const [registering, setRegistering] = useState(false);

    const { register, handleSubmit, reset } = useForm<HomeworkFormValues>({
        resolver: zodResolver(homeworkSchema),
    });

    const fetchHomeworks = async () => {
        setLoading(true);
        try {
            const data = await homeworkService.getAll();
            setHomeworks(data.data || data);
        } catch (error: any) {
            toast.error(error.message || 'Failed to fetch homework registry');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHomeworks();
    }, []);

    const onDeploy = async (data: HomeworkFormValues) => {
        setRegistering(true);
        try {
            await homeworkService.create(data);
            toast.success('Assignment Protocol: Project successfully deployed to academic nodes.');
            reset();
            setActiveTab('matrix');
            fetchHomeworks();
        } catch (error: any) {
            toast.error(error.message || 'Failed to deploy assignment');
        } finally {
            setRegistering(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Academic Deliverables: Homework</h1>
                    <p className="text-sm font-medium text-slate-500 italic">Deploy assignments, track student submission metrics, and manage evaluation cycles.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={() => setActiveTab('deploy')}
                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-6 py-6 h-auto font-black text-xs uppercase tracking-widest gap-2 shadow-xl shadow-primary/20"
                    >
                        <Plus size={18} />
                        Deploy Assignment Node
                    </Button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="p-10">
                    {activeTab === 'deploy' ? (
                        <div className="space-y-10">
                            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-8">
                                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Assignment Deployment Protocol</h2>
                                <button onClick={() => setActiveTab('matrix')} className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline">Return to Matrix</button>
                            </div>
                            <form onSubmit={handleSubmit(onDeploy)} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Assignment Identifier (Title)</label>
                                        <input
                                            {...register('title')}
                                            placeholder="Thermodynamics Problem Set 4..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Target Subject Node</label>
                                        <input
                                            {...register('subjectId')}
                                            placeholder="PHY-402..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Temporal Deadline (Due Date)</label>
                                        <input
                                            type="date"
                                            {...register('dueDate')}
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Execution Framework (Description)</label>
                                        <textarea
                                            {...register('description')}
                                            rows={3}
                                            placeholder="Detailed protocol for assignment execution..."
                                            className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-5 px-8 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="md:col-span-2 flex justify-end">
                                    <Button
                                        type="submit"
                                        disabled={registering}
                                        className="bg-primary hover:bg-primary/90 text-white rounded-[2rem] px-12 py-6 h-auto font-black text-xs uppercase tracking-widest gap-2 shadow-xl shadow-primary/20 transition-all active:scale-95"
                                    >
                                        {registering ? <Activity size={18} className="animate-spin" /> : <FileText size={18} />}
                                        Commit Deployment
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
                                        placeholder="Sync Deliverable Identifier..."
                                        className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-4 pl-14 pr-6 text-sm font-bold text-slate-900 dark:text-white outline-none ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-primary transition-all"
                                    />
                                </div>
                                <Button variant="secondary" className="rounded-xl px-6 py-4 h-auto font-black text-[10px] uppercase tracking-widest gap-2 border-2 text-slate-400">
                                    <Filter size={14} />
                                    Categorical Node Filter
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {loading ? (
                                    Array.from({ length: 3 }).map((_, i) => (
                                        <Skeleton key={i} className="h-80 rounded-[3rem]" />
                                    ))
                                ) : homeworks.length === 0 ? (
                                    <div className="col-span-full py-20 text-center bg-slate-50 dark:bg-slate-800/50 rounded-[3rem] border-4 border-dashed border-slate-100 dark:border-slate-800">
                                        <div className="flex flex-col items-center gap-4">
                                            <div className="size-20 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-slate-200">
                                                <FileText size={40} />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic font-bold">No Deliverable Nodes Detected</p>
                                        </div>
                                    </div>
                                ) : (
                                    homeworks.map((hw) => (
                                        <div key={hw.id} className="bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-slate-50 dark:border-slate-800 p-8 space-y-8 hover:border-primary transition-all shadow-xl group cursor-pointer overflow-hidden relative">
                                            <div className="flex justify-between items-start relative z-10 text-left">
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-3">
                                                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight truncate max-w-[200px]">{hw.title}</h3>
                                                        <Badge color="blue" className="bg-blue-500/10 text-blue-600 border-none text-[8px] font-black uppercase tracking-widest px-3">
                                                            {hw.subjectId}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Assignment Deliverable</p>
                                                </div>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <button className="size-10 rounded-2xl hover:bg-white dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 dark:border-slate-800">
                                                            <MoreVertical size={20} />
                                                        </button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl">
                                                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer">
                                                            <CheckCircle2 size={16} className="text-emerald-500" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Mark Evaluated</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer">
                                                            <Activity size={16} className="text-primary" />
                                                            <span className="text-[10px] font-black uppercase tracking-widest">Submission Spectrum</span>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>

                                            <div className="space-y-4 relative z-10">
                                                <div className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/80">
                                                    <div className="size-12 rounded-2xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
                                                        <Clock size={20} />
                                                    </div>
                                                    <div className="flex-1 min-w-0 text-left">
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Temporal Deadline</p>
                                                        <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase">{new Date(hw.dueDate).toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-[2rem] flex flex-col items-center gap-2 border border-slate-100 dark:border-slate-800">
                                                        <Layers size={22} className="text-primary" />
                                                        <div className="text-center">
                                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Submissions</p>
                                                            <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase">24/40 Nodes</p>
                                                        </div>
                                                    </div>
                                                    <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-[2rem] flex flex-col items-center gap-2 border border-slate-100 dark:border-slate-800">
                                                        <TrendingUp size={22} className="text-emerald-500" />
                                                        <div className="text-center">
                                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Performance</p>
                                                            <p className="text-[10px] font-black text-emerald-500 uppercase">82% SYNC</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between relative z-10 text-left">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                    <ShieldCheck size={14} className="text-emerald-500" />
                                                    ACADEMIC_CERTIFIED
                                                </p>
                                                <span className="text-[9px] font-black text-primary uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                                    Inspect Spectrum
                                                    <ChevronRight size={14} />
                                                </span>
                                            </div>

                                            {/* Abstract Design Element */}
                                            <div className="absolute -right-8 -top-8 size-40 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all"></div>
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
