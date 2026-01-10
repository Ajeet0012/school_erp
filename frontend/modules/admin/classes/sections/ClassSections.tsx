/**
 * Class Sections Module
 * Feature container for class sections page
 */

import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import EmptyState from '@/components/ui/EmptyState';
import { UserRole } from '@/utils/types';

export default function ClassSections() {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[UserRole.SCHOOL_ADMIN]}>
        <AdminLayout>
          <div>
            <h1 className="text-3xl font-bold mb-6">Class Sections</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <EmptyState message="Class sections management will be available here." />
            </div>
          </div>
        </AdminLayout>
      </RoleGuard>
    </AuthGuard>
  );
}
