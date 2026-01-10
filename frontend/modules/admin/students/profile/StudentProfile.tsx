import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function StudentProfile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('identity');

  // Mock data for student
  const student = {
    id: 'S-2024-0842',
    name: 'Alex Johnson',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDltbWj1ZPUOEhaOezhRQBneKqq8udX0IX534Vy4Ouc8i0ZSOFu2XDwBd9jvjlpE8PpGwfljzne-m3tsqW6VTPV9ug72kbG6cb5ZVLtnQAFub9RisOxhwx6VPh_0MWsy_xOLZrSG4wwiZ_ZznoBjP5oE3PjWjq2Ajn3W9ND9IAWfukmvFjiVPcj5qIPR-N2Fh7rB29U63uHwFH1Er-k4YUOhNXYoTfrFNdqUHIchynFwFNIl4WyKqmQ9yzV-7CknZOTJgzw9vAIMYE-',
    status: 'Operational',
    class: 'Grade 10-A',
    attendance: '94.2%',
    gpa: '3.85',
    email: 'alex.j@educore.edu',
    phone: '+1 (555) 123-4567',
    dob: 'April 12, 2008',
    gender: 'Male',
    bloodGroup: 'O+',
    religion: 'Christianity',
    admissionDate: 'August 15, 2023',
    fatherName: 'Robert Johnson',
    guardianEmail: 'robert.j@nexus.com',
    address: '1288 Digital Drive, Silicon Valley, CA 94025',
  };

  const tabs = [
    { id: 'identity', label: 'Identity Matrix', icon: 'fingerprint' },
    { id: 'academic', label: 'Academic Protocol', icon: 'school' },
    { id: 'nexus', label: 'Nexus Contacts', icon: 'family_restroom' },
    { id: 'archives', label: 'Data Archives', icon: 'folder_open' },
    { id: 'ledger', label: 'Financial Ledger', icon: 'receipt_long' },
  ];

  return (
    <AdminLayout>
      <Head>
        <title>Entity Profile - {student.name} - EduCore</title>
      </Head>

      {/* Navigation & Breadcrumbs */}
      <div className="flex flex-col gap-1 pb-6">
        <nav className="flex items-center gap-2 text-sm mb-4 text-slate-500 dark:text-slate-400">
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/dashboard')}>Main Console</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/students')}>Identity Directory</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="font-medium text-slate-900 dark:text-white underline decoration-primary decoration-2 underline-offset-4">Entity Profile</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Entity Profile</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic">Holistic data overview for verified student entity {student.id}.</p>
        </div>
        <div className="flex gap-4">
          <button className="h-14 w-14 rounded-2xl bg-white dark:bg-card-dark text-slate-500 hover:text-primary transition-all active:scale-95 flex items-center justify-center border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <span className="material-icons-round">print</span>
          </button>
          <button
            onClick={() => router.push('/admin/students/edit')}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2"
          >
            <span className="material-icons-round text-lg">edit</span>
            Modify Protocol
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Identity Card */}
        <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-10">
          <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary/10 to-indigo-500/10"></div>

            <div className="relative mb-6">
              <div className="size-32 rounded-full border-4 border-white dark:border-slate-900 overflow-hidden bg-slate-100 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500">
                <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 size-8 bg-emerald-500 border-4 border-white dark:border-slate-900 rounded-full z-20 shadow-lg animate-pulse" title="Active"></div>
            </div>

            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1">{student.name}</h2>
            <p className="text-slate-400 font-black text-xs uppercase tracking-widest mb-6">{student.id}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="px-4 py-2 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-xl text-[10px] font-black uppercase tracking-wider border border-slate-100 dark:border-slate-800">{student.class}</span>
              <span className="px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-xl text-[10px] font-black uppercase tracking-wider border border-emerald-500/20">{student.status}</span>
            </div>

            <div className="w-full grid grid-cols-2 gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
              <div className="text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Attendance</p>
                <p className="text-lg font-black text-slate-900 dark:text-white">{student.attendance}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">GPA Index</p>
                <p className="text-lg font-black text-slate-900 dark:text-white">{student.gpa}</p>
              </div>
            </div>

            <div className="w-full mt-8 flex flex-col gap-3">
              <button className="w-full py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">Quick Message</button>
              <button className="w-full py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-black text-xs uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Identity Badge</button>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Content */}
        <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-10">
          {/* Tabs Container */}
          <div className="bg-white dark:bg-card-dark rounded-[2rem] border border-slate-200 dark:border-slate-800 p-3 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-x-auto no-scrollbar">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                >
                  <span className="material-icons-round text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section: Identity Matrix */}
          {activeTab === 'identity' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-10">
              <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-icons-round">fingerprint</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">Identity Matrix</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">Core biological and identification data.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  <DataPoint label="First Identifier" value={student.name.split(' ')[0]} />
                  <DataPoint label="Last Identifier" value={student.name.split(' ')[1]} />
                  <DataPoint label="Temporal Origin (DOB)" value={student.dob} />
                  <DataPoint label="Gender Archetype" value={student.gender} />
                  <DataPoint label="Biochemical Marker" value={student.bloodGroup} />
                  <DataPoint label="Philosophical Affiliation" value={student.religion} />
                  <DataPoint label="Primary Signal (Phone)" value={student.phone} />
                  <DataPoint label="Digital Endpoint (Email)" value={student.email} isEmail />
                </div>
              </div>
            </div>
          )}

          {/* Other tabs follow the same pattern... */}
          {activeTab !== 'identity' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[400px]">
                <div className="h-20 w-20 rounded-[2rem] bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mb-6">
                  <span className="material-icons-round text-4xl">construction</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">Protocol Under Reconstruction</h3>
                <p className="text-slate-500 dark:text-slate-400 text-center max-w-xs font-medium italic">Detailed data for {activeTab} section is currently being migrated to the EduCore cloud. Check back soon.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

function DataPoint({ label, value, isEmail }: { label: string; value: string; isEmail?: boolean }) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</p>
      <p className={`text-sm font-bold ${isEmail ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{value}</p>
    </div>
  );
}

