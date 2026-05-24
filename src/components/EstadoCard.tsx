'use client';
import Link from 'next/link';
import type { Estado } from '../data/mockData';

export default function EstadoCard({ estado }: { estado: Estado }) {
  return (
    <Link
      href={`/${estado.id}`}
      className="card gold-glow"
      style={{
        padding: '12px 14px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'block',
        minWidth: 0,
      }}
    >
      {/* Sigla grande decorativa */}
      <div
        className="font-display"
        aria-hidden
        style={{
          fontSize: 44,
          color: 'rgba(214,163,84,0.09)',
          lineHeight: 1,
          marginBottom: 4,
          userSelect: 'none',
          letterSpacing: '-0.01em',
        }}
      >
        {estado.sigla}
      </div>

      {/* Nome */}
      <div
        className="font-display"
        style={{
          fontSize: 'clamp(12px, 3.5vw, 14px)',
          color: 'var(--text-sec)',
          lineHeight: 1.2,
          marginBottom: 4,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {estado.nome}
      </div>

      {/* Contagem */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <div style={{
          width: 3, height: 3, borderRadius: '50%',
          background: 'rgba(214,163,84,0.4)',
          flexShrink: 0,
        }} />
        <span style={{ fontSize: 10, color: 'var(--text-muted)', lineHeight: 1 }}>
          {estado.municipios.length} mun.
        </span>
      </div>

      {/* Seta */}
      <div style={{
        position: 'absolute', bottom: 10, right: 10,
        color: 'rgba(214,163,84,0.22)',
        fontSize: 13,
      }}>
        →
      </div>
    </Link>
  );
}
