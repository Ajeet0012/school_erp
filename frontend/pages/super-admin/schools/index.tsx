import Head from 'next/head';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';
import SchoolsList from '@/modules/super-admin/schools/SchoolsList';

export default function SchoolsListPage() {
  return (
    <SuperAdminLayout>
      <Head>
        <title>Schools Management - EduCore</title>
      </Head>

      <div className="flex flex-col gap-1 pb-6">
        <nav className="flex items-center gap-2 text-sm mb-4 text-slate-500 dark:text-slate-400">
          <span className="hover:text-primary transition-colors cursor-pointer">Super Admin</span>
          <span className="material-icons-round text-[16px]">chevron_right</span>
          <span className="font-medium text-slate-900 dark:text-white underline decoration-primary decoration-2 underline-offset-4">Schools Directory</span>
        </nav>
      </div>

      <SchoolsList />
    </SuperAdminLayout>
  );
}
