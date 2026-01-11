import { useParent } from '@/contexts/ParentContext';
import {
    Users,
    GraduationCap,
    TrendingUp,
    Clock,
    Calendar,
    ChevronRight,
    Activity,
    AlertCircle,
    CheckCircle2,
    BookOpen
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function ParentDashboard() {
    const { selectedChildId, childrenList } = useParent();

    // Mock Data Generators based on Context
    const getStats = () => {
        if (selectedChildId === 'ALL') {
            return [
                { label: 'Total Wards', value: childrenList.length, icon: <Users className="text-primary" />, sub: 'ACTIVE' },
                { label: 'Pending Dues', value: '$1,250', icon: <AlertCircle className="text-rose-500" />, sub: 'ACTION_REQUIRED' },
                { label: 'Avg Attendance', value: '94%', icon: <Activity className="text-emerald-500" />, sub: 'ACADEMIC_YEAR' },
            ];
        }
        // Child Specific Stats
        return [
            { label: 'Attendance', value: '96%', icon: <CheckCircle2 className="text-emerald-500" />, sub: 'EXCELLENT' },
            { label: 'Upcoming Exam', value: 'Math', icon: <Calendar className="text-primary" />, sub: 'IN_2_DAYS' },
            { label: 'Assignments', value: '03', icon: <BookOpen className="text-amber-500" />, sub: 'PENDING' },
        ];
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            {/* Welcome Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-2 mb-2 text-primary">
                        GUARDIAN_PORTAL: DASHBOARD
                    </Badge>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        {selectedChildId === 'ALL' ? 'Family Overview' : `Insights: ${childrenList.find(c => c.id === selectedChildId)?.name}`}
                    </h1>
                    <p className="text-sm font-medium text-slate-500 italic">
                        {selectedChildId === 'ALL'
                            ? 'Monitor progress across all your enrolled children.'
                            : 'Detailed academic and pastoral tracking for this student.'}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    {selectedChildId === 'ALL' && (
                        <Button variant="outline" className="border-2 rounded-2xl font-bold text-xs uppercase tracking-wider">
                            Manage Family Profile
                        </Button>
                    )}
                    <Button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl px-6 py-3 h-auto font-black text-[10px] uppercase tracking-widest hover:opacity-90 transition-all">
                        Download Reports
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getStats().map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl relative group overflow-hidden">
                        <div className="relative z-10 flex items-center justify-between mb-6">
                            <div className="size-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-all">
                                {stat.icon}
                            </div>
                            <span className="text-[7px] font-black uppercase tracking-widest text-slate-300">{stat.sub}</span>
                        </div>
                        <div className="relative z-10">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Content Switching based on Context */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Feed */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic">
                                {selectedChildId === 'ALL' ? 'Recent Activity Stream' : 'Academic Timeline'}
                            </h3>
                            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-primary">View All</Button>
                        </div>

                        <div className="space-y-6">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className={`size-3 rounded-full border-2 border-white dark:border-slate-900 z-10 ${i === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`} />
                                        {i !== 2 && <div className="w-0.5 h-full bg-slate-100 dark:bg-slate-800 -mt-1" />}
                                    </div>
                                    <div className="pb-6 flex-1">
                                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 group-hover:border-primary/20 transition-all">
                                            <div className="flex items-center justify-between mb-2">
                                                <Badge variant="secondary" className="bg-white dark:bg-slate-800 text-[8px] font-bold uppercase tracking-widest">
                                                    Academics
                                                </Badge>
                                                <span className="text-[10px] font-bold text-slate-400">2h ago</span>
                                            </div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">Math Assignment: Calculus I</p>
                                            <p className="text-xs text-slate-500">Alex Doe completed the assignment with Grade A.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Side Widgets */}
                <div className="space-y-6">
                    <div className="bg-primary text-white rounded-[2.5rem] p-8 shadow-2xl shadow-primary/20 relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xl font-black uppercase tracking-tight mb-2">Fee Reminder</h3>
                            <p className="text-primary-100 text-xs font-medium mb-6">Tuition fees for Term 2 are due.</p>

                            <div className="flex items-end justify-between mb-6">
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-primary-200 tracking-widest">Total Due</p>
                                    <p className="text-3xl font-black">$1,250</p>
                                </div>
                                <Badge className="bg-white/20 text-white border-none backdrop-blur-sm">URGENT</Badge>
                            </div>

                            <Button className="w-full bg-white text-primary font-black uppercase tracking-widest text-[10px] h-12 rounded-xl border-none hover:bg-white/90">
                                Pay Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
