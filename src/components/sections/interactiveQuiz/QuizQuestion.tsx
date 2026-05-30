import { QuizQuestion as QuizQuestionType } from '@/types';
import { HelpCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOption: number | null;
  onSelectOption: (idx: number) => void;
  showFeedback: boolean;
}

export default function QuizQuestion({
  question,
  selectedOption,
  onSelectOption,
  showFeedback,
}: QuizQuestionProps) {
  return (
    <div className="space-y-6">
      {/* Question Text Panel */}
      <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800 flex items-start space-x-3.5">
        <div className="h-7 w-7 rounded-lg bg-indigo-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
          <HelpCircle className="h-4.5 w-4.5" />
        </div>
        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base sm:text-lg leading-relaxed">
          {question.question}
        </h3>
      </div>

      {/* Answer Options Grid */}
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === question.correctAnswer;
          
          let optionStyles = 'border-slate-250 dark:border-slate-800 hover:border-indigo-200 hover:bg-indigo-50/20 dark:hover:border-indigo-950/50';
          let indicatorDot = <div className="h-4 w-4 rounded-full border border-slate-350 dark:border-slate-700 flex-shrink-0" />;

          if (showFeedback) {
            if (isCorrect) {
              optionStyles = 'bg-emerald-50/70 border-emerald-300 text-emerald-800 dark:bg-emerald-950/20 dark:border-emerald-900/50 dark:text-emerald-350';
              indicatorDot = <div className="h-4 w-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[10px] font-black flex-shrink-0">✓</div>;
            } else if (isSelected) {
              optionStyles = 'bg-rose-50/70 border-rose-300 text-rose-800 dark:bg-rose-950/20 dark:border-rose-900/50 dark:text-rose-350';
              indicatorDot = <div className="h-4 w-4 rounded-full bg-rose-500 flex items-center justify-center text-white text-[10px] font-black flex-shrink-0">✗</div>;
            } else {
              optionStyles = 'border-slate-100 dark:border-slate-850 opacity-60';
            }
          } else if (isSelected) {
            optionStyles = 'bg-indigo-50/50 border-indigo-400 dark:bg-indigo-950/30 dark:border-indigo-900 text-indigo-700 dark:text-indigo-400 ring-2 ring-indigo-500/25';
            indicatorDot = (
              <div className="h-4 w-4 rounded-full border-4 border-indigo-500 flex-shrink-0 bg-white dark:bg-slate-900" />
            );
          }

          return (
            <button
              key={idx}
              disabled={showFeedback}
              onClick={() => onSelectOption(idx)}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl border text-left text-sm font-medium transition-all ${
                !showFeedback ? 'cursor-pointer active:scale-[0.99]' : ''
              } ${optionStyles}`}
            >
              {indicatorDot}
              <span className="flex-grow leading-relaxed">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export type { QuizQuestionProps };
