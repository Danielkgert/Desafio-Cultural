import Link from 'next/link';
import type { Municipio, Estado } from '../data/mockData';

interface Props { municipio: Municipio; estado: Estado; }

export default function MunicipioCard({ municipio, estado }: Props) {
  return (
    <Link
      href={`/${estado.id}/${municipio.id}`}
      className="card gold-glow"
      style={{ cursor:'pointer', overflow:'hidden', position:'relative', display:'block', textDecoration:'none' }}
    >
      {/* Thumbnail */}
      <div style={{ position:'relative', height:176, overflow:'hidden', background:'#0B0B0D' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${municipio.videoId}/mqdefault.jpg`}
          alt={`Thumbnail de ${municipio.nome}`}
          style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.35, transition:'all 0.6s' }}
          className="municipio-thumb"
        />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, #111111 0%, rgba(17,17,17,0.3) 50%, transparent 100%)' }} />
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ width:52, height:52, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', border:'2px solid rgba(214,163,84,0.45)', background:'rgba(5,5,5,0.7)', backdropFilter:'blur(4px)', boxShadow:'0 0 12px rgba(214,163,84,0.15)', transition:'all 0.3s' }}>
            <span style={{ color:'var(--gold)', fontSize:18, marginLeft:3 }}>▶</span>
          </div>
        </div>
        <div style={{ position:'absolute', top:10, left:10 }}>
          <span className="badge">{estado.sigla}</span>
        </div>
      </div>
      {/* Content */}
      <div style={{ padding:16 }}>
        <h3 className="font-display" style={{ fontSize:20, color:'var(--text-sec)', marginBottom:6 }}>{municipio.nome}</h3>
        <p style={{ fontSize:12, color:'var(--text-muted)', lineHeight:1.6 }}>{municipio.descricao}</p>
        <div style={{ marginTop:12, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontSize:11, color:'var(--text-muted)' }}>Assistir vídeo</span>
          <span style={{ color:'rgba(214,163,84,0.3)' }}>→</span>
        </div>
      </div>
    </Link>
  );
}
