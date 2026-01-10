import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { authService } from '@/services/auth.service';
import { getDashboardRoute } from '@/utils/role-config';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginRole, setLoginRole] = useState('Admin');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authService.login({ email, password });
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('user', JSON.stringify(response.user));
      const dashboard = getDashboardRoute(response.user.role);
      router.push(dashboard || '/auth/login');
    } catch (err: any) {
      setError('Invalid email or password');
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>School ERP Login</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-primary rounded-full blur-[50px] opacity-60 dark:opacity-30 animate-float z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-emerald-500 rounded-full blur-[50px] opacity-60 dark:opacity-30 animate-float-delayed z-0"></div>

        <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="w-full max-w-5xl bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 relative border border-slate-200 dark:border-slate-700">
          {/* Left Side: Visual/Hero */}
          <div className="w-full md:w-1/2 relative hidden md:flex flex-col justify-end p-12 text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 dark:from-slate-900/90 dark:to-slate-800/40 mix-blend-multiply"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                  <span className="material-icons-outlined text-white text-3xl">school</span>
                </div>
                <h1 className="text-4xl font-bold mb-2">EduNexus ERP</h1>
                <p className="text-indigo-100 text-lg font-light">Empowering the next generation of leaders through technology.</p>
              </div>
              <div className="space-y-3">
                {[
                  'Streamlined Administration',
                  'Real-time Analytics',
                  'Parent-Teacher Connectivity'
                ].map((text) => (
                  <div key={text} className="flex items-center space-x-3 text-sm text-indigo-100">
                    <span className="material-icons-outlined text-emerald-400 text-sm">check_circle</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white dark:bg-card-dark">
            <div className="md:hidden text-center mb-8">
              <span className="material-icons-outlined text-primary text-4xl mb-2">school</span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">EduNexus</h2>
            </div>

            <div className="mb-8 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome Back</h2>
              <p className="text-slate-500 dark:text-slate-400">Please enter your credentials to access the dashboard.</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 text-sm rounded transition-all">
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">I am logging in as</label>
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  {['Admin', 'Teacher', 'Student'].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setLoginRole(role)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-all ${loginRole === role
                          ? 'bg-white dark:bg-slate-700 text-primary shadow-sm ring-1 ring-slate-200 dark:ring-slate-600'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/50'
                        }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="email">
                  Username or Email
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-icons-outlined text-slate-400 dark:text-slate-500">person</span>
                  </div>
                  <input
                    className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-3 pl-10 pr-3 focus:ring-primary focus:border-primary sm:text-sm placeholder-slate-400 transition-colors"
                    id="email"
                    name="email"
                    placeholder="admin@school.edu"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor="password">
                  Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="material-icons-outlined text-slate-400 dark:text-slate-500">lock</span>
                  </div>
                  <input
                    className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white py-3 pl-10 pr-12 focus:ring-primary focus:border-primary sm:text-sm placeholder-slate-400 transition-colors"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    <span className="material-icons-outlined text-lg">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-700 dark:border-slate-600 cursor-pointer"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                  />
                  <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember-me">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link className="font-medium text-primary hover:text-indigo-500 transition-colors" href="/auth/forgot-password">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/30 text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign in to Dashboard'}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                © 2024 EduNexus Systems. Need help? <a className="text-primary hover:underline" href="#">Contact Support</a>
              </p>
            </div>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button
          aria-label="Toggle Dark Mode"
          className="fixed bottom-4 right-4 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors z-50 focus:outline-none"
          onClick={() => document.documentElement.classList.toggle('dark')}
        >
          <span className="material-icons-outlined dark:hidden">dark_mode</span>
          <span className="material-icons-outlined hidden dark:inline">light_mode</span>
        </button>

        <style jsx global>{`
          @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(30px, 30px) rotate(10deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
          .animate-float {
            animation: float 10s infinite ease-in-out;
          }
          .animate-float-delayed {
            animation: float 10s infinite ease-in-out;
            animation-delay: 5s;
          }
        `}</style>
      </div>
    </>
  );
}
