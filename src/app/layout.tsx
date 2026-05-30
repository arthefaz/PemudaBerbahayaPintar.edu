import type { Metadata } from 'next';
import './globals.css';
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'PemudaBerbahayaPintar - Bukan Sekadar Pintar. Berbahaya.',
  description: 'Platform pembelajaran interaktif Wawasan Kebangsaan & Bela Negara.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <main className="flex-grow flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
