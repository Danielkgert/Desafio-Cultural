import Link from 'next/link';
import type { Estado, Regiao } from '../data/mockData';
import { regiaoToSlug } from '../data/mockData';

interface Props {
  regiao: Regiao;
  label: string;
  estados: Estado[];
}

// Ícones SVG profissionais para cada região (sem emojis)
function RegiaoIcon({ regiao, size = 20, color = 'currentColor' }: { regiao: Regiao; size?: number; color?: string }) {
  switch (regiao) {
    case 'Norte':
      // Montanha + pico (Amazônia/natureza)
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 20l5-8 3 4 4-7 6 11H3z" />
          <circle cx="18" cy="5" r="2" />
        </svg>
      );
    case 'Nordeste':
      // Sol estilizado (pontas geométricas)
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2"  x2="12" y2="5"  />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2"  y1="12" x2="5"  y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
          <line x1="4.93"  y1="4.93"  x2="7.05"  y2="7.05"  />
          <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
          <line x1="4.93"  y1="19.07" x2="7.05"  y2="16.95" />
          <line x1="16.95" y1="7.05"  x2="19.07" y2="4.93"  />
        </svg>
      );
    case 'Centro-Oeste':
      // Bússola / ponto cardeal
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <polygon points="12,3 14.5,9 12,7.5 9.5,9" fill={color} stroke="none" />
          <polygon points="12,21 9.5,15 12,16.5 14.5,15" fill={color} opacity="0.4" stroke="none" />
          <line x1="12" y1="7.5" x2="12" y2="16.5" strokeWidth="1" opacity="0.4" />
        </svg>
      );
    case 'Sudeste':
      // Skyline / edifício estilizado
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2"  y="10" width="4"  height="11" />
          <rect x="7"  y="6"  width="4"  height="15" />
          <rect x="13" y="13" width="3"  height="8"  />
          <rect x="17" y="8"  width="5"  height="13" />
          <line x1="1" y1="21" x2="23" y2="21" />
        </svg>
      );
    case 'Sul':
      // Flocos / estrela de 6 pontas geométrica
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="2"  x2="12" y2="22" />
          <line x1="2"  y1="12" x2="22" y2="12" />
          <line x1="4.93"  y1="4.93"  x2="19.07" y2="19.07" />
          <line x1="19.07" y1="4.93"  x2="4.93"  y2="19.07" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}

const regiaoDesc: Record<Regiao, string> = {
  'Centro-Oeste': 'Cerrado, Pantanal e tradições do planalto central',
  'Nordeste':     'Forró, frevo, maracatu e riqueza do semiárido',
  'Norte':        'Amazônia, carimbó e diversidade das culturas indígenas',
  'Sudeste':      'Samba, bossa nova, jazz e grandes centros urbanos',
  'Sul':          'Gauchesca, influências europeias e natureza serrana',
};

// Totais reais de municípios por região (oficial IBGE)
const totalMunicipiosOficial: Partial<Record<Regiao, number>> = {
  'Centro-Oeste': 466,
  'Nordeste':    1794,
  'Norte':        450,
  'Sudeste':     1668,
  'Sul':         1191,
};

const totalMunicipios = (ests: Estado[], regiao: Regiao) => {
  if (totalMunicipiosOficial[regiao] !== undefined) return totalMunicipiosOficial[regiao]!;
  return ests.reduce((acc, e) => acc + e.municipios.length, 0);
};

export default function RegiaoAccordion({ regiao, label, estados }: Props) {
  const slug        = regiaoToSlug(regiao);
  const totalMun    = totalMunicipios(estados, regiao);
  const participando = estados
    .flatMap(e => e.municipios)
    .filter(m => m.videoId).length;

  return (
    <Link
      href={`/regiao/${slug}`}
      style={{ display: 'block', textDecoration: 'none' }}
    >
      <div style={{
        background: 'rgba(214,163,84,0.02)',
        border: '1px solid rgba(214,163,84,0.1)',
        borderRadius: 14,
        overflow: 'hidden',
        transition: 'border-color 0.25s, background 0.25s, transform 0.2s',
        cursor: 'pointer',
      }}
        className="regiao-card"
      >
        <div style={{
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          overflow: 'hidden',
        }}>

          {/* Ícone SVG profissional */}
          <div style={{
            width: 46, height: 46,
            borderRadius: 12,
            background: 'rgba(214,163,84,0.07)',
            border: '1px solid rgba(214,163,84,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            color: 'var(--gold)',
          }}>
            <RegiaoIcon regiao={regiao} size={22} color="var(--gold)" />
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
            {/* Nome + contadores */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap', marginBottom: 3 }}>
              <span className="font-display" style={{
                fontSize: 'clamp(18px, 5vw, 24px)',
                color: 'var(--gold)',
                lineHeight: 1,
                flexShrink: 0,
              }}>
                {label}
              </span>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: 10, color: 'var(--text-muted)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20, padding: '2px 8px',
                  whiteSpace: 'nowrap',
                }}>
                  {estados.length} estado{estados.length !== 1 ? 's' : ''}
                </span>
                <span style={{
                  fontSize: 10, color: 'var(--text-muted)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 20, padding: '2px 8px',
                  whiteSpace: 'nowrap',
                }}>
                  {totalMun.toLocaleString('pt-BR')} municípios
                </span>
                <span style={{
                  fontSize: 10, color: 'var(--gold)',
                  background: 'rgba(214,163,84,0.07)',
                  border: '1px solid rgba(214,163,84,0.15)',
                  borderRadius: 20, padding: '2px 8px',
                  whiteSpace: 'nowrap',
                }}>
                  {participando} Municípios participando
                </span>
              </div>
            </div>

            {/* Descrição */}
            <p style={{
              fontSize: 11, color: 'var(--text-muted)',
              lineHeight: 1.4,
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {regiaoDesc[regiao]}
            </p>
          </div>

          {/* Seta de navegação */}
          <div style={{
            width: 32, height: 32,
            borderRadius: '50%',
            border: '1px solid rgba(214,163,84,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            color: 'rgba(214,163,84,0.5)',
            fontSize: 15,
            transition: 'all 0.25s',
          }}>
            →
          </div>
        </div>

        {/* Barra de progresso sutil na base */}
        <div style={{ height: 2, background: '#111' }}>
          <div style={{
            height: '100%',
            width: `${totalMun > 0 ? (participando / totalMun) * 100 : 0}%`,
            background: 'linear-gradient(to right, var(--gold-dk), var(--gold))',
            transition: 'width 1s ease',
          }} />
        </div>
      </div>
    </Link>
  );
}
