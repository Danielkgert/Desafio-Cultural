'use client';
import Link from 'next/link';
import type { Estado } from '../data/mockData';

export default function EstadoCard({ estado }: { estado: Estado }) {
  return (
    <Link
      href={`/${estado.id}`}
      className="card gold-glow"
      style={{ padding:20, cursor:'pointer', position:'relative', overflow:'hidden', display:'block', textDecoration:'none' }}
    >
      <div className="font-display" style={{ fontSize:52, color:'rgba(214,163,84,0.08)', lineHeight:1, marginBottom:8, userSelect:'none', transition:'color 0.3s' }}>
        {estado.sigla}
      </div>
      <div className="font-display" style={{ fontSize:15, color:'var(--text-sec)', lineHeight:1.2, marginBottom:8, transition:'color 0.3s' }}>
        {estado.nome}
      </div>
      <div style={{ display:'flex', alignItems:'center', gap:6 }}>
        <div style={{ width:4, height:4, borderRadius:'50%', background:'rgba(214,163,84,0.4)' }} />
        <span style={{ fontSize:11, color:'var(--text-muted)' }}>{estado.municipios.length} municípios</span>
      </div>
      <div style={{ position:'absolute', bottom:16, right:16, color:'rgba(214,163,84,0.25)', fontSize:16 }}>→</div>
    </Link>
  );
}
