import { Module } from '@/types';
import ModuleCard from './ModuleCard';

const MOCK_MODULES: Module[] = [
  {
    id: 'mod-1',
    title: 'Next.js App Router & Server Components',
    description: 'Pelajari arsitektur Next.js terbaru, mulai dari route groups, layouts, nested layouts, parallel routes, hingga server actions.',
    lessonsCount: 8,
    duration: '4 Jam 30 Menit',
    image: '🚀',
    difficulty: 'Menengah',
    category: 'Web Development'
  },
  {
    id: 'mod-2',
    title: 'Tailwind CSS v4 Premium Design System',
    description: 'Rancang website modern dengan micro-animations, glassmorphism, responsive grid layouts, serta utility-first CSS standard.',
    lessonsCount: 6,
    duration: '3 Jam',
    image: '🎨',
    difficulty: 'Pemula',
    category: 'Styling & UI/UX'
  },
  {
    id: 'mod-3',
    title: 'Advanced TypeScript Configuration',
    description: 'Kuasai system types tingkat lanjut: generics, utility types, mapped types, decorators, dan sinkronisasi dengan IDE.',
    lessonsCount: 10,
    duration: '5 Jam 15 Menit',
    image: '🛡️',
    difficulty: 'Mahir',
    category: 'Programming Languages'
  },
  {
    id: 'mod-4',
    title: 'RESTful API & Database Integration',
    description: 'Hubungkan aplikasi frontend Anda dengan database relational dan ORM Prisma, serta buat sistem otentikasi JWT.',
    lessonsCount: 8,
    duration: '4 Jam',
    image: '💾',
    difficulty: 'Menengah',
    category: 'Back-End'
  },
  {
    id: 'mod-5',
    title: 'State Management with Zustand & Redux',
    description: 'Kelola state global aplikasi React secara scalable tanpa re-render yang tidak efisien menggunakan Zustand.',
    lessonsCount: 5,
    duration: '2 Jam 30 Menit',
    image: '🧠',
    difficulty: 'Menengah',
    category: 'State Management'
  },
  {
    id: 'mod-6',
    title: 'Production Deployments & CI/CD Pipelines',
    description: 'Deploy aplikasi Next.js Anda ke Vercel/Netlify dengan integrasi Git Actions, linting otomatis, dan test cases.',
    lessonsCount: 4,
    duration: '2 Jam',
    image: '⚙️',
    difficulty: 'Mahir',
    category: 'DevOps'
  }
];

export default function ModuleList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {MOCK_MODULES.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
}
export { MOCK_MODULES };
