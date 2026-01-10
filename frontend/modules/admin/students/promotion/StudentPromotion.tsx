import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function StudentPromotion() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [sourceClass, setSourceClass] = useState('');
  const [targetClass, setTargetClass] = useState('');

  const handlePromote = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/admin/students');
    }, 2000);
  };

  return (
    <AdminLayout>
      <Head>
        <title>Promotion Protocol - EduCore</title>
      </Head>

      {/* Navigation & Breadcrumbs */}
      <div className="flex flex-col gap-1 pb-6">
        <nav className="flex items-center gap-2 text-sm mb-4 text-slate-500 dark:text-slate-400">
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/dashboard')}>Main Console</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/students')}>Identity Directory</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="font-medium text-slate-900 dark:text-white underline decoration-primary decoration-2 underline-offset-4">Promotion Protocol</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Promotion Protocol</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic">Executing mass entity transition across academic hierarchies.</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handlePromote}
            disabled={loading || !sourceClass || !targetClass}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <span className="material-icons-round text-lg">{loading ? 'sync' : 'bolt'}</span>
            {loading ? 'Processing Protocol...' : 'Execute Promotion'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Source Hierarchy */}
        <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-[4rem]"></div>
          <div className="flex items-center gap-4 mb-10 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
              <span className="material-icons-round">unfold_less</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">Source Hierarchy</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Define current origin units.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Origin Class</label>
              <select
                className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white appearance-none focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
                value={sourceClass}
                onChange={(e) => setSourceClass(e.target.value)}
              >
                <option value="">Select Origin</option>
                <option value="9">Grade 9 (Archive Cycle 2023)</option>
                <option value="10">Grade 10 (Archive Cycle 2023)</option>
                <option value="11">Grade 11 (Archive Cycle 2023)</option>
              </select>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 text-slate-500 italic font-medium text-sm">
                <span className="material-icons-round">info</span>
                <p>Selection will load verified entities for protocol execution.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Target Hierarchy */}
        <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[4rem]"></div>
          <div className="flex items-center gap-4 mb-10 relative z-10">
            <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <span className="material-icons-round">unfold_more</span>
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">Target Hierarchy</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Define terminal destination units.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Destination Class</label>
              <select
                className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white appearance-none focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
                value={targetClass}
                onChange={(e) => setTargetClass(e.target.value)}
              >
                <option value="">Select Destination</option>
                <option value="10">Grade 10 (Protocol 2024)</option>
                <option value="11">Grade 11 (Protocol 2024)</option>
                <option value="12">Grade 12 (Protocol 2024)</option>
              </select>
            </div>
            <div className="p-6 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-2xl border border-emerald-500/10">
              <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 font-black text-xs uppercase tracking-widest">
                <span className="material-icons-round">verified</span>
                <p>Destination protocol validated for selected academic cycle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {sourceClass && (
        <div className="mt-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">Verified Entities</h3>
              <div className="flex items-center gap-2 px-6 py-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                34 Entities Loaded
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-40 grayscale pointer-events-none">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="p-6 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                  <div className="flex-1">
                    <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded-md mb-2"></div>
                    <div className="h-2 w-16 bg-slate-100 dark:bg-slate-900 rounded-md"></div>
                  </div>
                  <div className="h-5 w-5 rounded-md bg-primary/20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

