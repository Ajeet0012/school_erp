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
    TrendingUp,
    AlertCircle,
    FileText,
    Award,
    ShieldCheck,
    CheckCircle2,
    GraduationCap,
    ClipboardList,
    Flame,
    Star
} from 'lucide-react';
import { statsService } from '@/services/stats.service';
import Button from '@/components/ui/Button';
import Skeleton from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import { toast } from 'react-hot-toast';

export default function StudentDashboard() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await statsService.getStudentStats();
                setStats(data.data || data);
            } catch (error: any) {
                toast.error('Failed to synchronize pedagogical nodes.');
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-2 mb-2 text-primary">
                        PEDAGOGICAL_CORE: STUDENT_INSIGHTS
                    </Badge>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Academic Command Center</h1>
                    <p className="text-sm font-medium text-slate-500 italic">Monitor pedagogical progress, manage temporal schedules, and synchronize with the institutional core.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-amber-500/10 text-amber-600 px-6 py-4 rounded-2xl border-2 border-amber-500/20 shadow-xl shadow-amber-500/5 transition-all hover:scale-105 group">
                        <Flame size={20} className="group-hover:animate-bounce" />
                        <div className="flex flex-col">
                            <span className="text-[8px] font-black uppercase tracking-widest leading-none mb-1">Learning Streak</span>
                            <span className="text-sm font-black leading-none">12 DAYS ACTIVE</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Cumulative GPA', value: '3.8', icon: <GraduationCap className="text-primary" />, trend: 'TOP 5%', color: 'bg-primary/5' },
                    { label: 'Temporal Clock', value: '94.2%', icon: <Clock className="text-emerald-500" />, trend: 'OPTIMAL', color: 'bg-emerald-500/5' },
                    { label: 'Active Tasks', value: '08', icon: <ClipboardList className="text-amber-500" />, trend: '3 DUE TODAY', color: 'bg-amber-500/5' },
                    { label: 'Merit Points', value: '450', icon: <Star className="text-purple-500" />, trend: '+50 RECENT', color: 'bg-purple-500/5' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl relative group overflow-hidden">
                        <div className="relative z-10 flex items-center justify-between mb-6">
                            <div className={`size-14 rounded-2xl ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest border-none p-0 opacity-40 group-hover:opacity-100 transition-opacity">{stat.trend}</Badge>
                        </div>
                        <div className="relative z-10">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                        <div className="p-10">
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic flex items-center gap-3">
                                    <Activity className="text-primary" />
                                    Performance Matrix
                                </h2>
                                <Button variant="secondary" className="bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-3 text-[10px] font-black uppercase text-slate-400 hover:text-primary transition-all">
                                    Full Projection
                                </Button>
                            </div>
                            <div className="h-64 flex items-end justify-between gap-4 px-4">
                                {[85, 92, 78, 88, 95, 82, 90].map((h, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                                        <div className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-2xl relative overflow-hidden flex items-end h-full">
                                            <div
                                                className="w-full bg-primary rounded-2xl transition-all duration-1000 group-hover:bg-primary/80"
                                                style={{ height: `${h}%` }}
                                            >
                                                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10"></div>
                                            </div>
                                        </div>
                                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">W{i + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                        <div className="p-10">
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic flex items-center gap-3">
                                    <Calendar className="text-emerald-500" />
                                    Temporal Protocol
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { time: '09:00 AM', name: 'Mathematics 101', room: 'Room 302', status: 'ACTIVE' },
                                    { time: '10:45 AM', name: 'World History', room: 'Room 104', status: 'PENDING' },
                                    { time: '01:00 PM', name: 'Physics Lab', room: 'Room 205', status: 'PENDING' },
                                ].map((node, i) => (
                                    <div key={i} className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50/50 dark:bg-slate-800/30 border-2 border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-all group">
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col items-center">
                                                <span className="text-[10px] font-black text-slate-900 dark:text-white">{node.time}</span>
                                                <div className="w-0.5 h-6 bg-slate-200 dark:bg-slate-800 my-1"></div>
                                            </div>
                                            <div>
                                                <h4 className="text-[12px] font-black text-slate-900 dark:text-white uppercase tracking-tight">{node.name}</h4>
                                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{node.room}</p>
                                            </div>
                                        </div>
                                        <Badge variant="outline" className={`text-[8px] font-black uppercase tracking-widest border-none ${node.status === 'ACTIVE' ? 'bg-primary text-white animate-pulse' : 'text-slate-400'}`}>
                                            {node.status}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-10">
                        <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-8">Pedagogical Tasks</h3>
                        <div className="space-y-6">
                            {[
                                { title: 'Algebra Worksheet 4.2', due: 'Today', priority: 'HIGH' },
                                { title: 'History Essay Draft', due: 'Tomorrow', priority: 'MEDIUM' },
                                { title: 'Physics Lab Report', due: 'Oct 26', priority: 'LOW' },
                            ].map((task, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="flex items-start justify-between mb-2">
                                        <h4 className="text-[10px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-tight group-hover:text-primary transition-colors">{task.title}</h4>
                                        <span className={`text-[7px] font-black uppercase tracking-widest ${task.priority === 'HIGH' ? 'text-rose-500' : 'text-slate-400'}`}>{task.due}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-1000 ${task.priority === 'HIGH' ? 'bg-rose-500 w-full' : task.priority === 'MEDIUM' ? 'bg-amber-500 w-1/2' : 'bg-slate-200 w-1/4'}`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-10 bg-primary hover:bg-primary/90 text-white rounded-2xl py-6 font-black text-[10px] uppercase tracking-widest gap-2 shadow-xl shadow-primary/20 transition-all active:scale-95">
                            Launch Task Hub
                            <ArrowRight size={14} />
                        </Button>
                    </div>

                    <div className="bg-primary p-10 rounded-[3rem] shadow-xl shadow-primary/20 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 size-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                        <div className="relative z-10">
                            <Zap className="text-white mb-6 animate-pulse" size={32} />
                            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2 italic">Institutional Alert</h3>
                            <p className="text-[10px] font-bold text-blue-100 uppercase tracking-wider leading-relaxed">System-wide synchronization for Annual Science Fair scheduled for 24 Oct. Secure your protocol entry now.</p>
                            <button className="mt-8 text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                Verify Entry
                                <ChevronRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
