import { Award, Zap, Users, GraduationCap } from 'lucide-react';

export default function StudentProfile() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 transition-colors duration-300">
      
      {/* Profile Details */}
      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white text-3xl font-extrabold shadow-md border-2 border-white dark:border-slate-800">
          🎓
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center justify-center sm:justify-start gap-2">
            <span>Budi Santoso</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 font-bold border border-indigo-100 dark:border-indigo-900/50 uppercase">
              Kelas XII-A
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Siswa Aktif PemudaBerbahaya.edu sejak Mei 2026</p>
        </div>
      </div>

      {/* Gamified Leveling Stats */}
      <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-800 pt-6 sm:pt-0 sm:pl-12 w-full lg:w-auto">
        <div>
          <div className="inline-flex items-center space-x-1 text-slate-400 mb-1">
            <GraduationCap className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Level</span>
          </div>
          <p className="text-2xl font-black text-slate-800 dark:text-slate-100">5</p>
          <p className="text-[10px] text-indigo-500 font-semibold mt-0.5">82% Ke Level 6</p>
        </div>

        <div>
          <div className="inline-flex items-center space-x-1 text-slate-400 mb-1">
            <Zap className="h-4 w-4 text-amber-500 fill-amber-500/20" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Poin</span>
          </div>
          <p className="text-2xl font-black text-slate-800 dark:text-slate-100">4,850</p>
          <p className="text-[10px] text-emerald-500 font-semibold mt-0.5">+350 Hari Ini</p>
        </div>

        <div>
          <div className="inline-flex items-center space-x-1 text-slate-400 mb-1">
            <Award className="h-4 w-4 text-pink-500" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Ranking</span>
          </div>
          <p className="text-2xl font-black text-slate-800 dark:text-slate-100">#4</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Dari 420 Siswa</p>
        </div>
      </div>

    </div>
  );
}
