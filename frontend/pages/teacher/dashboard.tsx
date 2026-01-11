import TeacherLayout from '@/components/layouts/TeacherLayout';
import TeacherDashboard from '@/modules/teacher/dashboard/TeacherDashboard';

export default function DashboardPage() {
  return (
    <TeacherLayout>
      <TeacherDashboard />
    </TeacherLayout>
  );
}
