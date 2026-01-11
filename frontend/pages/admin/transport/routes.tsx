import AdminLayout from '@/components/layouts/AdminLayout';
import TransportRoutes from '@/modules/admin/transport/routes/TransportRoutes';

export default function TransportRoutesPage() {
    return (
        <AdminLayout>
            <TransportRoutes />
        </AdminLayout>
    );
}
