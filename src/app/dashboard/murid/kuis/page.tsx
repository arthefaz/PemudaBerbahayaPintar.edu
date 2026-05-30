'use client';

import Link from 'next/link';
import { BrainCircuit, CheckCircle, Target } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function MuridKuisPage() {
  const quizzes = useStore(state => state.quizzes);
  const modules = useStore(state => state.modules);

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Kuis & Latihan Interaktif</h1>
        <p className="text-muted-foreground">Uji pemahamanmu dan kumpulkan poin nasionalisme!</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => {
          const relatedModule = modules.find(m => m.id === quiz.moduleId);
          return (
            <Link key={quiz.id} href={`/dashboard/murid/kuis/${quiz.id}`}>
              <Card className="overflow-hidden group hover:border-accent/50 transition-all hover:shadow-md cursor-pointer h-full flex flex-col relative border-2 border-transparent">
                <CardHeader className="p-5 pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <BrainCircuit className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <Badge variant="outline" className="text-xs bg-muted/50">
                      {quiz.questions.length} Soal
                    </Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-2 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground mb-4">
                    Modul: {relatedModule?.title || 'Umum'}
                  </p>
                  <div className="flex items-center text-sm font-bold text-accent-foreground gap-2">
                    <Target className="h-4 w-4" />
                    +{(quiz.questions.length * 50)} Poin Maksimal
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}

        {quizzes.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed rounded-xl">
            <BrainCircuit className="h-12 w-12 mx-auto mb-4 text-muted" />
            <p className="font-medium">Belum ada kuis yang tersedia.</p>
          </div>
        )}
      </div>
    </div>
  );
}
