import { Module } from '@/types';
import { BookOpen, Clock, BarChart } from 'lucide-react';
import Link from 'next/link';

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const getDifficultyColor = (diff: Module['difficulty']) => {
    switch (diff) {
      case 'Pemula':
        return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50';
      case 'Menengah':
        return 'bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400 border-amber-100 dark:border-amber-900/50';
      case 'Mahir':
        return 'bg-rose-50 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400 border-rose-100 dark:border-rose-900/50';
    }
  };

  return (
    <div className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.01] hover:border-indigo-200 dark:hover:border-indigo-950 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Module Header Image or Colored Banner */}
        <div className="h-40 w-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-950/30 dark:to-pink-950/30 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800/80 relative">
          <div className="absolute top-3 right-3 flex items-center">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${getDifficultyColor(module.difficulty)}`}>
              {module.difficulty}
            </span>
          </div>
          <div className="h-16 w-16 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform duration-200">
            {module.image}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{module.category}</span>
          <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 transition-colors duration-200 leading-snug">
            {module.title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {module.description}
          </p>
        </div>
      </div>

      {/* Info footer */}
      <div className="p-5 pt-0 mt-auto">
        <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center space-x-1">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{module.lessonsCount} Sesi</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{module.duration}</span>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/quiz"
            className="w-full inline-flex items-center justify-center space-x-2 py-2 px-4 rounded-xl text-xs font-semibold bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-400 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-750 transition-all cursor-pointer"
          >
            <span>Mulai Belajar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
