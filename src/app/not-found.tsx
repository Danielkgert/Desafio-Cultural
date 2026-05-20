import Link from 'next/link';
import Logo from '../components/Logo';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark-900 flex flex-col items-center justify-center px-4 text-center">
      <div className="animate-float mb-8 opacity-60">
        <Logo size={80} />
      </div>
      <h1 className="font-cinzel text-6xl font-black text-gold-500/30 mb-2">404</h1>
      <p className="font-cinzel text-xl text-gold-300/70 mb-2">Página não encontrada</p>
      <p className="font-raleway text-gold-500/40 text-sm mb-8">
        O conteúdo que você procura não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="font-cinzel text-xs tracking-widest uppercase px-6 py-3
                   border border-gold-500/30 text-gold-400/70 hover:text-gold-200
                   hover:border-gold-400/60 rounded-lg transition-all duration-300"
      >
        ← Voltar ao início
      </Link>
    </main>
  );
}
