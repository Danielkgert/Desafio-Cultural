import Link from 'next/link';
import Logo from './Logo';

interface Breadcrumb { label: string; href?: string; }
interface HeaderProps { breadcrumbs?: Breadcrumb[]; }

export default function Header({ breadcrumbs = [] }: HeaderProps) {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(5,5,5,0.94)',
      backdropFilter: 'blur(18px)',
      borderBottom: '1px solid #1F1F1F',
      minWidth: 320,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 16px',
        height: 56,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        overflow: 'hidden',
      }}>

        {/* Logo — sempre visível */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <Logo size={34} />
        </Link>

        {/* Breadcrumbs ou título — espaço flexível, corta com ellipsis */}
        <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
          {breadcrumbs.length > 0 ? (
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              fontSize: 12,
              color: 'var(--text-muted)',
              overflow: 'hidden',
            }}>
              <Link href="/" style={{ color: 'var(--gold)', flexShrink: 0 }}>Início</Link>
              {breadcrumbs.map((crumb, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 0 }}>
                  <span style={{ color: '#444', flexShrink: 0 }}>›</span>
                  {crumb.href ? (
                    <Link href={crumb.href} style={{
                      color: 'var(--gold)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      flexShrink: 1,
                    }}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{
                      color: 'var(--text-sec)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}>
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          ) : (
            <span
              className="font-display gold-text"
              style={{
                fontSize: 'clamp(13px, 4vw, 18px)',
                letterSpacing: '0.1em',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: 'block',
              }}
            >
              DESAFIO CULTURAL
            </span>
          )}
        </div>

        {/* Ponto dourado pulsante — decorativo, flexshrink 0 */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, opacity: 0.5,
        }}>
          <div style={{
            width: 5, height: 5, borderRadius: '50%',
            background: 'var(--gold)',
            animation: 'pulse 2s infinite',
          }} />
        </div>
      </div>
    </header>
  );
}
