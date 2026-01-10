import Head from 'next/head';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';
import AnnouncementsDashboard from '@/modules/admin/announcements/dashboard/AnnouncementsDashboard';

export default function AdminAnnouncementsDashboardPage() {
    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Announcements - School ERP</title>
                    </Head>

                    <div className="flex flex-col h-full">
                        <div className="flex flex-col gap-1 px-8 pt-6 pb-2 max-w-[1600px] w-full mx-auto">
                            {/* Breadcrumbs */}
                            <nav className="flex flex-wrap gap-2 text-sm mb-6">
                                <span className="text-slate-500">Dashboard</span>
                                <span className="text-slate-400">/</span>
                                <span className="text-slate-500">Communications</span>
                                <span className="text-slate-400">/</span>
                                <span className="text-slate-900 dark:text-white font-medium">Announcements</span>
                            </nav>
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">System Announcements</h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Manage, schedule, and publish notifications to schools and user groups.</p>
                                </div>
                            </div>
                        </div>
                        <AnnouncementsDashboard />
                    </div>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
