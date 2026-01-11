import AdminLayout from '@/components/layouts/AdminLayout';
import CommunicationTemplates from '@/modules/admin/communication/templates/CommunicationTemplates';

export default function TemplatesPage() {
    return (
        <AdminLayout>
            <CommunicationTemplates />
        </AdminLayout>
    );
}
