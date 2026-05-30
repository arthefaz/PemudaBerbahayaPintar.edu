'use client';

import Link from 'next/link';
import { BookOpen, User } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function MuridModulPage() {
  const modules = useStore(state => state.modules);

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Modul Pembelajaran</h1>
        <p className="text-muted-foreground">Pilih modul yang ingin kamu pelajari hari ini.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((modul) => (
          <Link key={modul.id} href={`/dashboard/murid/modul/${modul.id}`}>
            <Card className="overflow-hidden group hover:border-primary/50 transition-all hover:shadow-md cursor-pointer h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={modul.imageUrl || "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=600"} 
                  alt={modul.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <Badge className="absolute top-4 right-4 bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90">
                  Tema 4
                </Badge>
              </div>
              <CardHeader className="p-5 pb-2">
                <CardTitle className="text-xl line-clamp-2">{modul.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 flex-1 flex flex-col justify-between">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {modul.description}
                </p>
                <div className="flex items-center text-xs font-medium text-muted-foreground gap-2">
                  <User className="h-4 w-4" />
                  {modul.authorName}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}

        {modules.length === 0 && (
          <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed rounded-xl">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted" />
            <p className="font-medium">Belum ada modul yang tersedia.</p>
          </div>
        )}
      </div>
    </div>
  );
}
