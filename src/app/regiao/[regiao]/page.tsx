import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { regiaoLabel, getEstadosOrdenados, type Regiao } from '../../../data/mockData';
import Header from '../../../components/Header';
import AmbientGlow from '../../../components/AmbientGlow';
import EstadoCard from '../../../components/EstadoCard';

interface Props { params: { regiao: string } }

function slugToRegiao(slug: string): Regiao | undefined {
  const map: Record<string, Regiao> = {
    'centro-oeste': 'Centro-Oeste',
    'nordeste':     'Nordeste',
    'norte':        'Norte',
    'sudeste':      'Sudeste',
    'sul':          'Sul',
  };
  return map[slug.toLowerCase()];
}

export function generateStaticParams() {
  return [
    { regiao: 'centro-oeste' },
    { regiao: 'nordeste' },
    { regiao: 'norte' },
    { regiao: 'sudeste' },
    { regiao: 'sul' },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const regiao = slugToRegiao(params.regiao);
  if (!regiao) return {};
  return {
    title: `Região ${regiaoLabel[regiao]} — Desafio Cultural`,
    description: `Estados da região ${regiaoLabel[regiao]} no Desafio Cultural.`,
  };
}

export default function RegiaoPage({ params }: Props) {
  const regiao  = slugToRegiao(params.regiao);
  if (!regiao) notFound();

  const label   = regiaoLabel[regiao];
  const todos   = getEstadosOrdenados();
  const estados = todos.filter(e => e.regiao === regiao);
  if (estados.length === 0) notFound();

  const totalMunicipios  = estados.reduce((acc, e) => acc + e.municipios.length, 0);
  const totalParticipando = estados.reduce(
    (acc, e) => acc + e.municipios.filter(m => m.videoId).length, 0
  );

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', position: 'relative' }}>
      <Header breadcrumbs={[{ label }]} />
      <AmbientGlow />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>

        {/* Voltar */}
        <div style={{ paddingTop: 72, marginBottom: 20 }}>
          <Link href="/" className="btn-outline">← Início</Link>
        </div>

        {/* Hero */}
        <div style={{ marginBottom: 36 }}>
          <span className="badge" style={{ marginBottom: 10, display: 'inline-flex' }}>Região</span>
          <h1
            className="font-display gold-text"
            style={{ fontSize: 'clamp(36px, 10vw, 72px)', lineHeight: 1, marginBottom: 12 }}
          >
            {label}
          </h1>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{estados.length}</span>{' '}
              estado{estados.length !== 1 ? 's' : ''}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{totalMunicipios}</span>{' '}
              municípios
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{totalParticipando}</span>{' '}
              participando
            </span>
          </div>
          <div style={{
            height: 1,
            background: 'linear-gradient(to right, rgba(214,163,84,0.4), transparent)',
            marginTop: 20,
          }} />
        </div>

        {/* Estados — instrução clara */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{
              fontSize: 10, color: 'var(--text-muted)',
              textTransform: 'uppercase', letterSpacing: '0.18em', whiteSpace: 'nowrap',
            }}>
              Estados
            </span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(214,163,84,0.2), transparent)' }} />
            <span style={{ fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
              Clique para ver os municípios
            </span>
          </div>
        </div>

        <section style={{ paddingBottom: 80 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(160px, calc(50% - 5px)), 1fr))',
            gap: 10,
          }}>
            {estados.map(e => <EstadoCard key={e.id} estado={e} />)}
          </div>
        </section>

      </div>
    </main>
  );
}
