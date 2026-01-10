import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <Head>
        <title>Reset Password - School ERP</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-sans min-h-screen flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-300">
        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[50px] opacity-60 dark:opacity-30 animate-float z-0"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500 rounded-full blur-[50px] opacity-60 dark:opacity-30 animate-float-delayed z-0"></div>

        <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="w-full max-w-lg bg-white dark:bg-card-dark rounded-2xl shadow-2xl overflow-hidden z-10 relative border border-slate-200 dark:border-slate-700">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-primary"></div>

          <div className="p-8 md:p-12 flex flex-col items-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-icons-outlined text-[40px]">shield</span>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Reset Password</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">
                Your new password must be different from previously used passwords.
              </p>
            </div>

            <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">New Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-icons-outlined text-lg">lock</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-12 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
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

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-icons-outlined text-lg">lock</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-12 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-primary focus:border-primary sm:text-sm transition-all"
                    placeholder="••••••••"
                    type={showConfirmPassword ? 'text' : 'password'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    <span className="material-icons-outlined text-lg">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Password Requirements</p>
                <div className="space-y-2">
                  {[
                    { text: 'At least 8 characters', met: true },
                    { text: 'Contains a number', met: false },
                    { text: 'Contains a special character', met: false }
                  ].map((req, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className={`material-icons-outlined text-[20px] ${req.met ? 'text-emerald-500' : 'text-slate-300 dark:text-slate-600'}`}>
                        {req.met ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                      <p className={`text-sm ${req.met ? 'text-slate-900 dark:text-slate-200' : 'text-slate-500'}`}>{req.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/30 text-sm font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 transform hover:-translate-y-0.5"
                type="submit"
              >
                Reset Password
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center">
              <Link href="/auth/login" className="font-medium text-primary hover:text-primary-hover transition-colors flex items-center group text-sm">
                <span className="material-icons-outlined text-sm mr-1 transition-transform group-hover:-translate-x-1">arrow_back</span>
                Back to log in
              </Link>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-4 border-t border-slate-100 dark:border-slate-700 text-center text-xs">
            <span className="text-slate-500">© 2024 School ERP</span>
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
