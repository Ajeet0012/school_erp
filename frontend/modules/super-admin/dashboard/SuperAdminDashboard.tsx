import {
    Building2,
    Users,
    CreditCard,
    TrendingUp,
    Activity,
    Globe,
    MoreVertical,
    ArrowUpRight,
    Server
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function SuperAdminDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500 pb-12">
            {/* Welcome Section */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                    <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-2 mb-2 text-indigo-500 border-indigo-200 bg-indigo-50">
                        SYSTEM_ROOT: OVERVIEW
                    </Badge>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                        Global Command Center
                    </h1>
                    <p className="text-sm font-medium text-slate-500 italic">
                        Real-time monitoring of all tenants and system infrastructure.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="outline" className="border-2 rounded-2xl font-bold text-xs uppercase tracking-wider gap-2">
                        <Server size={16} />
                        System Status: Healthy
                    </Button>
                    <Button className="bg-indigo-600 text-white rounded-2xl px-6 py-3 h-auto font-black text-[10px] uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/30">
                        Generate BI Report
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Active Schools', value: '1,240', icon: <Building2 className="text-white" />, sub: '+12 this week', color: 'bg-indigo-500' },
                    { label: 'Total Users', value: '850K', icon: <Users className="text-white" />, sub: '+5% MoM', color: 'bg-emerald-500' },
                    { label: 'MRR', value: '$4.2M', icon: <CreditCard className="text-white" />, sub: 'Monthly Recurring', color: 'bg-rose-500' },
                    { label: 'Avg Latency', value: '24ms', icon: <Activity className="text-white" />, sub: 'Global Edge', color: 'bg-slate-900' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl relative group overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`size-12 rounded-2xl ${stat.color} flex items-center justify-center shadow-lg`}>
                                {stat.icon}
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-lg">
                                <TrendingUp size={12} />
                                {stat.sub}
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Areas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Live Revenue Map (Mock) */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl p-8 overflow-hidden relative">
                    <div className="flex items-center justify-between mb-8 relative z-10">
                        <div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight italic">
                                Live Revenue Stream
                            </h3>
                            <p className="text-xs text-slate-500 font-bold">Real-time transaction processing across regions.</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-indigo-500"><MoreVertical size={20} /></Button>
                    </div>

                    <div className="h-64 flex items-end gap-2">
                        {Array.from({ length: 24 }).map((_, i) => (
                            <div key={i} className="flex-1 bg-indigo-50 dark:bg-indigo-900/10 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-indigo-500/80 rounded-t-lg transition-all duration-500 group-hover:bg-indigo-500"
                                    style={{ height: `${Math.floor(Math.random() * 80) + 20}%` }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* New Signups Feed */}
                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic">
                            New Tenants
                        </h3>
                        <Badge className="bg-emerald-500 text-white border-none">LIVE</Badge>
                    </div>

                    <div className="space-y-6">
                        {[
                            { name: 'Springfield High', plan: 'Enterprise', loc: 'New York, USA', time: '2m ago' },
                            { name: 'Riverdale Academy', plan: 'Standard', loc: 'London, UK', time: '15m ago' },
                            { name: 'Tech Valley Inst', plan: 'Pro', loc: 'Austin, USA', time: '1h ago' },
                            { name: 'Global International', plan: 'Enterprise', loc: 'Dubai, UAE', time: '2h ago' },
                        ].map((school, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="size-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-100 dark:border-slate-700">
                                    <Building2 size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">{school.name}</h4>
                                        <span className="text-[9px] font-bold text-slate-400">{school.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-[10px] font-medium text-slate-500">{school.loc}</span>
                                        <span className="text-[8px] font-black uppercase tracking-wider text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 px-1.5 py-0.5 rounded">
                                            {school.plan}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
