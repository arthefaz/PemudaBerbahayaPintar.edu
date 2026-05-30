import { create } from 'zustand';

// --- TYPES ---
export type UserRole = 'murid' | 'guru';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  password?: string; // Only for dummy check
  points?: number; // Only for murid
}

export interface Module {
  id: string;
  title: string;
  description: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  imageUrl: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Quiz {
  id: string;
  moduleId: string;
  title: string;
  questions: Question[];
}

interface AppState {
  // State
  currentUser: User | null;
  users: User[];
  modules: Module[];
  quizzes: Quiz[];
  
  // Actions
  login: (email: string, password: string,role: UserRole) => boolean;
  logout: () => void;
  addModule: (module: Omit<Module, 'id' | 'createdAt' | 'authorId' | 'authorName'>) => void;
  addQuiz: (quiz: Omit<Quiz, 'id'>) => void;
  addScore: (points: number) => void;
}

// --- DUMMY DATA ---
const initialUsers: User[] = [
  { id: 'u1', name: 'Budi Santoso', email: 'budi@murid.com', role: 'murid', password: '123', points: 450 },
  { id: 'u2', name: 'Siti Aminah', email: 'siti@murid.com', role: 'murid', password: '123', points: 300 },
  { id: 'u3', name: 'Reza Rahadian', email: 'reza@murid.com', role: 'murid', password: '123', points: 600 },
  { id: 'g1', name: 'Pak Guru Wahyu', email: 'wahyu@guru.com', role: 'guru', password: '123' },
];

const initialModules: Module[] = [
  {
    id: 'm1',
    title: 'Sejarah Perjuangan Bangsa',
    description: 'Pelajari kisah heroik pahlawan kemerdekaan Indonesia.',
    content: 'Indonesia dijajah oleh Belanda selama 350 tahun. Perjuangan panjang ini melahirkan banyak pahlawan nasional...',
    authorId: 'g1',
    authorName: 'Pak Guru Wahyu',
    createdAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'm2',
    title: 'Nilai-Nilai Pancasila',
    description: 'Pahami 5 sila Pancasila sebagai dasar negara Indonesia.',
    content: 'Pancasila adalah ideologi dasar bangsa Indonesia. Sila pertama adalah Ketuhanan Yang Maha Esa...',
    authorId: 'g1',
    authorName: 'Pak Guru Wahyu',
    createdAt: new Date().toISOString(),
    imageUrl: 'https://images.unsplash.com/photo-1620063259695-1f9fbf49e9e8?auto=format&fit=crop&q=80&w=600'
  }
];

const initialQuizzes: Quiz[] = [
  {
    id: 'q1',
    moduleId: 'm1',
    title: 'Kuis: Sejarah Perjuangan',
    questions: [
      {
        id: 'qq1',
        text: 'Berapa lama Belanda menjajah Indonesia?',
        options: ['3.5 Tahun', '350 Tahun', '100 Tahun', '50 Tahun'],
        correctAnswerIndex: 1
      },
      {
        id: 'qq2',
        text: 'Siapa proklamator kemerdekaan Indonesia?',
        options: ['Soekarno & Hatta', 'Soedirman', 'Diponegoro', 'Cut Nyak Dien'],
        correctAnswerIndex: 0
      }
    ]
  }
];

export const useStore = create<AppState>((set, get) => ({
  currentUser: null,
  users: initialUsers,
  modules: initialModules,
  quizzes: initialQuizzes,

  login: (email, password, role) => {
    const user = get().users.find(u => u.email === email && u.password === password && u.role === role);
    if (user) {
      set({ currentUser: user });
      return true;
    }
    return false;
  },

  logout: () => set({ currentUser: null }),

  addModule: (moduleData) => {
    const user = get().currentUser;
    if (user?.role !== 'guru') return;

    const newModule: Module = {
      ...moduleData,
      id: Math.random().toString(36).substr(2, 9),
      authorId: user.id,
      authorName: user.name,
      createdAt: new Date().toISOString(),
    };

    set((state) => ({
      modules: [...state.modules, newModule]
    }));
  },

  addQuiz: (quizData) => {
    const newQuiz: Quiz = {
      ...quizData,
      id: Math.random().toString(36).substr(2, 9),
    };
    set((state) => ({
      quizzes: [...state.quizzes, newQuiz]
    }));
  },

  addScore: (points) => {
    set((state) => {
      const user = state.currentUser;
      if (!user || user.role !== 'murid') return state;

      const updatedUsers = state.users.map(u => 
        u.id === user.id ? { ...u, points: (u.points || 0) + points } : u
      );
      
      const updatedUser = updatedUsers.find(u => u.id === user.id) || null;

      return {
        users: updatedUsers,
        currentUser: updatedUser
      };
    });
  }
}));
