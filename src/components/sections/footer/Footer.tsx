import Link from 'next/link';
import { BookOpen, Globe, Link2, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 text-white">
                <BookOpen className="h-4 w-4" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                PemudaBerbahaya<span className="text-indigo-400">.edu</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              Platform pembelajaran digital modern untuk mencetak generasi muda berdaya saing global, berpikir kritis, dan melek teknologi demi masa depan Indonesia yang lebih cerah.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/quiz" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Kuis Interaktif
                </Link>
              </li>
              <li>
                <Link href="/dashboard/student" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Dashboard Siswa
                </Link>
              </li>
              <li>
                <Link href="/dashboard/teacher" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                  Dashboard Guru
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-200">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-200">
                <Link2 className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all duration-200">
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Dibuat khusus untuk Hackathon GDG 2026.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} PemudaBerbahaya.edu. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan <Heart className="h-3 w-3 text-red-500 fill-red-500" /> untuk Indonesia Pintar.
          </p>
        </div>
      </div>
    </footer>
  );
}
