import { useStats } from '@/hooks/useStats';
import AdminLayout from '@/components/layouts/AdminLayout';
import DataCard from '@/components/ui/DataCard';
import {
  Users,
  GraduationCap,
  Banknote,
  UserCheck,
  Activity,
  ArrowUpRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  FileText,
  ChevronRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts';
import { ATTENDANCE_DATA, FEES_DATA } from '@/services/stats.service';

export default function AdminDashboard() {
  const { stats, loading, error } = useStats();

  return (
    <AdminLayout title="Campus Overview">
      <div className="space-y-10">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">System Status Log</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Real-time operational summary of campus activities.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all active:scale-95 shadow-sm">
              <FileText size={18} />
              Export Audit
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-black shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:scale-95 transition-all">
              Initiate Report
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* API-Driven Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DataCard
            title="Total Students"
            value={stats?.totalStudents}
            icon={GraduationCap}
            trend={{ value: '+12%', isPositive: true, label: 'vs last term' }}
            isLoading={loading}
            error={error}
            color="primary"
          />
          <DataCard
            title="Faculty Assets"
            value={stats?.totalTeachers}
            icon={Users}
            trend={{ value: '+4%', isPositive: true, label: 'vs last month' }}
            isLoading={loading}
            error={error}
            color="info"
          />
          <DataCard
            title="Guardians"
            value={stats?.totalParents}
            icon={UserCheck}
            trend={{ value: 'Stable', isPositive: true, label: 'no change' }}
            isLoading={loading}
            error={error}
            color="success"
          />
          <DataCard
            title="Revenue"
            value={stats?.totalEarnings ? `$${stats.totalEarnings.toLocaleString()}` : undefined}
            icon={Banknote}
            trend={{ value: '+8.2%', isPositive: true, label: 'month over month' }}
            isLoading={loading}
            error={error}
            color="warning"
          />
        </div>

        {/* Charts & Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Attendance Analytics */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm shadow-slate-200/50 dark:shadow-none">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">Attendance Matrix</h3>
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Presence Verification Analytics</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400">
                <TrendingUp size={20} />
              </div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ATTENDANCE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                    dx={-10}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ fontWeight: 800, fontSize: '11px' }}
                    cursor={{ fill: 'rgba(37, 99, 235, 0.05)' }}
                  />
                  <Bar dataKey="present" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={24} />
                  <Bar dataKey="absent" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Financial Lifecycle */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm shadow-slate-200/50 dark:shadow-none">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <h3 className="text-xl font-black text-slate-900 dark:text-white">Revenue Lifecycle</h3>
                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Fee Collection Dynamics</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400">
                <Activity size={20} />
              </div>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={FEES_DATA}>
                  <defs>
                    <linearGradient id="colorCollected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }}
                    dx={-10}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px', color: '#fff' }}
                    itemStyle={{ fontWeight: 800, fontSize: '11px' }}
                  />
                  <Area type="monotone" dataKey="collected" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCollected)" dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} />
                  <Area type="monotone" dataKey="pending" stroke="#cbd5e1" strokeWidth={2} fill="transparent" strokeDasharray="4 4" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Activity Log Table Re-implementation */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm shadow-slate-200/50 dark:shadow-none overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex items-center justify-between">
            <div className="space-y-0.5">
              <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">System Events</h2>
              <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Live protocol monitoring</p>
            </div>
            <button className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group">
              View Audit Archive
              <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Student Onboarding', desc: 'Alice Cooper registered to Class 12-B', time: '2h ago', icon: GraduationCap, color: 'primary' },
                { title: 'Fees Processed', desc: 'Monthly collection batch finalized: #0822', time: '5h ago', icon: CheckCircle2, color: 'success' },
                { title: 'Security Audit', desc: 'System scan complete: No protocols violated', time: '8h ago', icon: Activity, color: 'info' },
              ].map((event, i) => (
                <div key={i} className="flex flex-col gap-4 p-5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/10 border border-slate-100/50 dark:border-slate-800/50 hover:border-primary/20 transition-all group">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${colorMap[event.color as keyof typeof colorMap]} group-hover:scale-110 transition-transform`}>
                      <event.icon size={18} />
                    </div>
                    <div className="flex items-center gap-1.5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                      <Clock size={12} className="text-slate-400" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">{event.time}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-900 dark:text-white tracking-tight">{event.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-500 font-medium leading-relaxed mt-1">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

const colorMap = {
  primary: 'bg-primary/10 text-primary',
  success: 'bg-emerald-500/10 text-emerald-500',
  info: 'bg-sky-500/10 text-sky-500',
  warning: 'bg-amber-500/10 text-amber-500',
};
