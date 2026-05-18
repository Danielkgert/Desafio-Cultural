import type { Metadata } from 'next';
import Link from 'next/link';
import { estados, regiaoGradients, regiaoLabel, type Regiao } from '@/data/mockData';
import Header from '@/components/Header';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'Desafio Cultural — Selecione um Estado',
};

/* Group states by region */
const regioes: Regiao[] = ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'];

export default function HomePage() {
  const estadosPorRegiao = regioes
    .map((r) => ({
      regiao: r,
      estados: estados.filter((e) => e.regiao === r),
    }))
    .filter((g) => g.estados.length > 0);

  return (
    <main className="min-h-screen bg-dark-900 relative overflow-hidden">
      <Header />

      {/* ── Ambient background glows ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-gold-500/6 blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gold-700/5 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-gold-600/4 blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* ── Hero ── */}
        <section className="pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <div
            className="flex justify-center mb-8"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            <div className="animate-float drop-shadow-[0_0_40px_rgba(201,160,18,0.35)]">
              <Logo size={140} />
            </div>
          </div>

          {/* Title */}
          <h1
            className="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider gold-shimmer mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            DESAFIO CULTURAL
          </h1>

          {/* Divider */}
          <div
            className="flex items-center justify-center gap-4 my-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold-500/70" />
            <div className="w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(201,160,18,0.8)]" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold-500/70" />
          </div>

          {/* Subtitle */}
          <p
            className="font-raleway text-lg sm:text-xl text-gold-400/65 font-light max-w-xl mx-auto leading-relaxed px-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Explore a riqueza cultural do Brasil.
            <br />
            <span className="text-gold-400/45 text-base">
              Selecione um estado para descobrir os talentos de cada município.
            </span>
          </p>

          {/* Stats bar */}
          <div
            className="flex items-center justify-center gap-8 mt-10 font-raleway text-sm"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="text-center">
              <div className="font-cinzel text-2xl text-gold-400">{estados.length}</div>
              <div className="text-gold-600 text-xs tracking-widest uppercase mt-0.5">Estados</div>
            </div>
            <div className="w-px h-8 bg-gold-500/20" />
            <div className="text-center">
              <div className="font-cinzel text-2xl text-gold-400">
                {estados.reduce((acc, e) => acc + e.municipios.length, 0)}
              </div>
              <div className="text-gold-600 text-xs tracking-widest uppercase mt-0.5">Municípios</div>
            </div>
            <div className="w-px h-8 bg-gold-500/20" />
            <div className="text-center">
              <div className="font-cinzel text-2xl text-gold-400">5</div>
              <div className="text-gold-600 text-xs tracking-widest uppercase mt-0.5">Regiões</div>
            </div>
          </div>
        </section>

        {/* ── States by region ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-7xl mx-auto">
          {estadosPorRegiao.map(({ regiao, estados: estadosList }, groupIdx) => (
            <div key={regiao} className="mb-14">
              {/* Region header */}
              <div
                className="flex items-center gap-4 mb-6"
                data-aos="fade-right"
                data-aos-delay={groupIdx * 50}
              >
                <h2 className="font-cinzel text-sm font-semibold text-gold-500/70 tracking-[0.25em] uppercase">
                  {regiaoLabel[regiao]}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-gold-500/30 to-transparent" />
              </div>

              {/* States grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                {estadosList.map((estado, i) => (
                  <Link
                    key={estado.id}
                    href={`/${estado.id}`}
                    className="group relative overflow-hidden rounded-xl border border-gold-500/15 bg-dark-800
                               hover:border-gold-400/50 transition-all duration-500 gold-glow cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={Math.min(i * 60 + groupIdx * 30, 500)}
                  >
                    {/* Hover gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${regiaoGradients[regiao]} to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Gold top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/60 transition-all duration-500" />

                    <div className="relative p-4 sm:p-5">
                      {/* Large sigla watermark */}
                      <div
                        className="font-cinzel text-5xl sm:text-6xl font-black
                                   text-gold-500/12 group-hover:text-gold-500/30
                                   transition-colors duration-500 leading-none select-none mb-2"
                      >
                        {estado.sigla}
                      </div>

                      {/* State name */}
                      <h3
                        className="font-cinzel text-sm sm:text-base font-semibold
                                   text-gold-200/90 group-hover:text-gold-100
                                   transition-colors leading-snug mb-1"
                      >
                        {estado.nome}
                      </h3>

                      {/* Municipality count */}
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="w-1 h-1 rounded-full bg-gold-500/50" />
                        <span className="font-raleway text-xs text-gold-500/50 group-hover:text-gold-500/70 transition-colors">
                          {estado.municipios.length} municípios
                        </span>
                      </div>

                      {/* Arrow indicator */}
                      <div
                        className="absolute bottom-4 right-4 text-gold-500/30
                                   group-hover:text-gold-400/80 transition-all duration-300
                                   group-hover:translate-x-1 group-hover:-translate-y-0.5 text-lg"
                      >
                        →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-gold-500/10 py-10 text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/30" />
            <Logo size={28} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/30" />
          </div>
          <p className="font-cinzel text-xs text-gold-600/50 tracking-widest uppercase">
            Desafio Cultural — Brasil
          </p>
          <p className="font-raleway text-xs text-gold-700/40 mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
