import AdminLayout from '@/components/layouts/AdminLayout';
import NoticeBoard from '@/modules/admin/communication/notices/NoticeBoard';

export default function NoticesPage() {
    return (
        <AdminLayout>
            <NoticeBoard />
        </AdminLayout>
    );
}
