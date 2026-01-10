import Head from 'next/head';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import AdminLayout from '@/components/layouts/AdminLayout';
import { USER_ROLES } from '@/utils/role-config';

export default function CommunicationDashboard() {
    const conversations = [
        {
            id: 1,
            name: 'Principal Skinner',
            role: 'Admin',
            roleColor: 'blue',
            time: '10:30 AM',
            message: 'Please submit the report by 3 PM',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGMdJcZJZRwYamUGJkRINJO_nZFXH4FhVws12hwKIN7rIu8O_s8iMrfJFsuEwcVCmdM1B-Nh-jqgIT_o3Mb-UyFNio8V3UCcVIsgsYUNJV9Ncy83WEDzjZSWt1U9oRGKTCkB-CFdiCphBiGo54hDm0IKuNXjw-CUEiVIXOR6UMhgEfFpb_LXlINyl-d2kc_TcB_1fDLz-G-_aw_pIIddeZGdO1iPLvWue2GV2LZ4oYI34KlrFwHgmxVIiQjaWWsmO1tUrLk4XFwtbc',
            status: 'online',
            active: true
        },
        {
            id: 2,
            name: 'Homer Simpson',
            role: 'Parent',
            roleColor: 'green',
            time: 'Yesterday',
            message: 'Is tomorrow a snow day?',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBVULiIOFpCag6hf9FRhVGLobrWUxvZyNN_j4APAOunwZ5TpKiCqudy7xWgnsrLT8j9psXfYR_fmAGDw93YzjuZ8zj0kAPrGaVOuauGPMQOAQjbWUwqk_HTBlKF3dgWtG8ynMNsIVeKUXdEe23tNtyBaX4dQaawiQJXEz1YmJcs5MCoSCxKyVMqqqQFDb1gvQKvO44PIlEd3GjDIrafpNawWSOh80dXihIzwA-Mo0JXBhg4oqh4-xtjOSWUuR1qrcAXqRWaRsrBPwV',
            status: 'offline',
            active: false
        },
        {
            id: 3,
            name: 'Lisa Simpson',
            role: 'Student',
            roleColor: 'purple',
            time: 'Tue',
            message: 'Regarding the science fair project...',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsH4VI2xOCEl14yJnytidJPv5svddnBuhlMvEsiQyg5zCYSa-flwuQ_B1gp7BMuDa17vDl8kUqo9Y3LwG5NWDpa4nBTzzjbxlKgRpQvQf0YgmZP1C8Fd5egLz26pg7ieLUI6HqIkrojLVqPmgsIaIfgsgv59tncDfsbSb77lFLw6GfG2-51C1pX74zYxpNvehPjsjR2ZxL5bCAFNMhqosIy4Pnidz2O7gOrfnFyCM6ogxJED8Pja-vv8FoIBhK0DG6pj-iezYK3-mf',
            status: 'offline',
            active: false
        },
        {
            id: 4,
            name: 'Superintendent Chalmers',
            role: 'Admin',
            roleColor: 'blue',
            time: 'Mon',
            message: 'SKINNER!',
            avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlKFm-_yADZMDrzk9DGX-Whc0GhxWo3K6yxXAa58ZsrwrVeoXeOM8MFoMYjvBupL1alZTyG20O3Pk5q328v-lVHO8E0e6NeyV9PArbOISnWwxV_Gec3v8WN7iN_KOtCTZiJs8GI47jfDknfST5hltwFvCYiLNRv9ngTTs51-0SsJRYkgLViFzlbfczco_TN3ny3g8r3zLSlskUVjoPSpqu3y6ASvvtpIZ-CBoVtSZLVdf6Pq7oT0oZIKZwq5mTxVDg8EZyk4J72NUa',
            status: 'offline',
            active: false
        }
    ];

    const messages = [
        { sender: 'other', text: 'Good morning, Edna. I noticed the budget figures for the Science department haven\'t been finalized yet.', time: '10:15 AM' },
        { sender: 'other', text: 'We need those before the board meeting tomorrow. Is there a delay?', time: '10:16 AM' },
        { sender: 'me', text: 'Good morning, Seymour. No delay, I was just double-checking the lab equipment costs. It\'s almost ready.', time: '10:25 AM', read: true },
        { sender: 'me', attachment: { name: 'Science_Budget_Draft_v2.pdf', size: '2.4 MB', type: 'PDF' }, text: 'Here is the preliminary draft.', time: '10:28 AM', read: true },
        { sender: 'other', text: 'Excellent. Please submit the final report by 3 PM via the ERP portal.', time: '10:30 AM' },
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN]}>
                <AdminLayout>
                    <Head>
                        <title>Internal Messaging - School ERP</title>
                    </Head>

                    <div className="flex h-[calc(100vh-120px)] w-full overflow-hidden bg-white dark:bg-[#101922] border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm">
                        {/* Conversation List Panel */}
                        <div className="w-full md:w-96 flex flex-col h-full bg-[#f8f9fa] dark:bg-[#15202b] border-r border-gray-200 dark:border-gray-700 shrink-0">
                            {/* Search & Filter Header */}
                            <div className="p-4 pb-2 flex flex-col gap-4 sticky top-0 bg-[#f8f9fa] dark:bg-[#15202b] z-10">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Inbox</h2>
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
                                <div className="flex gap-2 overflow-x-auto pb-2">
                                    <button className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium shrink-0 shadow-sm transition-transform active:scale-95">All</button>
                                    <button className="px-4 py-1.5 rounded-full bg-white dark:bg-[#1e2a36] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium shrink-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Staff</button>
                                    <button className="px-4 py-1.5 rounded-full bg-white dark:bg-[#1e2a36] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium shrink-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Parents</button>
                                    <button className="px-4 py-1.5 rounded-full bg-white dark:bg-[#1e2a36] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium shrink-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Students</button>
                                </div>
                            </div>

                            {/* List Items */}
                            <div className="flex-1 overflow-y-auto">
                                {conversations.map((conv) => (
                                    <div key={conv.id} className={`group relative flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1e2a36] transition-colors ${conv.active ? 'bg-white dark:bg-[#1a2632] border-l-4 border-primary' : 'border-l-4 border-transparent'}`}>
                                        <div className="relative shrink-0">
                                            <div className="h-12 w-12 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url('${conv.avatar}')` }}></div>
                                            {conv.status === 'online' && (
                                                <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-[#1a2632]"></span>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-baseline mb-0.5">
                                                <h3 className="text-sm font-semibold truncate text-gray-900 dark:text-white">{conv.name}</h3>
                                                <span className={`text-xs ${conv.active ? 'text-primary' : 'text-gray-400'} font-medium`}>{conv.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-${conv.roleColor}-100 text-${conv.roleColor}-700 dark:bg-${conv.roleColor}-900/30 dark:text-${conv.roleColor}-300`}>{conv.role}</span>
                                            </div>
                                            <p className={`text-sm ${conv.active ? 'text-gray-600 dark:text-gray-300 font-medium' : 'text-gray-500 dark:text-gray-400'} truncate`}>{conv.message}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Active Conversation View */}
                        <div className="flex-1 flex flex-col h-full bg-white dark:bg-[#101922] min-w-0 relative">
                            {/* Chat Header */}
                            <div className="h-16 px-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between shrink-0 bg-white dark:bg-[#101922] z-10">
                                <div className="flex items-center gap-3">
                                    <button className="md:hidden material-symbols-outlined text-gray-500">arrow_back</button>
                                    <div className="h-10 w-10 rounded-full bg-cover bg-center shadow-sm" style={{ backgroundImage: `url('${conversations[0].avatar}')` }}></div>
                                    <div className="flex flex-col">
                                        <h2 className="text-sm font-bold text-gray-900 dark:text-white">{conversations[0].name}</h2>
                                        <div className="flex items-center gap-1.5">
                                            <span className="block h-2 w-2 rounded-full bg-green-500"></span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">Online | School Administration</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <span className="material-symbols-outlined text-xl">call</span>
                                    </button>
                                    <button className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <span className="material-symbols-outlined text-xl">videocam</span>
                                    </button>
                                    <button className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                        <span className="material-symbols-outlined text-xl">more_vert</span>
                                    </button>
                                </div>
                            </div>

                            {/* Message Stream */}
                            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-[#fcfcfd] dark:bg-[#101922]">
                                <div className="flex justify-center">
                                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-500 dark:text-gray-400">Today, Oct 24</span>
                                </div>
                                <div className="flex justify-center my-2">
                                    <span className="text-xs text-gray-400 italic">You started a conversation regarding "Annual Budget Report"</span>
                                </div>

                                {messages.map((msg, i) => (
                                    <div key={i} className={`flex flex-col gap-1 ${msg.sender === 'me' ? 'items-end self-end' : 'items-start'} max-w-2xl w-full`}>
                                        <div className={`flex gap-3 ${msg.sender === 'me' ? 'flex-row-reverse' : ''}`}>
                                            {msg.sender === 'other' && (
                                                <div className="h-8 w-8 rounded-full bg-cover bg-center self-end mb-1 shadow-sm shrink-0" style={{ backgroundImage: `url('${conversations[0].avatar}')` }}></div>
                                            )}
                                            <div className={`flex flex-col gap-1 items-${msg.sender === 'me' ? 'end' : 'start'}`}>
                                                {msg.attachment ? (
                                                    <div className="p-3 rounded-2xl rounded-br-none bg-primary/10 border border-primary/20 text-gray-800 dark:text-gray-200 text-sm leading-relaxed shadow-sm min-w-[280px]">
                                                        <div className="flex items-center gap-3 bg-white dark:bg-[#1e2a36] p-2 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                                                            <div className="h-10 w-10 bg-red-100 dark:bg-red-900/30 rounded flex items-center justify-center shrink-0">
                                                                <span className="material-symbols-outlined text-red-500 dark:text-red-400">picture_as_pdf</span>
                                                            </div>
                                                            <div className="flex flex-col overflow-hidden">
                                                                <span className="font-medium text-sm truncate">{msg.attachment.name}</span>
                                                                <span className="text-xs text-gray-400">{msg.attachment.size} • {msg.attachment.type}</span>
                                                            </div>
                                                            <span className="material-symbols-outlined text-gray-400 ml-auto">download</span>
                                                        </div>
                                                        <div className="mt-2 px-1">
                                                            <p className="text-gray-900 dark:text-white">{msg.text}</p>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className={`px-4 py-3 rounded-2xl ${msg.sender === 'me' ? 'rounded-br-none bg-primary text-white' : 'rounded-bl-none bg-gray-100 dark:bg-[#1e2a36] text-gray-800 dark:text-gray-200'} text-sm leading-relaxed shadow-sm`}>
                                                        <p>{msg.text}</p>
                                                    </div>
                                                )}
                                                <div className={`flex items-center gap-1 ${msg.sender === 'me' ? 'mr-1' : 'ml-1'}`}>
                                                    <span className="text-[10px] text-gray-400">{msg.time}</span>
                                                    {msg.read && <span className="material-symbols-outlined text-[14px] text-primary">done_all</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Input Area */}
                            <div className="p-4 bg-white dark:bg-[#101922] border-t border-gray-200 dark:border-gray-700 shrink-0">
                                <div className="flex items-end gap-2 bg-[#f6f7f8] dark:bg-[#1e2a36] p-2 rounded-xl border border-transparent focus-within:border-primary/50 focus-within:bg-white dark:focus-within:bg-[#1a2632] focus-within:shadow-md transition-all duration-200">
                                    <button className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0">
                                        <span className="material-symbols-outlined text-xl">attach_file</span>
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0 hidden sm:block">
                                        <span className="material-symbols-outlined text-xl">mood</span>
                                    </button>
                                    <textarea className="w-full bg-transparent border-none focus:ring-0 p-2 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 resize-none max-h-32" placeholder="Type a message to Principal Skinner..." rows={1}></textarea>
                                    <button className="p-2 bg-primary hover:bg-blue-600 text-white rounded-lg shadow-sm transition-colors shrink-0 flex items-center justify-center mb-0.5">
                                        <span className="material-symbols-outlined text-xl">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </AdminLayout>
            </RoleGuard>
        </AuthGuard>
    );
}
