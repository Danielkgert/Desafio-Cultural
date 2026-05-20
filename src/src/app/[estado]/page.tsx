import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { estados, getEstado } from '@/data/mockData';
import Header from '@/components/Header';
import AmbientGlow from '@/components/AmbientGlow';
import MunicipioCard from '@/components/MunicipioCard';

interface Props { params: { estado: string } }

export function generateStaticParams() {
  return estados.map(e => ({ estado: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const estado = getEstado(params.estado);
  if (!estado) return {};
  return { title: `${estado.nome} — Municípios`, description: `Explore os municípios de ${estado.nome} no Desafio Cultural.` };
}

export default function EstadoPage({ params }: Props) {
  const estado = getEstado(params.estado);
  if (!estado) notFound();

  return (
    <main style={{ minHeight:'100vh', background:'var(--bg-primary)', position:'relative' }}>
      <Header breadcrumbs={[{ label: estado.nome }]} />
      <AmbientGlow />

      <div style={{ position:'relative', zIndex:1, maxWidth:1200, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ paddingTop:96 }}>
          <Link href="/" className="btn-outline" style={{ display:'inline-block', marginTop:16, marginBottom:32, textDecoration:'none' }}>
            ← Todos os estados
          </Link>
          <div style={{ display:'flex', alignItems:'flex-end', gap:20, marginBottom:24 }} data-aos="fade-up">
            <span className="font-display" style={{ fontSize:'clamp(72px,12vw,120px)', color:'rgba(214,163,84,0.08)', lineHeight:1, userSelect:'none' }}>
              {estado.sigla}
            </span>
            <div style={{ paddingBottom:12 }}>
              <span className="badge" style={{ marginBottom:8, display:'inline-flex' }}>{estado.regiao}</span>
              <h1 className="font-display" style={{ fontSize:'clamp(28px,5vw,56px)', color:'var(--text)', display:'block' }}>{estado.nome}</h1>
              <p style={{ color:'var(--text-muted)', fontSize:13, marginTop:4 }}>{estado.municipios.length} municípios disponíveis</p>
            </div>
          </div>
          <div style={{ height:1, background:'linear-gradient(to right, rgba(214,163,84,0.4), rgba(214,163,84,0.05), transparent)', marginBottom:32 }} />
        </div>

        <section style={{ paddingBottom:80 }}>
          <h2 className="font-display" style={{ fontSize:22, color:'var(--text-sec)', marginBottom:24 }} data-aos="fade-up">
            Selecione um Município
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:20 }}>
            {estado.municipios.map((municipio, i) => (
              <div key={municipio.id} data-aos="fade-up" data-aos-delay={Math.min(i * 80, 400)}>
                <MunicipioCard municipio={municipio} estado={estado} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
