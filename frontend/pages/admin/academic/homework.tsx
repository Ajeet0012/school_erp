import AdminLayout from '@/components/layouts/AdminLayout';
import HomeworkDashboard from '@/modules/admin/homework/dashboard/HomeworkDashboard';

export default function HomeworkPage() {
    return (
        <AdminLayout>
            <HomeworkDashboard />
        </AdminLayout>
    );
}
