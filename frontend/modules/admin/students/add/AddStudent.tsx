import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '@/components/layouts/AdminLayout';
import { studentsService } from '@/services/students.service';
import { CreateStudentDto } from '@/utils/types';

export default function AddStudent() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('personal');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    admissionNumber: 'AD-2024-' + Math.floor(1000 + Math.random() * 9000),
    dob: '',
    gender: '' as 'MALE' | 'FEMALE' | 'OTHER' | '',
    bloodGroup: '',
    religion: '',
    admissionDate: new Date().toISOString().split('T')[0],
    class: '',
    section: '',
    rollNumber: '',
    fatherName: '',
    motherName: '',
    guardianEmail: '',
    address: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const payload: CreateStudentDto = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        admissionNumber: formData.admissionNumber,
        dateOfBirth: formData.dob,
        gender: formData.gender === '' ? undefined : formData.gender,
        address: formData.address,
        classId: formData.class,
        sectionId: formData.section,
      };
      await studentsService.create(payload);
      router.push('/admin/students');
    } catch (err: any) {
      setError(err.message || 'Failed to onboard entity');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'personal', label: 'Identity Matrix', icon: 'fingerprint' },
    { id: 'academic', label: 'Academic Protocol', icon: 'school' },
    { id: 'guardian', label: 'Nexus Contacts', icon: 'family_restroom' },
    { id: 'documents', label: 'Data Archives', icon: 'folder_open' },
  ];

  return (
    <AdminLayout>
      <Head>
        <title>Onboard Entity - Student - EduCore</title>
      </Head>

      {/* Navigation & Breadcrumbs */}
      <div className="flex flex-col gap-1 pb-6">
        <nav className="flex items-center gap-2 text-sm mb-4 text-slate-500 dark:text-slate-400">
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/dashboard')}>Main Console</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => router.push('/admin/students')}>Identity Directory</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="font-medium text-slate-900 dark:text-white underline decoration-primary decoration-2 underline-offset-4">Onboard Entity</span>
        </nav>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Onboard Entity</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium italic">Initialize new student profile within the EduCore ecosystem.</p>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-8 py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-2xl font-black text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
          >
            Abort Process
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/20 hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <span className="material-icons-round text-lg">{loading ? 'sync' : 'save'}</span>
            {loading ? 'Processing...' : 'Commit Entity'}
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Sidebar: Tabs */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-4 sticky top-10">
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

        {/* Right Content Area: Form Sections */}
        <div className="lg:col-span-9">
          <form className="space-y-10 pb-20">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-8 py-6 rounded-[2rem] flex items-center gap-4 animate-shake">
                <span className="material-icons-round">error_outline</span>
                <p className="font-bold">{error}</p>
              </div>
            )}

            {/* Step 1: Identity Matrix */}
            {activeTab === 'personal' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Legal first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Legal last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Birth Date</label>
                      <input
                        type="date"
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Gender</label>
                      <div className="relative">
                        <select
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white appearance-none focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
                          value={formData.gender}
                          onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'MALE' | 'FEMALE' | 'OTHER' | '' })}
                        >
                          <option value="">Select Gender</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="OTHER">Non-Binary</option>
                        </select>
                        <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Contact Frequency (Phone)</label>
                      <input
                        type="tel"
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="+1-000-000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="primary.identity@edu.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
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
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Admission ID</label>
                      <input
                        type="text"
                        disabled
                        className="w-full px-6 py-4 bg-slate-100 dark:bg-slate-800/50 border-none rounded-2xl text-sm font-bold text-slate-500 dark:text-slate-400 cursor-not-allowed"
                        value={formData.admissionNumber}
                      />
                      <p className="text-[10px] text-slate-400 font-bold italic ml-2">System Generated Index</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Activation Date</label>
                      <input
                        type="date"
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        value={formData.admissionDate}
                        onChange={(e) => setFormData({ ...formData, admissionDate: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Academic Unit (Class)</label>
                      <div className="relative">
                        <select
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white appearance-none focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
                          value={formData.class}
                          onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                        >
                          <option value="">Select Unit</option>
                          <option value="10">Grade 10</option>
                          <option value="11">Grade 11</option>
                          <option value="12">Grade 12</option>
                        </select>
                        <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Sector (Section)</label>
                      <div className="relative">
                        <select
                          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white appearance-none focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
                          value={formData.section}
                          onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                        >
                          <option value="">Select Sector</option>
                          <option value="A">Section A</option>
                          <option value="B">Section B</option>
                          <option value="C">Section C</option>
                        </select>
                        <span className="material-icons-round absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Nexus Contacts */}
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
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Primary Guardian</label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Full name of guardian"
                        value={formData.fatherName}
                        onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Guardian Signal (Email)</label>
                      <input
                        type="email"
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="guardian.nexus@proxy.com"
                        value={formData.guardianEmail}
                        onChange={(e) => setFormData({ ...formData, guardianEmail: e.target.value })}
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Residency Coordinates (Address)</label>
                      <textarea
                        rows={4}
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        placeholder="Full residency coordinates..."
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Data Archives */}
            {activeTab === 'documents' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white dark:bg-card-dark rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center min-h-[400px]">
                  <div className="h-20 w-20 rounded-[2rem] bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mb-6">
                    <span className="material-icons-round text-4xl">folder_off</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">No Archives Present</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-center max-w-xs font-medium italic">Document submission protocols are currently in standby mode. Proceed with commitment.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

