/**
 * Exam Results Module
 * Feature container for exam results page
 */

import AdminLayout from '@/components/layouts/AdminLayout';
import EmptyState from '@/components/ui/EmptyState';

export default function ExamResults() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Exam Results</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <EmptyState message="Exam results will be available here." />
        </div>
      </div>
    </AdminLayout>
  );
}
