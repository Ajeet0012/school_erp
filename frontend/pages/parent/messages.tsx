import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function ParentMessages() {
  const [selectedChild, setSelectedChild] = useState('Alex Doe');
  const [activeChat, setActiveChat] = useState<number | null>(1);

  const conversations = [
    { id: 1, name: 'Mrs. Davis', role: 'Class Teacher', lastMsg: 'Alex is doing great in class!', time: '10:30 AM', unread: 2, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2zqY990DeqkZM4dJJNI-IccxSoiaA02z-K4lW83JW79qtT8tST09OTED0BFcLFcDRd8AzjGUPCi--aKOJwoEiaHnC1htT0OVh0y-GoP0GErdHBTtCgo1RZyUdFfxQ3dzYHObN7bHPJHpmlc3Wxz6fEH-dUu338jVymJfMoL5apF7s1GK36Q1X0NbxCtD9YEggaa2fqtS2xPN5MdAizrJD1Vf99sWHWdZBASaQF6IQAcISVAAHo2Yjoc7z14dCR0zN9PWKkPvGauzp' },
    { id: 2, name: 'Mr. Anderson', role: 'Mathematics', lastMsg: 'Please sign the test paper.', time: 'Yesterday', unread: 0, avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWKnu2bhx3mv5dqm9g9HIAkgZEZdX8W4-fie7YP5xcRFeNMJjZm5ziDRuvYZy7eerJhLhZZWE1t04X69gjlJ-rAxOTwX_fBowaio9BrYaVpf0ExSTFNEhi8IsrorHGzB_cP58nHrZBUFNP93Y8JdhJYx-L6PmYdYvAQp2eurV5vgsNC4QcH1qeIKASSq_nqgEl98DApwUdVn3iXC0a_Da5tolOhJ8tqojKS9xEFugKvGrbFfBL5hi35xQVG3Pg7ZRoQwSpJ17Hk65f' },
    { id: 3, name: 'School Admin', role: 'Administration', lastMsg: 'Fee reminder for Term 2.', time: 'Oct 01', unread: 0, avatar: '' },
  ];

  return (
    <AuthGuard>
      <RoleGuard allowedRoles={[USER_ROLES.PARENT]}>
        <Head>
          <title>Messages - Parent Portal</title>
        </Head>
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white overflow-hidden h-screen flex flex-col">
          {/* Top Navigation */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white dark:bg-slate-900 px-6 py-3 shadow-sm dark:border-slate-800 shrink-0">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                <div className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-primary">EduConnect</h2>
              </div>
              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center gap-6">
                <Link href="/parent/dashboard" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Dashboard</Link>
                <Link href="/parent/attendance" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Attendance</Link>
                <Link href="/parent/fees" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Fees</Link>
                <Link href="/parent/results" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Results</Link>
                <Link href="/parent/messages" className="text-sm font-bold text-primary">Messages</Link>
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
                <input className="w-full bg-transparent border-none focus:ring-0 text-sm px-2 text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Search..." />
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

          {/* Main Layout - Full Height Container */}
          <main className="flex-1 w-full max-w-[1440px] mx-auto p-4 md:p-6 lg:p-10 flex overflow-hidden">

            <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex overflow-hidden">
              {/* Chat List Sidebar */}
              <div className="w-full md:w-80 lg:w-96 border-r border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                  <h2 className="text-lg font-bold">Messages</h2>
                  <button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-primary">
                    <span className="material-symbols-outlined">edit_square</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input className="w-full bg-slate-50 dark:bg-slate-800 border-transparent focus:border-primary rounded-lg pl-10 pr-4 py-2 text-sm" placeholder="Search chats..." />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {conversations.map(chat => (
                    <div key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={`flex items-start gap-3 p-4 border-b border-slate-100 dark:border-slate-800 cursor-pointer transition-colors ${activeChat === chat.id ? 'bg-primary/5 dark:bg-primary/10 border-l-4 border-l-primary' : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-l-4 border-l-transparent'}`}>
                      {chat.avatar ? (
                        <img src={chat.avatar} alt={chat.name} className="size-12 rounded-full object-cover bg-slate-200" />
                      ) : (
                        <div className="size-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg">
                          {chat.name[0]}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className={`text-sm font-bold truncate ${activeChat === chat.id ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{chat.name}</h4>
                          <span className="text-xs text-slate-500">{chat.time}</span>
                        </div>
                        <p className="text-xs text-slate-500 mb-1">{chat.role}</p>
                        <p className={`text-sm truncate ${chat.unread > 0 ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-500'}`}>{chat.lastMsg}</p>
                      </div>
                      {chat.unread > 0 && (
                        <span className="size-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center mt-2">{chat.unread}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className={`flex-1 flex flex-col ${activeChat ? 'flex' : 'hidden md:flex'}`}>
                {activeChat ? (
                  <>
                    {/* Chat Header */}
                    <div className="h-16 px-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img src={conversations.find(c => c.id === activeChat)?.avatar || "https://dummyimage.com/40x40/000/fff&text=A"} alt="Avatar" className="size-10 rounded-full object-cover bg-slate-200" />
                        <div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">{conversations.find(c => c.id === activeChat)?.name}</h3>
                          <p className="text-xs text-slate-500 flex items-center gap-1">
                            <span className="size-2 bg-green-500 rounded-full"></span> Online
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                          <span className="material-symbols-outlined">call</span>
                        </button>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                          <span className="material-symbols-outlined">videocam</span>
                        </button>
                        <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                          <span className="material-symbols-outlined">info</span>
                        </button>
                      </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50 dark:bg-[#131b24]">
                      <div className="flex justify-center">
                        <span className="text-xs text-slate-400 px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full">Yesterday</span>
                      </div>

                      {/* Received Message */}
                      <div className="flex items-end gap-3 max-w-[80%]">
                        <img src={conversations.find(c => c.id === activeChat)?.avatar || "https://dummyimage.com/40x40/000/fff&text=A"} className="size-8 rounded-full mb-1" />
                        <div className="flex flex-col gap-1">
                          <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-sm border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm text-slate-900 dark:text-white">Hi Mr. Doe, Alex has been participating really well in the group projects recently!</p>
                          </div>
                          <span className="text-[10px] text-slate-400 ml-1">10:30 AM</span>
                        </div>
                      </div>

                      {/* Sent Message */}
                      <div className="flex flex-row-reverse items-end gap-3 max-w-[80%] ml-auto">
                        <div className="flex flex-col gap-1 items-end">
                          <div className="bg-primary text-white p-3 rounded-2xl rounded-br-sm shadow-md shadow-blue-200 dark:shadow-none">
                            <p className="text-sm">That's wonderful to hear! He's been really excited about the science fair.</p>
                          </div>
                          <span className="text-[10px] text-slate-400 mr-1 flex items-center gap-1">
                            10:32 AM <span className="material-symbols-outlined text-[10px]">done_all</span>
                          </span>
                        </div>
                      </div>
                      {/* Received Message */}
                      <div className="flex items-end gap-3 max-w-[80%]">
                        <img src={conversations.find(c => c.id === activeChat)?.avatar || "https://dummyimage.com/40x40/000/fff&text=A"} className="size-8 rounded-full mb-1" />
                        <div className="flex flex-col gap-1">
                          <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-bl-sm border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-sm text-slate-900 dark:text-white">Yes! I wanted to let you know that the registrations are open now. Does he have a team?</p>
                          </div>
                          <span className="text-[10px] text-slate-400 ml-1">10:33 AM</span>
                        </div>
                      </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-end gap-2 bg-slate-50 dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                          <span className="material-symbols-outlined">add_circle</span>
                        </button>
                        <textarea className="flex-1 bg-transparent border-none focus:ring-0 text-sm max-h-32 resize-none py-2.5" placeholder="Type your message..." rows={1}></textarea>
                        <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                          <span className="material-symbols-outlined">sentiment_satisfied</span>
                        </button>
                        <button className="p-2 bg-primary hover:bg-blue-600 text-white rounded-lg shadow-sm">
                          <span className="material-symbols-outlined text-[20px]">send</span>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-6xl opacity-50 mb-4">chat_bubble</span>
                    <p className="text-lg font-medium">Select a conversation to start chatting</p>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </RoleGuard>
    </AuthGuard>
  );
}
