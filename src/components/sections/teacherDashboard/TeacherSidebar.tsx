import Link from 'next/link';
import { Users, BookOpen, Settings, BarChart2, ShieldAlert, Award } from 'lucide-react';

export default function TeacherSidebar() {
  const sidebarItems = [
    { label: 'Kelola Kelas', icon: Users, href: '/dashboard/teacher', active: true },
    { label: 'Daftar Modul', icon: BookOpen, href: '/' },
    { label: 'Statistik Nilai', icon: BarChart2, href: '#' },
    { label: 'Kuis Admin', icon: Award, href: '/quiz' },
    { label: 'Pengaturan Admin', icon: Settings, href: '#' }
  ];

  return (
    <aside className="w-64 border-r border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 min-h-screen hidden md:flex flex-col p-6 justify-between transition-colors duration-300">
      <div className="space-y-8">
        {/* Title */}
        <div>
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Portal Guru</p>
          <h2 className="text-sm font-bold text-slate-700 dark:text-slate-200 mt-1 flex items-center gap-1.5">
            <ShieldAlert className="h-4 w-4 text-indigo-500" />
            <span>Dashboard Guru</span>
          </h2>
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

      {/* Teacher Bottom Widget */}
      <div className="bg-gradient-to-tr from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 p-4 rounded-2xl border border-purple-100/50 dark:border-purple-900/30 text-center space-y-3">
        <p className="text-xs font-bold text-purple-600 dark:text-purple-400 leading-snug">Butuh edit kurikulum?</p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400">Unduh berkas kurikulum resmi GDG Hackathon.</p>
        <button className="w-full py-1.5 px-3 rounded-lg text-[10px] font-bold bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50 shadow-xs cursor-pointer">
          Unduh RPS
        </button>
      </div>
    </aside>
  );
}
