import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import AOSInit from '../components/AOSInit';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300','400','500','600','700'],
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'Desafio Cultural', template: '%s | Desafio Cultural' },
  description: 'Explore a riqueza cultural do Brasil. Assista vídeos por estado e município.',
  keywords: ['desafio cultural','brasil','cultura','municípios','estados'],
  openGraph: {
    title: 'Desafio Cultural',
    description: 'Explore a riqueza cultural do Brasil por estado e município.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body style={{ background:'var(--bg-primary)', color:'var(--text)', fontFamily:"'Inter', sans-serif" }}>
        <AOSInit />
        {children}
        <Footer />
      </body>
    </html>
  );
}
