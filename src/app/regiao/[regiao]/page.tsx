import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { regiaoLabel, getEstadosOrdenados, type Regiao, type Estado } from '../../../data/mockData';
import Header from '../../../components/Header';
import AmbientGlow from '../../../components/AmbientGlow';

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

// Agrupa estados por primeira letra do nome
function agruparPorLetra(estados: Estado[]): Record<string, Estado[]> {
  return estados.filter(e => e && e.nome && e.nome.length > 0).reduce<Record<string, Estado[]>>((acc, e) => {
    const letra = e.nome[0].toUpperCase();
    if (!acc[letra]) acc[letra] = [];
    acc[letra].push(e);
    return acc;
  }, {});
}

export default function RegiaoPage({ params }: Props) {
  const regiao  = slugToRegiao(params.regiao);
  if (!regiao) notFound();

  const label   = regiaoLabel[regiao];
  const todos   = getEstadosOrdenados();
  const estados = todos.filter(e => e.regiao === regiao);
  if (estados.length === 0) notFound();

  const grupos = agruparPorLetra(estados);
  const letras = Object.keys(grupos).sort();

  const totalMunicipios   = estados.reduce((acc, e) => acc + e.municipios.length, 0);
  const totalParticipando = estados.reduce(
    (acc, e) => acc + e.municipios.filter(m => m.videoId).length, 0
  );

  // Quantos estados têm ao menos 1 município participando
  const estadosAtivos = estados.filter(e => e.municipios.some(m => m.videoId)).length;

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
            marginTop: 16, marginBottom: 24,
          }} />
        </div>

        {/* Índice alfabético de letras */}
        {letras.length > 1 && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 28 }}>
            {letras.map(letra => (
              <a key={letra} href={`#estado-letra-${letra}`}>
                <div style={{
                  width: 32, height: 32, borderRadius: 7,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(214,163,84,0.06)',
                  border: '1px solid rgba(214,163,84,0.18)',
                  color: 'var(--gold)', fontSize: 13,
                  fontFamily: "'Bebas Neue', sans-serif",
                  cursor: 'pointer', flexShrink: 0,
                  transition: 'all 0.2s',
                }}>
                  {letra}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Estados agrupados por letra */}
        <section style={{ paddingBottom: 80 }}>
          {letras.map(letra => (
            <div
              key={letra}
              id={`estado-letra-${letra}`}
              style={{ marginBottom: 32, scrollMarginTop: 72 }}
            >
              {/* Separador de letra */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div className="font-display" style={{
                  width: 38, height: 38, borderRadius: 9,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(214,163,84,0.08)',
                  border: '1px solid rgba(214,163,84,0.2)',
                  fontSize: 20, color: 'var(--gold)', flexShrink: 0,
                }}>
                  {letra}
                </div>
                <div style={{
                  flex: 1, height: 1,
                  background: 'linear-gradient(to right, rgba(214,163,84,0.2), transparent)',
                }} />
                <span style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                  {grupos[letra].length} estado{grupos[letra].length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Cards dos estados */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                gap: 10,
              }}>
                {grupos[letra].map(estado => {
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
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}
