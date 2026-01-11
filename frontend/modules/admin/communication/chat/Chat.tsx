import { useState } from 'react';
import {
  Send,
  Search,
  MoreVertical,
  User,
  Circle,
  Hash,
  Activity,
  Phone,
  Video,
  FileText,
  Paperclip,
  SmilePlus,
  ArrowLeft
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const contacts = [
    { id: 1, name: 'Principal Anderson', role: 'ADMIN', lastMsg: 'Protocol check scheduled...', time: '10:42 AM', active: true, online: true },
    { id: 2, name: 'Mathematics Dept.', role: 'CHANNEL', lastMsg: 'Exam sheets uploaded.', time: '09:15 AM', active: false, online: true },
    { id: 3, name: 'Sarah Jenkins', role: 'TEACHER', lastMsg: 'Attendance discrepancy fixed.', time: 'Yesterday', active: false, online: false },
    { id: 4, name: 'Parent Council', role: 'GROUP', lastMsg: 'Next sync meeting?', time: 'Yesterday', active: false, online: false },
  ];

  return (
    <div className="flex h-[calc(100vh-160px)] gap-6 animate-in fade-in duration-500 overflow-hidden pr-2">
      {/* Sidebar: Message Nodes */}
      <div className={`w-full lg:w-96 flex flex-col gap-6 shrink-0 ${selectedChat !== null ? 'hidden lg:flex' : 'flex'}`}>
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col h-full overflow-hidden">
          <div className="p-8 border-b border-slate-100 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Messaging Hub</h2>
              <div className="size-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Activity size={20} />
              </div>
            </div>
            <div className="relative group">
              <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" />
              <input
                placeholder="Search Node Identifier..."
                className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl py-4 pl-14 pr-6 text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setSelectedChat(contact.id)}
                className={`p-6 rounded-[2rem] flex items-center gap-5 cursor-pointer transition-all active:scale-[0.98] ${selectedChat === contact.id ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'hover:bg-slate-50 dark:hover:bg-slate-800'}`}
              >
                <div className="relative shrink-0">
                  <div className={`size-14 rounded-2xl flex items-center justify-center font-black text-lg ${selectedChat === contact.id ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                    {contact.role === 'CHANNEL' ? <Hash size={24} /> : contact.name.charAt(0)}
                  </div>
                  {contact.online && (
                    <div className="absolute -right-1 -bottom-1 size-4 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-xs font-black uppercase tracking-tight truncate">{contact.name}</h4>
                    <span className={`text-[8px] font-black uppercase tracking-widest shrink-0 ${selectedChat === contact.id ? 'text-white/60' : 'text-slate-400'}`}>{contact.time}</span>
                  </div>
                  <p className={`text-[10px] font-bold uppercase tracking-wide truncate italic ${selectedChat === contact.id ? 'text-white/80' : 'text-slate-500'}`}>{contact.lastMsg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Interface: Synergy Node */}
      <div className={`flex-1 flex flex-col transition-all ${selectedChat === null ? 'hidden lg:flex opacity-50 grayscale' : 'flex'}`}>
        {selectedChat === null ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-white/50 dark:bg-slate-900/50 rounded-[3rem] border-4 border-dashed border-slate-100 dark:border-slate-800">
            <div className="size-24 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300 mb-6 shadow-sm">
              <Send size={48} />
            </div>
            <h3 className="text-xl font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Initialize Communication Protocol</h3>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest max-w-sm italic">
              Select an institutional node from the left matrix to begin real-time synergy synchronization.
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden shadow-primary/5">
            {/* Synergy Header */}
            <div className="px-10 py-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-5">
                <button onClick={() => setSelectedChat(null)} className="lg:hidden size-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                  <ArrowLeft size={20} />
                </button>
                <div className="relative">
                  <div className="size-14 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg">
                    {contacts.find(c => c.id === selectedChat)?.name.charAt(0)}
                  </div>
                  <div className="absolute -right-1 -bottom-1 size-4 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-900"></div>
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{contacts.find(c => c.id === selectedChat)?.name}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Badge variant="outline" className="text-[7px] font-black uppercase tracking-widest px-2 py-0 border-primary/20 text-primary">
                      {contacts.find(c => c.id === selectedChat)?.role} NODE
                    </Badge>
                    <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Circle size={8} fill="currentColor" />
                      Synced
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="size-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-all">
                  <Phone size={20} />
                </button>
                <button className="size-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-all">
                  <Video size={20} />
                </button>
                <button className="size-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-all">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            {/* Stream Area */}
            <div className="flex-1 overflow-y-auto p-12 custom-scrollbar space-y-8">
              <div className="flex flex-col items-center">
                <div className="px-6 py-2 rounded-full bg-slate-50 dark:bg-slate-800 text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">
                  Temporal Node: Today
                </div>
              </div>

              {/* Message Sent */}
              <div className="flex flex-col items-end gap-2 animate-in slide-in-from-right-4 duration-300">
                <div className="bg-primary text-white p-6 rounded-[2rem] rounded-tr-sm max-w-[70%] shadow-xl shadow-primary/10">
                  <p className="text-sm font-bold uppercase tracking-wide leading-relaxed italic">
                    Principal, the unified broadcast for maintenance is synchronized. All 12.4k nodes delivered.
                  </p>
                </div>
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1">
                  10:42 AM <CheckCircle2 size={10} className="text-primary" />
                </span>
              </div>

              {/* Message Received */}
              <div className="flex gap-4 animate-in slide-in-from-left-4 duration-300">
                <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 flex items-center justify-center text-[10px] font-black text-slate-400">PA</div>
                <div className="flex flex-col gap-2">
                  <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-[2rem] rounded-tl-sm max-w-full shadow-lg border border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide leading-relaxed italic">
                      Excellent work. Prepare the fiscal Arrears Sentinel for the next cycle. Ensure 0 latency.
                    </p>
                  </div>
                  <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-2">10:45 AM</span>
                </div>
              </div>
            </div>

            {/* Payload Input */}
            <div className="p-10 border-t border-slate-100 dark:border-slate-800 space-y-6 shrink-0">
              <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-[2.5rem] ring-2 ring-transparent focus-within:ring-primary/20 transition-all">
                <div className="flex items-center gap-2 pl-3">
                  <button className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-sm">
                    <Paperclip size={20} />
                  </button>
                  <button className="size-12 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary transition-all shadow-sm">
                    <SmilePlus size={20} />
                  </button>
                </div>
                <input
                  placeholder="Enter synergy payload..."
                  className="flex-1 bg-transparent border-none text-sm font-bold text-slate-900 dark:text-white outline-none placeholder:text-slate-300 italic px-4"
                />
                <Button className="size-14 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center p-0 shadow-xl shadow-primary/20 shrink-0">
                  <Send size={24} />
                </Button>
              </div>
              <div className="flex justify-center gap-6">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <FileText size={10} /> ATTACH_PROTOCOL
                </span>
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Activity size={10} /> ENCRYPTION_ACTIVE
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
