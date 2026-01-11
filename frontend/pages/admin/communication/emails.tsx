import AdminLayout from '@/components/layouts/AdminLayout';
import EmailManagement from '@/modules/admin/communication/emails/EmailManagement';

export default function EmailsPage() {
    return (
        <AdminLayout>
            <EmailManagement />
        </AdminLayout>
    );
}
