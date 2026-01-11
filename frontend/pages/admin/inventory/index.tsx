import AdminLayout from '@/components/layouts/AdminLayout';
import InventoryManagement from '@/modules/admin/inventory/InventoryManagement';

export default function InventoryPage() {
    return (
        <AdminLayout>
            <InventoryManagement />
        </AdminLayout>
    );
}
