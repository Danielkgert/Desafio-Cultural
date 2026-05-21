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
  if (!estado || !municipio) notFound();

  // Redirecionar se município não tem acesso
  if (!municipio.videoId) notFound();

  const bandasPorGenero = getBandasPorGenero(params.municipio);
  const generosOrdenados = Object.keys(bandasPorGenero).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const totalBandas = Object.values(bandasPorGenero).reduce((acc, arr) => acc + arr.length, 0);

  const others = estado.municipios.filter(m => m.id !== municipio.id && !!m.videoId);

  return (
    <main style={{ minHeight:'100vh', background:'var(--bg-primary)', position:'relative' }}>
      <Header breadcrumbs={[
        { label: estado.nome, href: `/${estado.id}` },
        { label: municipio.nome },
      ]} />
      <AmbientGlow />

      <div style={{ position:'relative', zIndex:1, maxWidth:900, margin:'0 auto', padding:'0 24px 80px' }}>
        <div style={{ paddingTop:96, marginTop:16, marginBottom:28 }}>
          <Link href={`/${estado.id}`} className="btn-outline" style={{ textDecoration:'none', display:'inline-block' }}>
            ← Municípios de {estado.nome}
          </Link>
        </div>

        {/* Header */}
        <div style={{ marginBottom:28 }}>
          <div style={{ display:'flex', gap:8, marginBottom:10, flexWrap:'wrap', alignItems:'center' }}>
            <span className="badge">{estado.sigla}</span>
            <span style={{ color:'#333', fontSize:12 }}>•</span>
            <span style={{ color:'var(--text-muted)', fontSize:12 }}>{estado.regiao}</span>
            {totalBandas > 0 && (
              <>
                <span style={{ color:'#333', fontSize:12 }}>•</span>
                <span style={{ color:'var(--text-muted)', fontSize:12 }}>{totalBandas} banda{totalBandas !== 1 ? 's' : ''} · {generosOrdenados.length} modalidade{generosOrdenados.length !== 1 ? 's' : ''}</span>
              </>
            )}
          </div>
          <h1 className="font-display" style={{ fontSize:'clamp(32px,6vw,64px)', color:'var(--text)', lineHeight:1, marginBottom:12 }}>
            {municipio.nome}
          </h1>
          {municipio.descricao && (
            <p style={{ color:'var(--text-sec)', fontSize:15, lineHeight:1.7, maxWidth:600 }}>{municipio.descricao}</p>
          )}
          <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:20 }}>
            <div style={{ width:40, height:1, background:'rgba(214,163,84,0.5)' }} />
            <div style={{ width:5, height:5, borderRadius:'50%', background:'rgba(214,163,84,0.5)' }} />
            <div style={{ flex:1, height:1, background:'rgba(214,163,84,0.08)' }} />
          </div>
        </div>

        {/* Video */}
        <VideoPlayer municipio={municipio} />

        {/* Índice rápido de modalidades */}
        {generosOrdenados.length > 0 && (
          <div style={{ marginBottom:32 }}>
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:14 }}>
              <span style={{ fontSize:11, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.15em' }}>Modalidades</span>
              <div style={{ flex:1, height:1, background:'rgba(214,163,84,0.1)' }} />
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {generosOrdenados.map(genero => (
                <a key={genero} href={`#genero-${genero.replace(/\s+/g,'-').toLowerCase()}`} style={{ textDecoration:'none' }}>
                  <span className="badge" style={{ cursor:'pointer', transition:'all 0.2s', padding:'5px 12px', fontSize:11 }}>
                    {genero}
                    <span style={{ marginLeft:6, color:'rgba(214,163,84,0.6)', fontSize:10 }}>
                      {bandasPorGenero[genero].length}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Voting por modalidade */}
        <VotingSection municipioId={params.municipio} bandasPorGenero={bandasPorGenero} generosOrdenados={generosOrdenados} />

        {/* Outros municípios */}
        {others.length > 0 && (
          <section style={{ marginTop:48 }}>
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:16 }}>
              <span className="font-display" style={{ fontSize:13, color:'rgba(214,163,84,0.5)', letterSpacing:'0.2em', textTransform:'uppercase', whiteSpace:'nowrap' }}>
                Outros em {estado.nome}
              </span>
              <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(214,163,84,0.2), transparent)' }} />
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
              {others.map(m => (
                <Link key={m.id} href={`/${estado.id}/${m.id}`} className="btn-outline" style={{ fontSize:13, textDecoration:'none' }}>
                  {m.nome} →
                </Link>
              ))}
            </div>
            <div style={{ marginTop:16 }}>
              <Link href={`/${estado.id}`} className="btn-outline" style={{ fontSize:12, textTransform:'uppercase', letterSpacing:'0.1em', textDecoration:'none', display:'inline-block' }}>
                Ver todos os municípios
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
