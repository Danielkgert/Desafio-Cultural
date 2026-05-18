import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { estados, getEstado, regiaoGradients } from '@/data/mockData';
import Header from '@/components/Header';

interface Props {
  params: { estado: string };
}

/* Static paths for all states */
export function generateStaticParams() {
  return estados.map((e) => ({ estado: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const estado = getEstado(params.estado);
  if (!estado) return {};
  return {
    title: `${estado.nome} — Municípios`,
    description: `Explore os municípios de ${estado.nome} no Desafio Cultural.`,
  };
}

export default function EstadoPage({ params }: Props) {
  const estado = getEstado(params.estado);
  if (!estado) notFound();

  return (
    <main className="min-h-screen bg-dark-900 relative overflow-hidden">
      <Header breadcrumbs={[{ label: estado.nome }]} />

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-gold-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* ── Hero ── */}
        <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Back link */}
            <div className="mt-4 mb-8" data-aos="fade-right">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-raleway text-sm
                           text-gold-500/55 hover:text-gold-300 transition-colors group"
              >
                <span className="transition-transform group-hover:-translate-x-1">←</span>
                Todos os estados
              </Link>
            </div>

            {/* State identity */}
            <div data-aos="fade-up">
              <div className="flex flex-wrap items-end gap-4 sm:gap-6 mb-4">
                {/* Giant sigla */}
                <span
                  className="font-cinzel font-black leading-none select-none
                             text-7xl sm:text-[9rem] text-gold-500/10"
                >
                  {estado.sigla}
                </span>

                <div className="pb-2 sm:pb-4">
                  <span className="font-raleway text-xs text-gold-500/40 tracking-widest uppercase mb-2 block">
                    {estado.regiao}
                  </span>
                  <h1 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-100 leading-tight">
                    {estado.nome}
                  </h1>
                  <p className="font-raleway text-gold-500/50 text-sm mt-2">
                    {estado.municipios.length} municípios disponíveis
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-gold-500/40 via-gold-500/10 to-transparent mb-2" />
            </div>
          </div>
        </section>

        {/* ── Municipalities grid ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
          <div className="mb-8" data-aos="fade-up">
            <h2 className="font-cinzel text-xl sm:text-2xl font-semibold text-gold-400/80">
              Selecione um Município
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {estado.municipios.map((municipio, i) => (
              <Link
                key={municipio.id}
                href={`/${estado.id}/${municipio.id}`}
                className="group relative overflow-hidden rounded-2xl border border-gold-500/15
                           bg-dark-800 hover:border-gold-400/50 transition-all duration-500 gold-glow"
                data-aos="fade-up"
                data-aos-delay={Math.min(i * 80, 400)}
              >
                {/* Thumbnail */}
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${municipio.videoId}/mqdefault.jpg`}
                    alt={`Thumbnail de ${municipio.nome}`}
                    className="w-full h-full object-cover opacity-35 group-hover:opacity-55
                               group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${regiaoGradients[estado.regiao]}
                                to-dark-800 opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/30 to-transparent" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center
                                  border-2 border-gold-400/50 bg-dark-900/60 backdrop-blur-sm
                                  group-hover:border-gold-300/80 group-hover:scale-110
                                  group-hover:bg-dark-900/80 transition-all duration-400
                                  shadow-[0_0_20px_rgba(201,160,18,0.2)]
                                  group-hover:shadow-[0_0_30px_rgba(201,160,18,0.5)]"
                    >
                      <span className="text-gold-300 text-xl ml-1">▶</span>
                    </div>
                  </div>

                  {/* State badge */}
                  <div className="absolute top-3 left-3">
                    <span className="font-cinzel text-xs font-bold text-gold-500/60 bg-dark-900/70 backdrop-blur-sm px-2 py-0.5 rounded-full border border-gold-500/20">
                      {estado.sigla}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="font-cinzel text-lg font-semibold text-gold-100 group-hover:text-gold-50 mb-2 transition-colors">
                    {municipio.nome}
                  </h3>
                  <p className="font-raleway text-sm text-gold-500/55 group-hover:text-gold-400/75 leading-relaxed transition-colors">
                    {municipio.descricao}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-raleway text-xs text-gold-500/40 group-hover:text-gold-400/70 transition-colors">
                      Assistir vídeo
                    </span>
                    <span className="text-gold-500/40 group-hover:text-gold-300/80 group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  </div>
                </div>

                {/* Bottom gold accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/40 transition-all duration-500" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
