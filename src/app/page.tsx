import type { Metadata } from 'next';
import { getEstadosOrdenados, regioes, regiaoLabel, type Regiao } from '../data/mockData';
import Header from '../components/Header';
import Logo from '../components/Logo';
import AmbientGlow from '../components/AmbientGlow';
import StatBar from '../components/StatBar';
import EstadoCard from '../components/EstadoCard';

export const metadata: Metadata = { title: 'Desafio Cultural — Selecione um Estado' };

export default function HomePage() {
  const todosEstados = getEstadosOrdenados();
  const totalMunicipios = todosEstados.reduce((acc, e) => acc + e.municipios.length, 0);

  const estadosPorRegiao = regioes
    .map(r => ({ regiao: r as Regiao, estados: todosEstados.filter(e => e.regiao === r) }))
    .filter(g => g.estados.length > 0);

  return (
    <main style={{ minHeight:'100vh', background:'var(--bg-primary)', position:'relative' }}>
      <Header />
      <AmbientGlow />
      <div style={{ position:'relative', zIndex:1 }}>

        {/* Hero */}
        <section style={{ padding:'120px 24px 60px', textAlign:'center' }}>
          <div style={{ display:'flex', justifyContent:'center', marginBottom:28, animation:'floatAnim 4s ease-in-out infinite' }}>
            <Logo size={130} />
          </div>
          <h1 className="font-display gold-text" style={{ fontSize:'clamp(42px,8vw,88px)', lineHeight:1, marginBottom:16 }}>
            DESAFIO CULTURAL
          </h1>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:16, margin:'20px auto', maxWidth:320 }}>
            <div style={{ flex:1, height:1, background:'linear-gradient(to right, transparent, rgba(214,163,84,0.3), transparent)' }} />
            <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--gold)', boxShadow:'0 0 8px rgba(214,163,84,0.6)' }} />
            <div style={{ flex:1, height:1, background:'linear-gradient(to right, transparent, rgba(214,163,84,0.3), transparent)' }} />
          </div>
          <p style={{ color:'var(--text-muted)', fontSize:16, maxWidth:480, margin:'0 auto', lineHeight:1.7 }}>
            Explore a riqueza cultural do Brasil.<br />
            <span style={{ fontSize:14 }}>Estados, municípios e bandas organizados em ordem alfabética.</span>
          </p>

          {/* Stats */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:32, marginTop:32, flexWrap:'wrap' }}>
            {[
              { label:'Estados', value: todosEstados.length },
              { label:'Municípios', value: totalMunicipios },
              { label:'Regiões', value: regioes.length },
            ].map((s, i, arr) => (
              <div key={s.label} style={{ display:'flex', alignItems:'center', gap:32 }}>
                {i > 0 && <div style={{ width:1, height:36, background:'rgba(214,163,84,0.15)' }} />}
                <div style={{ textAlign:'center' }}>
                  <div className="font-display" style={{ fontSize:32, color:'var(--gold)' }}>{s.value}</div>
                  <div style={{ fontSize:11, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.15em', marginTop:2 }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Estados por região — regiões em ordem alfabética */}
        <section style={{ padding:'0 24px 80px', maxWidth:1200, margin:'0 auto' }}>
          {estadosPorRegiao.map(({ regiao, estados: list }) => (
            <div key={regiao} style={{ marginBottom:52 }}>
              {/* Cabeçalho da região */}
              <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:8 }}>
                <div style={{ display:'flex', flexDirection:'column' }}>
                  <span style={{ fontSize:10, color:'var(--gold-dk)', letterSpacing:'0.2em', textTransform:'uppercase', fontFamily:'Inter,sans-serif', fontWeight:500 }}>
                    Região
                  </span>
                  <span className="font-display" style={{ fontSize:28, color:'var(--gold)', lineHeight:1 }}>
                    {regiaoLabel[regiao]}
                  </span>
                </div>
                <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(214,163,84,0.35), transparent)', marginTop:12 }} />
                <span style={{ fontSize:11, color:'var(--text-muted)', marginTop:12, whiteSpace:'nowrap' }}>
                  {list.length} estado{list.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Grid de estados */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(155px, 1fr))', gap:10, marginTop:16 }}>
                {list.map(estado => (
                  <EstadoCard key={estado.id} estado={estado} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Legenda: município sem acesso */}
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px 48px', display:'flex', alignItems:'center', gap:16 }}>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ width:12, height:12, borderRadius:3, background:'#1F1F1F', border:'1px solid #2a2a2a' }} />
            <span style={{ fontSize:12, color:'var(--text-muted)' }}>Município ainda não aderiu ao projeto</span>
          </div>
          <div style={{ flex:1, height:1, background:'rgba(214,163,84,0.05)' }} />
        </div>

        {/* Footer */}
        <footer style={{ borderTop:'1px solid #1F1F1F', padding:'32px 24px', textAlign:'center' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:16, marginBottom:12 }}>
            <div style={{ height:1, width:48, background:'linear-gradient(to right, transparent, rgba(214,163,84,0.3))' }} />
            <Logo size={28} />
            <div style={{ height:1, width:48, background:'linear-gradient(to left, transparent, rgba(214,163,84,0.3))' }} />
          </div>
          <p className="font-display" style={{ fontSize:11, color:'var(--text-muted)', letterSpacing:'0.2em', textTransform:'uppercase' }}>Desafio Cultural — Brasil</p>
          <p style={{ fontSize:11, color:'#333', marginTop:4 }}>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
