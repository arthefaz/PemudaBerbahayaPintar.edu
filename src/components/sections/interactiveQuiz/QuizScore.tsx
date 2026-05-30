import { Award, RotateCcw, CheckCircle, Zap } from 'lucide-react';

interface QuizScoreProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function QuizScore({ score, totalQuestions, onRestart }: QuizScoreProps) {
  const isPassed = score / totalQuestions >= 0.7;
  const collectedPoints = score * 100;

  return (
    <div className="text-center py-6 space-y-8 animate-in zoom-in-95 duration-300">
      
      {/* Decorative Cup/Medal illustration */}
      <div className="relative inline-block">
        <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-5xl shadow-lg border-4 border-white dark:border-slate-800 animate-float">
          {isPassed ? '🏆' : '📚'}
        </div>
        {isPassed && (
          <span className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-black shadow animate-pulse">
            ✓
          </span>
        )}
      </div>

      {/* Main Score Text */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest font-black text-indigo-500">Hasil Sertifikasi</p>
        <h3 className="text-3xl font-black text-slate-800 dark:text-slate-100">
          {isPassed ? 'Selamat! Kamu Lolos!' : 'Belajar Lagi Yuk!'}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          {isPassed 
            ? 'Hebat! Anda telah menguasai materi Next.js App Router dengan tingkat akurasi tinggi.' 
            : 'Beberapa jawaban Anda masih kurang tepat. Baca lagi materi dan coba kerjakan ulang.'}
        </p>
      </div>

      {/* Numerical Stats Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
        {/* Stat 1 */}
        <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-850 flex flex-col justify-center items-center">
          <CheckCircle className="h-5 w-5 text-indigo-500 mb-1" />
          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Benar</p>
          <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">{score} / {totalQuestions}</p>
        </div>

        {/* Stat 2 */}
        <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-850 flex flex-col justify-center items-center">
          <Zap className="h-5 w-5 text-amber-500 fill-amber-500/10 mb-1" />
          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Hadiah Poin</p>
          <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">+{collectedPoints} XP</p>
        </div>
      </div>

      {/* CTA Trigger */}
      <div className="pt-4">
        <button
          onClick={onRestart}
          className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 active:scale-[0.98] transition-all cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Ulangi Kuis</span>
        </button>
      </div>

    </div>
  );
}
export type { QuizScoreProps };
