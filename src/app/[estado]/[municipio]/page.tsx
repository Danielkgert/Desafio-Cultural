import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { estados, getEstado, getMunicipio, regiaoGradients } from '@/data/mockData';
import Header from '@/components/Header';

interface Props {
  params: { estado: string; municipio: string };
}

/* Static paths for all municipalities */
export function generateStaticParams() {
  return estados.flatMap((e) =>
    e.municipios.map((m) => ({ estado: e.id, municipio: m.id })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const estado    = getEstado(params.estado);
  const municipio = getMunicipio(params.estado, params.municipio);
  if (!estado || !municipio) return {};
  return {
    title: `${municipio.nome} — ${estado.sigla}`,
    description: municipio.descricao,
  };
}

export default function MunicipioPage({ params }: Props) {
  const estado    = getEstado(params.estado);
  const municipio = getMunicipio(params.estado, params.municipio);

  if (!estado || !municipio) notFound();

  /* Other municipalities for navigation */
  const others = estado.municipios.filter((m) => m.id !== municipio.id);

  return (
    <main className="min-h-screen bg-dark-900 relative overflow-hidden">
      <Header
        breadcrumbs={[
          { label: estado.nome, href: `/${estado.id}` },
          { label: municipio.nome },
        ]}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] rounded-full bg-gold-500/6 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Navigation bar ── */}
        <div className="pt-24 mt-4 mb-8" data-aos="fade-right">
          <Link
            href={`/${estado.id}`}
            className="inline-flex items-center gap-2 font-raleway text-sm
                       text-gold-500/55 hover:text-gold-300 transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Municípios de {estado.nome}
          </Link>
        </div>

        {/* ── Page header ── */}
        <div className="mb-8" data-aos="fade-up">
          {/* Meta tags */}
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <span className="font-cinzel text-xs font-bold text-gold-600/60 bg-dark-700 border border-gold-500/20 px-3 py-1 rounded-full">
              {estado.sigla}
            </span>
            <span className="text-gold-700/40 text-xs">•</span>
            <span className="font-raleway text-xs text-gold-600/50">
              {estado.regiao}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold text-gold-100 mb-4 leading-tight">
            {municipio.nome}
          </h1>

          {/* Description */}
          <p className="font-raleway text-base sm:text-lg text-gold-400/60 leading-relaxed max-w-2xl">
            {municipio.descricao}
          </p>

          {/* Divider */}
          <div className="mt-6 flex items-center gap-3">
            <div className="w-12 h-px bg-gold-500/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500/50" />
            <div className="flex-1 h-px bg-gold-500/10" />
          </div>
        </div>

        {/* ── Video Player ── */}
        <div
          className="relative rounded-2xl overflow-hidden mb-12
                     border border-gold-500/25
                     shadow-[0_0_60px_rgba(201,160,18,0.12),0_0_0_1px_rgba(201,160,18,0.1)]"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          {/* Top gradient accent */}
          <div
            className={`absolute top-0 left-0 right-0 h-1
                        bg-gradient-to-r from-gold-700/60 via-gold-400/80 to-gold-700/60`}
          />

          {/* Responsive iframe */}
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${municipio.videoId}?rel=0&modestbranding=1&color=white`}
              title={`${municipio.nome} — Desafio Cultural`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* ── Other municipalities ── */}
        {others.length > 0 && (
          <section className="mb-24" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-5">
              <h3 className="font-cinzel text-sm font-semibold text-gold-500/60 tracking-widest uppercase">
                Outros municípios de {estado.nome}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gold-500/25 to-transparent" />
            </div>

            <div className="flex flex-wrap gap-3">
              {others.map((m, i) => (
                <Link
                  key={m.id}
                  href={`/${estado.id}/${m.id}`}
                  className="group px-4 py-2 rounded-full border border-gold-500/20 bg-dark-800
                             font-raleway text-sm text-gold-400/60
                             hover:text-gold-200 hover:border-gold-400/50 hover:bg-dark-700
                             transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  {m.nome}
                  <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              ))}
            </div>

            {/* Back to state */}
            <div className="mt-6">
              <Link
                href={`/${estado.id}`}
                className="inline-flex items-center gap-2 font-cinzel text-xs
                           text-gold-500/40 hover:text-gold-300/70 transition-colors
                           tracking-widest uppercase border border-gold-500/15
                           hover:border-gold-500/35 px-4 py-2 rounded-lg"
              >
                Ver todos os municípios
              </Link>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
