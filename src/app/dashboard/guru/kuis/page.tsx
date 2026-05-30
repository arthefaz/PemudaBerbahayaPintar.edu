'use client';

import Link from 'next/link';
import { BrainCircuit, Plus, Edit, Trash2 } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function GuruKuisPage() {
  const quizzes = useStore(state => state.quizzes);
  const modules = useStore(state => state.modules);

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manajemen Kuis</h1>
          <p className="text-muted-foreground">Kelola latihan soal interaktif untuk murid.</p>
        </div>
        <Link href="/dashboard/guru/kuis/create">
          <Button className="bg-teacher hover:bg-teacher/90 text-white font-bold h-12 px-6">
            <Plus className="mr-2 h-5 w-5" />
            Buat Kuis Baru
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => {
          const relatedModule = modules.find(m => m.id === quiz.moduleId);
          return (
            <Card key={quiz.id} className="overflow-hidden flex flex-col h-full border-2 border-transparent hover:border-teacher/20 transition-all">
              <CardHeader className="p-5 pb-2">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-10 w-10 rounded-lg bg-teacher/10 flex items-center justify-center">
                    <BrainCircuit className="h-5 w-5 text-teacher" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {quiz.questions.length} Soal
                  </Badge>
                </div>
                <CardTitle className="text-xl line-clamp-2">{quiz.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-2 flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-6">
                  Terkait dengan Modul: <br />
                  <span className="font-semibold">{relatedModule?.title || 'Tidak Terkait'}</span>
                </p>
                <div className="flex items-center gap-2 mt-auto pt-4 border-t">
                  <Button variant="outline" size="sm" className="flex-1 text-teacher border-teacher/20 hover:bg-teacher/10">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-destructive border-destructive/20 hover:bg-destructive/10">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Hapus
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {quizzes.length === 0 && (
          <div className="col-span-full py-16 text-center text-muted-foreground border-2 border-dashed rounded-xl">
            <BrainCircuit className="h-16 w-16 mx-auto mb-4 text-muted" />
            <p className="font-medium text-lg mb-2">Belum ada kuis yang dibuat.</p>
            <p className="text-sm">Klik tombol "Buat Kuis Baru" untuk mulai menambahkan soal latihan.</p>
          </div>
        )}
      </div>
    </div>
  );
}
