'use client';

import { useState } from 'react';
import { QuizQuestion as QuizQuestionType } from '@/types';
import QuizQuestion from './QuizQuestion';
import QuizScore from './QuizScore';
import { BookOpen, ArrowRight, Award, HelpCircle } from 'lucide-react';

const QUIZ_QUESTIONS: QuizQuestionType[] = [
  {
    id: 'q-1',
    question: 'Di dalam Next.js App Router, file manakah yang digunakan untuk membuat layout global / pembungkus seluruh halaman?',
    options: [
      'src/app/page.tsx',
      'src/app/layout.tsx',
      'src/components/Navbar.tsx',
      'src/app/globals.css'
    ],
    correctAnswer: 1
  },
  {
    id: 'q-2',
    question: 'Bagaimana cara membuat Route Group (grup rute) agar struktur folder tidak mempengaruhi struktur path URL di browser?',
    options: [
      'Menyematkan tanda kurung siku, misal: [marketing]',
      'Menyematkan garis bawah di depan nama folder, misal: _marketing',
      'Menyematkan tanda kurung biasa di sekeliling nama folder, misal: (marketing)',
      'Menyematkan tanda tanya di depan nama folder, misal: ?marketing'
    ],
    correctAnswer: 2
  },
  {
    id: 'q-3',
    question: 'Manakah file entrypoint yang bertugas merender tampilan utama sebuah halaman / path di Next.js?',
    options: [
      'page.tsx',
      'layout.tsx',
      'route.ts',
      'template.tsx'
    ],
    correctAnswer: 0
  }
];

export default function InteractiveQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];
  const progressPercent = ((currentIdx) / QUIZ_QUESTIONS.length) * 100;
  const finishProgressPercent = ((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleSelectOption = (idx: number) => {
    setSelectedOption(idx);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    setShowFeedback(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowFeedback(false);

    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-md transition-colors duration-300">
      
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-slate-150 dark:border-slate-800 pb-5 mb-6">
        <div className="flex items-center space-x-2.5">
          <div className="h-9 w-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-850 dark:text-slate-100 text-lg">Uji Sertifikasi Next.js</h2>
            <p className="text-xs text-slate-450 dark:text-slate-500">Dapatkan sertifikat keahlian Anda hari ini</p>
          </div>
        </div>
        {!quizFinished && (
          <span className="text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1.5 rounded-xl">
            Soal {currentIdx + 1} dari {QUIZ_QUESTIONS.length}
          </span>
        )}
      </div>

      {/* Progress Bar */}
      {!quizFinished && (
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mb-8 overflow-hidden transition-all">
          <div 
            className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${showFeedback ? finishProgressPercent : progressPercent}%` }}
          />
        </div>
      )}

      {/* Main Body */}
      {quizFinished ? (
        <QuizScore 
          score={score} 
          totalQuestions={QUIZ_QUESTIONS.length} 
          onRestart={handleRestart} 
        />
      ) : (
        <div className="space-y-6">
          <QuizQuestion
            question={currentQuestion}
            selectedOption={selectedOption}
            onSelectOption={handleSelectOption}
            showFeedback={showFeedback}
          />

          {/* Explanation Banner */}
          {showFeedback && (
            <div className="bg-indigo-50/30 dark:bg-indigo-950/10 p-5 rounded-2xl border border-indigo-100/50 dark:border-indigo-900/30 animate-in fade-in duration-300">
              <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1.5">Penjelasan:</p>
              <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                {currentIdx === 0 && 'layout.tsx berfungsi merender pembungkus layout yang menetap (navbar/footer/html shell) saat navigasi berpindah halaman di Next.js.'}
                {currentIdx === 1 && 'Folder dengan penamaan terbungkus tanda kurung, seperti (marketing) atau (dashboard), digunakan sebagai Route Group agar struktur folder terorganisir tanpa mempengaruhi slug URL di web browser.'}
                {currentIdx === 2 && 'Halaman individual dirujuk oleh file bernama page.tsx, yang bertindak sebagai entitas visual final untuk layout-layout di atasnya.'}
              </p>
            </div>
          )}

          {/* Action Trigger */}
          <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
            {!showFeedback ? (
              <button
                disabled={selectedOption === null}
                onClick={handleCheckAnswer}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  selectedOption === null
                    ? 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-600 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/10 cursor-pointer active:scale-[0.98]'
                }`}
              >
                Periksa Jawaban
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white shadow-md cursor-pointer transition-all active:scale-[0.98]"
              >
                <span>{currentIdx + 1 === QUIZ_QUESTIONS.length ? 'Lihat Hasil' : 'Soal Berikutnya'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
export { QUIZ_QUESTIONS };
