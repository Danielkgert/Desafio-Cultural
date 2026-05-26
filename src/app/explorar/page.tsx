import type { Metadata } from 'next';
import Link from 'next/link';
import { getEstadosOrdenados } from '../../data/mockData';
import Header from '../../components/Header';
import AmbientGlow from '../../components/AmbientGlow';
import FiltroEstados from '../../components/FiltroEstados';

export const metadata: Metadata = {
  title: 'Explorar — Desafio Cultural',
  description: 'Busque e filtre estados e municípios do Brasil no Desafio Cultural.',
};

export default function ExplorarPage() {
  const estados  = getEstadosOrdenados();
  const totalMun = estados.reduce((acc, e) => acc + e.municipios.length, 0);
  const totalPart = estados.reduce((acc, e) => acc + e.municipios.filter(m => m.videoId).length, 0);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg-primary)', position: 'relative' }}>
      <Header breadcrumbs={[{ label: 'Explorar' }]} />
      <AmbientGlow />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1000, margin: '0 auto', padding: '0 16px 80px' }}>
        <div style={{ paddingTop: 72, marginBottom: 24 }}>
          <Link href="/" className="btn-outline">← Início</Link>
        </div>

        <div style={{ marginBottom: 28 }}>
          <h1 className="font-display gold-text" style={{ fontSize: 'clamp(28px, 8vw, 56px)', lineHeight: 1, marginBottom: 10 }}>
            EXPLORAR
          </h1>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 6 }}>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{estados.length}</span> estados
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{totalMun}</span> municípios cadastrados
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: 13 }}>
              <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{totalPart}</span> participando
            </span>
          </div>
          <div style={{ height: 1, background: 'linear-gradient(to right, rgba(214,163,84,0.4), transparent)', marginTop: 16, marginBottom: 24 }} />
        </div>

        <FiltroEstados estados={estados} />
      </div>
    </main>
  );
}
