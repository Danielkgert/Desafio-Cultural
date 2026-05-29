'use client';

interface LetraNavProps {
  letras: string[];
}

export default function LetraNav({ letras }: LetraNavProps) {
  if (letras.length === 0) return null;

  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
      {letras.map(letra => (
        <a key={letra} href={`#letra-${letra}`} style={{ textDecoration: 'none' }}>
          <div
            style={{
              width: 48, height: 48, borderRadius: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(214,163,84,0.07)',
              border: '1.5px solid rgba(214,163,84,0.25)',
              color: 'var(--gold)',
              fontSize: 18,
              fontFamily: "'Bebas Neue', 'Cinzel', sans-serif",
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s',
              flexShrink: 0,
              letterSpacing: '0.05em',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = 'rgba(214,163,84,0.18)';
              el.style.borderColor = 'rgba(214,163,84,0.6)';
              el.style.transform = 'translateY(-2px)';
              el.style.boxShadow = '0 4px 14px rgba(214,163,84,0.2)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.background = 'rgba(214,163,84,0.07)';
              el.style.borderColor = 'rgba(214,163,84,0.25)';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}
          >
            {letra}
          </div>
        </a>
      ))}
    </div>
  );
}
