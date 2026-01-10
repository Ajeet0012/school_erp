import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import AuthGuard from '@/components/guards/AuthGuard';
import RoleGuard from '@/components/guards/RoleGuard';
import { USER_ROLES } from '@/utils/role-config';

export default function Gradebook() {
    const [selectedStudent, setSelectedStudent] = useState(1);

    const students = [
        { id: 1, name: 'Alice Smith', studentId: '88231', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRSzn4fCEM4Zcu6nDGeKpgEaZLFUDFr3o_G_ZXwRVds62086X_t7OtZ2uYn_PPd98zZhqZMbpuElowbCyOG3S6olWvcq7wGGpjTSp1uePmz3hBHgPPSVSnZo3P0Vcn827tn0Cx26O7YmfCLHhhYLVigl1v_JcEnj_VVURGZnjyU0tRVGFCRPjbOdtmbRnjFBXiotWNAZo5alIkkPxfIYsRkbUSMkZ0EmBpH710dwFIZ5lyseRQIEFZ0TyCrkxfO9hhlVvLrC-XL9tz', hw1: '10', quiz1: '19', hw2: '10', midterm: '98', average: '98%' },
        { id: 2, name: 'Bob Jones', studentId: '88232', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdsnUSrvHWmwCSF3Tw4JK2bNPdvrfgf7IRtGgxwBOQLz7XubPePd829fW0S1h-UDOK-ioqpd0oyiMT0oqAyRFklsnr3aA244EcsQoJQtF-BEoYu6VWry5QbgUANnNOho0eUReiA4CSqA1hdn3mrVtkC3OWaSIR_vXFfn3dUyQhJwXKDmjf_-A1BdGpDGwLEP66DDFGKVO2z7YFL92NNhL5aiz-rgzNHi32AaIRHo2PbWa9EFfEEL5H0mnppsHTb2iAlyERDVBg3kUj', hw1: '8', quiz1: '15', hw2: 'MISSING', midterm: '72', average: '74%' },
        { id: 3, name: 'Charlie Davis', studentId: '88233', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsnyc0p4apH6fYdU8UBqa1s2uV3DS-3f0XYktIcfIAfwrA-brWHF-nWicT927tC8YvU-r4-tV5kLaljhX2_ayOFIghHfWmiO9nGIOfhyxn58OiycqeoRtmZexXYAA6lhWxRmcmMQcZyyi5MEoqPFUXHZBXVtQ1TqRgm9DiGVkotz5KRTR_Xh9UjTslBOqgWZaj44rs_TM3wi03LZG8M-12vGyfmWpf9CC1XMXLBxpVOup702YxkwNgkkCLPgS6P99Os0h0emY0VTV0', hw1: '9', quiz1: '18', hw2: '9', midterm: '88', average: '89%' },
        { id: 4, name: 'Diana Evans', studentId: '88234', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALcHx4GJle-074JWHNxDeHes4zPqGHR4_POU9d5W1VO2a_8DqmUcun01LWGGua3wd3pBIrWA44v9_zV90tUng9Vhg1s2UAbAeb9XOg1W0t8cBvkDfxinWGPg2dl9BbO9p64le5QRo0QlRThYjgvvk0TZN2zBnQZvivhYPAOOCDs5cxzhdG2v9mpUEsH_uTZgpwqd_kD1FiB4D4JFhkfUPW3pZCG8PHEMJTqyxsY_hY1rNloV3CIDgRJpyfjyK1xoYLiPXMS_hsKiBN', hw1: '10', quiz1: '20', hw2: '10', midterm: '95', average: '96%' },
    ];

    return (
        <AuthGuard>
            <RoleGuard allowedRoles={[USER_ROLES.SUPER_ADMIN, USER_ROLES.SCHOOL_ADMIN, USER_ROLES.TEACHER]}>
                <Head>
                    <title>Teacher Gradebook - School ERP</title>
                </Head>

                <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased overflow-x-hidden transition-colors duration-200">
                    <div className="relative flex h-screen w-full flex-col overflow-hidden">
                        {/* Header */}
                        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] px-6 py-3 shrink-0 z-20">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                                    <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">school</span>
                                    </div>
                                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">School ERP</h2>
                                </div>
                                <div className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
                                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-50 dark:bg-slate-800">
                                        <div className="text-slate-400 flex items-center justify-center pl-4 rounded-l-lg border-r-0">
                                            <span className="material-symbols-outlined text-[20px]">search</span>
                                        </div>
                                        <input className="w-full bg-transparent border-none text-sm px-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0" placeholder="Search student..." />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <button className="text-slate-400 hover:text-primary transition-colors relative">
                                    <span className="material-symbols-outlined">notifications</span>
                                    <span className="absolute top-0 right-0 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2632]"></span>
                                </button>
                                <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-700">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-sm font-bold leading-none">Sarah Wilson</p>
                                        <p className="text-xs text-slate-400 mt-1">Math Dept. Head</p>
                                    </div>
                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-slate-700 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlz2rTra8vEJ2qzJUZz4ZBov0bu7bz4F-53Gq0FhlWMsE3-3b4LXxG-1qbPp151hOJ6DGUmgVwJw7GKC1uTE9dcmHEU2m5Cw_Cw1s-J9ujDBWGJN5ZGMCkxHNm3qud2exrPiBA6mGadXO6Ogz0km_wV9cJiEgmrpf6o6PmqnL_V8Nx_uL7lNw-yXX-NWyLAkekQRQ7wyEYNVfYxRuWgf1ZoC1qDkgSXcMUMFqCO3vgUJQEyXZ1fjlQZCSBemFd5ktlQoo3IQaLGJFS')" }}></div>
                                </div>
                            </div>
                        </header>

                        {/* Main Content */}
                        <div className="flex flex-1 overflow-hidden bg-background-light dark:bg-background-dark">
                            <main className="flex-1 flex flex-col h-full overflow-hidden">
                                {/* Page Header */}
                                <div className="bg-white dark:bg-[#1a2632] border-b border-slate-200 dark:border-slate-800 shrink-0">
                                    <div className="flex flex-wrap justify-between items-start gap-4 p-6 pb-2">
                                        <div className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                                                <Link href="/teacher/dashboard" className="hover:text-primary transition-colors">Courses</Link>
                                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                                <span>Mathematics</span>
                                            </div>
                                            <h1 className="text-3xl font-black text-slate-900 dark:text-white leading-tight tracking-[-0.033em]">Algebra II</h1>
                                            <p className="text-slate-500 dark:text-slate-400 font-normal">Period 4 • Fall Semester 2023</p>
                                        </div>
                                        <div className="flex items-center gap-3 mt-2">
                                            <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                                <span className="material-symbols-outlined text-[18px] mr-2">download</span>
                                                Export
                                            </button>
                                            <button className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">
                                                <span className="material-symbols-outlined text-[18px] mr-2">publish</span>
                                                Publish Grades
                                            </button>
                                        </div>
                                    </div>
                                    {/* Tabs */}
                                    <div className="px-6 pt-2">
                                        <div className="flex gap-8 overflow-x-auto no-scrollbar">
                                            <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 px-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-[20px]">table_chart</span>
                                                    <p className="text-sm font-bold">Gradebook</p>
                                                </div>
                                            </button>
                                            <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white pb-3 px-1 transition-colors">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-[20px]">assignment</span>
                                                    <p className="text-sm font-bold">Assignments</p>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 overflow-y-auto p-6">
                                    <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
                                        {/* Stats */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-700 shadow-sm">
                                                <div className="flex justify-between items-start">
                                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Class Average</p>
                                                    <span className="material-symbols-outlined text-green-600 text-[20px]">trending_up</span>
                                                </div>
                                                <div className="flex items-baseline gap-2 mt-1">
                                                    <p className="text-3xl font-bold text-slate-900 dark:text-white">84%</p>
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400">+2.5%</span>
                                                </div>
                                                <p className="text-xs text-slate-400 mt-2">Vs. last semester</p>
                                            </div>
                                            <div className="flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-700 shadow-sm">
                                                <div className="flex justify-between items-start">
                                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Submission Rate</p>
                                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                                </div>
                                                <div className="flex items-baseline gap-2 mt-1">
                                                    <p className="text-3xl font-bold text-slate-900 dark:text-white">95%</p>
                                                </div>
                                                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 mt-3">
                                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '95%' }}></div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-700 shadow-sm">
                                                <div className="flex justify-between items-start">
                                                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Top Performer</p>
                                                    <span className="material-symbols-outlined text-yellow-500 text-[20px]">emoji_events</span>
                                                </div>
                                                <div className="flex items-center gap-3 mt-2">
                                                    <div className="bg-center bg-no-repeat bg-cover rounded-full size-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBnkwl4ZILfbSKgpYcK28PPerrXO_-S3fAR4-oUDz9JpnBg-35z2QJgIYpV3BsMbXKJsz2e4IuDiEsZCplZ2cN2p2c9sQ-lPyM9uSFs3jUfbqvyqq2cHMcWG7H6g7sr16mk5eQKRVnNR4LbCVZWGEFsa-NTGTc3ZuDa0iulOIc2fMvnG8AKMUl_U2k83u-TrOSO14SHmDZePTnu506bS-XbJm03rNGhPUAKtjzfX8eXUfrVgRqHPjLlREdt8MEgmcAiUKsu58J8bWg')" }}></div>
                                                    <div>
                                                        <p className="text-lg font-bold text-slate-900 dark:text-white">Alice Smith</p>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400">98% Avg Score</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Filters */}
                                        <div className="flex flex-wrap gap-4 items-end bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                            <label className="flex flex-col min-w-32 flex-1 max-w-[200px]">
                                                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Assessment Type</span>
                                                <div className="relative">
                                                    <select className="appearance-none w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white py-2.5 pl-3 pr-10 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-sm font-medium">
                                                        <option>All Types</option>
                                                        <option>Assignments</option>
                                                        <option>Quizzes</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                                                        <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                                    </div>
                                                </div>
                                            </label>
                                            <div className="flex-1"></div>
                                            <div className="flex items-center gap-2">
                                                <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                                                    <span className="material-symbols-outlined">grid_view</span>
                                                </button>
                                                <button className="p-2 text-primary bg-primary/10 rounded-lg transition-colors">
                                                    <span className="material-symbols-outlined">view_list</span>
                                                </button>
                                            </div>
                                        </div>

                                        {/* Split View */}
                                        <div className="flex flex-col xl:flex-row gap-6 h-full min-h-[600px]">
                                            {/* Gradebook Grid */}
                                            <div className="flex-1 bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
                                                <div className="overflow-x-auto flex-1">
                                                    <table className="w-full text-left border-collapse">
                                                        <thead className="bg-slate-50 dark:bg-slate-900 sticky top-0 z-10 text-xs uppercase text-slate-500 dark:text-slate-400 font-semibold tracking-wider">
                                                            <tr>
                                                                <th className="p-4 pl-6 min-w-[200px] border-b border-slate-200 dark:border-slate-700 sticky left-0 bg-slate-50 dark:bg-slate-900 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Student Name</th>
                                                                <th className="p-4 min-w-[120px] text-center border-b border-l border-slate-200 dark:border-slate-700">HW 1 <span className="block text-[10px] font-normal normal-case opacity-70">10 pts</span></th>
                                                                <th className="p-4 min-w-[120px] text-center border-b border-l border-slate-200 dark:border-slate-700">Quiz 1 <span className="block text-[10px] font-normal normal-case opacity-70">20 pts</span></th>
                                                                <th className="p-4 min-w-[120px] text-center border-b border-l border-slate-200 dark:border-slate-700">HW 2 <span className="block text-[10px] font-normal normal-case opacity-70">10 pts</span></th>
                                                                <th className="p-4 min-w-[120px] text-center border-b border-l border-slate-200 dark:border-slate-700">Midterm <span className="block text-[10px] font-normal normal-case opacity-70">100 pts</span></th>
                                                                <th className="p-4 min-w-[120px] text-center border-b border-l border-slate-200 dark:border-slate-700 bg-primary/5 text-primary">Total <span className="block text-[10px] font-normal normal-case opacity-70">Grade</span></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-sm text-slate-900 dark:text-white divide-y divide-slate-100 dark:divide-slate-700">
                                                            {students.map((student) => (
                                                                <tr key={student.id} onClick={() => setSelectedStudent(student.id)}
                                                                    className={`cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${selectedStudent === student.id ? 'bg-primary/5' : ''}`}>
                                                                    <td className={`p-3 pl-6 sticky left-0 bg-white dark:bg-[#1a2632] group-hover:bg-slate-50 dark:group-hover:bg-slate-800/50 z-10 border-r border-slate-200 dark:border-slate-700 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)] ${selectedStudent === student.id ? 'bg-primary/5 dark:bg-primary/10' : ''}`}>
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="size-8 rounded-full bg-center bg-cover" style={{ backgroundImage: `url('${student.avatar}')` }}></div>
                                                                            <div>
                                                                                <p className={`font-bold ${selectedStudent === student.id ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>{student.name}</p>
                                                                                <p className="text-xs text-slate-500 dark:text-slate-400">ID: {student.studentId}</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="p-2 border-l border-slate-200 dark:border-slate-700">
                                                                        <input className="w-full text-center bg-transparent border border-transparent hover:border-slate-200 focus:border-primary rounded px-2 py-1 focus:ring-0 font-medium" type="text" defaultValue={student.hw1} />
                                                                    </td>
                                                                    <td className="p-2 border-l border-slate-200 dark:border-slate-700">
                                                                        <input className="w-full text-center bg-transparent border border-transparent hover:border-slate-200 focus:border-primary rounded px-2 py-1 focus:ring-0 font-medium" type="text" defaultValue={student.quiz1} />
                                                                    </td>
                                                                    <td className="p-2 border-l border-slate-200 dark:border-slate-700 relative">
                                                                        {student.hw2 === 'MISSING' ? (
                                                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                                                <span className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 text-[10px] font-bold px-1.5 py-0.5 rounded">MISSING</span>
                                                                            </div>
                                                                        ) : (
                                                                            <input className="w-full text-center bg-transparent border border-transparent hover:border-slate-200 focus:border-primary rounded px-2 py-1 focus:ring-0 font-medium" type="text" defaultValue={student.hw2} />
                                                                        )}
                                                                    </td>
                                                                    <td className="p-2 border-l border-slate-200 dark:border-slate-700">
                                                                        <input className="w-full text-center bg-transparent border border-transparent hover:border-slate-200 focus:border-primary rounded px-2 py-1 focus:ring-0 font-medium" type="text" defaultValue={student.midterm} />
                                                                    </td>
                                                                    <td className="p-2 border-l border-slate-200 dark:border-slate-700 bg-primary/5 font-bold text-center">{student.average}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="p-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
                                                    <span>Showing {students.length} of 28 students</span>
                                                    <div className="flex gap-2">
                                                        <button disabled className="px-2 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-50">Previous</button>
                                                        <button className="px-2 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800">Next</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Detail Panel */}
                                            <div className="w-full xl:w-[360px] shrink-0 bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col overflow-hidden">
                                                <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-900">
                                                    <h3 className="font-bold text-lg dark:text-white">Student Detail</h3>
                                                    <button className="text-slate-500 hover:text-primary">
                                                        <span className="material-symbols-outlined">close</span>
                                                    </button>
                                                </div>
                                                <div className="p-6 flex flex-col gap-6 overflow-y-auto">
                                                    <div className="flex flex-col items-center gap-3 text-center">
                                                        <div className="relative">
                                                            <div className="size-24 rounded-full bg-center bg-cover border-4 border-slate-50 dark:border-slate-800 shadow-md" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs14QJfmjg6o5ne5_elB3INIQp1l-6MxGOCDDz5HBErrt0MF4EpSo235ZwoPUQxYLX1rtyHD_NfPdOdAJkjfkeq03ig-xr-6JBXXPkUsSinbMtx6vRQYT0Gq3hqjQPyJP6N4VnvQsdZtxos0Jt5Eo7nhQ4ENru9uhOWeSWW3pRS6SNiP3us6O1R03rz0juFV54L4fq_jZC11YhHJBoLEFIS2TipQpXT79aEBh8i80vGa1aL1RSeAyC7oCB5FNWiiukDINq340jASzD')" }}></div>
                                                            <div className="absolute bottom-0 right-0 bg-green-500 text-white rounded-full p-1 border-2 border-white dark:border-slate-800">
                                                                <span className="material-symbols-outlined text-[16px] block">check</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Alice Smith</h2>
                                                            <p className="text-sm text-slate-500 dark:text-slate-400">alice.smith@school.edu</p>
                                                        </div>
                                                        <div className="flex gap-2 mt-1">
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">Honor Roll</span>
                                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">98% Attendance</span>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div>
                                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                                                <span className="material-symbols-outlined text-[18px] text-primary">insights</span> Performance Trend
                                                            </h4>
                                                            <div className="h-32 w-full bg-slate-50 dark:bg-slate-900 rounded-lg p-2 relative flex items-end justify-between gap-1 overflow-hidden border border-slate-200 dark:border-slate-700">
                                                                {/* Simulated Bar Chart */}
                                                                {[60, 70, 65, 85, 90, 98].map((h, i) => (
                                                                    <div key={i} className={`w-1/6 bg-primary/${(i + 5) * 10} h-[${h}%] rounded-t-sm`} style={{ height: `${h}%` }}></div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Teacher Notes</h4>
                                                            <textarea className="w-full h-24 p-3 text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg resize-none focus:ring-1 focus:ring-primary focus:border-primary text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="Add a private note about Alice..."></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-3">
                                                        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors dark:text-white">
                                                            <span className="material-symbols-outlined text-[18px]">mail</span> Email
                                                        </button>
                                                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">
                                                            <span className="material-symbols-outlined text-[18px]">person</span> Profile
                                                        </button>
                                                    </div>
                                                </div>
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
