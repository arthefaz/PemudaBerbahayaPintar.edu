'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, BookOpen, LayoutDashboard, Settings, LogOut, Users, Trophy, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useStore } from '@/store/useStore';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const logout = useStore(state => state.logout);
  const isGuru = pathname.includes('/guru');

  const navigation = isGuru ? [
    { name: 'Dashboard', href: '/dashboard/guru', icon: LayoutDashboard },
    { name: 'Manajemen Modul', href: '/dashboard/guru/modul', icon: BookOpen },
    { name: 'Manajemen Kuis', href: '/dashboard/guru/kuis', icon: BrainCircuit },
  ] : [
    { name: 'Dashboard', href: '/dashboard/murid', icon: LayoutDashboard },
    { name: 'Modul Belajar', href: '/dashboard/murid/modul', icon: BookOpen },
    { name: 'Kuis & Latihan', href: '/dashboard/murid/kuis', icon: BrainCircuit },
    { name: 'Leaderboard', href: '/dashboard/murid/leaderboard', icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-background border-r flex flex-col md:min-h-screen">
        <div className="p-6 border-b flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-display tracking-wider text-lg font-bold text-primary">PemudaBerbahaya</span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <span className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors",
                  isActive 
                    ? (isGuru ? "bg-teacher/10 text-teacher" : "bg-primary/10 text-primary") 
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                )}>
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t mt-auto">
          <Link href="/login">
            <Button onClick={logout} variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10">
              <LogOut className="mr-2 h-5 w-5" />
              Keluar
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden relative">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        {children}
      </main>
    </div>
  );
}
