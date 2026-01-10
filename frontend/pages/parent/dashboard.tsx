import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function ParentDashboard() {
  const [selectedChild, setSelectedChild] = useState('Alex Doe');

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.PARENT]}>
        <Head>
          <title>Parent Portal - School ERP</title>
        </Head>
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-x-hidden min-h-screen flex flex-col">
          {/* Top Navigation */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white dark:bg-slate-900 px-6 py-3 shadow-sm dark:border-slate-800">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-primary">EduConnect</h2>
              </div>
              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center gap-6">
                <Link href="/parent/dashboard" className="text-sm font-bold text-primary">Dashboard</Link>
                <Link href="/parent/attendance" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Attendance</Link>
                <Link href="/parent/fees" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Fees</Link>
                <Link href="/parent/results" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Results</Link>
                <Link href="/parent/messages" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Messages</Link>
              </nav>
              {/* Child Switcher (Context) */}
              <div className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 pr-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border border-white shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB61LnBfKMdDnc_-6OYmVQgzGo7S1yUh5ghynaP9JMwuqY2GiIpY1NN8vm7i7PApXmCn9xdZMS4PFUc0ATQryqPNM6mQTS4zC4GGgAlnMEQE9AzaCSNApMs85R5rfJMJiuA6V1KlS6Au4m4T3qmlIvpUfv-1iu_Nt5Vh-BQELm26WVB0HiU2743VMGYUdDPVjnrCsAz-5kzEoxEWoVIg_GLg5s6sNSWDZY6qbED7gX4XqCPoXG2eJ_5o9D9BQpg0XRgehh4zSOWOVqb')" }}></div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-none">Viewing</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{selectedChild}</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-lg ml-2">expand_more</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Search (Collapsed for cleaner look) */}
              <div className="hidden lg:flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 px-3 h-10 w-64">
                <span className="material-symbols-outlined text-slate-400">search</span>
                <input className="w-full bg-transparent border-none focus:ring-0 text-sm px-2 text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Search exams, fees..." />
              </div>
              <button className="relative flex size-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-800"></span>
              </button>
              <button className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">PD</div>
                <span className="text-sm font-medium hidden sm:block">Parent User</span>
              </button>
            </div>
          </header>

          {/* Main Layout */}
          <main className="flex-1 w-full max-w-[1440px] mx-auto p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Welcome & Stats Section (Full Width) */}
            <section className="col-span-1 lg:col-span-12 flex flex-col gap-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Good Morning, Parent</h1>
                  <p className="text-slate-500 text-base">Here's what's happening with {selectedChild} (Grade 5B) today.</p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                    <span className="material-symbols-outlined text-lg">download</span>
                    Report Card
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-md shadow-blue-200 dark:shadow-none hover:bg-blue-600 transition">
                    <span className="material-symbols-outlined text-lg">add</span>
                    Apply Leave
                  </button>
                </div>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Attendance Card */}
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                      <span className="material-symbols-outlined">calendar_month</span>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400 rounded-full">+2% vs last term</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">Overall Attendance</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">95%</p>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-3">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                {/* Assignment Card */}
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg">
                      <span className="material-symbols-outlined">assignment</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">Pending Assignments</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">3</p>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mt-2 font-medium">Math Worksheet due Tomorrow</p>
                </div>
                {/* Fees Card */}
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-lg">
                      <span className="material-symbols-outlined">payments</span>
                    </div>
                    <button className="text-xs font-bold text-primary hover:underline">Pay Now</button>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">Next Fee Due</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">$450</p>
                  <p className="text-xs text-slate-500 mt-2">Due by Oct 1st</p>
                </div>
                {/* GPA Card */}
                <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 p-5 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-lg">
                      <span className="material-symbols-outlined">trending_up</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">Current GPA</p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">3.8</p>
                  <p className="text-xs text-slate-500 mt-2">Top 5% of class</p>
                </div>
              </div>
            </section>

            {/* Left Column: Main Charts & Timetable (8 columns) */}
            <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
              {/* Performance Chart */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Academic Performance</h3>
                  <select className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm text-slate-500 font-medium py-1 px-3 focus:ring-0">
                    <option>All Subjects</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                  </select>
                </div>
                <div className="relative h-64 w-full">
                  {/* Fake Chart Visualization using CSS/SVG */}
                  <svg className="w-full h-full text-slate-200 dark:text-slate-700" preserveAspectRatio="none" viewBox="0 0 800 200">
                    {/* Grid Lines */}
                    <line stroke="currentColor" strokeWidth="1" x1="0" x2="800" y1="180" y2="180"></line>
                    <line stroke="currentColor" strokeWidth="1" x1="0" x2="800" y1="120" y2="120"></line>
                    <line stroke="currentColor" strokeWidth="1" x1="0" x2="800" y1="60" y2="60"></line>
                    {/* Area Gradient */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#137fec" stopOpacity="0.2"></stop>
                        <stop offset="100%" stopColor="#137fec" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M0 140 Q 100 100 200 120 T 400 60 T 600 80 T 800 40 V 200 H 0 Z" fill="url(#chartGradient)"></path>
                    {/* Line */}
                    <path d="M0 140 Q 100 100 200 120 T 400 60 T 600 80 T 800 40" fill="none" stroke="#137fec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                    {/* Points */}
                    <circle cx="200" cy="120" fill="white" r="4" stroke="#137fec" strokeWidth="2"></circle>
                    <circle cx="400" cy="60" fill="white" r="4" stroke="#137fec" strokeWidth="2"></circle>
                    <circle cx="600" cy="80" fill="white" r="4" stroke="#137fec" strokeWidth="2"></circle>
                    <circle cx="800" cy="40" fill="white" r="4" stroke="#137fec" strokeWidth="2"></circle>
                  </svg>
                </div>
                <div className="flex justify-between mt-4 text-xs text-slate-400 px-2">
                  <span>Term 1</span>
                  <span>Mid-Term</span>
                  <span>Term 2</span>
                  <span>Finals</span>
                  <span>Current</span>
                </div>
              </div>
              {/* Today's Schedule */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Today's Schedule</h3>
                  <span className="text-sm text-slate-500">Wed, 24 Oct</span>
                </div>
                <div className="flex flex-col gap-3">
                  {/* Class Item Active */}
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10 border-l-4 border-primary">
                    <div className="flex flex-col items-center min-w-[60px]">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">09:00</span>
                      <span className="text-xs text-slate-500">AM</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Mathematics</h4>
                      <p className="text-xs text-slate-500">Mr. Anderson • Room 301</p>
                    </div>
                    <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs font-bold text-primary shadow-sm">Ongoing</span>
                  </div>
                  {/* Class Item Future */}
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                    <div className="flex flex-col items-center min-w-[60px] opacity-60">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">10:30</span>
                      <span className="text-xs text-slate-500">AM</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-medium text-slate-900 dark:text-white">Physics Lab</h4>
                      <p className="text-xs text-slate-500">Ms. Curie • Lab 2</p>
                    </div>
                  </div>
                  {/* Class Item Future */}
                  <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                    <div className="flex flex-col items-center min-w-[60px] opacity-60">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">01:00</span>
                      <span className="text-xs text-slate-500">PM</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-medium text-slate-900 dark:text-white">English Literature</h4>
                      <p className="text-xs text-slate-500">Mr. Shakespeare • Library</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Teachers Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 shadow-sm flex items-center gap-4">
                  <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2zqY990DeqkZM4dJJNI-IccxSoiaA02z-K4lW83JW79qtT8tST09OTED0BFcLFcDRd8AzjGUPCi--aKOJwoEiaHnC1htT0OVh0y-GoP0GErdHBTtCgo1RZyUdFfxQ3dzYHObN7bHPJHpmlc3Wxz6fEH-dUu338jVymJfMoL5apF7s1GK36Q1X0NbxCtD9YEggaa2fqtS2xPN5MdAizrJD1Vf99sWHWdZBASaQF6IQAcISVAAHo2Yjoc7z14dCR0zN9PWKkPvGauzp')" }}></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Mrs. Davis</h4>
                    <p className="text-xs text-slate-500">Class Teacher (5B)</p>
                  </div>
                  <button className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-200 text-primary transition">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </button>
                </div>
                <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 shadow-sm flex items-center gap-4">
                  <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWKnu2bhx3mv5dqm9g9HIAkgZEZdX8W4-fie7YP5xcRFeNMJjZm5ziDRuvYZy7eerJhLhZZWE1t04X69gjlJ-rAxOTwX_fBowaio9BrYaVpf0ExSTFNEhi8IsrorHGzB_cP58nHrZBUFNP93Y8JdhJYx-L6PmYdYvAQp2eurV5vgsNC4QcH1qeIKASSq_nqgEl98DApwUdVn3iXC0a_Da5tolOhJ8tqojKS9xEFugKvGrbFfBL5hi35xQVG3Pg7ZRoQwSpJ17Hk65f')" }}></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">Mr. Anderson</h4>
                    <p className="text-xs text-slate-500">Mathematics</p>
                  </div>
                  <button className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-200 text-primary transition">
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar (4 columns) */}
            <aside className="col-span-1 lg:col-span-4 flex flex-col gap-6">
              {/* Calendar Widget */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">October 2023</h3>
                  <div className="flex gap-1">
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-500"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
                  </div>
                </div>
                {/* Mini Calendar Grid */}
                <div className="grid grid-cols-7 text-center text-sm mb-2 text-slate-500">
                  <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                </div>
                <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-sm">
                  <span className="text-gray-300 py-1">29</span>
                  <span className="text-gray-300 py-1">30</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">1</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">2</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer relative text-slate-900 dark:text-white">3 <span className="absolute bottom-1 left-1/2 -translate-x-1/2 size-1 bg-red-500 rounded-full"></span></span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">4</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer text-primary font-bold">5</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">6</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">7</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">8</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">9</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">10</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer relative">11 <span className="absolute bottom-1 left-1/2 -translate-x-1/2 size-1 bg-green-500 rounded-full"></span></span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">12</span>
                  <span className="py-1 bg-primary text-white rounded shadow-sm">24</span>
                  {/* Reuse rest for visual completeness if needed, or truncate */}
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">25</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">26</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">27</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">28</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">29</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">30</span>
                  <span className="py-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer">31</span>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-1 h-10 bg-red-500 rounded-full mt-1"></div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Fee Deadline</p>
                      <p className="text-slate-500 text-xs">Oct 3rd • All Grades</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <div className="w-1 h-10 bg-green-500 rounded-full mt-1"></div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">Sports Day Prep</p>
                      <p className="text-slate-500 text-xs">Oct 11th • Gymnasium</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Notice Board */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Notice Board</h3>
                  <button className="text-xs font-bold text-primary">View All</button>
                </div>
                <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-2 no-scrollbar">
                  {/* Notice Item */}
                  <div className="flex gap-3 items-start pb-4 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                    <div className="min-w-10 min-h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">campaign</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Annual Science Fair Registration</h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">Registration for the 2024 Science Fair is now open. Please submit your project proposals by...</p>
                      <span className="text-[10px] text-gray-400 mt-2 block">2 hours ago</span>
                    </div>
                  </div>
                  {/* Notice Item */}
                  <div className="flex gap-3 items-start pb-4 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                    <div className="min-w-10 min-h-10 rounded-full bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center text-yellow-600">
                      <span className="material-symbols-outlined text-[20px]">school</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Early Dismissal Notice</h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">School will close at 1:00 PM next Friday due to staff training.</p>
                      <span className="text-[10px] text-gray-400 mt-2 block">Yesterday</span>
                    </div>
                  </div>
                  {/* Notice Item */}
                  <div className="flex gap-3 items-start pb-4 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                    <div className="min-w-10 min-h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600">
                      <span className="material-symbols-outlined text-[20px]">music_note</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Music Class Auditions</h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">Choir auditions will be held in the auditorium during lunch break.</p>
                      <span className="text-[10px] text-gray-400 mt-2 block">2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </main>

          {/* Footer */}
          <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-500 text-sm">
                © 2024 EduConnect. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm font-medium text-slate-900 dark:text-white">
                <Link className="hover:text-primary transition" href="#">Privacy Policy</Link>
                <Link className="hover:text-primary transition" href="#">Terms of Service</Link>
                <Link className="hover:text-primary transition" href="#">Support</Link>
              </div>
            </div>
          </footer>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
