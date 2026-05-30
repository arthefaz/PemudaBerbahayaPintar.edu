'use client';

import { useState } from 'react';

export interface User {
  name: string;
  role: 'student' | 'teacher';
  email: string;
  avatarUrl: string;
}

export function useAuth() {
  // Simple mock user state. In real app, this would query session/localstorage
  const [user, setUser] = useState<User>({
    name: 'Budi Santoso',
    role: 'student',
    email: 'budi.santoso@pemuda-berbahaya.edu',
    avatarUrl: 'https://api.dicebear.com/7.x/bottts/svg?seed=budi'
  });

  const toggleRole = () => {
    setUser(prev => ({
      ...prev,
      name: prev.role === 'student' ? 'Bu Endang (Guru)' : 'Budi Santoso',
      role: prev.role === 'student' ? 'teacher' : 'student',
      email: prev.role === 'student' ? 'endang.guru@pemuda-berbahaya.edu' : 'budi.santoso@pemuda-berbahaya.edu',
      avatarUrl: prev.role === 'student' 
        ? 'https://api.dicebear.com/7.x/avataaars/svg?seed=endang' 
        : 'https://api.dicebear.com/7.x/bottts/svg?seed=budi'
    }));
  };

  return {
    user,
    isAuthenticated: true,
    toggleRole
  };
}
