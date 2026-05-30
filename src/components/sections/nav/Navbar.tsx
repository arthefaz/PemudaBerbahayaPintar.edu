'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { BookOpen, User, ShieldAlert, Award, Menu, X, RefreshCw } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { user, toggleRole } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Beranda', icon: BookOpen },
    { href: '/quiz', label: 'Kuis Interaktif', icon: Award },
    { href: '/dashboard/student', label: 'Siswa', icon: User },
    { href: '/dashboard/teacher', label: 'Guru', icon: ShieldAlert },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/70 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/70 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
                PemudaBerbahaya<span className="text-indigo-500">.edu</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Action Button & Role Switcher */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleRole}
              title="Ganti Mode Demo (Siswa <-> Guru)"
              className="flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500/10 to-pink-500/10 text-indigo-600 dark:text-indigo-400 hover:from-indigo-500/20 hover:to-pink-500/20 border border-indigo-100 dark:border-indigo-900/50 shadow-sm cursor-pointer transition-all duration-200"
            >
              <RefreshCw className="h-3 w-3 animate-spin-hover" />
              <span>Role: {user.role === 'student' ? 'Siswa' : 'Guru'}</span>
            </button>

            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />

            <div className="flex items-center space-x-2">
              <img
                src={user.avatarUrl}
                alt="Avatar"
                className="h-8 w-8 rounded-full bg-slate-100 ring-2 ring-indigo-500/20 dark:bg-slate-800"
              />
              <div className="text-left leading-none hidden lg:block">
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">{user.name}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 capitalize">{user.role}</p>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleRole}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900"
              title="Ganti Mode Demo"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-4 space-y-1 shadow-inner animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-3 px-3">
            <img
              src={user.avatarUrl}
              alt="Avatar"
              className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800"
            />
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{user.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{user.role}</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
