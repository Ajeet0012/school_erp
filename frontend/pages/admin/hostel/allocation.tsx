import AdminLayout from '@/components/layouts/AdminLayout';
import RoomAllocation from '@/modules/admin/hostel/allocation/RoomAllocation';

export default function AllocationPage() {
    return (
        <AdminLayout>
            <RoomAllocation />
        </AdminLayout>
    );
}
