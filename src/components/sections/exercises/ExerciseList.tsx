import { Exercise } from '@/types';
import ExerciseCard from './ExerciseCard';

const MOCK_EXERCISES: Exercise[] = [
  {
    id: 'ex-1',
    title: 'Konfigurasi Nested Layouts di Next.js',
    topic: 'Next.js App Router',
    durationMinutes: 15,
    points: 100,
    difficulty: 'Mudah',
    status: 'Selesai'
  },
  {
    id: 'ex-2',
    title: 'Implementasi Route Groups & Login Flow',
    topic: 'Next.js App Router',
    durationMinutes: 25,
    points: 200,
    difficulty: 'Sedang',
    status: 'Sedang Dikerjakan'
  },
  {
    id: 'ex-3',
    title: 'Kustomisasi PostCSS Config di Tailwind v4',
    topic: 'Tailwind CSS v4',
    durationMinutes: 20,
    points: 150,
    difficulty: 'Sedang',
    status: 'Belum Selesai'
  },
  {
    id: 'ex-4',
    title: 'Penerapan Generics Pada Axios Response Wrapper',
    topic: 'Advanced TypeScript',
    durationMinutes: 45,
    points: 300,
    difficulty: 'Sulit',
    status: 'Belum Selesai'
  }
];

export default function ExerciseList() {
  return (
    <div className="space-y-4">
      {MOCK_EXERCISES.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}
export { MOCK_EXERCISES };
