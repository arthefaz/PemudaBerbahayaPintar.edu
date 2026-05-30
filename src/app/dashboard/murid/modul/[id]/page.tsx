'use client';

import { useParams, useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { ArrowLeft, User, Calendar, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function MuridModulDetail() {
  const { id } = useParams();
  const router = useRouter();
  const module = useStore(state => state.modules.find(m => m.id === id));
  
  if (!module) {
    return (
      <div className="p-8 text-center">
        <p className="text-xl font-semibold mb-4">Modul tidak ditemukan</p>
        <Button onClick={() => router.back()}>Kembali</Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto w-full pb-20">
      {/* Header Image */}
      <div className="h-[300px] md:h-[400px] w-full relative">
        <img 
          src={module.imageUrl} 
          alt={module.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <Button 
            variant="outline" 
            size="sm" 
            className="mb-6 bg-background/50 backdrop-blur border-border"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Daftar Modul
          </Button>
          
          <Badge className="mb-4 bg-primary text-white border-none">Tema 4</Badge>
          <h1 className="text-3xl md:text-5xl font-bold font-display mb-4">
            {module.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {module.authorName}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(module.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10 prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:tracking-wide">
        <p className="text-lg md:text-xl font-medium text-muted-foreground mb-8 pb-8 border-b">
          {module.description}
        </p>
        
        <div className="whitespace-pre-wrap leading-relaxed">
          {module.content}
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-6 md:p-10 border-t flex justify-between items-center bg-muted/20">
        <div>
          <h3 className="font-bold text-lg mb-1">Sudah selesai membaca?</h3>
          <p className="text-sm text-muted-foreground">Uji pemahamanmu dengan kuis interaktif.</p>
        </div>
        <Link href="/dashboard/murid/kuis">
          <Button size="lg" className="bg-primary hover:bg-primary-hover font-bold">
            <BookOpen className="mr-2 h-5 w-5" />
            Ke Menu Kuis
          </Button>
        </Link>
      </div>
    </div>
  );
}
