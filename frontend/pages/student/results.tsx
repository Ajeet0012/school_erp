import StudentLayout from '@/components/layouts/StudentLayout';
import StudentResults from '@/modules/student/results/StudentResults';

export default function ResultsPage() {
  return (
    <StudentLayout>
      <StudentResults />
    </StudentLayout>
  );
}
