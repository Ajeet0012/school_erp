import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function StudentDashboard() {
  const { user, logout } = useAuth();

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.STUDENT]}>
        <Head>
          <title>Student Dashboard</title>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        </Head>
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-hidden">
          <div className="flex h-screen w-full bg-background-light dark:bg-background-dark">
            {/* Side Navigation */}
            <aside className="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col hidden lg:flex shrink-0 z-20 transition-all duration-300">
              <div className="flex h-full flex-col justify-between p-6">
                <div className="flex flex-col gap-8">
                  {/* Brand */}
                  <div className="flex items-center gap-3 px-2">
                    <div className="bg-primary/10 flex items-center justify-center rounded-xl size-10 text-primary">
                      <span className="material-symbols-outlined text-2xl">school</span>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none tracking-tight">EduSchool</h1>
                      <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mt-1">Student Portal</p>
                    </div>
                  </div>
                  {/* Navigation Links */}
                  <nav className="flex flex-col gap-2">
                    <Link href="/student/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary group transition-colors">
                      <span className="material-symbols-outlined fill-1">dashboard</span>
                      <p className="text-sm font-semibold leading-normal">Dashboard</p>
                    </Link>
                    <Link href="/student/attendance" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">calendar_month</span>
                      <p className="text-sm font-medium leading-normal">Attendance</p>
                    </Link>
                    <Link href="/student/timetable" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">event_note</span>
                      <p className="text-sm font-medium leading-normal">Timetable</p>
                    </Link>
                    <Link href="/student/homework" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">assignment</span>
                      <p className="text-sm font-medium leading-normal">Homework</p>
                    </Link>
                    <Link href="/student/exams" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">assignment_turned_in</span>
                      <p className="text-sm font-medium leading-normal">Exams</p>
                    </Link>
                    <Link href="/student/results" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">insights</span>
                      <p className="text-sm font-medium leading-normal">Results</p>
                    </Link>
                    <Link href="/student/fees" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">payments</span>
                      <p className="text-sm font-medium leading-normal">Fees</p>
                    </Link>
                    <Link href="/student/downloads" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">download</span>
                      <p className="text-sm font-medium leading-normal">Downloads</p>
                    </Link>
                  </nav>
                </div>
                {/* Logout Button */}
                <button
                  onClick={logout}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg h-12 border border-slate-200 dark:border-slate-700 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold leading-normal transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">logout</span>
                  <span className="truncate">Log Out</span>
                </button>
              </div>
            </aside>
            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
              {/* Top Navigation Bar */}
              <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-8 py-4 shrink-0 z-10">
                <div className="flex items-center gap-4 lg:gap-8 min-w-0">
                  <button className="lg:hidden text-slate-900 dark:text-white p-2 -ml-2">
                    <span className="material-symbols-outlined">menu</span>
                  </button>
                  <div className="flex flex-col min-w-0">
                    <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight truncate">Welcome back, {user?.firstName || 'Alex'}!</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm hidden sm:block">Here's what's happening with your courses today.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 lg:gap-6">
                  {/* Search Bar */}
                  <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg h-10 px-3 w-64 border border-transparent focus-within:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">search</span>
                    <input className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 px-2" placeholder="Search..." />
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="relative size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-[24px]">notifications</span>
                      <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                    </button>
                    <button className="size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 transition-colors">
                      <span className="material-symbols-outlined text-[24px]">settings</span>
                    </button>
                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
                    <div className="flex items-center gap-3 cursor-pointer">
                      <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border-2 border-white dark:border-slate-800 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZSp71YN-EkDoYptDWA0I5d4gbmG7HdA8stMxol2Tr_AG3R4e-lgtZW6NZUZlOmctaSZ09TnCz8vzYgOeaNY-TNpIMlPrVPJ7mRiK8KzGYNrIa56Nm4P4nGfIfJkYHOR97R_dFW06vYeA0geyp3cg0QNJ4LbJuXmoqyKrZzMEDWWv_QkYlptXzBCjVt2Su3dCgIXJRZKVj8Uu5yQFQG1RpXYUgnLo8MfGFauEaoFt0X7g4eEg5c4BwRCmFiXNaqN9G9fSI1d4iTGSR")' }}></div>
                      <div className="hidden xl:flex flex-col">
                        <span className="text-sm font-bold text-slate-900 dark:text-white leading-none">{user?.firstName || 'Alex'} {user?.lastName || 'Morgan'}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">Grade 11-B</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              {/* Scrollable Content */}
              <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 lg:p-8 scroll-smooth">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {/* GPA Card */}
                    <div className="flex flex-col justify-between p-5 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-md transition-all">
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                          <span className="material-symbols-outlined">school</span>
                        </div>
                        <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 px-2 py-1 rounded-full">
                          <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +0.2
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Current GPA</p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">3.8</p>
                      </div>
                    </div>
                    {/* Attendance Card */}
                    <div className="flex flex-col justify-between p-5 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 group hover:shadow-md transition-all">
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                          <span className="material-symbols-outlined">calendar_today</span>
                        </div>
                        <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 px-2 py-1 rounded-full">
                          <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +2%
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Attendance</p>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">95%</p>
                      </div>
                    </div>
                    {/* Next Class Card (Hero Style) */}
                    <div className="flex flex-col justify-between p-5 rounded-xl bg-primary text-white shadow-lg shadow-blue-200 dark:shadow-none relative overflow-hidden">
                      {/* Abstract pattern for background */}
                      <div className="absolute -right-4 -top-4 size-32 rounded-full bg-white/10 blur-2xl"></div>
                      <div className="absolute -left-4 -bottom-4 size-24 rounded-full bg-black/10 blur-xl"></div>
                      <div className="relative z-10 flex justify-between items-start">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                          <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <span className="text-xs font-bold bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">Starts in 10m</span>
                      </div>
                      <div className="relative z-10 mt-4">
                        <p className="text-blue-100 text-sm font-medium">Next Class</p>
                        <p className="text-2xl font-bold mt-1">Mathematics 101</p>
                        <p className="text-blue-100 text-sm mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">room</span> Room 302
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Main Bento Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left Column: Schedule (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                      {/* Timeline Widget */}
                      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-slate-900 dark:text-white text-lg font-bold">Today's Schedule</h3>
                          <button className="text-primary text-sm font-semibold hover:underline">View Calendar</button>
                        </div>
                        <div className="grid grid-cols-[48px_1fr] gap-x-4">
                          {/* Class 1 */}
                          <div className="flex flex-col items-center gap-2 pt-1">
                            <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center">
                              <span className="material-symbols-outlined text-[18px]">functions</span>
                            </div>
                            <div className="w-[2px] bg-slate-100 dark:bg-slate-800 h-full min-h-[40px]"></div>
                          </div>
                          <div className="pb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800/50">
                              <div>
                                <p className="text-slate-900 dark:text-white text-base font-bold">Mathematics 101</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Room 302 • Mr. Thompson</p>
                              </div>
                              <div className="mt-2 sm:mt-0 text-right">
                                <p className="text-slate-900 dark:text-white text-sm font-bold">09:00 AM</p>
                                <p className="text-slate-500 dark:text-slate-400 text-xs">10:30 AM</p>
                              </div>
                            </div>
                          </div>
                          {/* Class 2 */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-[2px] bg-slate-100 dark:bg-slate-800 h-2"></div>
                            <div className="size-8 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[18px]">history_edu</span>
                            </div>
                            <div className="w-[2px] bg-slate-100 dark:bg-slate-800 h-full min-h-[40px]"></div>
                          </div>
                          <div className="pb-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                              <div>
                                <p className="text-slate-900 dark:text-white text-base font-bold">World History</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Room 104 • Ms. Davis</p>
                              </div>
                              <div className="mt-2 sm:mt-0 text-right">
                                <p className="text-slate-900 dark:text-white text-sm font-bold">10:45 AM</p>
                                <p className="text-slate-500 dark:text-slate-400 text-xs">12:15 PM</p>
                              </div>
                            </div>
                          </div>
                          {/* Break */}
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-[2px] bg-slate-100 dark:bg-slate-800 h-2"></div>
                            <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[18px]">restaurant</span>
                            </div>
                            <div className="w-[2px] bg-slate-100 dark:bg-slate-800 h-full min-h-[40px]"></div>
                          </div>
                          <div className="pb-6">
                            <div className="flex items-center gap-3 py-2 px-4 opacity-70">
                              <p className="text-slate-900 dark:text-white text-sm font-medium italic">Lunch Break</p>
                              <div className="h-px bg-slate-200 dark:bg-slate-700 flex-1"></div>
                              <p className="text-slate-500 dark:text-slate-400 text-xs">45 min</p>
                            </div>
                          </div>
                          {/* Class 3 */}
                          <div className="flex flex-col items-center gap-2 pb-2">
                            <div className="w-[2px] bg-slate-100 dark:bg-slate-800 h-2"></div>
                            <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-500 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[18px]">science</span>
                            </div>
                          </div>
                          <div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                              <div>
                                <p className="text-slate-900 dark:text-white text-base font-bold">Physics Lab</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Room 205 • Dr. Foster</p>
                              </div>
                              <div className="mt-2 sm:mt-0 text-right">
                                <p className="text-slate-900 dark:text-white text-sm font-bold">01:00 PM</p>
                                <p className="text-slate-500 dark:text-slate-400 text-xs">02:30 PM</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Announcements Block */}
                      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-slate-900 dark:text-white text-lg font-bold">Announcements</h3>
                          <div className="flex gap-2">
                            <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
                              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                            </button>
                            <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors">
                              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                            </button>
                          </div>
                        </div>
                        <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 border border-primary/10 dark:border-primary/20">
                          <div className="flex items-start gap-4">
                            <div className="bg-primary text-white rounded-md px-2 py-1 text-center shrink-0">
                              <p className="text-xs font-bold uppercase">Oct</p>
                              <p className="text-lg font-bold leading-none">24</p>
                            </div>
                            <div>
                              <h4 className="text-slate-900 dark:text-white font-bold text-sm">Science Fair Registration Open</h4>
                              <p className="text-slate-600 dark:text-slate-400 text-xs mt-1 leading-relaxed line-clamp-2">The annual science fair is approaching! Register your team by Friday to secure a spot in the exhibition hall. Don't miss out on the grand prize.</p>
                              <a className="text-primary text-xs font-bold mt-2 inline-block hover:underline" href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Right Column: Assignments & Links (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      {/* Assignments Card */}
                      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold">Pending Tasks</h3>
                            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-0.5 rounded-full">3 Due</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          {/* Task 1 */}
                          <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-all group">
                            <input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary/50" type="checkbox" />
                            <div className="flex-1">
                              <p className="text-slate-900 dark:text-white text-sm font-semibold group-hover:text-primary transition-colors">Algebra Worksheet 4.2</p>
                              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Mathematics 101</p>
                            </div>
                            <span className="text-xs font-medium text-red-500 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">Today</span>
                          </label>
                          {/* Task 2 */}
                          <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-all group">
                            <input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary/50" type="checkbox" />
                            <div className="flex-1">
                              <p className="text-slate-900 dark:text-white text-sm font-semibold group-hover:text-primary transition-colors">History Essay Draft</p>
                              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">World History</p>
                            </div>
                            <span className="text-xs font-medium text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">Tomorrow</span>
                          </label>
                          {/* Task 3 */}
                          <label className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-all group">
                            <input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary/50" type="checkbox" />
                            <div className="flex-1">
                              <p className="text-slate-900 dark:text-white text-sm font-semibold group-hover:text-primary transition-colors">Lab Report: Motion</p>
                              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Physics Lab</p>
                            </div>
                            <span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">Oct 26</span>
                          </label>
                        </div>
                        <button className="w-full mt-4 py-2 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm font-medium hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined text-[18px]">add</span> Add Personal Task
                        </button>
                      </div>
                      {/* Quick Links Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <Link href="#" className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 group">
                          <div className="size-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">library_books</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">Library</span>
                        </Link>
                        <Link href="#" className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 group">
                          <div className="size-10 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">payments</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">Pay Fees</span>
                        </Link>
                        <Link href="#" className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 group">
                          <div className="size-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">forum</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">Messages</span>
                        </Link>
                        <Link href="#" className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 group">
                          <div className="size-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">help</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-900 dark:text-white">Support</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
