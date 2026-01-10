/**
 * Chat Module
 * Feature container for chat page
 */

import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import EmptyState from '@/components/ui/EmptyState';
import { UserRole } from '@/utils/types';

export default function Chat() {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[UserRole.SCHOOL_ADMIN]}>
        <AdminLayout>
          <div>
            <h1 className="text-3xl font-bold mb-6">Chat</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <EmptyState message="Chat functionality will be available here." />
            </div>
          </div>
        </AdminLayout>
      </RoleGuard>
    </AuthGuard>
  );
}
