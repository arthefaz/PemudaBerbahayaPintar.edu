# PemudaBerbahayaPintar 🇮🇩

**PemudaBerbahayaPintar** adalah platform pembelajaran edukasi interaktif berbasis web yang difokuskan pada SDG 4 (Quality Education) untuk pemuda Indonesia. Platform ini dirancang agar tidak membosankan dengan memanfaatkan antarmuka modern, interaksi dinamis, *gamification* (*leaderboard*, poin), serta sistem pelacakan progres (papan Kanban). 

> *Bukan sekadar pintar. Berbahaya.*

---

## 🚀 1. Cara Menjalankan Aplikasi Secara Lokal

Untuk menjalankan platform edukasi ini di perangkat lokal Anda, ikuti langkah-langkah berikut:

### Prasyarat
- Pastikan Anda telah menginstal **Node.js** (v18 ke atas disarankan) dan **npm**.
- Terminal/Command Prompt.

### Instalasi & Menjalankan Server
1. Lakukan *clone* atau buka folder proyek ini.
2. Buka terminal di direktori proyek (`/PemudaBerbahayaPintar.edu`).
3. Instal semua dependensi dengan perintah:
   ```bash
   npm install
   ```
4. Jalankan *development server*:
   ```bash
   npm run dev
   ```
5. Buka peramban (browser) dan kunjungi: **[http://localhost:3000](http://localhost:3000)**

### 🔑 Kredensial Akun Dummy (Demo)
Aplikasi ini sudah dilengkapi dengan sistem data tersimulasi (menggunakan Zustand) sehingga Anda dapat langsung mencoba fitur masuk (Login) tanpa perlu konfigurasi *database*.

Gunakan kredensial berikut di halaman **`/login`**:

**👨‍🎓 Akun Murid**
- **Email:** `budi@murid.com`
- **Password:** `123`

**👨‍🏫 Akun Guru**
- **Email:** `pak_guru@guru.com`
- **Password:** `123`

---

## 🛠 2. Teknologi & Dependensi

Proyek ini dibangun menggunakan *stack* teknologi modern untuk memastikan performa yang cepat dan pengalaman pengguna yang luar biasa:

- **Kerangka Kerja (Framework):** [Next.js (App Router)](https://nextjs.org/) + [React](https://react.dev/)
- **Bahasa Pemrograman:** [TypeScript](https://www.typescriptlang.org/)
- **Desain & Gaya (Styling):** [Tailwind CSS](https://tailwindcss.com/)
- **Manajemen State (State Management):** [Zustand](https://github.com/pmndrs/zustand)
- **Komponen UI:** [Shadcn UI](https://ui.shadcn.com/)
- **Ikon:** [Lucide React](https://lucide.dev/)
- **Animasi:** [Framer Motion](https://www.framer.com/motion/)

---

## 🎯 3. Cara Menjalankan Fitur Utama

Setelah Anda menjalankan *server* lokal dan masuk (Login), Anda bisa menjelajahi fitur utama berikut:

### A. Fitur Murid (`budi@murid.com`)
1. **Modul Pembelajaran:** Dari Dasbor, klik menu "Modul" atau klik modul yang sedang berlangsung di *Recent Modules* untuk membaca materi Wawasan Kebangsaan.
2. **Kuis Interaktif:** Klik menu "Kuis" dan kerjakan soal-soal pilihan ganda yang tersedia. Selesaikan kuis dengan benar untuk mendapatkan Poin Nasionalisme!
3. **Leaderboard:** Buka menu "Leaderboard" untuk melihat peringkat Anda melawan siswa lain di seluruh Indonesia. Raih Top 3 untuk berdiri di Podium Nasional!
4. **Papan Kanban (Tugas & Rencana Belajar):** Terletak di bagian bawah halaman Dashboard, Anda dapat menarik (*drag-and-drop*) daftar tugas Anda dari "Akan Dikerjakan" hingga "Selesai".

### B. Fitur Guru (`pak_guru@guru.com`)
1. **Manajemen Modul & Kuis:** Guru dapat memantau, melihat detail, dan mengakses simulasi pembuatan modul/kuis untuk para siswanya melalui *sidebar* "Kelola Modul" dan "Kelola Kuis".
2. **Pantauan Aktivitas Murid:** Di halaman Dasbor utama, guru dapat melihat riwayat ringkas aktivitas murid yang baru saja menyelesaikan modul atau kuis.
3. **Integrasi Alat Pembelajaran:** Terletak di halaman Dasbor, fitur *showcase* integrasi (*Notion, Google Sheets, Slack*) digunakan untuk menghubungkan alur kerja kelas dengan aplikasi harian.
4. **Manajemen Tugas & Rencana Mengajar:** Papan Kanban khusus untuk guru, membantu merencanakan materi minggu ini atau membuang modul yang sudah kadaluarsa (fitur ikon "Api / Burn Barrel").

### C. Animasi Spesial (Akses Terbuka)
- **Halaman Login Interaktif:** Karakter hewan yang ikut bergerak memperhatikan posisi *cursor* Anda, dan bereaksi menutup mata ketika Anda mengetikkan *password*.
- **Kinetic Loading:** Saat ada perpindahan rute antar menu/halaman (atau saat Anda *refresh*), Anda akan disajikan animasi *loading* tipografi 3D (*"MEMUAT", "MENYIAPKAN", "MEMBANGUN"*).
- **Hero Section Dinamis:** Cek di *Landing Page* awal (`/`) untuk melihat visualisasi kolase dan animasi tombol yang menggunakan *framer-motion*.

---
*Dikembangkan dengan semangat Bela Negara dan Teknologi Modern.* 🇮🇩
