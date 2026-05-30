import Link from 'next/link';
import { LayoutDashboard, Award, Settings, BookOpen, Clock, Heart } from 'lucide-react';

export default function StudentSidebar() {
  const sidebarItems = [
    { label: 'Overview', icon: LayoutDashboard, href: '/dashboard/student', active: true },
    { label: 'Materi Belajar', icon: BookOpen, href: '/' },
    { label: 'Sertifikasi', icon: Award, href: '/quiz' },
    { label: 'Statistik Waktu', icon: Clock, href: '#' },
    { label: 'Pengaturan', icon: Settings, href: '#' }
  ];

  return (
    <aside className="w-64 border-r border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 min-h-screen hidden md:flex flex-col p-6 justify-between transition-colors duration-300">
      <div className="space-y-8">
        {/* Title */}
        <div>
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Workspace</p>
          <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-1">Dashboard Siswa</h2>
        </div>

        {/* Links */}
        <nav className="space-y-1">
          {sidebarItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  item.active
                    ? 'bg-indigo-50/70 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400'
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-850'
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Widget at Sidebar Bottom */}
      <div className="bg-gradient-to-tr from-indigo-50 to-pink-50 dark:from-indigo-950/20 dark:to-pink-950/20 p-4 rounded-2xl border border-indigo-100/50 dark:border-indigo-900/30 text-center space-y-3">
        <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 leading-snug">Butuh bantuan belajar?</p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400">Hubungi guru pembimbing Anda secara online.</p>
        <button className="w-full py-1.5 px-3 rounded-lg text-[10px] font-bold bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900 shadow-xs cursor-pointer">
          Tanya Asisten AI
        </button>
      </div>
    </aside>
  );
}
