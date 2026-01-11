import { ReactNode } from 'react';
import Skeleton from './Skeleton';
import { LucideIcon } from 'lucide-react';

interface DataCardProps {
    title: string;
    value?: string | number;
    icon?: LucideIcon;
    trend?: {
        value: string | number;
        label?: string;
        isPositive?: boolean;
    };
    isLoading?: boolean;
    error?: string | null;
    color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
    className?: string;
}

const colorMap = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    success: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    error: 'bg-rose-500/10 text-rose-500 border-rose-500/20',
    info: 'bg-sky-500/10 text-sky-500 border-sky-500/20',
};

const iconBgMap = {
    primary: 'bg-primary',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    error: 'bg-rose-500',
    info: 'bg-sky-500',
};

export default function DataCard({
    title,
    value,
    icon: Icon,
    trend,
    isLoading,
    error,
    color = 'primary',
    className = '',
}: DataCardProps) {
    if (error) {
        return (
            <div className={`card bg-card border-destructive/50 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[140px] ${className}`}>
                <span className="material-icons-round text-destructive mb-2">error_outline</span>
                <p className="text-xs font-bold text-destructive uppercase tracking-widest text-center">Failed to load data</p>
            </div>
        );
    }

    return (
        <div className={`card card-hover rounded-2xl p-6 group ${className}`}>
            <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{title}</p>
                    {isLoading ? (
                        <Skeleton className="h-8 w-24 mt-2" />
                    ) : (
                        <h3 className="text-2xl font-black text-foreground mt-1 tracking-tight">
                            {value ?? '0'}
                        </h3>
                    )}
                </div>
                {Icon && (
                    <div className={`p-3 rounded-xl ${colorMap[color]} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={20} />
                    </div>
                )}
            </div>

            {trend && !isLoading && (
                <div className="flex items-center gap-2">
                    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${trend.isPositive ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-600'}`}>
                        <span className="material-icons-round text-xs">{trend.isPositive ? 'trending_up' : 'trending_down'}</span>
                        {trend.value}
                    </div>
                    {trend.label && <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{trend.label}</span>}
                </div>
            )}

            {isLoading && <Skeleton className="h-4 w-32 mt-2" />}
        </div>
    );
}
