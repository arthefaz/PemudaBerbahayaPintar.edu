import { Exercise } from '@/types';
import { Clock, Zap, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const getDifficultyColor = (diff: Exercise['difficulty']) => {
    switch (diff) {
      case 'Mudah':
        return 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30';
      case 'Sedang':
        return 'text-amber-500 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30';
      case 'Sulit':
        return 'text-rose-500 bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/30';
    }
  };

  const getStatusIcon = (status: Exercise['status']) => {
    switch (status) {
      case 'Selesai':
        return <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500" />;
      case 'Sedang Dikerjakan':
        return <AlertCircle className="h-4.5 w-4.5 text-indigo-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Exercise info */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{exercise.topic}</span>
          <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
            {exercise.difficulty}
          </span>
        </div>
        
        <h4 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5 leading-snug">
          {getStatusIcon(exercise.status)}
          <span>{exercise.title}</span>
        </h4>

        {/* Duration & point stats */}
        <div className="flex items-center space-x-4 text-xs text-slate-400">
          <div className="flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{exercise.durationMinutes} Menit</span>
          </div>
          <div className="flex items-center space-x-1">
            <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500/10" />
            <span className="font-bold text-slate-500 dark:text-slate-400">+{exercise.points} Poin</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full sm:w-auto text-right">
        {exercise.status === 'Selesai' ? (
          <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40">
            Selesai
          </span>
        ) : exercise.status === 'Sedang Dikerjakan' ? (
          <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xs cursor-pointer transition-colors">
            <span>Lanjutkan</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        ) : (
          <button className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 dark:text-slate-300 dark:hover:bg-indigo-950/30 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900 cursor-pointer transition-all">
            <span>Mulai</span>
          </button>
        )}
      </div>
    </div>
  );
}
export type { ExerciseCardProps };
