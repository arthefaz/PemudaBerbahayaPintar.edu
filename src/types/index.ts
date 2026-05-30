export interface Module {
  id: string;
  title: string;
  description: string;
  lessonsCount: number;
  duration: string;
  image: string;
  difficulty: 'Pemula' | 'Menengah' | 'Mahir';
  category: string;
}

export interface Exercise {
  id: string;
  title: string;
  topic: string;
  durationMinutes: number;
  points: number;
  difficulty: 'Mudah' | 'Sedang' | 'Sulit';
  status: 'Belum Selesai' | 'Sedang Dikerjakan' | 'Selesai';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Student {
  name: string;
  rank: number;
  points: number;
  level: number;
  avatarUrl: string;
}

export interface ClassInfo {
  id: string;
  name: string;
  studentsCount: number;
  averageScore: number;
  activeModules: number;
}
