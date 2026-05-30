'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore, Question } from '@/store/useStore';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CreateKuisPage() {
  const router = useRouter();
  const addQuiz = useStore(state => state.addQuiz);
  const modules = useStore(state => state.modules);
  const currentUser = useStore(state => state.currentUser);
  
  const [title, setTitle] = useState('');
  const [moduleId, setModuleId] = useState('');
  const [questions, setQuestions] = useState<Omit<Question, 'id'>[]>([
    { text: '', options: ['', '', '', ''], correctAnswerIndex: 0 }
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { text: '', options: ['', '', '', ''], correctAnswerIndex: 0 }
    ]);
  };

  const handleRemoveQuestion = (index: number) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, i) => i !== index));
    }
  };

  const updateQuestionText = (index: number, text: string) => {
    const newQs = [...questions];
    newQs[index].text = text;
    setQuestions(newQs);
  };

  const updateOption = (qIndex: number, optIndex: number, text: string) => {
    const newQs = [...questions];
    newQs[qIndex].options[optIndex] = text;
    setQuestions(newQs);
  };

  const updateCorrectAnswer = (qIndex: number, answerIndex: number) => {
    const newQs = [...questions];
    newQs[qIndex].correctAnswerIndex = answerIndex;
    setQuestions(newQs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add unique IDs to questions
    const finalQuestions: Question[] = questions.map(q => ({
      ...q,
      id: Math.random().toString(36).substr(2, 9)
    }));

    addQuiz({
      title,
      moduleId,
      questions: finalQuestions
    });

    router.push('/dashboard/guru/kuis');
  };

  // Only allow guru to create
  if (currentUser?.role !== 'guru') {
    return <div className="p-8">Akses ditolak.</div>;
  }

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto w-full pb-20">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => router.back()} className="text-muted-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Batal
        </Button>
        <h1 className="text-2xl font-bold">Buat Kuis Baru</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Judul Kuis</Label>
              <Input 
                id="title" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Contoh: Latihan Soal Pancasila"
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="moduleId">Tautkan ke Modul</Label>
              <select 
                id="moduleId"
                value={moduleId}
                onChange={e => setModuleId(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>-- Pilih Modul --</option>
                {modules.filter(m => m.authorId === currentUser.id).map(m => (
                  <option key={m.id} value={m.id}>{m.title}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Soal Latihan
          </h2>
          
          {questions.map((q, qIndex) => (
            <Card key={qIndex} className="border-teacher/20 shadow-sm relative">
              <div className="absolute top-4 right-4">
                {questions.length > 1 && (
                  <Button type="button" variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10" onClick={() => handleRemoveQuestion(qIndex)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold text-teacher">Soal {qIndex + 1}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Pertanyaan</Label>
                  <Input 
                    value={q.text}
                    onChange={e => updateQuestionText(qIndex, e.target.value)}
                    placeholder="Tulis pertanyaan di sini..."
                    required 
                  />
                </div>
                
                <div className="space-y-3 pt-2">
                  <Label>Pilihan Ganda & Kunci Jawaban</Label>
                  <p className="text-xs text-muted-foreground mb-2">Pilih radio button untuk menandai jawaban yang benar.</p>
                  
                  {q.options.map((opt, oIndex) => (
                    <div key={oIndex} className="flex items-center gap-3">
                      <input 
                        type="radio" 
                        name={`correct-${qIndex}`} 
                        checked={q.correctAnswerIndex === oIndex}
                        onChange={() => updateCorrectAnswer(qIndex, oIndex)}
                        className="w-5 h-5 text-teacher border-gray-300 focus:ring-teacher"
                      />
                      <Input 
                        value={opt}
                        onChange={e => updateOption(qIndex, oIndex, e.target.value)}
                        placeholder={`Pilihan ${String.fromCharCode(65 + oIndex)}`}
                        required 
                        className={q.correctAnswerIndex === oIndex ? "border-teacher bg-teacher/5" : ""}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <Button type="button" variant="outline" onClick={handleAddQuestion} className="w-full border-dashed border-2 py-8 text-muted-foreground hover:text-foreground">
            <Plus className="mr-2 h-5 w-5" />
            Tambah Soal Lain
          </Button>
        </div>

        <div className="flex justify-end pt-4 sticky bottom-6 z-10">
          <Button type="submit" size="lg" className="bg-teacher hover:bg-teacher/90 text-white font-bold h-14 px-8 shadow-xl">
            <Save className="mr-2 h-5 w-5" />
            Simpan Kuis
          </Button>
        </div>
      </form>
    </div>
  );
}
