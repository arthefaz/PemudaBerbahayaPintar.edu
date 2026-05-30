import Hero from '@/components/sections/hero';
import ModuleList from '@/components/sections/module';

export default function LandingPage() {
  return (
    <div className="space-y-16 pb-20">
      <Hero />
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Kurikulum Pilihan</p>
          <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100">Modul Pembelajaran Terpopuler</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Pelajari keahlian digital masa depan mulai dari pemrograman web Next.js hingga deployment cloud.
          </p>
        </div>
        <ModuleList />
      </div>
    </div>
  );
}
