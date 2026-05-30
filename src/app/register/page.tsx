'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Shield, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export default function RegisterPage() {
  const [role, setRole] = useState<'murid' | 'guru'>('murid');

  return (
    <div className="min-h-screen flex w-full flex-row-reverse">
      {/* Right Form Section (Reversed for register) */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32 bg-background">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="flex items-center gap-2 mb-8">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-display tracking-wider text-xl font-bold text-primary">PemudaBerbahayaPintar</span>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">Mulai Perjalananmu</h1>
            <p className="text-muted-foreground font-medium">Buat akun untuk mengakses modul bela negara.</p>
          </div>

          {/* Role Selector */}
          <div className="grid grid-cols-2 gap-4 p-1 bg-muted/50 rounded-lg">
            <button
              onClick={() => setRole('murid')}
              className={cn(
                "py-2 px-4 rounded-md text-sm font-semibold transition-all duration-200",
                role === 'murid' 
                  ? "bg-background text-foreground shadow-sm ring-1 ring-border" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Murid
            </button>
            <button
              onClick={() => setRole('guru')}
              className={cn(
                "py-2 px-4 rounded-md text-sm font-semibold transition-all duration-200",
                role === 'guru' 
                  ? "bg-background text-foreground shadow-sm ring-1 ring-border" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Guru
            </button>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Budi Santoso" 
                  className="pl-10 h-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="nama@email.com" 
                  className="pl-10 h-11"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  className="pl-10 h-11"
                  required
                />
              </div>
            </div>

            <Button 
              className={cn(
                "w-full h-11 font-bold text-white mt-2",
                role === 'guru' ? "bg-teacher hover:bg-teacher/90" : "bg-primary hover:bg-primary-hover"
              )}
            >
              Daftar sebagai {role === 'murid' ? 'Murid' : 'Guru'}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground font-medium">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>

      {/* Left Image Section */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden bg-muted">
        <div className="absolute inset-0 bg-primary/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2000" 
          alt="Indonesian landscape or students"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-20" />
        <div className="absolute bottom-0 left-0 right-0 p-16 z-30">
          <div className="glass p-8 rounded-2xl max-w-lg">
            <div className="inline-flex items-center rounded-full bg-teacher/20 px-3 py-1 text-sm font-semibold text-teacher mb-4">
              📚 Pembelajaran Aktif
            </div>
            <p className="text-2xl font-bold text-white mb-2 font-display uppercase tracking-wide">
              "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia."
            </p>
            <p className="text-white/80 font-medium">
              — Nelson Mandela
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
