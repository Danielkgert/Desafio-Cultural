import Link from 'next/link';
import Logo from './Logo';

interface Breadcrumb { label: string; href?: string; }
interface HeaderProps { breadcrumbs?: Breadcrumb[]; }

export default function Header({ breadcrumbs = [] }: HeaderProps) {
  return (
    <header style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, background:'rgba(5,5,5,0.88)', backdropFilter:'blur(20px)', borderBottom:'1px solid #1F1F1F' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', height:68, display:'flex', alignItems:'center', justifyContent:'space-between', gap:16 }}>

        {/* Brand */}
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:12, textDecoration:'none' }}>
          <Logo size={42} />
          <span className="font-display gold-text" style={{ fontSize:18, letterSpacing:'0.12em' }}>
            DESAFIO CULTURAL
          </span>
        </Link>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'var(--text-muted)' }}>
            <Link href="/" style={{ color:'var(--gold)', textDecoration:'none' }}>Início</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display:'flex', alignItems:'center', gap:8 }}>
                <span style={{ color:'#333' }}>›</span>
                {crumb.href
                  ? <Link href={crumb.href} style={{ color:'var(--gold)', textDecoration:'none' }}>{crumb.label}</Link>
                  : <span style={{ color:'var(--text-sec)' }}>{crumb.label}</span>
                }
              </span>
            ))}
          </nav>
        )}

        {/* Decorative */}
        <div style={{ display:'flex', alignItems:'center', gap:8, opacity:0.4 }}>
          <div style={{ width:48, height:1, background:'linear-gradient(to left, var(--gold), transparent)' }} />
          <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--gold)', animation:'pulse 2s infinite' }} />
        </div>
      </div>
    </header>
  );
}
