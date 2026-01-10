import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function TeacherDashboard() {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.TEACHER]}>
        <Head>
          <title>Teacher Dashboard - School ERP</title>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        </Head>
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display h-screen flex overflow-hidden">
          {/* Sidebar */}
          <aside className={`w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between shrink-0 z-20 transition-all duration-300 ${sidebarOpen ? 'absolute inset-y-0 left-0' : 'hidden md:flex'}`}>
            <div className="flex flex-col gap-4 p-4">
              {/* Brand */}
              <div className="flex items-center gap-3 px-2 py-2">
                <div className="bg-center bg-no-repeat bg-cover rounded-lg size-10 bg-primary/10 flex items-center justify-center text-primary" data-alt="School ERP Logo abstract icon">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">School ERP</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal">Teacher Portal</p>
                </div>
              </div>
              {/* Navigation */}
              <nav className="flex flex-col gap-1 mt-4">
                <Link href="/teacher/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary group">
                  <span className="material-symbols-outlined filled">dashboard</span>
                  <span className="text-sm font-medium leading-normal">Dashboard</span>
                </Link>
                <Link href="/teacher/classes" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined">book</span>
                  <span className="text-sm font-medium leading-normal">Classes</span>
                </Link>
                <Link href="/teacher/grades" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined">grade</span>
                  <span className="text-sm font-medium leading-normal">Grades</span>
                </Link>
                <Link href="/teacher/attendance" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined">calendar_month</span>
                  <span className="text-sm font-medium leading-normal">Attendance</span>
                </Link>
                <Link href="/teacher/students" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <span className="material-symbols-outlined">group</span>
                  <span className="text-sm font-medium leading-normal">Students</span>
                </Link>
              </nav>
            </div>
            {/* Bottom Nav */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800">
              <Link href="/teacher/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium leading-normal">Settings</span>
              </Link>
              <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors mt-1">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm font-medium leading-normal">Log Out</span>
              </button>
            </div>
          </aside>

          {/* Main Content Wrapper */}
          <div className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark overflow-hidden relative">
            {/* Top Navigation */}
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between shrink-0 z-10 sticky top-0">
              <div className="flex items-center gap-4 lg:hidden">
                <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-500 hover:text-slate-700">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Teacher Dashboard</h2>
              </div>
              <div className="flex items-center gap-3 md:gap-6 w-full lg:w-auto justify-end">
                {/* Search */}
                <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64">
                  <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
                  <input className="bg-transparent border-none text-sm w-full focus:ring-0 text-slate-700 dark:text-slate-200 placeholder-slate-400 ml-2" placeholder="Search students, classes..." type="text" />
                </div>
                {/* Actions */}
                <div className="flex items-center gap-2">
                  <button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                  </button>
                  <button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined">chat</span>
                  </button>
                </div>
                {/* Profile */}
                <div className="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-slate-700">
                  <div className="text-right hidden md:block">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{user?.firstName || 'Mr. Anderson'} {user?.lastName || ''}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Mathematics Dept.</p>
                  </div>
                  <div className="size-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm" data-alt="Profile picture">
                    <img
                      alt="Profile"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC8V3nsZEsvlPHk0JowHkypjnuhicyjw7RJC4FuSfLL8sqs0E5mo66Jz2trTaD3hUO1IgeaQ1Y8Wt1MevsE47MLWSjF6WAjmeNWIGvjr7H0OApRraJkjHMt9Pel5MYkmIFYw38G_cuJnmI9vW2VJDzV-bhceImLn6-m-EFihUG5koukFihGOTJv_Ha5Qxq2j_uBjufn1PwdKQT-BubxC_t0l019KAwq1-usAqeiIPW8WRnTy06p0rchQK_6fxYZ7ip-Xr5nDl0MAB6"
                    />
                  </div>
                </div>
              </div>
            </header>

            {/* Scrollable Content Area */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
              <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Welcome & Stats */}
                <section className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Good Morning, {user?.firstName ? user.firstName : 'Mr. Anderson'}</h1>
                      <p className="text-slate-500 dark:text-slate-400 mt-1">Here's your daily overview for Tuesday, Oct 24.</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                        <span className="material-symbols-outlined text-[20px]">edit_note</span>
                        Enter Grades
                      </button>
                      <button className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">assignment_add</span>
                        Assignment
                      </button>
                    </div>
                  </div>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                      <div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Total Students</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">142</h3>
                      </div>
                      <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">groups</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                      <div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Classes Today</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">4</h3>
                      </div>
                      <div className="size-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <span className="material-symbols-outlined">class</span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between">
                      <div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Pending Grades</p>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">12</h3>
                      </div>
                      <div className="size-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <span className="material-symbols-outlined">pending_actions</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Main Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column (2/3 width) */}
                  <div className="lg:col-span-2 flex flex-col gap-8">
                    {/* Today's Schedule */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Today's Schedule</h3>
                        <button className="text-primary text-sm font-medium hover:underline">View Calendar</button>
                      </div>
                      <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {/* Past Class */}
                        <div className="p-4 flex items-center gap-4 opacity-60">
                          <div className="w-16 text-center">
                            <p className="text-xs font-bold text-slate-500">09:00 AM</p>
                            <p className="text-[10px] text-slate-400">10:00 AM</p>
                          </div>
                          <div className="w-1 h-12 rounded-full bg-slate-300 dark:bg-slate-700"></div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-800 dark:text-white text-sm">Mathematics 101</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                              <span className="material-symbols-outlined text-[14px]">location_on</span> Room 3B
                            </p>
                          </div>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs rounded font-medium">Completed</span>
                        </div>
                        {/* Active Class */}
                        <div className="p-4 flex items-center gap-4 bg-primary/5 dark:bg-primary/10 relative">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                          <div className="w-16 text-center">
                            <p className="text-xs font-bold text-primary">11:00 AM</p>
                            <p className="text-[10px] text-slate-400">12:00 PM</p>
                          </div>
                          <div className="w-1 h-12 rounded-full bg-primary"></div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm">Algebra II</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                              <span className="material-symbols-outlined text-[14px]">location_on</span> Room 4A • 10th Grade
                            </p>
                          </div>
                          <span className="px-2 py-1 bg-primary text-white text-xs rounded font-medium animate-pulse">Now</span>
                        </div>
                        {/* Upcoming Class */}
                        <div className="p-4 flex items-center gap-4">
                          <div className="w-16 text-center">
                            <p className="text-xs font-bold text-slate-700 dark:text-slate-300">02:00 PM</p>
                            <p className="text-[10px] text-slate-400">03:00 PM</p>
                          </div>
                          <div className="w-1 h-12 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-800 dark:text-white text-sm">Geometry</h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                              <span className="material-symbols-outlined text-[14px]">location_on</span> Room 2C • 9th Grade
                            </p>
                          </div>
                          <button className="size-8 rounded hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* My Courses Grid */}
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">My Courses</h3>
                        <button className="text-primary text-sm font-medium hover:underline">View All</button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Course Card 1 */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-md transition-shadow cursor-pointer group">
                          <div className="h-24 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            <span className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">10th Grade</span>
                          </div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-primary transition-colors">Mathematics 101</h4>
                          <p className="text-xs text-slate-500 mb-3">24 Students • 3 Credits</p>
                          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-1">
                            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <p className="text-[10px] text-right text-slate-400">75% Syllabus Completed</p>
                        </div>
                        {/* Course Card 2 */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-md transition-shadow cursor-pointer group">
                          <div className="h-24 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            <span className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">11th Grade</span>
                          </div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-primary transition-colors">Algebra II</h4>
                          <p className="text-xs text-slate-500 mb-3">30 Students • 4 Credits</p>
                          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-1">
                            <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                          <p className="text-[10px] text-right text-slate-400">45% Syllabus Completed</p>
                        </div>
                        {/* Course Card 3 */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 hover:shadow-md transition-shadow cursor-pointer group">
                          <div className="h-24 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            <span className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded">9th Grade</span>
                          </div>
                          <h4 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-primary transition-colors">Geometry</h4>
                          <p className="text-xs text-slate-500 mb-3">28 Students • 3 Credits</p>
                          <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-1">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <p className="text-[10px] text-right text-slate-400">60% Syllabus Completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right Column (1/3 width) */}
                  <div className="flex flex-col gap-8">
                    {/* Announcements Widget */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-fit">
                      <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Announcements</h3>
                        <button className="text-slate-400 hover:text-primary">
                          <span className="material-symbols-outlined text-[20px]">filter_list</span>
                        </button>
                      </div>
                      <div className="p-5 flex flex-col gap-4">
                        {/* Item 1 */}
                        <div className="flex gap-3">
                          <div className="mt-1 min-w-[32px] size-8 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">priority_high</span>
                          </div>
                          <div>
                            <p className="text-xs text-red-600 font-bold mb-0.5">ADMIN • URGENT</p>
                            <h5 className="text-sm font-bold text-slate-800 dark:text-white mb-1">Staff Meeting Rescheduled</h5>
                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">The monthly staff meeting has been moved to Friday at 3 PM in the Main Hall.</p>
                            <p className="text-[10px] text-slate-400 mt-2">2 hours ago</p>
                          </div>
                        </div>
                        <hr className="border-slate-100 dark:border-slate-800" />
                        {/* Item 2 */}
                        <div className="flex gap-3">
                          <div className="mt-1 min-w-[32px] size-8 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">info</span>
                          </div>
                          <div>
                            <p className="text-xs text-primary font-bold mb-0.5">SYSTEM</p>
                            <h5 className="text-sm font-bold text-slate-800 dark:text-white mb-1">Mid-term Grade Deadline</h5>
                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">Please submit all mid-term grades by the end of this week. Portal locks on Sunday.</p>
                            <p className="text-[10px] text-slate-400 mt-2">1 day ago</p>
                          </div>
                        </div>
                        <hr className="border-slate-100 dark:border-slate-800" />
                        {/* Item 3 */}
                        <div className="flex gap-3">
                          <div className="mt-1 min-w-[32px] size-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[16px]">event</span>
                          </div>
                          <div>
                            <p className="text-xs text-emerald-600 font-bold mb-0.5">EVENT</p>
                            <h5 className="text-sm font-bold text-slate-800 dark:text-white mb-1">Science Fair Registration</h5>
                            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">Student registration for the annual Science Fair is now open.</p>
                            <p className="text-[10px] text-slate-400 mt-2">3 days ago</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border-t border-slate-200 dark:border-slate-800 text-center">
                        <button className="text-sm text-primary font-bold hover:underline">View All Notices</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Students Table Section */}
                <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-8">
                  <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center flex-wrap gap-4">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">Algebra II - Student Overview</h3>
                      <p className="text-xs text-slate-500">Class 4A • 11:00 AM - 12:00 PM</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        Export
                      </button>
                      <button className="flex items-center gap-2 bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-600 transition-colors">
                        View All Students
                      </button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 text-xs text-slate-500 uppercase">
                          <th className="px-6 py-4 font-bold">Student Name</th>
                          <th className="px-6 py-4 font-bold">ID</th>
                          <th className="px-6 py-4 font-bold">Status</th>
                          <th className="px-6 py-4 font-bold">Grade</th>
                          <th className="px-6 py-4 font-bold">Attendance</th>
                          <th className="px-6 py-4 font-bold text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="px-6 py-4 flex items-center gap-3">
                            <div className="size-8 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Student Portrait" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC540ioehPHPHvWPM7JaS80p8V5FYNZX0ZDnKDOfx4v41T3qK4HX1778zPh4QW8ZGjratsJMYQPv7GkE8muBxcRImfjVymFG_b9fWq2htZNrqMDXsO3e3TTTEOgzENunaUfsFjwo8WQ3F08TNqT2nn4gp85oItAtNlxeOwvLpVOzKTtbftjsdh95LhPhw1bW-LliPBFbIXkLddw-qxZO2zBBeszJOf1Q5tVEr82ZepD3LJpNZT1Hrcy_AJPMVWHUtI30rghyCkKhTWx')" }}></div>
                            <span className="font-bold text-slate-900 dark:text-white">Alice Freeman</span>
                          </td>
                          <td className="px-6 py-4 text-slate-500">#ST-2023-001</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Active</span>
                          </td>
                          <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">A-</td>
                          <td className="px-6 py-4 text-slate-500">92%</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary hover:text-blue-700 font-medium text-xs">Edit</button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                          <td className="px-6 py-4 flex items-center gap-3">
                            <div className="size-8 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Student Portrait" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiXux6jQafPckOtqCMvTwMbbq_oZ3y37dfDpnz3NDGpANz_NhYBebk-jQq3P2kdcoID-01xrlci4zEwbX39oABEHpXPN8_0SEArVwaERen35OlrdJiAIDpvWM5ZQr_mVQsJ5eY4Exgq_JFXuQiv6FYQ_LBYZES9KFOIDEAbkac4l9wL7kW0nSuOe6hBuxCXZS3dpDDO5etQf-o67SZLHGlUDprSubZgXFDb4skpCTWfPECiue57BJUCCd508ULXHJFZWEgbIGCgJyV')" }}></div>
                            <span className="font-bold text-slate-900 dark:text-white">Bob Smith</span>
                          </td>
                          <td className="px-6 py-4 text-slate-500">#ST-2023-042</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Active</span>
                          </td>
                          <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">B+</td>
                          <td className="px-6 py-4 text-slate-500">88%</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-primary hover:text-blue-700 font-medium text-xs">Edit</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
