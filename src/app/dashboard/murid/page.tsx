'use client';

import { BookOpen, Trophy, Clock, Target, PlayCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CustomKanban } from '@/components/ui/custom-kanban';

export default function MuridDashboard() {
  return (
    <div className="p-6 md:p-8 space-y-8 max-w-6xl mx-auto w-full">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-primary text-white p-8 md:p-10 shadow-xl border border-primary-hover">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Target className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4 uppercase tracking-wider font-bold">
            Murid · Tema 4
          </Badge>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Selamat Datang, Budi!
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl font-medium">
            Siap untuk memperdalam wawasan kebangsaanmu hari ini? Lanjutkan modul terakhirmu untuk menyelesaikan target mingguan.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
              <PlayCircle className="mr-2 h-5 w-5" />
              Lanjutkan Modul
            </Button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Modul Selesai", value: "3/10", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-500/10" },
          { title: "Poin Nasionalisme", value: "450", icon: Trophy, color: "text-accent", bg: "bg-accent/10" },
          { title: "Jam Belajar", value: "12 Jam", icon: Clock, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { title: "Akurasi Kuis", value: "85%", icon: Target, color: "text-purple-500", bg: "bg-purple-500/10" },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm bg-card hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold font-display">{stat.value}</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Modules */}
      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Modul Terkini
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Sejarah Perjuangan Bangsa", progress: 80, image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=600" },
            { title: "Nilai-Nilai Pancasila", progress: 30, image: "https://images.unsplash.com/photo-1620063259695-1f9fbf49e9e8?auto=format&fit=crop&q=80&w=600" },
            { title: "Bela Negara di Era Digital", progress: 0, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" },
          ].map((modul, i) => (
            <Card key={i} className="overflow-hidden group hover:border-primary/50 transition-colors cursor-pointer">
              <div className="h-40 overflow-hidden relative">
                <img src={modul.image} alt={modul.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
              <CardHeader className="p-5 pb-0">
                <CardTitle className="text-lg line-clamp-1">{modul.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <div className="flex justify-between items-center text-sm font-medium mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-primary">{modul.progress}%</span>
                </div>
                {/* Custom Progress Bar since we didn't install the component */}
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-500" style={{ width: `${modul.progress}%` }} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Kanban Board */}
      <div className="pt-8 border-t">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Tugas & Rencana Belajar
        </h2>
        <CustomKanban />
      </div>
    </div>
  );
}
