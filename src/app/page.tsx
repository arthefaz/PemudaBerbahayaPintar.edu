import Link from 'next/link';
import { Shield, BookOpen, Trophy, ArrowRight, BrainCircuit, ShieldCheck, Users, Briefcase, Link as LinkIcon, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection, { type ActionProps } from '@/components/ui/hero-section-9';
import { LeaderboardCard } from '@/components/ui/leaderboard-card';

export default function LandingPage() {
  const heroData = {
    title: (
      <>
        Bukan Sekadar <br /> <span className="text-primary">Pintar.</span> <span className="text-accent">Berbahaya.</span>
      </>
    ),
    subtitle: 'Platform edukasi Wawasan Kebangsaan & Bela Negara. Kuasai sejarahmu, bela negaramu, dan raih Poin Nasionalisme.',
    actions: [
      {
        text: 'Mulai Belajar Sekarang',
        variant: 'default',
        className: 'bg-primary hover:bg-primary-hover font-bold text-lg h-14 px-8 shadow-xl shadow-primary/20',
        asChild: true,
        href: '/login'
      },
      {
        text: 'Pelajari Fitur',
        variant: 'outline',
        className: 'border-2 border-primary text-primary hover:bg-primary/10 font-bold text-lg h-14 px-8',
        asChild: true,
        href: '#features'
      },
    ] as ActionProps[],
    stats: [
      {
        value: '15.2K',
        label: 'Siswa Aktif',
        icon: <Users className="h-6 w-6" />,
      },
      {
        value: '100+',
        label: 'Modul Interaktif',
        icon: <BookOpen className="h-6 w-6" />,
      },
      {
        value: 'Top 10',
        label: 'Leaderboard',
        icon: <Trophy className="h-6 w-6" />,
      },
    ],
    images: [
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2070', // Students studying together
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2070', // Teacher/Tutor
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071', // Discussion
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-display text-2xl font-bold tracking-wider">PemudaBerbahayaPintar</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold">
            <Link href="#features" className="hover:text-primary transition-colors">Fitur</Link>
            <Link href="#leaderboard" className="hover:text-primary transition-colors">Leaderboard</Link>
            <Link href="#about" className="hover:text-primary transition-colors">Tentang Kami</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="font-bold hidden sm:inline-flex">Masuk</Button>
            </Link>
            <Link href="/register">
              <Button className="font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20">
                Daftar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* NEW HERO SECTION */}
        <HeroSection 
          title={heroData.title}
          subtitle={heroData.subtitle}
          actions={heroData.actions}
          stats={heroData.stats}
          images={heroData.images}
        />

      {/* Stats Section */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-primary">10K+</div>
              <div className="text-sm font-medium text-muted-foreground mt-1">Siswa Aktif</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary">50+</div>
              <div className="text-sm font-medium text-muted-foreground mt-1">Modul Pembelajaran</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary">500+</div>
              <div className="text-sm font-medium text-muted-foreground mt-1">Guru Terdaftar</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary">100%</div>
              <div className="text-sm font-medium text-muted-foreground mt-1">Cinta Indonesia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 uppercase">Kenapa Memilih Kami?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Kami merancang pengalaman belajar yang tidak hanya informatif, tapi juga transformatif.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kurikulum Tepat Sasaran</h3>
              <p className="text-muted-foreground">Materi yang disesuaikan dengan kebutuhan generasi Z, relevan, dan mudah dipahami.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">Belajar Interaktif</h3>
              <p className="text-muted-foreground">Dilengkapi dengan kuis interaktif, studi kasus, dan simulasi bela negara yang seru.</p>
            </div>
            <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-teacher/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-teacher" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pantauan Terarah</h3>
              <p className="text-muted-foreground">Fitur dashboard guru yang memudahkan pemantauan progress setiap murid secara real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview Section */}
      <section id="leaderboard" className="py-24 bg-muted/20 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 uppercase">Pemuda Paling Berbahaya</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Raih peringkat teratas dan tunjukkan dedikasimu pada bangsa.</p>
          </div>
          <LeaderboardCard
            title="Top 3 Nasional"
            fromDate={new Date(new Date().setDate(new Date().getDate() - 7))}
            toDate={new Date()}
            podiumRankings={[
              { userId: "u-1", userName: "Budi Santoso", rank: 1, value: 25400 },
              { userId: "u-2", userName: "Siti Aminah", rank: 2, value: 21200 },
              { userId: "u-3", userName: "Andi Saputra", rank: 3, value: 18500 },
            ]}
            rankings={[
              { userId: "u-1", rank: 1, userName: "Budi Santoso", byline: "Level 25", value: 25400, displayed: true },
              { userId: "u-2", rank: 2, userName: "Siti Aminah", byline: "Level 21", value: 21200, displayed: true },
              { userId: "u-3", rank: 3, userName: "Andi Saputra", byline: "Level 18", value: 18500, displayed: true },
            ]}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 uppercase">Tentang Kami</h2>
          <p className="text-lg text-muted-foreground font-medium mb-8">
            PemudaBerbahayaPintar diinisiasi dengan satu visi utama: menanamkan nilai-nilai luhur Wawasan Kebangsaan dan semangat Bela Negara kepada generasi muda Indonesia melalui cara yang interaktif, modern, dan tidak membosankan. 
            <br /><br />
            Kami percaya bahwa pemuda yang "berbahaya" adalah mereka yang tidak hanya cerdas secara akademis, tetapi juga memiliki karakter yang kuat, cinta tanah air, dan siap menjadi agen perubahan positif bagi bangsa.
          </p>
          <Button variant="outline" className="font-bold border-2" size="lg">
            Hubungi Kami
          </Button>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold tracking-wider text-primary">PemudaBerbahayaPintar</span>
          </div>
          <p className="text-muted-foreground font-medium">PemudaBerbahayaPintar — Karena bangsa butuh yang terbaik.</p>
          <div className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} PemudaBerbahayaPintar.edu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
