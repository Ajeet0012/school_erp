import React, { ReactNode } from 'react';
import { School } from 'lucide-react';

interface AuthLayoutProps {
    children: ReactNode;
    header?: string;
    subheader?: string;
    title?: string;
}

export default function AuthLayout({ children, header, subheader, title }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="size-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md">
                        <School size={28} />
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
                    {header || title || 'Sign in to your account'}
                </h2>
                {subheader && (
                    <p className="mt-2 text-center text-sm text-slate-600">
                        {subheader}
                    </p>
                )}
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-sm border border-slate-200 rounded-xl sm:px-10">
                    {children}
                </div>

                <div className="mt-6 text-center">
                    <p className="text-xs font-medium text-slate-400">
                        &copy; {new Date().getFullYear()} EduCore Enterprise Systems. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
