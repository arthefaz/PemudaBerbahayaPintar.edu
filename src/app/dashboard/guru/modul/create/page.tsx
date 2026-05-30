'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';
import { ArrowLeft, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function CreateModulPage() {
  const router = useRouter();
  const addModule = useStore(state => state.addModule);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addModule({
      title,
      description,
      content,
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=600'
    });
    router.push('/dashboard/guru/modul');
  };

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" onClick={() => router.back()} className="text-muted-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Kembali
        </Button>
        <h1 className="text-2xl font-bold">Buat Modul Baru</h1>
      </div>

      <Card>
        <CardContent className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Judul Modul</Label>
              <Input 
                id="title" 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Contoh: Sejarah Sumpah Pemuda"
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi Singkat</Label>
              <Input 
                id="description" 
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Deskripsi singkat tentang modul ini..."
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="imageUrl">URL Gambar (Opsional)</Label>
              <Input 
                id="imageUrl" 
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Konten Modul (Markdown/Text)</Label>
              <textarea 
                id="content"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
                className="flex min-h-[300px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tulis materi lengkap di sini..."
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button type="submit" className="bg-teacher hover:bg-teacher/90 text-white font-bold h-12 px-8">
                <Save className="mr-2 h-5 w-5" />
                Simpan Modul
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
