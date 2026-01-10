import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function StudentsList() {
  const router = useRouter();
  const [filterClass, setFilterClass] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Mock Data mimicking the response structure
  const students = [
    { id: 'S-2024-001', name: 'John Doe', email: 'john.d@school.edu', class: 'Grade 10-A', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPF0bKPMfGFTJTVxQA8MBITknkGVlAoAsmD5S_xAfiJt8iD_fVnPUTZ-zyWKZDxyxH9b3mIm4tssc4wtKEyRDtM3VlP2rBc7Gn8rbwg_vSQ5X7YlDsYWc73w9JA-zRIb4J0FizJk7jkUzGEacaqeuyOqEXOff9r4hG3YvHea0qKdl5OilpWUgGxxSEKxojCrev3uwis-jKqmC2Vk9hRAF_qMJfdKzRPgnUvQ4Kj9NPzXwfqR11kEZ1AZ10rLDo0OGfPWzYrsOQMgv2' },
    { id: 'S-2024-002', name: 'Sarah Smith', email: 'sarah.s@school.edu', class: 'Grade 9-B', status: 'Inactive', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnjqrVV6jF-ppfmhOb6Hgx2QFZxWfmNVY3EpZiuDMuDLG3z3lWS2eoXJpdl3Ki9SR3OJF_txMM9uw83nPsCbLnbR9DX1Z9ZOQFGB5HNKr7EE4uiYVF2yxdOucbk5hq_0QLHsghQzoMiGqn3yNCOzKrz1HdA0DQWELHW-a1_SNeHSj_SISMpNCxhS0F9fA_JyxhmM5PuhzBGTxrRdHINe70UDtBXgbHVpcDIpCAJaHBq_9pLwjWDglbTHpL1rbodRs2BZoCgWBvhEdl' },
    { id: 'S-2024-003', name: 'Michael Chen', email: 'michael.c@school.edu', class: 'Grade 11-Science', status: 'Active', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM3tfbO18RgXBIqDyuQYRX16gv5JwWQhaW6OBXWkkAap20vGHXesmMOEuQoRjrUgZXXd-u9FVnEAtub3bA8nrAWzGTY_rsveZOUk7oXeCwRju-edotrwYGnW84yh60-OZzvuutU_xGH2yi4j249A9bxr0cHXt4i1RD1j1gqP8ZtWDG2f6sszdsy_3y6quaw7gUekZboEVm694GC4MVm5gqkTLwsH7vvdzzrbPsExGTwcTLia0zWSuQ1SfIA5EwGanVXdlpOnh4eY0Y' },
    { id: 'S-2024-004', name: 'Emily Watson', email: 'emily.w@school.edu', class: 'Grade 8-A', status: 'Pending', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9b1nG_05o412PA3Jbs7YgiI6EJ8Rkie9Sp-cdhBObMKv56svTJRJ5Q9GSKQ7Ptou-fuQHedyn3FNulxb9PDOLj4kL6gg01dMQIxKPR993UZHf7aLFW5rNkgwnqlMuS-7PKhWyuyPvxLazYAcrGxhtyYV_rMY_muQTlvfvcOQ-CMlFwwZZjZ1np0TUKBJoJ_LVHFE3CxrNRjOvy4Hf3aFTf3bcA-nlirRYO0P8RL-C2NW0buUYdl0yUvpbdAKOdbsqVKcbsquRvSun' },
    { id: 'S-2024-005', name: 'Robert Johnson', email: 'rob.j@school.edu', class: 'Grade 10-A', status: 'Active', avatar: '' },
  ];

  return (
    <AdminLayout>
      <Head>
        <title>Identity Directory - Students - EduCore</title>
      </Head>

      <div className="flex flex-col gap-1 pb-6">
        <nav className="flex items-center gap-2 text-sm mb-4 text-slate-500 dark:text-slate-400">
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/dashboard')}>Main Console</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="font-medium text-slate-900 dark:text-white underline decoration-primary decoration-2 underline-offset-4">Identity Directory</span>
        </nav>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Student Archives</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic">Global catalog of all verified student entities across terminal 01-A.</p>
        </div>
        <Link href="/admin/students/add" className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2">
          <span className="material-icons-round text-lg">person_add</span>
          Onboard Entity
        </Link>
      </div>

      {/* Advanced Filters */}
      <div className="bg-white dark:bg-card-dark p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none mb-10">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="relative w-full lg:w-96 group">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 material-icons-round text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            <input
              className="w-full pl-12 pr-5 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="Query by name or admission ID..."
              type="text"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
            <div className="relative min-w-[180px]">
              <select
                className="w-full pl-5 pr-12 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-black text-slate-600 dark:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none appearance-none cursor-pointer tracking-tight"
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
              >
                <option value="">All Academic Units</option>
                <option value="10-A">Grade 10-A</option>
                <option value="9-B">Grade 9-B</option>
              </select>
              <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
            </div>

            <div className="relative min-w-[160px]">
              <select
                className="w-full pl-5 pr-12 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-black text-slate-600 dark:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none appearance-none cursor-pointer tracking-tight"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">Any Status</option>
                <option value="Active">Operational</option>
                <option value="Inactive">Offline</option>
                <option value="Pending">Queued</option>
              </select>
              <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
            </div>

            <button className="h-14 w-14 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary transition-all active:scale-95 flex items-center justify-center border border-transparent hover:border-primary/20">
              <span className="material-icons-round">filter_list</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pro-Grade Data Table */}
      <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.02)] dark:shadow-none overflow-hidden pb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <th className="px-8 py-8 w-12"><input className="h-5 w-5 rounded-lg border-slate-200 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" type="checkbox" /></th>
                <th className="px-8 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Validated Entity</th>
                <th className="px-8 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Registry ID</th>
                <th className="px-8 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Academic Unit</th>
                <th className="px-8 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Operational Status</th>
                <th className="px-8 py-8 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {students.map((student, i) => (
                <tr key={i} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-8 py-6"><input className="h-5 w-5 rounded-lg border-slate-200 dark:border-slate-700 text-primary focus:ring-primary/20 cursor-pointer" type="checkbox" /></td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      {student.avatar ? (
                        <div className="h-12 w-12 rounded-2xl bg-cover bg-center border-2 border-white dark:border-slate-800 shadow-sm" style={{ backgroundImage: `url('${student.avatar}')` }}></div>
                      ) : (
                        <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center text-slate-900 dark:text-white font-black shadow-inner">{student.name.substring(0, 2).toUpperCase()}</div>
                      )}
                      <div>
                        <div className="font-black text-slate-900 dark:text-white tracking-tight leading-tight">{student.name}</div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-mono text-xs font-black text-slate-600 dark:text-slate-300 tracking-wider">[{student.id}]</td>
                  <td className="px-8 py-6 text-sm font-bold text-slate-600 dark:text-slate-300 italic">{student.class}</td>
                  <td className="px-8 py-6">
                    <div className="flex">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${student.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' :
                          student.status === 'Pending' ? 'bg-amber-500/10 text-amber-500' :
                            'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                        }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${student.status === 'Active' ? 'bg-emerald-500 animate-pulse' :
                            student.status === 'Pending' ? 'bg-amber-500' :
                              'bg-slate-500'
                          }`}></span>
                        {student.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                      <Link href="/admin/students/profile" className="p-2.5 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all">
                        <span className="material-icons-round text-xl">visibility</span>
                      </Link>
                      <Link href="/admin/students/edit" className="p-2.5 text-slate-400 hover:text-indigo-500 hover:bg-indigo-500/5 rounded-xl transition-all">
                        <span className="material-icons-round text-xl">edit</span>
                      </Link>
                      <button className="p-2.5 text-slate-400 hover:text-rose-500 hover:bg-rose-500/5 rounded-xl transition-all">
                        <span className="material-icons-round text-xl">delete_outline</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Global Pagination Console */}
        <div className="px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-50 dark:border-slate-800/50">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Batch Visibility:</span>
            <div className="flex items-center gap-1">
              {[10, 25, 50].map(val => (
                <button key={val} className={`h-8 w-12 rounded-lg text-[10px] font-black transition-all ${val === 10 ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-900/10' : 'text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>{val}</button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="h-12 px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-slate-100 dark:border-slate-800">Prev</button>
            <div className="flex items-center gap-1 px-4">
              <span className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center text-[10px] font-black shadow-lg shadow-primary/20">1</span>
              <span className="h-8 w-8 rounded-lg text-slate-400 flex items-center justify-center text-[10px] font-black hover:bg-slate-50">2</span>
              <span className="h-8 w-8 rounded-lg text-slate-400 flex items-center justify-center text-[10px] font-black">...</span>
              <span className="h-8 w-8 rounded-lg text-slate-400 flex items-center justify-center text-[10px] font-black hover:bg-slate-50">12</span>
            </div>
            <button className="h-12 px-6 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest hover:-translate-y-1 active:scale-95 transition-all shadow-xl shadow-slate-900/20 dark:shadow-none">Next</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
