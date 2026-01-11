import AdminLayout from '@/components/layouts/AdminLayout';
import UsersList from '@/modules/admin/users/list/UsersList';

export default function UsersPage() {
  return (
    <AdminLayout>
      <UsersList />
    </AdminLayout>
  );
}
