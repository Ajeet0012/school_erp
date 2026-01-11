import AdminLayout from '@/components/layouts/AdminLayout';
import SMSManagement from '@/modules/admin/communication/sms/SMSManagement';

export default function SMSPage() {
    return (
        <AdminLayout>
            <SMSManagement />
        </AdminLayout>
    );
}
