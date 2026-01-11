import React from 'react';
import Head from 'next/head';
import { ShieldCheck, GraduationCap } from 'lucide-react';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
}

export default function AuthLayout({ children, title }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <Head>
                <title>{`${title} - EduCore`}</title>
            </Head>

            {/* Decorative Background Elements - Professional White Theme */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] size-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] size-[400px] bg-blue-100/20 rounded-full blur-[100px]" />
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] size-[300px] bg-slate-100/30 rounded-full blur-[80px]" />
            </div>

            <div className="w-full max-w-[480px] relative z-10">
                {/* Brand/Logo Section - Professional White Theme */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <div className="size-16 bg-card border border-border rounded-2xl flex items-center justify-center shadow-soft mb-6 group hover:scale-105 transition-all duration-300">
                        <GraduationCap className="text-primary" size={32} />
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-2xl font-black text-foreground uppercase tracking-[0.2em]">EduCore</h1>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic flex items-center justify-center gap-2">
                            <ShieldCheck size={12} className="text-primary" />
                            Unified Institutional Gateway
                        </p>
                    </div>
                </div>

                {/* Auth Content Card - Professional White Theme */}
                <div className="bg-card border border-border rounded-3xl p-10 shadow-soft-lg overflow-hidden relative">
                    <div className="absolute top-0 right-0 size-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-60" />
                    <div className="relative z-10">
                        {children}
                    </div>
                </div>

                {/* Footer info - Professional White Theme */}
                <div className="mt-10 text-center">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">
                        &copy; {new Date().getFullYear()} Institutional ERP Systems &bull; EduCore Protocol 4.2
                    </p>
                </div>
            </div>
        </div>
    );
}
