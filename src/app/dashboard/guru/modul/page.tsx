'use client';

import Link from 'next/link';
import { BookOpen, Plus, Edit, Trash2 } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function GuruModulPage() {
  const currentUser = useStore(state => state.currentUser);
  // Show modules created by this teacher
  const modules = useStore(state => state.modules).filter(m => m.authorId === currentUser?.id);

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manajemen Modul</h1>
          <p className="text-muted-foreground">Kelola modul pembelajaran untuk murid-muridmu.</p>
        </div>
        <Link href="/dashboard/guru/modul/create">
          <Button className="bg-teacher hover:bg-teacher/90 text-white font-bold h-12 px-6">
            <Plus className="mr-2 h-5 w-5" />
            Buat Modul Baru
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((modul) => (
          <Card key={modul.id} className="overflow-hidden flex flex-col h-full">
            <div className="h-40 overflow-hidden relative">
              <img 
                src={modul.imageUrl || "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=600"} 
                alt={modul.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            <CardHeader className="p-5 pb-2">
              <CardTitle className="text-xl line-clamp-2">{modul.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-2 flex-1 flex flex-col justify-between">
              <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
                {modul.description}
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
        ))}

        {modules.length === 0 && (
          <div className="col-span-full py-16 text-center text-muted-foreground border-2 border-dashed rounded-xl">
            <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted" />
            <p className="font-medium text-lg mb-2">Belum ada modul yang dibuat.</p>
            <p className="text-sm">Klik tombol "Buat Modul Baru" untuk mulai menambahkan materi.</p>
          </div>
        )}
      </div>
    </div>
  );
}
