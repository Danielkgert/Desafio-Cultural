import Link from 'next/link';
import Logo from './Logo';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeaderProps {
  breadcrumbs?: Breadcrumb[];
}

export default function Header({ breadcrumbs = [] }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/85 backdrop-blur-xl border-b border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(201,160,18,0.6)]">
              <Logo size={44} />
            </div>
            <div className="hidden xs:block">
              <span className="font-cinzel text-sm sm:text-base font-bold gold-shimmer tracking-widest">
                DESAFIO CULTURAL
              </span>
            </div>
          </Link>

          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="hidden md:flex items-center gap-2 font-raleway text-sm overflow-hidden">
              <Link
                href="/"
                className="text-gold-600 hover:text-gold-400 transition-colors whitespace-nowrap"
              >
                Início
              </Link>

              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2 min-w-0">
                  <span className="text-gold-700 select-none">›</span>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-gold-600 hover:text-gold-300 transition-colors truncate"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gold-300 font-medium truncate">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Decorative right element */}
          <div className="hidden lg:flex items-center gap-2 opacity-40">
            <div className="w-16 h-px bg-gradient-to-l from-gold-500 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  );
}
