import { useEffect, useState } from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import StatCard from '@/components/ui/StatCard';
import { statsService, DashboardStats, ATTENDANCE_DATA, FEES_DATA } from '@/services/stats.service';
import { Users, GraduationCap, Banknote, UserCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await statsService.getStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Campus Overview</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium italic">Operational status report for terminal 01-A.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-white transition-all active:scale-95 shadow-sm">
              Security Audit
            </button>
            <button className="px-8 py-3.5 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all">
              Initiate Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { label: 'Total Students', value: stats?.totalStudents || 0, trend: '+12%', icon: 'school', color: 'blue' },
            { label: 'Faculty Assets', value: stats?.totalTeachers || 0, trend: '+4%', icon: 'groups', color: 'indigo' },
            { label: 'Parent Accounts', value: stats?.totalParents || 0, trend: 'Stable', icon: 'diversity_3', color: 'purple' },
            { label: 'Gross Revenue', value: `$${(stats?.totalEarnings || 0).toLocaleString()}`, trend: '+8.2%', icon: 'payments', color: 'emerald' }
          ].map((stat, i) => (
            <div key={i} className="group relative bg-white dark:bg-card-dark rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-${stat.color}-500/10 text-${stat.color}-500 group-hover:scale-110 transition-transform`}>
                  <span className="material-icons-round text-2xl">{stat.icon}</span>
                </div>
                <span className={`text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ${stat.trend === 'Stable' ? 'bg-slate-100 dark:bg-slate-800 text-slate-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{stat.value}</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">{stat.label}</p>

              <div className="absolute -right-5 -bottom-5 h-20 w-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Attendance Chart */}
          <div className="bg-white dark:bg-card-dark rounded-[2.5rem] p-10 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative group overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">Attendance Analytics</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Presence Verification Protocols</p>
              </div>
              <span className="material-icons-round text-slate-200 dark:text-slate-700 text-4xl">analytics</span>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ATTENDANCE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748B' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748B' }} dx={-10} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0F172A', border: 'none', borderRadius: '16px', color: '#fff' }}
                    itemStyle={{ fontWeight: 800, fontSize: '12px' }}
                    cursor={{ fill: 'rgba(37, 99, 235, 0.05)' }}
                  />
                  <Bar dataKey="present" fill="url(#blueGradient)" radius={[6, 6, 0, 0]} barSize={20} />
                  <Bar dataKey="absent" fill="#E2E8F0" radius={[6, 6, 0, 0]} barSize={20} />
                  <defs>
                    <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2563EB" stopOpacity={1} />
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Earnings Chart */}
          <div className="bg-white dark:bg-card-dark rounded-[2.5rem] p-10 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative group overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">Financial Matrix</h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fee Collection Lifecycle</p>
              </div>
              <span className="material-icons-round text-slate-200 dark:text-slate-700 text-4xl">payments</span>
            </div>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={FEES_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748B' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#64748B' }} dx={-10} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0F172A', border: 'none', borderRadius: '16px', color: '#fff' }}
                    itemStyle={{ fontWeight: 800, fontSize: '12px' }}
                  />
                  <Line type="monotone" dataKey="collected" stroke="#2563EB" strokeWidth={4} dot={{ r: 6, fill: '#2563EB', strokeWidth: 3, stroke: '#fff' }} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="pending" stroke="#E2E8F0" strokeWidth={4} dot={{ r: 6, fill: '#E2E8F0', strokeWidth: 3, stroke: '#fff' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
          <div className="px-10 py-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white">Protocol Activity Log</h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Real-time system event monitoring</p>
            </div>
            <button className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
              Full Archive
              <span className="material-icons-round text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="p-10">
            <div className="space-y-10">
              {[
                { title: 'New Student Registration', desc: 'Student John Doe was added to Class 10-A', time: '2 hours ago', icon: 'person_add', color: 'blue' },
                { title: 'Fee Protocol Finalized', desc: 'Invoiced generated for Quarter 3 operations', time: '4 hours ago', icon: 'receipt_long', color: 'emerald' },
                { title: 'Attendance Audit Complete', desc: 'Class 8-B reports 100% presence verification', time: '6 hours ago', icon: 'verified', color: 'indigo' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className={`h-14 w-14 rounded-2xl bg-${item.color}-500/10 text-${item.color}-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-${item.color}-500/5`}>
                    <span className="material-icons-round text-[28px]">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black text-slate-900 dark:text-white tracking-tight">{item.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">{item.desc}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.time}</p>
                    </div>
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
