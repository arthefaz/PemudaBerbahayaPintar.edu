import { TeacherSidebar, ClassManager } from '@/components/sections/teacherDashboard';

export default function TeacherDashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <TeacherSidebar />
      <main className="flex-1 p-6 lg:p-8 space-y-6 max-w-6xl mx-auto md:mx-0">
        <div>
          <h1 className="text-2xl lg:text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">Portal Guru & Pengajar</h1>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Kelola kelas, tinjau progres tugas, serta berikan bimbingan akademis kepada siswa.</p>
        </div>

        <ClassManager />
      </main>
    </div>
  );
}
