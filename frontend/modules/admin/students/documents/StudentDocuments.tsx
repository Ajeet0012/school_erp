import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function StudentDocuments() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  // Mock documents
  const documents = [
    { id: 'DOC-001', name: 'Identity Certificate', type: 'PDF', size: '2.4 MB', date: 'Jan 12, 2024', status: 'Verified' },
    { id: 'DOC-002', name: 'Prior Academic Record', type: 'JPG', size: '1.8 MB', date: 'Jan 15, 2024', status: 'Pending' },
    { id: 'DOC-003', name: 'Medical Clearance', type: 'PDF', size: '4.2 MB', date: 'Feb 02, 2024', status: 'Verified' },
    { id: 'DOC-004', name: 'Residency Evidence', type: 'PDF', size: '0.9 MB', date: 'Feb 10, 2024', status: 'Expired' },
  ];

  return (
    <AdminLayout>
      <Head>
        <title>Data Archives - Student Documents - EduCore</title>
      </Head>

      {/* Navigation & Breadcrumbs */}
      <div className="flex flex-col gap-1 pb-6">
        <nav className="flex items-center gap-2 text-sm mb-4 text-slate-500 dark:text-slate-400">
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/dashboard')}>Main Console</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/students')}>Identity Directory</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="font-medium text-slate-900 dark:text-white underline decoration-primary decoration-2 underline-offset-4">Data Archives</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Data Archives</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic">Secure vault for verified entity documentation and digital assets.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2">
            <span className="material-icons-round text-lg">cloud_upload</span>
            Upload Asset
          </button>
        </div>
      </div>

      {/* Search & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
        <div className="lg:col-span-3 bg-white dark:bg-card-dark rounded-3xl border border-slate-200 dark:border-slate-800 p-2 flex items-center shadow-sm">
          <div className="h-12 w-12 flex items-center justify-center text-slate-400">
            <span className="material-icons-round">search</span>
          </div>
          <input
            type="text"
            placeholder="Search within archives..."
            className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 px-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between shadow-xl shadow-slate-900/10">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Archive Capacity</p>
          <div className="flex items-end justify-between">
            <h4 className="text-2xl font-black tracking-tight">82%</h4>
            <div className="h-10 w-1 bg-white/20 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[82%] bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[4rem]"></div>

            <div className="flex items-start justify-between mb-6 relative z-10">
              <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${doc.type === 'PDF' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'
                }`}>
                <span className="material-icons-round text-3xl">{doc.type === 'PDF' ? 'picture_as_pdf' : 'image'}</span>
              </div>
              <button className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-primary transition-colors flex items-center justify-center">
                <span className="material-icons-round text-lg">more_vert</span>
              </button>
            </div>

            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors leading-tight">{doc.name}</h3>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6">{doc.id} • {doc.size}</p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Status</span>
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border ${doc.status === 'Verified' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                    doc.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                      'bg-red-500/10 text-red-500 border-red-500/20'
                  }`}>
                  {doc.status}
                </span>
              </div>
              <div className="flex gap-2">
                <button className="h-12 w-12 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-500 hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                  <span className="material-icons-round text-lg">visibility</span>
                </button>
                <button className="h-12 w-12 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-500 hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                  <span className="material-icons-round text-lg">download</span>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Upload Trigger Card */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] border-4 border-dashed border-slate-200 dark:border-slate-800 p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white dark:hover:bg-card-dark hover:border-primary/30 transition-all min-h-[320px]">
          <div className="h-20 w-20 rounded-full bg-white dark:bg-slate-800 text-primary flex items-center justify-center mb-6 shadow-xl shadow-primary/10 group-hover:scale-110 transition-transform">
            <span className="material-icons-round text-4xl">add</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Expand Archives</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold italic leading-relaxed px-4">Initialize new document upload sequence for student entity.</p>
        </div>
      </div>
    </AdminLayout>
  );
}

