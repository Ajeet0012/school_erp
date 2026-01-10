import { useEffect, useState } from 'react';
import Head from 'next/head';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';
import { superAdminService } from '@/services/super-admin.service';

export default function SystemLogs() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLevel, setFilterLevel] = useState('All Levels');

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await superAdminService.getSystemLogs();
        setLogs(data.data || []);
      } catch (error) {
        console.error('Failed to fetch logs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLogs();
  }, []);

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.timestamp.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = filterLevel === 'All Levels' || log.level.toLowerCase() === filterLevel.toLowerCase();
    return matchesSearch && matchesLevel;
  });

  return (
    <SuperAdminLayout>
      <Head>
        <title>System Logs - Super Admin</title>
      </Head>

      <div className="flex flex-col gap-1 pb-6">
        <nav className="flex items-center gap-2 text-sm mb-4 text-slate-500 dark:text-slate-400">
          <span className="hover:text-primary transition-colors cursor-pointer">Super Admin</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="font-medium text-slate-900 dark:text-white underline decoration-primary decoration-2 underline-offset-4">System Logs</span>
        </nav>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">System Audit logs</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Monitoring real-time system events, security audits, and application health.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-all shadow-sm active:scale-95">
            <span className="material-icons-round text-lg text-slate-400">download</span>
            Export Logs
          </button>
          <button onClick={() => setLoading(true)} className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 active:scale-95">
            <span className="material-icons-round text-lg">refresh</span>
            Refresh
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
        {/* Control Bar */}
        <div className="p-8 border-b border-slate-100 dark:border-slate-700/50 flex flex-col lg:flex-row justify-between items-center gap-6 bg-slate-50/30 dark:bg-slate-800/20">
          <div className="relative w-full lg:max-w-md">
            <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-white dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 text-sm font-bold text-slate-900 dark:text-white shadow-inner focus:outline-none"
              placeholder="Filter logs by message or date..."
            />
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
            {['All Levels', 'Info', 'Warn', 'Error'].map((l) => (
              <button
                key={l}
                onClick={() => setFilterLevel(l)}
                className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${filterLevel === l ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg' : 'bg-white dark:bg-slate-900 text-slate-500 border border-slate-100 dark:border-slate-800 hover:bg-slate-50'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Logs Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-20 text-center">
              <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Streaming Logs...</p>
            </div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/40">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">Timestamp</th>
                  <th className="px-6 py-6 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">Level</th>
                  <th className="px-6 py-6 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">System Message</th>
                  <th className="px-8 py-6 text-right text-[10px] font-black uppercase tracking-[0.15em] text-slate-400">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-20 text-center">
                      <span className="material-icons-round text-6xl text-slate-200 mb-4 block">fact_check</span>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white">Clean Slate</h3>
                      <p className="text-slate-500 mt-2 font-medium">No logs match your current filter criteria.</p>
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log, idx) => (
                    <tr key={idx} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all duration-300">
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-tight">{log.timestamp.split(' ')[0]}</span>
                          <span className="text-[10px] font-black text-slate-400 uppercase">{log.timestamp.split(' ').slice(1).join(' ')}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${log.level === 'error' ? 'bg-rose-500/10 text-rose-600' :
                          log.level === 'warn' ? 'bg-amber-500/10 text-amber-600' :
                            'bg-emerald-500/10 text-emerald-600'
                          }`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${log.level === 'error' ? 'bg-rose-500 animate-pulse' : log.level === 'warn' ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                          {log.level}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed max-w-2xl truncate group-hover:whitespace-normal transition-all">{log.message}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-all">
                          <span className="material-icons-round text-xl">open_in_new</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination Placeholder */}
        <div className="p-8 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50/20 dark:bg-slate-800/10 flex items-center justify-between">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Showing <span className="text-slate-900 dark:text-white">1 - {filteredLogs.length}</span> of {logs.length} Log Entries
          </p>
          <div className="flex items-center gap-2">
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50 transition-all">
              <span className="material-icons-round">chevron_left</span>
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-black text-xs shadow-lg transition-transform active:scale-95">1</button>
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-50 transition-all">
              <span className="material-icons-round">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </SuperAdminLayout>
  );
}
