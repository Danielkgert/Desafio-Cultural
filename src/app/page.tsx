import type { Metadata } from 'next';
import { getEstadosOrdenados, regioes, regiaoLabel, type Regiao } from '../data/mockData';
import Header from '../components/Header';
import Logo from '../components/Logo';
import AmbientGlow from '../components/AmbientGlow';
import RegiaoAccordion from '../components/RegiaoAccordion';

export const metadata: Metadata = { title: 'Desafio Cultural — Selecione um Estado' };

export default function HomePage() {
  const todosEstados     = getEstadosOrdenados();
  const totalMunicipios  = todosEstados.reduce((acc, e) => acc + e.municipios.length, 0);

  const estadosPorRegiao = regioes
    .map(r => ({ regiao: r as Regiao, estados: todosEstados.filter(e => e.regiao === r) }))
    .filter(g => g.estados.length > 0);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', position: 'relative' }}>
      <Header />
      <AmbientGlow />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Hero ── */}
        <section style={{
          paddingTop: 90,
          paddingBottom: 40,
          paddingLeft: 16,
          paddingRight: 16,
          textAlign: 'center',
        }}>
          {/* Logo flutuando */}
          <div style={{
            display: 'flex', justifyContent: 'center',
            marginBottom: 20,
            animation: 'floatAnim 4s ease-in-out infinite',
          }}>
            <Logo size={96} />
          </div>

          {/* Título — escala fluida de 28px a 80px */}
          <h1
            className="font-display gold-text"
            style={{
              fontSize: 'clamp(28px, 9vw, 80px)',
              lineHeight: 1,
              marginBottom: 10,
            }}
          >
            DESAFIO CULTURAL
          </h1>

          {/* Divisor */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 10, margin: '14px auto', maxWidth: 240,
          }}>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(214,163,84,0.35))' }} />
            <div style={{
              width: 5, height: 5, borderRadius: '50%',
              background: 'var(--gold)',
              boxShadow: '0 0 8px rgba(214,163,84,0.6)',
              flexShrink: 0,
            }} />
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(214,163,84,0.35))' }} />
          </div>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: 'clamp(12px, 3.5vw, 15px)',
            maxWidth: 380,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Explore a riqueza cultural do Brasil.<br />
            <span style={{ fontSize: 'clamp(11px, 3vw, 13px)' }}>
              Estados, municípios e bandas em ordem alfabética.
            </span>
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 24,
            flexWrap: 'wrap',
          }}>
            {[
              { label: 'Estados',    value: 26 },
              { label: 'Municípios', value: 5569 },
              { label: 'Regiões',    value: 5 },
            ].map((s, i) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                {i > 0 && (
                  <div style={{ width: 1, height: 28, background: 'rgba(214,163,84,0.15)', flexShrink: 0 }} />
                )}
                <div style={{ textAlign: 'center' }}>
                  <div
                    className="font-display"
                    style={{ fontSize: 'clamp(22px, 6vw, 34px)', color: 'var(--gold)', lineHeight: 1 }}
                  >
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: 9,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    marginTop: 3,
                  }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Botão Explorar ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8, marginTop: -8 }}>
          <a href="/explorar" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(214,163,84,0.08)',
            border: '1px solid rgba(214,163,84,0.25)',
            borderRadius: 12, padding: '10px 20px',
            color: 'var(--gold)', textDecoration: 'none',
            fontSize: 13, fontFamily: 'Inter, sans-serif', fontWeight: 500,
            transition: 'all 0.2s',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Buscar estado ou município
          </a>
        </div>

        {/* ── Regiões em accordion ── */}}
        <section style={{
          padding: '0 16px 80px',
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {/* Subtítulo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{
              fontSize: 10,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              whiteSpace: 'nowrap',
            }}>
              Regiões do Brasil
            </span>
            <div style={{
              flex: 1, height: 1,
              background: 'linear-gradient(to right, rgba(214,163,84,0.2), transparent)',
            }} />
            <span style={{ fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
              Clique para explorar
            </span>
          </div>

          {/* Accordions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {estadosPorRegiao.map(({ regiao, estados: list }) => (
              <RegiaoAccordion
                key={regiao}
                regiao={regiao}
                label={regiaoLabel[regiao]}
                estados={list}
              />
            ))}
          </div>
        </section>

        {/* Legenda */}
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          padding: '0 16px 40px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <div style={{
            width: 10, height: 10, borderRadius: 2,
            background: '#1F1F1F', border: '1px solid #2a2a2a',
            flexShrink: 0,
          }} />
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>
            Município ainda não aderiu ao projeto
          </span>
        </div>
      </div>
    </main>
  );
}
