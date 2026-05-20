import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { estados, getEstado, getMunicipio } from '@/data/mockData';
import Header from '@/components/Header';
import AmbientGlow from '@/components/AmbientGlow';
import VideoPlayer from '@/components/VideoPlayer';
import VotingSection from '@/components/VotingSection';

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

  const others = estado.municipios.filter(m => m.id !== municipio.id);

  return (
    <main style={{ minHeight:'100vh', background:'var(--bg-primary)', position:'relative' }}>
      <Header breadcrumbs={[
        { label: estado.nome, href: `/${estado.id}` },
        { label: municipio.nome },
      ]} />
      <AmbientGlow />

      <div style={{ position:'relative', zIndex:1, maxWidth:860, margin:'0 auto', padding:'0 24px 80px' }}>
        <div style={{ paddingTop:96, marginTop:16, marginBottom:28 }}>
          <Link href={`/${estado.id}`} className="btn-outline" style={{ textDecoration:'none', display:'inline-block' }}>
            ← Municípios de {estado.nome}
          </Link>
        </div>

        {/* Header */}
        <div style={{ marginBottom:28 }} data-aos="fade-up">
          <div style={{ display:'flex', gap:8, marginBottom:10, flexWrap:'wrap', alignItems:'center' }}>
            <span className="badge">{estado.sigla}</span>
            <span style={{ color:'#333', fontSize:12 }}>•</span>
            <span style={{ color:'var(--text-muted)', fontSize:12 }}>{estado.regiao}</span>
          </div>
          <h1 className="font-display" style={{ fontSize:'clamp(32px,6vw,64px)', color:'var(--text)', lineHeight:1, marginBottom:12 }}>
            {municipio.nome}
          </h1>
          <p style={{ color:'var(--text-sec)', fontSize:15, lineHeight:1.7, maxWidth:600 }}>{municipio.descricao}</p>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:20 }}>
            <div style={{ width:40, height:1, background:'rgba(214,163,84,0.5)' }} />
            <div style={{ width:5, height:5, borderRadius:'50%', background:'rgba(214,163,84,0.5)' }} />
            <div style={{ flex:1, height:1, background:'rgba(214,163,84,0.08)' }} />
          </div>
        </div>

        {/* Video */}
        <div data-aos="zoom-in" data-aos-delay="150">
          <VideoPlayer municipio={municipio} />
        </div>

        {/* Voting */}
        <VotingSection municipioId={municipio.id} />

        {/* Outros municípios */}
        {others.length > 0 && (
          <section data-aos="fade-up">
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:16 }}>
              <span className="font-display" style={{ fontSize:13, color:'rgba(214,163,84,0.5)', letterSpacing:'0.2em', textTransform:'uppercase', whiteSpace:'nowrap' }}>
                Outros municípios de {estado.nome}
              </span>
              <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(214,163,84,0.2), transparent)' }} />
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:10 }}>
              {others.map((m, i) => (
                <Link key={m.id} href={`/${estado.id}/${m.id}`} className="btn-outline"
                      style={{ fontSize:13, textDecoration:'none' }}
                      data-aos="fade-up" data-aos-delay={i * 50}>
                  {m.nome} →
                </Link>
              ))}
            </div>
            <div style={{ marginTop:20 }}>
              <Link href={`/${estado.id}`} className="btn-outline"
                    style={{ fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', textDecoration:'none', display:'inline-block' }}>
                Ver todos os municípios
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
