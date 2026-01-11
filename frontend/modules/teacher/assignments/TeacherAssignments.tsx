import { useState, useEffect } from 'react';
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Activity,
    Calendar,
    Clock,
    ChevronRight,
    Zap,
    BookOpen,
    ArrowRight,
    ClipboardList,
    Upload,
    CheckCircle2,
    AlertCircle,
    FileText,
    User,
    ShieldCheck
} from 'lucide-react';
import { homeworkService } from '@/services/homework.service';
import Button from '@/components/ui/Button';
import Skeleton from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import { toast } from 'react-hot-toast';

export default function TeacherAssignments() {
    const [assignments, setAssignments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const data = await homeworkService.getHomework();
                setAssignments(data.data || data);
            } catch (error: any) {
                toast.error('Failed to synchronize classroom deployment nodes.');
            } finally {
                setLoading(false);
            }
        };
        fetchAssignments();
    }, []);

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-2 mb-2 text-primary">
                        FACULTY_CORE: CLASSROOM_DEPLOYMENT
                    </Badge>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Assignment Orchestration</h1>
                    <p className="text-sm font-medium text-slate-500 italic">Distribute academic tasks, monitor submission protocols, and evaluate pedagogical participation.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-10 py-6 h-auto font-black text-xs uppercase tracking-widest gap-2 shadow-xl shadow-primary/20 transition-all active:scale-95">
                        <Plus size={18} />
                        Create Deployment
                    </Button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
                        <div className="flex gap-10">
                            <button className="relative py-4 text-[10px] font-black text-primary uppercase tracking-widest border-b-4 border-primary">Active Tasks</button>
                            <button className="relative py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Digital Archive</button>
                            <button className="relative py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Evaluation Suite</button>
                        </div>
                        <div className="flex gap-4">
                            <div className="relative group min-w-[300px]">
                                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search Task Entity..."
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-3 pl-12 pr-6 text-xs font-bold text-slate-900 dark:text-white outline-none ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-primary transition-all shadow-inner"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {loading ? (
                            Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className="h-32 bg-slate-50 dark:bg-slate-800 rounded-[2rem] animate-pulse"></div>
                            ))
                        ) : (
                            assignments.map((task) => (
                                <div key={task.id} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 p-8 hover:border-primary/30 hover:shadow-2xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer overflow-hidden relative">
                                    <div className="absolute left-0 top-0 w-2 h-full bg-primary/20 group-hover:bg-primary transition-all"></div>

                                    <div className="flex items-center gap-6 flex-1">
                                        <div className="size-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <ClipboardList size={28} />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-3">
                                                <h4 className="text-base font-black text-slate-900 dark:text-white uppercase tracking-tight">{task.title}</h4>
                                                <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-600 border-none">ACTIVE</Badge>
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{task.class?.name || 'Standard Cluster'} • {task.subject?.name || 'Academic Core'}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-10">
                                        <div className="flex flex-col items-center">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Due Temporal</p>
                                            <div className="flex items-center gap-2">
                                                <Clock size={12} className="text-primary" />
                                                <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase">{new Date(task.dueDate).toLocaleDateString()}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Response Ratio</p>
                                            <div className="flex items-center gap-2">
                                                <Activity size={12} className="text-emerald-500" />
                                                <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase">24 / 32 Nodes</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 pl-6 border-l-2 border-slate-50 dark:border-slate-800">
                                            <Button variant="secondary" className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 text-slate-400 hover:text-primary transition-all">
                                                <Upload size={18} />
                                            </Button>
                                            <Button variant="secondary" className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-3 text-slate-400 hover:text-primary transition-all">
                                                <MoreVertical size={18} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-12 flex items-center justify-between px-4">
                        <div className="flex items-center gap-2 text-[9px] font-black text-emerald-500 uppercase tracking-widest">
                            <ShieldCheck size={14} />
                            PROTOCOL_SECURE: AES-256
                        </div>
                        <button className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all hover:translate-x-1">
                            Access Orchestration Center
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
