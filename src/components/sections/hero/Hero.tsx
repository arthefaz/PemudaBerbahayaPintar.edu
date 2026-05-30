import Link from 'next/link';
import { ArrowRight, Sparkles, Award, Users, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 py-20 lg:py-28 transition-colors duration-300">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] opacity-60" />
      
      {/* Colorful Gradient Blobs */}
      <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-500/20 to-pink-500/20 blur-3xl opacity-80" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 blur-3xl opacity-80" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 shadow-sm animate-pulse-subtle">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Platform Pembelajaran Digital Hackathon GDG 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Menjadi Pemuda <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Berbahaya & Pintar
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Uji ketangkasan intelektualmu dengan kuis interaktif, jelajahi berbagai modul pemrograman mutakhir, dan pantau kemajuan akademis dalam satu dashboard terpadu. 
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/quiz"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Mulai Kuis Sekarang</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <Link
                href="/dashboard/student"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Lihat Dashboard Siswa</span>
              </Link>
            </div>

            {/* Feature Mini Badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">12+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Modul Kelas</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">150+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Latihan Soal</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-slate-900 dark:text-white">99.2%</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Tingkat Kelulusan</p>
              </div>
            </div>
          </div>

          {/* Hero Illustration / Preview Widget */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual Glassmorphic Widget Decorating Right Side */}
            <div className="relative w-full max-w-[380px] h-[360px] rounded-3xl bg-gradient-to-tr from-indigo-500 to-purple-600 p-8 shadow-2xl shadow-indigo-500/20 overflow-hidden flex flex-col justify-between animate-float">
              {/* Decorative shapes inside widget */}
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-white/10 -mr-16 -mt-16 blur-xl" />
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-pink-500/20 -ml-12 -mb-12 blur-lg" />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="h-10 w-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Award className="h-6 w-6" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 backdrop-blur-md text-white py-1 px-2.5 rounded-full">
                  Level 5
                </span>
              </div>

              <div className="space-y-2 relative z-10">
                <p className="text-[11px] text-indigo-100 font-bold uppercase tracking-wider">Pemuda Berbahaya Pintar</p>
                <h3 className="text-2xl font-bold text-white leading-tight">Mastery Certification</h3>
                <div className="w-full bg-white/25 rounded-full h-2 mt-4 overflow-hidden">
                  <div className="bg-white h-2 rounded-full w-[82%]" />
                </div>
                <div className="flex justify-between text-xs text-indigo-100 pt-1">
                  <span>Progress Belajar</span>
                  <span>82% Selesai</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 relative z-10">
                <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-sm shadow">
                  🏆
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Budi Santoso</p>
                  <p className="text-[10px] text-indigo-200 mt-0.5">Rangking #4 Nasional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
