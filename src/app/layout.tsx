import type { Metadata } from 'next';
import { Cinzel, Raleway } from 'next/font/google';
import './globals.css';
import AOSInit from '@/components/AOSInit';

/* ── Fonts ────────────────────────────────────────────────────────────────── */
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

/* ── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: 'Desafio Cultural',
    template: '%s | Desafio Cultural',
  },
  description:
    'Explore a riqueza cultural do Brasil. Assista vídeos por estado e município.',
  keywords: ['desafio cultural', 'brasil', 'cultura', 'municípios', 'estados'],
  openGraph: {
    title: 'Desafio Cultural',
    description: 'Explore a riqueza cultural do Brasil por estado e município.',
    type: 'website',
    locale: 'pt_BR',
  },
};

/* ── Layout ───────────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cinzel.variable} ${raleway.variable}`}
    >
      <body className="bg-dark-900 text-gold-100 font-raleway antialiased min-h-screen">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
