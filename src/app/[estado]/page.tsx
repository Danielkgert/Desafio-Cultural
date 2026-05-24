import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { estados, getEstado, getMunicipiosAgrupados } from '../../data/mockData';
import Header from '../../components/Header';
import AmbientGlow from '../../components/AmbientGlow';

interface Props { params: { estado: string } }

export function generateStaticParams() {
  return estados.map(e => ({ estado: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const estado = getEstado(params.estado);
  if (!estado) return {};
  return { title: `${estado.nome} — Municípios` };
}

export default function EstadoPage({ params }: Props) {
  const estado = getEstado(params.estado);
  if (!estado) notFound();

  const grupos = getMunicipiosAgrupados(params.estado);
  const letras = Object.keys(grupos).sort();
  const totalComAcesso = estado.municipios.filter(m => m.videoId).length;
  const totalSemAcesso = estado.municipios.length - totalComAcesso;

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', position: 'relative' }}>
      <Header breadcrumbs={[{ label: estado.nome }]} />
      <AmbientGlow />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto', padding: '0 16px' }}>

        {/* Voltar */}
        <div style={{ paddingTop: 76, marginBottom: 20 }}>
          <Link href="/" className="btn-outline" style={{ display: 'inline-block' }}>
            ← Estados
          </Link>
        </div>

        {/* Header do estado */}
        <div style={{ marginBottom: 20 }}>
          {/* Sigla decorativa + badge + nome — empilhados, sem position absolute */}
          <div style={{ marginBottom: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span
                className="font-display"
                aria-hidden
                style={{
                  fontSize: 'clamp(48px, 18vw, 96px)',
                  color: 'rgba(214,163,84,0.07)',
                  lineHeight: 1,
                  userSelect: 'none',
                  letterSpacing: '-0.02em',
                  flexShrink: 0,
                }}
              >
                {estado.sigla}
              </span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <span className="badge" style={{ marginBottom: 5, display: 'inline-flex' }}>
                  {estado.regiao}
                </span>
                <h1
                  className="font-display"
                  style={{
                    fontSize: 'clamp(20px, 7vw, 50px)',
                    color: 'var(--text)',
                    lineHeight: 1,
                    display: 'block',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {estado.nome}
                </h1>
              </div>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: 12, marginTop: 4 }}>
            {totalComAcesso} participando
            {totalSemAcesso > 0 && (
              <span style={{ color: '#555', marginLeft: 6 }}>· {totalSemAcesso} sem acesso</span>
            )}
          </p>

          <div style={{
            height: 1,
            background: 'linear-gradient(to right, rgba(214,163,84,0.4), transparent)',
            marginTop: 16,
            marginBottom: 20,
          }} />
        </div>

        {/* Índice alfabético compacto */}
        <div
          className="alpha-index"
          style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}
        >
          {letras.map(letra => (
            <a key={letra} href={`#letra-${letra}`}>
              <div style={{
                width: 32, height: 32, borderRadius: 7,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(214,163,84,0.06)',
                border: '1px solid rgba(214,163,84,0.18)',
                color: 'var(--gold)',
                fontSize: 13,
                fontFamily: "'Bebas Neue', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.2s',
                flexShrink: 0,
              }}>
                {letra}
              </div>
            </a>
          ))}
        </div>

        {/* Municípios agrupados por letra */}
        <section style={{ paddingBottom: 80 }}>
          {letras.map(letra => (
            <div key={letra} id={`letra-${letra}`} style={{ marginBottom: 32, scrollMarginTop: 72 }}>

              {/* Separador de letra */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div className="font-display" style={{
                  width: 38, height: 38, borderRadius: 9,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(214,163,84,0.08)',
                  border: '1px solid rgba(214,163,84,0.2)',
                  fontSize: 20, color: 'var(--gold)',
                  flexShrink: 0,
                }}>
                  {letra}
                </div>
                <div style={{
                  flex: 1, height: 1,
                  background: 'linear-gradient(to right, rgba(214,163,84,0.2), transparent)',
                }} />
                <span style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                  {grupos[letra].length}
                </span>
              </div>

              {/* Grid — 1 coluna no mobile, 2+ em telas maiores */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                gap: 10,
              }}>
                {grupos[letra].map(municipio => {
                  const temAcesso = !!municipio.videoId;

                  if (temAcesso) {
                    return (
                      <Link
                        key={municipio.id}
                        href={`/${estado.id}/${municipio.id}`}
                        className="card gold-glow"
                        style={{ display: 'block', overflow: 'hidden' }}
                      >
                        {/* Texto */}
                        <div style={{ padding: '14px 16px 10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                            <div style={{ minWidth: 0, flex: 1 }}>
                              <div
                                className="font-display"
                                style={{
                                  fontSize: 'clamp(16px, 4.5vw, 20px)',
                                  color: 'var(--text)',
                                  lineHeight: 1.2,
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                }}
                              >
                                {municipio.nome}
                              </div>
                              {municipio.descricao && (
                                <div style={{
                                  fontSize: 11,
                                  color: 'var(--text-muted)',
                                  marginTop: 3,
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                                }}>
                                  {municipio.descricao.split('.')[0]}
                                </div>
                              )}
                            </div>
                            <span style={{ color: 'rgba(214,163,84,0.45)', fontSize: 15, flexShrink: 0 }}>→</span>
                          </div>
                        </div>
                        {/* Thumbnail YT */}
                        <div style={{
                          height: 68,
                          position: 'relative',
                          background: '#0B0B0D',
                          overflow: 'hidden',
                        }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://img.youtube.com/vi/${municipio.videoId}/mqdefault.jpg`}
                            alt=""
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
                          />
                          <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(to right, rgba(17,17,17,0.7), transparent)',
                          }} />
                          <div style={{
                            position: 'absolute', top: 6, right: 8,
                            background: 'rgba(214,163,84,0.14)',
                            border: '1px solid rgba(214,163,84,0.28)',
                            borderRadius: 4, padding: '2px 7px',
                            fontSize: 10, color: 'var(--gold)',
                          }}>
                            ▶
                          </div>
                        </div>
                      </Link>
                    );
                  }

                  // Município sem acesso (bloqueado)
                  return (
                    <div
                      key={municipio.id}
                      style={{
                        background: 'rgba(17,17,17,0.4)',
                        border: '1px solid #1a1a1a',
                        borderRadius: 14,
                        padding: '14px 16px',
                        opacity: 0.5,
                        cursor: 'not-allowed',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div
                            className="font-display"
                            style={{
                              fontSize: 'clamp(16px, 4.5vw, 20px)',
                              color: 'var(--text-muted)',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {municipio.nome}
                          </div>
                          <div style={{ fontSize: 11, color: '#555', marginTop: 3 }}>
                            Ainda não aderiu ao projeto
                          </div>
                        </div>
                        <span style={{ fontSize: 15, flexShrink: 0 }}>🔒</span>
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
