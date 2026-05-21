import Link from 'next/link';
import Logo from '../components/Logo';

export default function NotFound() {
  return (
    <main style={{ minHeight:'100vh', background:'var(--bg-primary)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'0 24px', textAlign:'center' }}>
      <div style={{ marginBottom:24, opacity:0.5, animation:'floatAnim 4s ease-in-out infinite' }}>
        <Logo size={80} />
      </div>
      <h1 className="font-display gold-text" style={{ fontSize:80, lineHeight:1, marginBottom:8 }}>404</h1>
      <p className="font-display" style={{ fontSize:20, color:'rgba(214,163,84,0.6)', marginBottom:8 }}>Página não encontrada</p>
      <p style={{ color:'var(--text-muted)', fontSize:13, marginBottom:32 }}>
        O conteúdo que você procura não existe ou ainda não aderiu ao projeto.
      </p>
      <Link href="/" className="btn-outline" style={{ textDecoration:'none', fontSize:12, letterSpacing:'0.12em', textTransform:'uppercase' }}>
        ← Voltar ao início
      </Link>
    </main>
  );
}
