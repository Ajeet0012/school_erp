import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function TeacherMessages() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Helper for Sidebar items to match other pages
  const Sidebar = () => (
    <aside className="hidden md:flex flex-col w-64 h-full bg-white dark:bg-[#1a2632] border-r border-gray-200 dark:border-gray-700 shrink-0 z-20">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-2">
            <span className="material-symbols-outlined text-primary text-2xl">school</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-bold leading-tight">School ERP</h1>
            <p className="text-[#4c739a] dark:text-gray-400 text-xs font-normal">Teacher Portal</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 flex flex-col gap-2 overflow-y-auto">
        <Link href="/teacher/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">dashboard</span>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <Link href="/teacher/students" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">person</span>
          <span className="text-sm font-medium">Students</span>
        </Link>
        <Link href="/teacher/grades" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">grade</span>
          <span className="text-sm font-medium">Grades</span>
        </Link>
        <Link href="/teacher/assignments" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">assignment</span>
          <span className="text-sm font-medium">Assignments</span>
        </Link>
        <Link href="/teacher/exams" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">assignment_turned_in</span>
          <span className="text-sm font-medium">Exams</span>
        </Link>
        <Link href="/teacher/messages" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary">
          <span className="material-symbols-outlined text-xl font-variation-fill">chat_bubble</span>
          <span className="text-sm font-medium">Messages</span>
        </Link>
        <Link href="/teacher/timetable" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">event_note</span>
          <span className="text-sm font-medium">Timetable</span>
        </Link>
        <div className="h-px bg-gray-200 dark:bg-gray-700 my-2 mx-3"></div>
        <Link href="/teacher/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined text-xl">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="bg-center bg-no-repeat bg-cover rounded-full h-9 w-9 border border-gray-200 dark:border-gray-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4VSuuV3GDsu04swzfGJSQEMP7p5kZ1E8MtAOjFp0dG_KYPUXPU2NoSiuw53VuYJ3Y92R4tl3EM5wxYwK12VfnsOY_F01rjBYprwA3CxXBOlwHW1Zvqj8xES0Xap-D9Yxg9vbF25DQoSyYptmWZHpaXvpTuuSVp98N6wW1iaU9COqLTdCtHUu687ijGdBts_PfMJ-tftGtj0Aa-EMtqjC3dTtkVkhLtn6gKkZH-VXLzEfJGmyWD_474sIHs1aXGtIUhxA5ueNMxY1W')" }}></div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-medium truncate">Edna Krabappel</p>
            <p className="text-xs text-[#4c739a] dark:text-gray-400 truncate">4th Grade Teacher</p>
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.TEACHER]}>
        <Head>
          <title>Messages - School ERP</title>
        </Head>

        <div className="bg-background-light dark:bg-background-dark font-display h-screen overflow-hidden flex flex-col md:flex-row text-[#0d141b] dark:text-white">

          {/* Mobile Header */}
          <div className="md:hidden h-16 bg-white dark:bg-[#1a2632] border-b border-gray-200 dark:border-gray-700 flex items-center px-4 justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">school</span>
              <span className="font-semibold text-lg">School ERP</span>
            </div>
            <button className="text-gray-500 dark:text-gray-400 material-symbols-outlined" onClick={() => setSidebarOpen(!sidebarOpen)}>menu</button>
          </div>

          <Sidebar />

          {/* Conversation List Panel */}
          <div className={`w-full md:w-96 flex flex-col h-full bg-[#f8f9fa] dark:bg-[#15202b] border-r border-gray-200 dark:border-gray-700 shrink-0 ${sidebarOpen ? 'hidden' : 'flex'}`}>
            {/* Search & Filter Header */}
            <div className="p-4 pb-2 flex flex-col gap-4 sticky top-0 bg-[#f8f9fa] dark:bg-[#15202b] z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Inbox</h2>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <span className="material-symbols-outlined text-xl">edit_square</span>
                </button>
              </div>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400">search</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-white dark:bg-[#1e2a36] text-sm focus:ring-2 focus:ring-primary/20 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm" placeholder="Search students, parents, or staff..." type="text" />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
                <button className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium shrink-0 shadow-sm transition-transform active:scale-95">All</button>
                <button className="px-4 py-1.5 rounded-full bg-white dark:bg-[#1e2a36] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium shrink-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Staff</button>
                <button className="px-4 py-1.5 rounded-full bg-white dark:bg-[#1e2a36] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium shrink-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Parents</button>
                <button className="px-4 py-1.5 rounded-full bg-white dark:bg-[#1e2a36] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium shrink-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Students</button>
              </div>
            </div>

            {/* List Items */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {/* Item 1: Active */}
              <div className="group relative flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1e2a36] transition-colors bg-white dark:bg-[#1a2632] border-l-4 border-primary">
                <div className="relative shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGMdJcZJZRwYamUGJkRINJO_nZFXH4FhVws12hwKIN7rIu8O_s8iMrfJFsuEwcVCmdM1B-Nh-jqgIT_o3Mb-UyFNio8V3UCcVIsgsYUNJV9Ncy83WEDzjZSWt1U9oRGKTCkB-CFdiCphBiGo54hDm0IKuNXjw-CUEiVIXOR6UMhgEfFpb_LXlINyl-d2kc_TcB_1fDLz-G-_aw_pIIddeZGdO1iPLvWue2GV2LZ4oYI34KlrFwHgmxVIiQjaWWsmO1tUrLk4XFwtbc')" }}></div>
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-[#1a2632]"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-sm font-semibold truncate text-gray-900 dark:text-white">Principal Skinner</h3>
                    <span className="text-xs text-primary font-medium">10:30 AM</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Admin</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 truncate font-medium">Please submit the report by 3 PM</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group relative flex items-start gap-3 p-4 cursor-pointer hover:bg-white dark:hover:bg-[#1e2a36] transition-colors border-l-4 border-transparent">
                <div className="relative shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBVULiIOFpCag6hf9FRhVGLobrWUxvZyNN_j4APAOunwZ5TpKiCqudy7xWgnsrLT8j9psXfYR_fmAGDw93YzjuZ8zj0kAPrGaVOuauGPMQOAQjbWUwqk_HTBlKF3dgWtG8ynMNsIVeKUXdEe23tNtyBaX4dQaawiQJXEz1YmJcs5MCoSCxKyVMqqqQFDb1gvQKvO44PIlEd3GjDIrafpNawWSOh80dXihIzwA-Mo0JXBhg4oqh4-xtjOSWUuR1qrcAXqRWaRsrBPwV')" }}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-sm font-semibold truncate text-gray-900 dark:text-white">Homer Simpson</h3>
                    <span className="text-xs text-gray-400">Yesterday</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">Parent</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Is tomorrow a snow day?</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group relative flex items-start gap-3 p-4 cursor-pointer hover:bg-white dark:hover:bg-[#1e2a36] transition-colors border-l-4 border-transparent">
                <div className="relative shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsH4VI2xOCEl14yJnytidJPv5svddnBuhlMvEsiQyg5zCYSa-flwuQ_B1gp7BMuDa17vDl8kUqo9Y3LwG5NWDpa4nBTzzjbxlKgRpQvQf0YgmZP1C8Fd5egLz26pg7ieLUI6HqIkrojLVqPmgsIaIfgsgv59tncDfsbSb77lFLw6GfG2-51C1pX74zYxpNvehPjsjR2ZxL5bCAFNMhqosIy4Pnidz2O7gOrfnFyCM6ogxJED8Pja-vv8FoIBhK0DG6pj-iezYK3-mf')" }}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="text-sm font-semibold truncate text-gray-900 dark:text-white">Lisa Simpson</h3>
                    <span className="text-xs text-gray-400">Tue</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Student</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">Regarding the science fair project...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Active Conversation View */}
          <main className={`flex-1 flex flex-col h-full bg-white dark:bg-[#101922] min-w-0 relative ${sidebarOpen ? 'hidden' : 'flex'}`}>
            {/* Chat Header */}
            <header className="h-16 px-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between shrink-0 bg-white dark:bg-[#101922] z-10">
              <div className="flex items-center gap-3">
                <div className="md:hidden">
                  <button className="material-symbols-outlined text-gray-500">arrow_back</button>
                </div>
                <div className="h-10 w-10 rounded-full bg-cover bg-center shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRy1kBrgnhsc8ydT3e4P5QI3ondOymDgrSHSqppzzmtGrdDB04lHNWkbm7J1wwGfpvon2POyXqix2ydqB5V6zL32lhv0U1030sXzVWg6ojjMW1Ty2Gew03aKIrd69AUAXVL8eyGcJioNKlt4H8APKdO0EIRP-8J7STtYnECPSC-zKJ642BqTXeXDl2063uLiYAV49XppIMdd5S8Tm0kYYi2xfogG2T9Nv9FchqHtLfBz435m138J8aKl3CRUFdh6j8L25la2RfMAgq')" }}></div>
                <div className="flex flex-col">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white">Principal Skinner</h2>
                  <div className="flex items-center gap-1.5">
                    <span className="block h-2 w-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">Online | School Administration</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button aria-label="Call" className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined text-xl">call</span>
                </button>
                <button aria-label="Video Call" className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined text-xl">videocam</span>
                </button>
                <button aria-label="More Options" className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <span className="material-symbols-outlined text-xl">more_vert</span>
                </button>
              </div>
            </header>

            {/* Message Stream */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar bg-[#fcfcfd] dark:bg-[#101922]">
              {/* Date Divider */}
              <div className="flex justify-center">
                <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-500 dark:text-gray-400">Today, Oct 24</span>
              </div>
              {/* System Message */}
              <div className="flex justify-center my-2">
                <span className="text-xs text-gray-400 italic">You started a conversation regarding "Annual Budget Report"</span>
              </div>
              {/* Incoming Message */}
              <div className="flex gap-3 max-w-2xl">
                <div className="h-8 w-8 rounded-full bg-cover bg-center self-end mb-1 shadow-sm shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCpsWa38UGzIoxn7SoLegvErMAMpM3pP70ant3iA4ov3ophB77H2q7Ygjf0RVPZwfVa801G5V9N_PXGHDYQRwNElzwfrVmu_Gy3BaGt5u1pSGNBMt9q1GQaajKHRD-9b3bsg-lnSPnG8Y90gZlsi9rYzrXgvWGIuM3D2dwz6l5N-SpZqS7HYhgUw-NDBWg2QMfl8V-g0V7HpSWdkQpoit_iQD91V9hMA1KyShgMwOWwl2YhS_R5dzqnTa1mhovtTmpQWYcn1lIAWGdL')" }}></div>
                <div className="flex flex-col gap-1 items-start">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-gray-100 dark:bg-[#1e2a36] text-gray-800 dark:text-gray-200 text-sm leading-relaxed shadow-sm">
                    <p>Good morning, Edna. I noticed the budget figures for the Science department haven't been finalized yet.</p>
                  </div>
                  <span className="text-[10px] text-gray-400 ml-1">10:15 AM</span>
                </div>
              </div>
              {/* Incoming Message 2 */}
              <div className="flex gap-3 max-w-2xl">
                <div className="h-8 w-8 rounded-full bg-cover bg-center self-end mb-1 shadow-sm shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLWiV8L51XAuBHBAjRGWPNgkkn24nbLhBxQDl4hXUWi2XpuWYYjxGZQLAQUq8rosm-w8_7YpLVwHnYVUv--GG_wWi6U6mj6yHNZj92SA3oPCvQLj0QRI2SPxLLLgYu8xImRBYB09WxWQoTxobZCIvOU6WQP6wTpi0fPhlWOq66rn6CvlkbGBZW5uSscSnZwc8NAORvOgtsD6VNNOYTprLKmvfhZK0AdRc2JApY-94MfB0tNNwlKHjNj-VwpbRdHLeR2nbgdjCyHy8V')" }}></div>
                <div className="flex flex-col gap-1 items-start">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-gray-100 dark:bg-[#1e2a36] text-gray-800 dark:text-gray-200 text-sm leading-relaxed shadow-sm">
                    <p>We need those before the board meeting tomorrow. Is there a delay?</p>
                  </div>
                  <span className="text-[10px] text-gray-400 ml-1">10:16 AM</span>
                </div>
              </div>
              {/* Outgoing Message */}
              <div className="flex flex-col gap-1 items-end self-end max-w-2xl">
                <div className="px-4 py-3 rounded-2xl rounded-br-none bg-primary text-white text-sm leading-relaxed shadow-md">
                  <p>Good morning, Seymour. No delay, I was just double-checking the lab equipment costs. It's almost ready.</p>
                </div>
                <div className="flex items-center gap-1 mr-1">
                  <span className="text-[10px] text-gray-400">10:25 AM</span>
                  <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
                </div>
              </div>
              {/* Outgoing Message with Attachment */}
              <div className="flex flex-col gap-1 items-end self-end max-w-2xl">
                <div className="p-3 rounded-2xl rounded-br-none bg-primary/10 border border-primary/20 text-gray-800 dark:text-gray-200 text-sm leading-relaxed shadow-sm min-w-[280px]">
                  <div className="flex items-center gap-3 bg-white dark:bg-[#1e2a36] p-2 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                    <div className="h-10 w-10 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-red-500 dark:text-red-400">picture_as_pdf</span>
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-medium text-sm truncate">Science_Budget_Draft_v2.pdf</span>
                      <span className="text-xs text-gray-400">2.4 MB • PDF</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400 ml-auto">download</span>
                  </div>
                  <div className="mt-2 px-1">
                    <p className="text-gray-900 dark:text-white">Here is the preliminary draft.</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mr-1">
                  <span className="text-[10px] text-gray-400">10:28 AM</span>
                  <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>
                </div>
              </div>
              {/* Incoming Message (Latest) */}
              <div className="flex gap-3 max-w-2xl">
                <div className="h-8 w-8 rounded-full bg-cover bg-center self-end mb-1 shadow-sm shrink-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_rHqG4n6REB0Rdj65NPIRXtMdvMGZ5koaMBgYpY_R8KJAY4q2UD9h9F7ygx-Iqegw05M4jFpBvumRqHr1FXOstWpMWvV51otenRTp4U6iQ2t3OGXvzaEsCh2HvFlGfgqa7sjUOxBz3o-uFlxR3IWpnXOU2zHvZA4f2h9JRKn7mHHLqi-P_rsRN2okj9y--1wgpUw6WK9cb38D7JsFUQkIzGg-oN4SYR5-Rf-anPNv-pzo4FI21DcP11zIF-pljmH0AwEYlTFwdj_h')" }}></div>
                <div className="flex flex-col gap-1 items-start">
                  <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-gray-100 dark:bg-[#1e2a36] text-gray-800 dark:text-gray-200 text-sm leading-relaxed shadow-sm">
                    <p>Excellent. Please submit the final report by 3 PM via the ERP portal.</p>
                  </div>
                  <span className="text-[10px] text-gray-400 ml-1">10:30 AM</span>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-[#101922] border-t border-gray-200 dark:border-gray-700 shrink-0">
              <div className="flex items-end gap-2 bg-[#f6f7f8] dark:bg-[#1e2a36] p-2 rounded-xl border border-transparent focus-within:border-primary/50 focus-within:bg-white dark:focus-within:bg-[#1a2632] focus-within:shadow-md transition-all duration-200">
                <button aria-label="Add Attachment" className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0">
                  <span className="material-symbols-outlined text-xl">attach_file</span>
                </button>
                <button aria-label="Insert Emoji" className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0 hidden sm:block">
                  <span className="material-symbols-outlined text-xl">mood</span>
                </button>
                <textarea className="w-full bg-transparent border-none focus:ring-0 p-2 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 resize-none max-h-32 custom-scrollbar" placeholder="Type a message to Principal Skinner..." rows={1}></textarea>
                <button aria-label="Send Message" className="p-2 bg-primary hover:bg-blue-600 text-white rounded-lg shadow-sm transition-colors shrink-0 flex items-center justify-center mb-0.5">
                  <span className="material-symbols-outlined text-xl">send</span>
                </button>
              </div>
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-400">Press Enter to send. Shift + Enter for new line.</p>
              </div>
            </div>
          </main>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
