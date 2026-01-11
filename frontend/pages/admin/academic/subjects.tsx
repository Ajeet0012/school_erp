import AdminLayout from '@/components/layouts/AdminLayout';
import SubjectsList from '@/modules/admin/academic/subjects/SubjectsList';

export default function SubjectsPage() {
    return (
        <AdminLayout>
            <SubjectsList />
        </AdminLayout>
    );
}
