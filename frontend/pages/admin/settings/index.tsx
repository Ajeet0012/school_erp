import AdminLayout from '@/components/layouts/AdminLayout';
import InstitutionSettings from '@/modules/admin/settings/InstitutionSettings';

export default function SettingsPage() {
    return (
        <AdminLayout>
            <InstitutionSettings />
        </AdminLayout>
    );
}
