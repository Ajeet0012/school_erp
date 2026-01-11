import AdminLayout from '@/components/layouts/AdminLayout';
import StaffAttendance from '@/modules/admin/staff/dashboard/StaffAttendance';

export default function StaffAttendancePage() {
    return (
        <AdminLayout>
            <StaffAttendance />
        </AdminLayout>
    );
}
