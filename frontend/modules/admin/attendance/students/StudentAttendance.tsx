/**
 * Student Attendance Module
 * Feature container for student attendance page
 */

import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import EmptyState from '@/components/ui/EmptyState';
import { UserRole } from '@/utils/types';

export default function StudentAttendance() {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[UserRole.SCHOOL_ADMIN]}>
        <AdminLayout>
          <div>
            <h1 className="text-3xl font-bold mb-6">Student Attendance</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <EmptyState message="Student attendance management will be available here." />
            </div>
          </div>
        </AdminLayout>
      </RoleGuard>
    </AuthGuard>
  );
}
