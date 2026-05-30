import InteractiveQuiz from '@/components/sections/interactiveQuiz';

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center space-y-3 mb-8">
        <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Sertifikasi Kompetensi</p>
        <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">Kuis Interaktif Mandiri</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          Uji wawasan Anda seputar routing Next.js App Router, Tailwind CSS v4, dan TypeScript untuk mendapatkan poin!
        </p>
      </div>
      <InteractiveQuiz />
    </div>
  );
}
