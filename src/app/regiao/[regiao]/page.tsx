import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { regiaoLabel, getEstadosOrdenados, type Regiao, type Estado } from '../../../data/mockData';
import Header from '../../../components/Header';
import AmbientGlow from '../../../components/AmbientGlow';
import SponsorBanner from '../../../components/SponsorBanner';

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

  // Totais reais de municípios por região (IBGE)
  const totalMunicipiosOficial: Partial<Record<Regiao, number>> = {
    'Centro-Oeste': 466,
    'Nordeste':    1794,
    'Norte':        450,
    'Sudeste':     1668,
    'Sul':         1191,
  };
  const totalMunicipios = totalMunicipiosOficial[regiao] ??
    estados.reduce((acc, e) => acc + e.municipios.filter(m => m && m.nome).length, 0);
  const totalParticipando = estados.reduce(
    (acc, e) => acc + e.municipios.filter(m => m && m.videoId).length, 0
  );

  // Separar DF dos demais
  const df       = estados.filter(e => e.sigla === 'DF');
  const estadosSemDF = estados.filter(e => e.sigla !== 'DF').sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  const estadosOrdenados = [...estadosSemDF, ...df];

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
        <div style={{ marginBottom: 28 }}>
          <span className="badge" style={{ marginBottom: 10, display: 'inline-flex' }}>Região</span>
          <h1
            className="font-display gold-text"
            style={{ fontSize: 'clamp(36px, 10vw, 72px)', lineHeight: 1, marginBottom: 12 }}
          >
            {label}
          </h1>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{estadosSemDF.length}</span>
              {' '}Estados
              {df.length > 0 && (
                <>
                  {' / '}
                  <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{df.length}</span>
                  {' '}Distrito Federal
                </>
              )}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{totalMunicipios.toLocaleString('pt-BR')}</span>{' '}
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
            marginTop: 16, marginBottom: 24,
          }} />
        </div>



        {/* Estados em ordem alfabética — sem separadores por letra */}
        <section style={{ paddingBottom: 80 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: 10,
          }}>
            {estadosOrdenados.map(estado => {
                  const temMunicipioAtivo = estado.municipios.some(m => m.videoId);
                  const munAtivos = estado.municipios.filter(m => m.videoId).length;
                  const munTotal  = estado.municipios.length;

                  if (temMunicipioAtivo) {
                    // Estado ATIVO — branco, clicável, destaque
                    return (
                      <Link
                        key={estado.id}
                        href={`/${estado.id}`}
                        className="card gold-glow"
                        style={{ display: 'block', overflow: 'hidden', textDecoration: 'none' }}
                      >
                        <div style={{ padding: '16px 18px 12px' }}>
                          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                            <div style={{ minWidth: 0, flex: 1 }}>
                              {/* Sigla decorativa */}
                              <div className="font-display" aria-hidden style={{
                                fontSize: 38, lineHeight: 1, marginBottom: 4,
                                color: 'rgba(214,163,84,0.15)', userSelect: 'none',
                                letterSpacing: '-0.01em',
                              }}>
                                {estado.sigla}
                              </div>
                              {/* Nome — BRANCO para estados ativos */}
                              <div className="font-display" style={{
                                fontSize: 'clamp(16px, 4vw, 20px)',
                                color: '#FFFFFF',
                                lineHeight: 1.15,
                                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                              }}>
                                {estado.nome}
                              </div>
                              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 4 }}>
                                <span style={{ color: 'var(--gold)' }}>{munAtivos}</span>
                                /{munTotal} municípios participando
                              </div>
                            </div>
                            <span style={{ color: 'rgba(214,163,84,0.45)', fontSize: 18, flexShrink: 0, marginTop: 2 }}>→</span>
                          </div>
                        </div>
                        {/* Barra de progresso de municípios */}
                        <div style={{ height: 2, background: '#1A1A1A' }}>
                          <div style={{
                            height: '100%',
                            width: `${munTotal > 0 ? (munAtivos / munTotal) * 100 : 0}%`,
                            background: 'linear-gradient(to right, var(--gold-dk), var(--gold))',
                          }} />
                        </div>
                      </Link>
                    );
                  }

                  // Estado SEM municípios ativos — bloqueado, cinza
                  return (
                    <div
                      key={estado.id}
                      style={{
                        background: 'rgba(14,14,14,0.6)',
                        border: '1px solid #1a1a1a',
                        borderRadius: 14,
                        padding: '16px 18px',
                        opacity: 0.45,
                        cursor: 'not-allowed',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
                        <div style={{ minWidth: 0 }}>
                          <div className="font-display" aria-hidden style={{
                            fontSize: 38, lineHeight: 1, marginBottom: 4,
                            color: 'rgba(255,255,255,0.04)', userSelect: 'none',
                          }}>
                            {estado.sigla}
                          </div>
                          {/* Nome cinza para inativos */}
                          <div className="font-display" style={{
                            fontSize: 'clamp(16px, 4vw, 20px)',
                            color: 'var(--text-muted)',
                            lineHeight: 1.15,
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                          }}>
                            {estado.nome}
                          </div>
                          <div style={{ fontSize: 11, color: '#444', marginTop: 4 }}>
                            Nenhum município aderiu ainda
                          </div>
                        </div>
                        <span style={{ fontSize: 16, flexShrink: 0, marginTop: 2 }}>🔒</span>
                      </div>
                    </div>
                  );
            })}
          </div>
        </section>

        {/* ── Banner de patrocinador ── */}
        <div style={{ paddingBottom: 40 }}>
          <SponsorBanner />
        </div>

      </div>
    </main>
  );
}
