import { StudentSidebar, StudentProfile } from '@/components/sections/studentDashboard';
import ExerciseList from '@/components/sections/exercises';
import { BookOpen } from 'lucide-react';

export default function StudentDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <StudentSidebar />
      <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-5xl mx-auto md:mx-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">Dashboard Siswa</h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Selamat datang kembali! Mari kita lanjutkan petualangan belajarmu.</p>
        </div>

        <StudentProfile />

        <section className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-5">
          <div className="flex items-center space-x-2 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="h-8 w-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <BookOpen className="h-4.5 w-4.5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-none">Daftar Tugas & Latihan</h2>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Kerjakan latihan berikut untuk mengumpulkan poin dan menaikkan level.</p>
            </div>
          </div>
          <ExerciseList />
        </section>
      </main>
    </div>
  );
}
