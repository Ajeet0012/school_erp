import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
    Save,
    ChevronLeft,
    Search,
    BookOpen,
    Users,
    Calculator,
    AlertCircle,
    Activity,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { examsService } from '@/services/exams.service';
import Button from '@/components/ui/Button';
import { toast } from 'react-hot-toast';
import Skeleton from '@/components/ui/Skeleton';
import { Badge } from '@/components/ui/Badge';

export default function MarksEntry() {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [marks, setMarks] = useState<any[]>([]);
    const [subjectInfo, setSubjectInfo] = useState({ name: 'Mathematics', code: 'MAT-101', maxMarks: 100 });

    useEffect(() => {
        if (id) {
            fetchMarks();
        }
    }, [id]);

    const fetchMarks = async () => {
        setLoading(true);
        try {
            const data = await examsService.getMarks(id as string);
            setMarks(data.length > 0 ? data : [
                { studentId: 'ST-001', name: 'Aaryan Sharma', marksObtained: '', remarks: '' },
                { studentId: 'ST-002', name: 'Isha Patel', marksObtained: '', remarks: '' },
                { studentId: 'ST-003', name: 'Rohan Mehra', marksObtained: '', remarks: '' }
            ]);
        } catch (err) {
            setMarks([
                { studentId: 'ST-001', name: 'Aaryan Sharma', marksObtained: '', remarks: '' },
                { studentId: 'ST-002', name: 'Isha Patel', marksObtained: '', remarks: '' },
                { studentId: 'ST-003', name: 'Rohan Mehra', marksObtained: '', remarks: '' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkChange = (index: number, value: string) => {
        const updated = [...marks];
        updated[index].marksObtained = value;
        setMarks(updated);
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await examsService.saveMarks(id as string, 'sub-001', marks);
            toast.success('Academic performance indexed successfully.');
        } catch (err: any) {
            toast.error(err.message || 'Indexing protocol failed');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Link href="/admin/exams" className="size-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 hover:text-primary transition-colors">
                        <ChevronLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none mb-1">Marks Entry Matrix</h1>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest italic">Protocol ID: {id}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        onClick={handleSave}
                        disabled={saving || loading}
                        className="bg-primary hover:bg-primary/90 text-white rounded-2xl px-10 py-6 h-auto font-black text-xs uppercase tracking-widest gap-3 shadow-xl shadow-primary/20"
                    >
                        {saving ? <Activity size={18} className="animate-spin" /> : <Save size={18} />}
                        Index Performance
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-6">
                    <div className="size-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Subject Node</p>
                        <p className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{subjectInfo.name}</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-6">
                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <Calculator size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Max Threshold</p>
                        <p className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{subjectInfo.maxMarks} Units</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-6">
                    <div className="size-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Target Nodes</p>
                        <p className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{marks.length} Units</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex items-center gap-6">
                    <div className="size-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                        <Activity size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Indexing Progress</p>
                        <p className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">0%</p>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex items-center gap-4">
                        <div className="size-10 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-lg">
                            <Users size={20} />
                        </div>
                        <h2 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest">Student Registry</h2>
                    </div>
                    <div className="relative group max-w-xs w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Query Node ID..."
                            className="w-full bg-white dark:bg-slate-800 border-none rounded-xl py-3 pl-12 pr-4 text-xs font-bold text-slate-900 dark:text-white outline-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary transition-all"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] w-1/2">Identity Profile</th>
                                <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Marks Obtained</th>
                                <th className="px-10 py-6 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Performance Remarks</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                            {loading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-10 py-8"><Skeleton className="h-4 w-48 rounded-lg" /></td>
                                        <td className="px-10 py-8"><Skeleton className="h-10 w-24 rounded-xl" /></td>
                                        <td className="px-10 py-8"><Skeleton className="h-10 w-full rounded-xl" /></td>
                                    </tr>
                                ))
                            ) : (
                                marks.map((m, i) => (
                                    <tr key={m.studentId} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-colors group">
                                        <td className="px-10 py-8">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                                                    <Users size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">{m.name}</p>
                                                    <p className="text-[10px] font-medium text-slate-500 italic font-mono uppercase">ID: {m.studentId}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <div className="relative group w-32">
                                                <input
                                                    type="number"
                                                    max={subjectInfo.maxMarks}
                                                    value={m.marksObtained}
                                                    onChange={(e) => handleMarkChange(i, e.target.value)}
                                                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-3 px-4 text-sm font-black text-slate-900 dark:text-white outline-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-primary transition-all text-center"
                                                />
                                                <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                                                    {parseInt(m.marksObtained) >= 40 ? <CheckCircle2 size={16} className="text-emerald-500" /> : <AlertCircle size={16} className="text-rose-500" />}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-10 py-8">
                                            <input
                                                type="text"
                                                placeholder="Add performance metadata..."
                                                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl py-3 px-6 text-xs font-bold text-slate-900 dark:text-white outline-none ring-1 ring-slate-200 dark:ring-slate-700 focus:ring-2 focus:ring-indigo-500 transition-all italic"
                                            />
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
