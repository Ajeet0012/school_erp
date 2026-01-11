import AdminLayout from '@/components/layouts/AdminLayout';
import VehicleFleet from '@/modules/admin/transport/vehicles/VehicleFleet';

export default function VehiclesPage() {
    return (
        <AdminLayout>
            <VehicleFleet />
        </AdminLayout>
    );
}
