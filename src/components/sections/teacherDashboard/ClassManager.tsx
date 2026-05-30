import { Users, FileText, Award, BarChart2 } from 'lucide-react';

interface MockStudentProgress {
  id: string;
  name: string;
  avatar: string;
  progress: number;
  points: number;
  averageScore: number;
  status: 'Aktif' | 'Pasif';
}

const MOCK_STUDENTS: MockStudentProgress[] = [
  { id: 'st-1', name: 'Budi Santoso', avatar: 'budi', progress: 82, points: 4850, averageScore: 92, status: 'Aktif' },
  { id: 'st-2', name: 'Siti Aminah', avatar: 'siti', progress: 95, points: 5200, averageScore: 96, status: 'Aktif' },
  { id: 'st-3', name: 'Dewo Sukarno', avatar: 'dewo', progress: 45, points: 2300, averageScore: 78, status: 'Aktif' },
  { id: 'st-4', name: 'Ahmad Faisal', avatar: 'ahmad', progress: 12, points: 650, averageScore: 65, status: 'Pasif' },
  { id: 'st-5', name: 'Rina Herawati', avatar: 'rina', progress: 70, points: 3900, averageScore: 88, status: 'Aktif' }
];

export default function ClassManager() {
  return (
    <div className="space-y-6 transition-colors duration-300">
      
      {/* Quick Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 rounded-2xl flex items-center space-x-4 shadow-xs">
          <div className="h-10 w-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Users className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Total Siswa</p>
            <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">42 Siswa</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 rounded-2xl flex items-center space-x-4 shadow-xs">
          <div className="h-10 w-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <BarChart2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Rata-Rata Nilai</p>
            <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">85.4%</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 rounded-2xl flex items-center space-x-4 shadow-xs">
          <div className="h-10 w-10 rounded-xl bg-pink-50 dark:bg-pink-950/40 flex items-center justify-center text-pink-600 dark:text-pink-400">
            <FileText className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Modul Aktif</p>
            <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">3 Modul</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 rounded-2xl flex items-center space-x-4 shadow-xs">
          <div className="h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Rata-Rata Poin</p>
            <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">3,420</p>
          </div>
        </div>
      </div>

      {/* Class list table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center flex-wrap gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">Daftar Kemajuan Siswa</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500">Daftar siswa aktif di kelas PemudaBerbahaya.edu saat ini.</p>
          </div>
          <button className="py-2 px-4 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs transition-colors cursor-pointer">
            + Tambah Siswa
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950 text-xs font-bold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800">
                <th className="p-4 pl-6">Nama Siswa</th>
                <th className="p-4">Kemajuan Belajar</th>
                <th className="p-4">Total Poin</th>
                <th className="p-4">Rata-rata Nilai</th>
                <th className="p-4">Status</th>
                <th className="p-4 pr-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 text-sm">
              {MOCK_STUDENTS.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-850 transition-colors">
                  <td className="p-4 pl-6 font-bold text-slate-700 dark:text-slate-200 flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-sm ring-1 ring-slate-100 dark:ring-slate-800">
                      👤
                    </div>
                    <span>{student.name}</span>
                  </td>
                  <td className="p-4 min-w-[150px]">
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-pink-500 h-1.5 rounded-full" 
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-slate-600 dark:text-slate-350">{student.points.toLocaleString()}</td>
                  <td className="p-4">
                    <span className="font-bold text-slate-700 dark:text-slate-200">{student.averageScore}</span>/100
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      student.status === 'Aktif'
                        ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/40'
                        : 'bg-slate-50 text-slate-400 dark:bg-slate-900 dark:text-slate-500 border-slate-200 dark:border-slate-850'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="text-xs font-semibold text-indigo-500 hover:text-indigo-600 cursor-pointer">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export { MOCK_STUDENTS };
