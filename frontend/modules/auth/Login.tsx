import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/hooks/useAuth';
import { getDashboardRoute } from '@/utils/role-config';
import AuthLayout from '@/components/layouts/AuthLayout';
import Alert from '@/components/ui/Alert';
import {
    Mail,
    Lock,
    ArrowRight,
    Loader2,
    AlertCircle,
    Fingerprint,
    Users,
    Eye,
    EyeOff
} from 'lucide-react';
import { toast } from 'react-hot-toast';

const loginSchema = z.object({
    email: z.string().email('Institutional ID format invalid'),
    password: z.string().min(6, 'Security protocol requires at least 6 characters'),
    rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
    const router = useRouter();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        }
    });

    const onSubmit = async (data: LoginFormValues) => {
        setLoading(true);
        setLoginError(null);
        try {
            const { email, password, rememberMe } = data;
            const user = await login({ email, password }, rememberMe);
            toast.success('Synchronization complete. Identity verified.');

            // Role-based redirection
            const dashboardRoute = getDashboardRoute(user.role);
            if (dashboardRoute) {
                router.push(dashboardRoute);
            } else {
                // Fallback if role somehow doesn't map to a dashboard
                console.error('No dashboard route found for role:', user.role);
                router.push('/');
            }
        } catch (err: any) {
            const message =
                err?.response?.data?.message ||
                err?.message ||
                'Invalid email or password';

            setLoginError(message);
            toast.error(message);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout title="Gateway Authentication">
            <div className="space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-widest leading-none mb-3">Gateway Access</h2>
                    <p className="text-sm font-medium text-muted-foreground italic">Verify your credentials to initialize session matrix.</p>
                </div>

                {loginError && (
                    <Alert type="error" className="animate-in fade-in slide-in-from-top-2">
                        <div className="flex items-center gap-2">
                            <AlertCircle size={16} />
                            <span className="font-semibold text-xs uppercase tracking-wide">{loginError}</span>
                        </div>
                    </Alert>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" onChange={() => setLoginError(null)} autoComplete="off">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-1 flex items-center gap-2">
                            <Mail size={12} className="text-primary" />
                            Institutional ID
                        </label>
                        <div className="relative group">
                            <input
                                {...register('email')}
                                type="email"
                                placeholder="Enter your email"
                                className="input-field w-full py-5 px-8 text-sm font-semibold"
                            />
                        </div>
                        {errors.email && <p className="text-[10px] text-destructive font-black uppercase tracking-widest pl-4 italic">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center pr-1">
                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-1 flex items-center gap-2">
                                <Lock size={12} className="text-primary" />
                                Security Cipher
                            </label>
                            <Link href="/auth/forgot-password" className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline whitespace-nowrap">
                                Lost Cipher?
                            </Link>
                        </div>
                        <div className="relative group">
                            <input
                                {...register('password')}
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="input-field w-full py-5 px-8 text-sm font-semibold pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        {errors.password && <p className="text-[10px] text-destructive font-black uppercase tracking-widest pl-4 italic">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center space-x-2 pl-1">
                        <input
                            type="checkbox"
                            {...register('rememberMe')}
                            id="rememberMe"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label
                            htmlFor="rememberMe"
                            className="text-[10px] font-black text-muted-foreground uppercase tracking-widest cursor-pointer select-none hover:text-primary transition-colors"
                        >
                            Remember Identity Protocol
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-soft-lg hover:shadow-soft-xl hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-soft-lg"
                    >
                        {loading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Verifying Identity...
                            </>
                        ) : (
                            <>
                                Initialize Session
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </form>

                <div className="pt-6 border-t border-border text-center">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-4">New Institutional Resource?</p>
                    <Link href="/auth/register" className="inline-flex items-center gap-2 text-xs font-black text-foreground uppercase tracking-widest hover:text-primary transition-colors">
                        Request Access Node <Fingerprint size={16} />
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}
