import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/layouts/AdminLayout';

export default function EditStudent() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('personal');
  const [loading, setLoading] = useState(false);

  // Mock data for student
  const [formData, setFormData] = useState({
    id: 'S-2024-0842',
    firstName: 'Alex',
    lastName: 'Johnson',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDltbWj1ZPUOEhaOezhRQBneKqq8udX0IX534Vy4Ouc8i0ZSOFu2XDwBd9jvjlpE8PpGwfljzne-m3tsqW6VTPV9ug72kbG6cb5ZVLtnQAFub9RisOxhwx6VPh_0MWsy_xOLZrSG4wwiZ_ZznoBjP5oE3PjWjq2Ajn3W9ND9IAWfukmvFjiVPcj5qIPR-N2Fh7rB29U63uHwFH1Er-k4YUOhNXYoTfrFNdqUHIchynFwFNIl4WyKqmQ9yzV-7CknZOTJgzw9vAIMYE-',
    email: 'alex.j@educore.edu',
    phone: '+1 (555) 123-4567',
    dob: '2008-04-12',
    gender: 'MALE',
    class: '10',
    section: 'A',
    fatherName: 'Robert Johnson',
    guardianEmail: 'robert.j@nexus.com',
    address: '1288 Digital Drive, Silicon Valley, CA 94025',
  });

  const tabs = [
    { id: 'personal', label: 'Identity Matrix', icon: 'fingerprint' },
    { id: 'academic', label: 'Academic Protocol', icon: 'school' },
    { id: 'guardian', label: 'Nexus Contacts', icon: 'family_restroom' },
    { id: 'documents', label: 'Data Archives', icon: 'folder_open' },
  ];

  const handleUpdate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/admin/students');
    }, 1500);
  };

  return (
    <AdminLayout>
      <Head>
        <title>Modify Protocol - {formData.firstName} - EduCore</title>
      </Head>

      {/* Navigation & Breadcrumbs */}
      <div className="flex flex-col gap-1 pb-6">
        <nav className="flex items-center gap-2 text-sm mb-4 text-slate-500 dark:text-slate-400">
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/dashboard')}>Main Console</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/students')}>Identity Directory</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="font-medium text-slate-900 dark:text-white underline decoration-primary decoration-2 underline-offset-4">Modify Protocol</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Modify Protocol</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic">Updating established data matrices for entity {formData.id}.</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-black text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
          >
            Abort Changes
          </button>
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <span className="material-icons-round text-lg">{loading ? 'sync' : 'save'}</span>
            {loading ? 'Processing...' : 'Commit Changes'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Sidebar: Tabs */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-4 sticky top-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-black transition-all ${activeTab === tab.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'
                    }`}
                >
                  <span className="material-icons-round">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-9">
          <div className="space-y-10 pb-20">
            {/* Step 1: Identity Matrix */}
            {activeTab === 'personal' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="relative group">
                      <div className="size-24 rounded-3xl overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none bg-slate-100">
                        <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                      <button className="absolute -bottom-2 -right-2 size-10 rounded-2xl bg-primary text-white flex items-center justify-center border-4 border-white dark:border-card-dark shadow-lg hover:scale-110 transition-transform">
                        <span className="material-icons-round text-lg">photo_camera</span>
                      </button>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">Identity Matrix</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Core biological and identification data.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField label="First Identifier" value={formData.firstName} onChange={(v) => setFormData({ ...formData, firstName: v })} />
                    <FormField label="Last Identifier" value={formData.lastName} onChange={(v) => setFormData({ ...formData, lastName: v })} />
                    <FormField label="Temporal Origin (DOB)" value={formData.dob} type="date" onChange={(v) => setFormData({ ...formData, dob: v })} />
                    <SelectField
                      label="Gender Archetype"
                      value={formData.gender}
                      options={[{ v: 'MALE', l: 'Male' }, { v: 'FEMALE', l: 'Female' }, { v: 'OTHER', l: 'Non-Binary' }]}
                      onChange={(v) => setFormData({ ...formData, gender: v })}
                    />
                    <FormField label="Primary Signal (Phone)" value={formData.phone} type="tel" onChange={(v) => setFormData({ ...formData, phone: v })} />
                    <FormField label="Digital Endpoint (Email)" value={formData.email} type="email" onChange={(v) => setFormData({ ...formData, email: v })} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Academic Protocol */}
            {activeTab === 'academic' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                      <span className="material-icons-round">school</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">Academic Protocol</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">System assignment and hierarchy.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField label="Admission ID" value={formData.id} disabled />
                    <div className="hidden md:block"></div>
                    <SelectField
                      label="Academic Unit (Class)"
                      value={formData.class}
                      options={[{ v: '10', l: 'Grade 10' }, { v: '11', l: 'Grade 11' }, { v: '12', l: 'Grade 12' }]}
                      onChange={(v) => setFormData({ ...formData, class: v })}
                    />
                    <SelectField
                      label="Sector (Section)"
                      value={formData.section}
                      options={[{ v: 'A', l: 'Section A' }, { v: 'B', l: 'Section B' }, { v: 'C', l: 'Section C' }]}
                      onChange={(v) => setFormData({ ...formData, section: v })}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs follow the same pattern... */}
            {activeTab === 'guardian' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <span className="material-icons-round">family_restroom</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white">Nexus Contacts</h3>
                      <p className="text-slate-500 dark:text-slate-400 font-medium">Guardian and emergency routing.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FormField label="Primary Guardian" value={formData.fatherName} onChange={(v) => setFormData({ ...formData, fatherName: v })} />
                    <FormField label="Guardian Signal (Email)" value={formData.guardianEmail} type="email" onChange={(v) => setFormData({ ...formData, guardianEmail: v })} />
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Residency Coordinates (Address)</label>
                      <textarea
                        rows={4}
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {(activeTab === 'documents') && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[400px]">
                  <div className="h-20 w-20 rounded-[2rem] bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mb-6">
                    <span className="material-icons-round text-4xl">folder_off</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">No Archives Present</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-center max-w-xs font-medium italic">Document management protocols are currently being optimized.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function FormField({ label, value, type = 'text', disabled = false, onChange }: { label: string; value: string; type?: string; disabled?: boolean; onChange?: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{label}</label>
      <input
        type={type}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      />
    </div>
  );
}

function SelectField({ label, value, options, onChange }: { label: string; value: string; options: { v: string; l: string }[]; onChange: (v: string) => void }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white appearance-none focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
        >
          {options.map(opt => <option key={opt.v} value={opt.v}>{opt.l}</option>)}
        </select>
        <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
      </div>
    </div>
  );
}

