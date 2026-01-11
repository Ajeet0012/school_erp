import * as React from 'react';
import { cn } from '@/utils/cn';

interface DropdownMenuProps {
    children: React.ReactNode;
}

export function DropdownMenu({ children }: DropdownMenuProps) {
    return <div className="relative inline-block text-left">{children}</div>;
}

interface DropdownMenuTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export function DropdownMenuTrigger({ children, asChild }: DropdownMenuTriggerProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    // This is a simplified version. A real one would use context.
    return (
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {children}
        </div>
    );
}

interface DropdownMenuContentProps {
    children: React.ReactNode;
    align?: 'start' | 'end';
    className?: string;
}

export function DropdownMenuContent({ children, align = 'end', className }: DropdownMenuContentProps) {
    return (
        <div className={cn(
            "absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 text-slate-950 shadow-xl animate-in fade-in zoom-in-95 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
            align === 'end' ? "right-0" : "left-0",
            className
        )}>
            {children}
        </div>
    );
}

export function DropdownMenuItem({ children, onClick, className, asChild }: any) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "relative flex cursor-pointer select-none items-center rounded-xl px-3 py-2.5 text-xs font-black uppercase tracking-widest outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-800 dark:focus:bg-slate-800",
                className
            )}
        >
            {children}
        </div>
    );
}

export function DropdownMenuSeparator({ className }: any) {
    return <div className={cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className)} />;
}
