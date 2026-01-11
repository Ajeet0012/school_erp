import StudentLayout from '@/components/layouts/StudentLayout';
import StudentDashboard from '@/modules/student/dashboard/StudentDashboard';

export default function DashboardPage() {
  return (
    <StudentLayout>
      <StudentDashboard />
    </StudentLayout>
  );
}
