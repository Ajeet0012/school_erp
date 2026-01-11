import AdminLayout from '@/components/layouts/AdminLayout';
import ExamList from '@/modules/admin/exams/list/ExamList';

export default function ExamListPage() {
    return (
        <AdminLayout>
            <ExamList />
        </AdminLayout>
    );
}
