import { useState, useEffect } from 'react';
import {
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
    Trophy,
    Award,
    TrendingDown,
    ShieldCheck,
    CheckCircle2,
    FileText,
    User,
    GraduationCap
} from 'lucide-react';
import { examsService } from '@/services/exams.service';
import Button from '@/components/ui/Button';
import Skeleton from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';
import { toast } from 'react-hot-toast';

export default function TeacherGrades() {
    const [students, setStudents] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Mock student grades for demonstration - in production this would come from a service
    const mockGrades = [
        { id: 1, name: 'Alice Smith', studentId: 'ST-001', grades: { math: 'A', physics: 'B+', english: 'A-' }, avg: '92%' },
        { id: 2, name: 'Bob Jones', studentId: 'ST-002', grades: { math: 'C', physics: 'B', english: 'B-' }, avg: '78%' },
        { id: 3, name: 'Charlie Davis', studentId: 'ST-003', grades: { math: 'B+', physics: 'A', english: 'B+' }, avg: '88%' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-2 mb-2 text-primary">
                        FACULTY_CORE: ACADEMIC_REGISTRY
                    </Badge>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Gradebook Orchestration</h1>
                    <p className="text-sm font-medium text-slate-500 italic">Verify academic performance nodes, manage grade commitment protocols, and synchronize result matrices.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-10 py-6 h-auto font-black text-xs uppercase tracking-widest gap-2 shadow-xl shadow-primary/20 transition-all active:scale-95">
                        <Trophy size={18} />
                        Finalize Results
                    </Button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
                        <div className="flex gap-10">
                            <button className="relative py-4 text-[10px] font-black text-primary uppercase tracking-widest border-b-4 border-primary">Academic Matrix</button>
                            <button className="relative py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Performance Analytics</button>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative group min-w-[300px]">
                                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search Student Unit..."
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-3 pl-12 pr-6 text-xs font-bold text-slate-900 dark:text-white outline-none ring-1 ring-slate-100 dark:ring-slate-800 focus:ring-2 focus:ring-primary transition-all shadow-inner"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2.5rem] border-2 border-slate-50 dark:border-slate-800 overflow-hidden shadow-xl">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b-2 border-slate-100 dark:border-slate-800">
                                    <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Student Node</th>
                                    <th className="px-10 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Mathematics</th>
                                    <th className="px-10 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Physics</th>
                                    <th className="px-10 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">English</th>
                                    <th className="px-10 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Agg. Score</th>
                                    <th className="px-10 py-6 text-right text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                {mockGrades.map((student) => (
                                    <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                                        <td className="px-10 py-6 text-left">
                                            <div className="flex items-center gap-3">
                                                <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 font-black text-[10px]">
                                                    {student.name?.substring(0, 2)}
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tight">{student.name}</p>
                                                    <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest italic">ID: {student.studentId}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-6 text-center">
                                            <input
                                                type="text"
                                                defaultValue={student.grades.math}
                                                className="w-12 h-10 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-xl text-center text-[10px] font-black text-slate-900 dark:text-white focus:ring-2 focus:ring-primary transition-all outline-none"
                                            />
                                        </td>
                                        <td className="px-10 py-6 text-center">
                                            <input
                                                type="text"
                                                defaultValue={student.grades.physics}
                                                className="w-12 h-10 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-xl text-center text-[10px] font-black text-slate-900 dark:text-white focus:ring-2 focus:ring-primary transition-all outline-none"
                                            />
                                        </td>
                                        <td className="px-10 py-6 text-center">
                                            <input
                                                type="text"
                                                defaultValue={student.grades.english}
                                                className="w-12 h-10 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-xl text-center text-[10px] font-black text-slate-900 dark:text-white focus:ring-2 focus:ring-primary transition-all outline-none"
                                            />
                                        </td>
                                        <td className="px-10 py-6 text-center">
                                            <Badge
                                                variant="outline"
                                                className="bg-primary/10 text-primary border-none text-[10px] font-black px-4 py-2"
                                            >
                                                {student.avg}
                                            </Badge>
                                        </td>
                                        <td className="px-10 py-6 text-right">
                                            <button className="text-slate-300 hover:text-primary transition-colors">
                                                <MoreVertical size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 italic">
                            <ShieldCheck size={14} className="text-emerald-500" />
                            ACADEMIC_INTEGRITY_SYNC_V1
                        </p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <GraduationCap size={16} className="text-primary" />
                                <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Global Avg: 84.6%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
