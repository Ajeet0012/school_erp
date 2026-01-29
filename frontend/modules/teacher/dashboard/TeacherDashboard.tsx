import { useState, useEffect } from 'react';
import {
    Users,
    BookOpen,
    Calendar,
    Clock,
    TrendingUp,
    Activity,
    Zap,
    ChevronRight,
    MoreVertical,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    ShieldCheck,
    Star,
    Award,
    Layers
} from 'lucide-react';
import { statsService } from '@/services/stats.service';
import Button from '@/components/ui/Button';
import Skeleton from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import { toast } from 'react-hot-toast';

export default function TeacherDashboard() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await statsService.getTeacherStats();
                setStats(data.data || data);
            } catch (error: any) {
                toast.error('Failed to synchronize dashboard performance nodes.');
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    const activities = [
        { title: 'Homework Analysis', detail: 'Class 10-A, Mathematics', status: 'In Review', icon: <BookOpen className="text-primary" /> },
        { title: 'Attendance Sync', detail: 'Complete for Class 9-B', status: 'Certified', icon: <CheckCircle2 className="text-emerald-500" /> },
        { title: 'Result Protocol', detail: 'Internal Assessment Q1', status: 'Pending', icon: <Zap className="text-amber-500" /> },
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-700 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Faculty Hub: Orchestration</h1>
                    <p className="text-sm font-medium text-slate-500 italic">Centralized intelligence for academic deployment, student performance tracking, and temporal management.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-8 py-6 h-auto font-black text-xs uppercase tracking-widest gap-2 shadow-xl shadow-primary/20">
                        <Activity size={18} />
                        Session Intelligence
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Assigned Classes', value: stats?.totalClasses || '0', icon: <Layers className="text-primary" />, trend: '+1 Node' },
                    { label: 'Student Cohort', value: stats?.totalStudents || '0', icon: <Users className="text-indigo-500" />, trend: 'Stable' },
                    { label: 'Attendance Ratio', value: stats?.attendanceRate || '0%', icon: <Activity className="text-emerald-500" />, trend: '+2.1%' },
                    { label: 'Faculty Score', value: stats?.rating || '0/5', icon: <Star className="text-amber-500" />, trend: 'EXCELLENT' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative group hover:border-primary/50 transition-all">
                        <div className="relative z-10 flex flex-col gap-8">
                            <div className="flex items-center justify-between">
                                <div className="size-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                    {stat.icon}
                                </div>
                                <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest border-none p-0 opacity-40 group-hover:opacity-100 transition-opacity">{stat.trend}</Badge>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{stat.label}</p>
                                <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{loading ? <Skeleton className="h-8 w-20" /> : stat.value}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
                <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-22 overflow-hidden flex flex-col">
                    <div className="p-10 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Academic Performance Matrix</h2>
                        <button className="text-[10px] font-black text-primary uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                            Spectrum View
                            <ArrowRight size={14} />
                        </button>
                    </div>
                    <div className="p-10 flex-1 flex flex-col justify-center gap-12">
                        <div className="h-64 bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] border-2 border-dashed border-slate-100 dark:border-slate-800 flex items-end justify-center gap-6 p-10 group">
                            {[30, 60, 40, 80, 50, 70, 90, 45].map((h, i) => (
                                <div key={i} className="w-4 bg-primary/20 rounded-t-lg relative group/bar hover:bg-primary transition-all cursor-pointer" style={{ height: `${h}%` }}>
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity text-[7px] font-black text-primary">{h}%</div>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-10 px-4">
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tight">Q1 Synergy Growth</p>
                                    <p className="text-[8px] font-black text-emerald-500 uppercase tracking-widest mt-1">+14% Variance</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tight">Resource Utilization</p>
                                    <p className="text-[8px] font-black text-indigo-500 uppercase tracking-widest mt-1">92% Operational</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 space-y-10">
                    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 p-10 shadow-xl space-y-8">
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">Temporal Protocols</h3>
                        <div className="space-y-4">
                            {activities.map((act, i) => (
                                <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border-2 border-transparent hover:border-slate-100 transition-all cursor-pointer group shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                            {act.icon}
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-1">{act.title}</p>
                                            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{act.detail}</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest border-lg px-2 py-1">{act.status}</Badge>
                                </div>
                            ))}
                        </div>
                        <Button variant="secondary" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-6 text-[10px] font-black uppercase tracking-widest gap-2 text-slate-400 hover:text-primary transition-all">
                            Access Orchestration Registry
                            <ArrowRight size={14} />
                        </Button>
                    </div>

                    <div className="bg-slate-900 dark:bg-white rounded-[3rem] p-10 text-white dark:text-slate-900 shadow-2xl relative overflow-hidden group">
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center justify-between">
                                <Award size={32} className="text-primary" />
                                <ShieldCheck size={20} className="text-primary opacity-50" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black uppercase tracking-tight italic">Elite Certification</h3>
                                <p className="text-white/40 dark:text-slate-500 text-[10px] font-medium leading-relaxed mt-2">Faculty node SJ-2024 has achieved the Platinum Pedagogical standard. Maintain protocols to sustain status.</p>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 size-40 bg-primary opacity-5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
