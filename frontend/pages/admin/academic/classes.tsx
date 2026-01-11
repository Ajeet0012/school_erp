import AdminLayout from '@/components/layouts/AdminLayout';
import ClassesList from '@/modules/admin/academic/classes/ClassesList';

export default function ClassesPage() {
    return (
        <AdminLayout>
            <ClassesList />
        </AdminLayout>
    );
}
