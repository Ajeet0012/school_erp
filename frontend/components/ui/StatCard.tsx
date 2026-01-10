interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
  trend?: string;
}

export default function StatCard({ title, value, icon, className = '', trend }: StatCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
        </div>
        {icon && (
          <div className="p-3 bg-brand-50 rounded-lg text-brand-600">
            {icon}
          </div>
        )}
      </div>
      {trend && (
        <div className="mt-4 flex items-center text-sm">
          <span className="text-green-600 font-medium">↑ {trend}</span>
          <span className="text-slate-500 ml-2">from last month</span>
        </div>
      )}
    </div>
  );
}
