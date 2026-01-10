import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { authService } from '@/services/auth.service';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      await authService.forgotPassword(email);
      setMessage('If an account exists with this email, you will receive a password reset link shortly.');
    } catch (err: any) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Forgot Password - School ERP</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-primary rounded-full blur-[50px] opacity-60 dark:opacity-30 animate-float z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-emerald-500 rounded-full blur-[50px] opacity-60 dark:opacity-30 animate-float-delayed z-0"></div>

        <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="w-full max-w-lg bg-white dark:bg-card-dark rounded-2xl shadow-2xl overflow-hidden z-10 relative border border-slate-200 dark:border-slate-700">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-primary"></div>

          <div className="p-8 md:p-12 flex flex-col items-center">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary animate-pulse">
              <span className="material-icons-outlined text-[40px]">lock_reset</span>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Forgot password?</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">
                No worries, we'll send you reset instructions.
              </p>
            </div>

            {error && (
              <div className="w-full mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 text-sm rounded">
                {error}
              </div>
            )}
            {message && (
              <div className="w-full mb-6 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 text-green-700 dark:text-green-400 text-sm rounded">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-icons-outlined text-lg">email</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                    id="email"
                    name="email"
                    placeholder="name@school.edu"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/30 text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5 group disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
              >
                <span>{loading ? 'Sending Instructions...' : 'Send Reset Link'}</span>
                {!loading && <span className="material-icons-outlined text-lg ml-2 transition-transform group-hover:translate-x-1">arrow_forward</span>}
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center space-x-2 text-sm">
              <span className="text-slate-500 dark:text-slate-400">Remember your password?</span>
              <Link href="/auth/login" className="font-medium text-primary hover:text-primary-hover transition-colors flex items-center group">
                <span className="material-icons-outlined text-sm mr-1 transition-transform group-hover:-translate-x-1">arrow_back</span>
                Back to log in
              </Link>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center text-xs">
            <span className="text-slate-500">© 2024 School ERP</span>
            <a className="text-slate-500 hover:text-primary transition-colors" href="#">Need help?</a>
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
