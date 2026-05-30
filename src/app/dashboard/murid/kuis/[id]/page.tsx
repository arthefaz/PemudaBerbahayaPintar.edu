'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { ArrowLeft, CheckCircle, XCircle, Target, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function MuridKuisDetail() {
  const { id } = useParams();
  const router = useRouter();
  
  const quiz = useStore(state => state.quizzes.find(q => q.id === id));
  const addScore = useStore(state => state.addScore);
  
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!quiz) {
    return (
      <div className="p-8 text-center">
        <p className="text-xl font-semibold mb-4">Kuis tidak ditemukan</p>
        <Button onClick={() => router.back()}>Kembali</Button>
      </div>
    );
  }

  const question = quiz.questions[currentQuestionIdx];

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);
    
    if (selectedOption === question.correctAnswerIndex) {
      setScore(prev => prev + 50); // 50 points per correct answer
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < quiz.questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      addScore(score);
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6">
        <Card className="max-w-md w-full text-center border-accent/20 shadow-xl overflow-hidden">
          <div className="bg-accent/10 py-10">
            <Target className="h-24 w-24 mx-auto text-accent mb-4" />
            <h1 className="text-4xl font-display font-bold text-accent-foreground">Kuis Selesai!</h1>
          </div>
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground mb-2">Poin Nasionalisme yang kamu dapatkan:</p>
            <p className="text-5xl font-bold font-display text-primary mb-8">+{score}</p>
            
            <div className="space-y-4">
              <Link href="/dashboard/murid/leaderboard">
                <Button className="w-full h-12 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground">
                  Lihat Leaderboard
                </Button>
              </Link>
              <Button variant="outline" className="w-full h-12" onClick={() => router.push('/dashboard/murid/kuis')}>
                Kembali ke Daftar Kuis
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto w-full p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-muted-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Batal
        </Button>
        <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full font-bold text-sm">
          <BrainCircuit className="h-4 w-4 text-primary" />
          Soal {currentQuestionIdx + 1} dari {quiz.questions.length}
        </div>
      </div>

      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
          {question.text}
        </h2>
      </div>

      <div className="space-y-4 mb-10">
        {question.options.map((opt, idx) => {
          let stateClass = "border-border hover:border-primary/50 hover:bg-muted/50";
          
          if (isAnswered) {
            if (idx === question.correctAnswerIndex) {
              stateClass = "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400";
            } else if (idx === selectedOption) {
              stateClass = "border-destructive bg-destructive/10 text-destructive";
            } else {
              stateClass = "border-border opacity-50";
            }
          } else if (selectedOption === idx) {
            stateClass = "border-primary bg-primary/5 ring-1 ring-primary";
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => handleSelect(idx)}
              className={cn(
                "w-full p-5 md:p-6 rounded-2xl border-2 text-left transition-all duration-200 flex items-center justify-between",
                stateClass
              )}
            >
              <span className="text-lg font-medium">{opt}</span>
              {isAnswered && idx === question.correctAnswerIndex && (
                <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0" />
              )}
              {isAnswered && idx === selectedOption && idx !== question.correctAnswerIndex && (
                <XCircle className="h-6 w-6 text-destructive shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      <div className="flex justify-end">
        {!isAnswered ? (
          <Button 
            size="lg" 
            disabled={selectedOption === null}
            onClick={handleCheck}
            className="w-full md:w-auto h-14 px-10 text-lg font-bold"
          >
            Cek Jawaban
          </Button>
        ) : (
          <Button 
            size="lg" 
            onClick={handleNext}
            className="w-full md:w-auto h-14 px-10 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {currentQuestionIdx < quiz.questions.length - 1 ? 'Soal Selanjutnya' : 'Selesaikan Kuis'}
          </Button>
        )}
      </div>
    </div>
  );
}
