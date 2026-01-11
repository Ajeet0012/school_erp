import { ReactNode } from 'react';
import Skeleton from './Skeleton';

export interface Column<T> {
    header: string;
    accessor: keyof T | ((item: T) => ReactNode);
    className?: string;
    width?: string;
}

interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    isLoading?: boolean;
    onRowClick?: (item: T) => void;
    emptyMessage?: string;
    pagination?: {
        total: number;
        page: number;
        limit: number;
        onPageChange: (page: number) => void;
    };
    className?: string;
}

export default function DataTable<T>({
    data,
    columns,
    isLoading,
    onRowClick,
    emptyMessage = 'No data found.',
    pagination,
    className = '',
}: DataTableProps<T>) {
    return (
        <div className={`flex flex-col ${className}`}>
            <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm shadow-slate-200/50 dark:shadow-none">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                            {columns.map((column, i) => (
                                <th
                                    key={i}
                                    className={`px-6 py-4 text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] ${column.className || ''}`}
                                    style={{ width: column.width }}
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {isLoading ? (
                            Array.from({ length: 5 }).map((_, i) => (
                                <tr key={i}>
                                    {columns.map((_, j) => (
                                        <td key={j} className="px-6 py-4">
                                            <Skeleton className="h-5 w-full" />
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length} className="px-6 py-12 text-center">
                                    <div className="flex flex-col items-center justify-center gap-2">
                                        <span className="material-icons-round text-slate-300 text-4xl">folder_off</span>
                                        <p className="text-sm font-bold text-slate-400 dark:text-slate-500 italic uppercase tracking-widest">{emptyMessage}</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            data.map((item, i) => (
                                <tr
                                    key={i}
                                    onClick={() => onRowClick?.(item)}
                                    className={`group transition-colors duration-200 ${onRowClick ? 'cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50' : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/30'}`}
                                >
                                    {columns.map((column, j) => (
                                        <td key={j} className={`px-6 py-4 text-sm font-bold text-slate-700 dark:text-slate-200 ${column.className || ''}`}>
                                            {typeof column.accessor === 'function' ? column.accessor(item) : (item[column.accessor] as ReactNode)}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {pagination && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Showing <span className="text-slate-900 dark:text-white">{(pagination.page - 1) * pagination.limit + 1}</span> - <span className="text-slate-900 dark:text-white">{Math.min(pagination.page * pagination.limit, pagination.total)}</span> of <span className="text-slate-900 dark:text-white">{pagination.total}</span> entries
                    </p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => pagination.onPageChange(pagination.page - 1)}
                            disabled={pagination.page === 1 || isLoading}
                            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 hover:text-primary hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                        >
                            <span className="material-icons-round text-xl">chevron_left</span>
                        </button>
                        <div className="flex items-center gap-1">
                            {Array.from({ length: Math.min(5, Math.ceil(pagination.total / pagination.limit)) }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => pagination.onPageChange(i + 1)}
                                    className={`h-10 w-10 rounded-xl text-xs font-black transition-all active:scale-95 ${pagination.page === i + 1 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-primary hover:text-primary'}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => pagination.onPageChange(pagination.page + 1)}
                            disabled={pagination.page === Math.ceil(pagination.total / pagination.limit) || isLoading}
                            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 hover:text-primary hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
                        >
                            <span className="material-icons-round text-xl">chevron_right</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
