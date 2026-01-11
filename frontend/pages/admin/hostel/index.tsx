import AdminLayout from '@/components/layouts/AdminLayout';
import HostelRegistry from '@/modules/admin/hostel/registry/HostelRegistry';

export default function HostelPage() {
    return (
        <AdminLayout>
            <HostelRegistry />
        </AdminLayout>
    );
}
