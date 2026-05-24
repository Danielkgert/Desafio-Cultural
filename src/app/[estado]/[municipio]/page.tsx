import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { estados, getEstado, getMunicipio, getBandasPorGenero } from '../../../data/mockData';
import Header from '../../../components/Header';
import AmbientGlow from '../../../components/AmbientGlow';
import VideoPlayer from '../../../components/VideoPlayer';
import VotingSection from '../../../components/VotingSection';

interface Props { params: { estado: string; municipio: string } }

export function generateStaticParams() {
  return estados.flatMap(e => e.municipios.map(m => ({ estado: e.id, municipio: m.id })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const estado    = getEstado(params.estado);
  const municipio = getMunicipio(params.estado, params.municipio);
  if (!estado || !municipio) return {};
  return { title: `${municipio.nome} — ${estado.sigla}`, description: municipio.descricao };
}

export default function MunicipioPage({ params }: Props) {
  const estado    = getEstado(params.estado);
  const municipio = getMunicipio(params.estado, params.municipio);
  if (!estado || !municipio || !municipio.videoId) notFound();

  const bandasPorGenero  = getBandasPorGenero(params.municipio);
  const generosOrdenados = Object.keys(bandasPorGenero).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const totalBandas      = Object.values(bandasPorGenero).reduce((acc, arr) => acc + arr.length, 0);
  const others           = estado.municipios.filter(m => m.id !== municipio.id && !!m.videoId);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', position: 'relative' }}>
      <Header breadcrumbs={[
        { label: estado.nome, href: `/${estado.id}` },
        { label: municipio.nome },
      ]} />
      <AmbientGlow />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 900, margin: '0 auto',
        padding: '0 16px 80px',
      }}>

        {/* Voltar */}
        <div style={{ paddingTop: 72, marginBottom: 20 }}>
          <Link href={`/${estado.id}`} className="btn-outline">
            ← {estado.nome}
          </Link>
        </div>

        {/* Header do município */}
        <div style={{ marginBottom: 20 }}>
          {/* Badges */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="badge">{estado.sigla}</span>
            <span style={{ color: '#555', fontSize: 11 }}>•</span>
            <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>{estado.regiao}</span>
            {totalBandas > 0 && (
              <>
                <span style={{ color: '#555', fontSize: 11 }}>•</span>
                <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>
                  {totalBandas} banda{totalBandas !== 1 ? 's' : ''} · {generosOrdenados.length} modalidade{generosOrdenados.length !== 1 ? 's' : ''}
                </span>
              </>
            )}
          </div>

          {/* Nome */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(26px, 9vw, 60px)',
              color: 'var(--text)',
              lineHeight: 1,
              marginBottom: 8,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {municipio.nome}
          </h1>

          {municipio.descricao && (
            <p style={{
              color: 'var(--text-sec)',
              fontSize: 'clamp(12px, 3.5vw, 14px)',
              lineHeight: 1.65,
              maxWidth: 520,
            }}>
              {municipio.descricao}
            </p>
          )}

          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginTop: 14,
          }}>
            <div style={{ width: 32, height: 1, background: 'rgba(214,163,84,0.5)', flexShrink: 0 }} />
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(214,163,84,0.5)', flexShrink: 0 }} />
            <div style={{ flex: 1, height: 1, background: 'rgba(214,163,84,0.07)' }} />
          </div>
        </div>

        {/* Vídeo */}
        <VideoPlayer municipio={municipio} />

        {/* Índice de modalidades */}
        {generosOrdenados.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span style={{
                fontSize: 10,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                whiteSpace: 'nowrap',
              }}>
                Modalidades
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(214,163,84,0.1)' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {generosOrdenados.map(genero => (
                <a key={genero} href={`#genero-${genero.replace(/\s+/g, '-').toLowerCase()}`}>
                  <span className="badge" style={{ cursor: 'pointer', padding: '4px 11px' }}>
                    {genero}
                    <span style={{ marginLeft: 5, color: 'rgba(214,163,84,0.6)', fontSize: 9 }}>
                      {bandasPorGenero[genero].length}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Votação */}
        <VotingSection
          municipioId={params.municipio}
          bandasPorGenero={bandasPorGenero}
          generosOrdenados={generosOrdenados}
        />

        {/* Outros municípios */}
        {others.length > 0 && (
          <section style={{ marginTop: 36 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span className="font-display" style={{
                fontSize: 12, color: 'rgba(214,163,84,0.5)',
                letterSpacing: '0.16em', textTransform: 'uppercase', whiteSpace: 'nowrap',
              }}>
                Outros em {estado.sigla}
              </span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(214,163,84,0.2), transparent)' }} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {others.map(m => (
                <Link key={m.id} href={`/${estado.id}/${m.id}`} className="btn-outline">
                  {m.nome} →
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 12 }}>
              <Link href={`/${estado.id}`} className="btn-outline" style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Ver todos
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
