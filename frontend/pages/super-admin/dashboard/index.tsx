import Head from 'next/head';
import SuperAdminLayout from '@/components/layouts/SuperAdminLayout';
import SuperAdminDashboard from '@/modules/super-admin/dashboard/SuperAdminDashboard';

export default function SuperAdminDashboardPage() {
    return (
        <SuperAdminLayout>
            <Head>
                <title>Super Admin Dashboard - School ERP</title>
            </Head>
            <SuperAdminDashboard />
        </SuperAdminLayout>
    );
}
