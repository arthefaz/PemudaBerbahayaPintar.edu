'use client';

import { Users, TrendingUp, AlertCircle, FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CustomKanban } from '@/components/ui/custom-kanban';
import Link from 'next/link';
import { IntegrationShowcase, type Integration } from '@/components/ui/integration-showcase';

const integrationsData: Integration[] = [
  {
    name: 'Notion',
    description: 'Kirim tugas dan catatan ke Notion.',
    iconSrc: 'https://cdn.worldvectorlogo.com/logos/notion-2.svg',
  },
  {
    name: 'Google Sheets',
    description: 'Ekspor rekap nilai ke spreadsheet.',
    iconSrc: 'https://cdn.worldvectorlogo.com/logos/google-sheets-logo-icon.svg',
  },
  {
    name: 'Google Analytics',
    description: 'Analisis traffic akses modul belajar.',
    iconSrc: 'https://cdn.worldvectorlogo.com/logos/google-analytics-3.svg',
  },
  {
    name: 'Slack',
    description: 'Notifikasi otomatis saat murid daftar kuis.',
    iconSrc: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
  },
];

export default function GuruDashboard() {
  return (
    <div className="p-6 md:p-8 space-y-8 max-w-6xl mx-auto w-full">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-teacher text-white p-8 md:p-10 shadow-xl border border-teacher">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Users className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4 uppercase tracking-wider font-bold">
            Guru · Panel Pengajar
          </Badge>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Dashboard Guru
          </h1>
          <p className="text-white/80 text-lg max-w-xl font-medium">
            Pantau perkembangan siswa, periksa nilai kuis, dan kelola modul pembelajaran Tema 4.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link href="/dashboard/guru/modul/create">
              <Button size="lg" className="bg-white text-teacher hover:bg-white/90 font-bold">
                <FileText className="mr-2 h-5 w-5" />
                Buat Modul Baru
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Total Murid", value: "145", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
          { title: "Rata-rata Nilai", value: "82", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { title: "Tugas Perlu Dinilai", value: "12", icon: AlertCircle, color: "text-accent", bg: "bg-accent/10" },
          { title: "Modul Aktif", value: "5", icon: CheckCircle, color: "text-purple-500", bg: "bg-purple-500/10" },
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

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ActivityIcon className="h-5 w-5 text-teacher" />
          Aktivitas Murid Terkini
        </h2>
        <Card className="border-none shadow-sm">
          <CardContent className="p-0">
            <div className="divide-y">
              {[
                { name: "Andi Saputra", action: "Menyelesaikan Kuis Sejarah", time: "10 menit yang lalu", score: 90 },
                { name: "Siti Aminah", action: "Membaca Modul Pancasila", time: "30 menit yang lalu", score: null },
                { name: "Reza Rahadian", action: "Menyelesaikan Kuis Bela Negara", time: "1 jam yang lalu", score: 75 },
                { name: "Dewi Lestari", action: "Bertanya di Forum Diskusi", time: "2 jam yang lalu", score: null },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-teacher/10 flex items-center justify-center font-bold text-teacher">
                      {activity.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{activity.name}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-1">{activity.time}</p>
                    {activity.score && (
                      <Badge variant="outline" className={activity.score >= 80 ? "text-emerald-500 border-emerald-500/20 bg-emerald-500/10" : "text-accent border-accent/20 bg-accent/10"}>
                        Nilai: {activity.score}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Integrations */}
      <div className="mt-12 pt-8 border-t">
        <IntegrationShowcase
          title="Integrasikan alat ~favorit~ Anda"
          subtitle="Hemat waktu dengan menghubungkan platform ini ke alat yang sudah Anda gunakan setiap hari."
          illustrationSrc="https://tally.so/images/demo/v2/strategy.png"
          illustrationAlt="Ilustrasi strategi"
          integrations={integrationsData}
          className="py-8 sm:py-12"
        />
      </div>
      {/* Kanban Board */}
      <div className="mt-12 pt-8 border-t">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-teacher" />
          Manajemen Tugas & Rencana Mengajar
        </h2>
        <CustomKanban />
      </div>
    </div>
  );
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
