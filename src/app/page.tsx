import type { Metadata } from 'next';
import { estados, regiaoLabel, type Regiao } from '../data/mockData';
import Header from '../components/Header';
import Logo from '../components/Logo';
import AmbientGlow from '../components/AmbientGlow';
import StatBar from '../components/StatBar';
import EstadoCard from '../components/EstadoCard';

export const metadata: Metadata = { title: 'Desafio Cultural — Selecione um Estado' };

const regioes: Regiao[] = ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'];

export default function HomePage() {
  const estadosPorRegiao = regioes
    .map(r => ({ regiao: r, estados: estados.filter(e => e.regiao === r) }))
    .filter(g => g.estados.length > 0);

  return (
    <main style={{ minHeight:'100vh', background:'var(--bg-primary)', position:'relative' }}>
      <Header />
      <AmbientGlow />
      <div style={{ position:'relative', zIndex:1 }}>

        {/* Hero */}
        <section style={{ padding:'120px 24px 60px', textAlign:'center' }}>
          <div style={{ display:'flex', justifyContent:'center', marginBottom:28, animation:'floatAnim 4s ease-in-out infinite' }}
               data-aos="zoom-in" data-aos-duration="900">
            <Logo size={130} />
          </div>
          <h1 className="font-display gold-text"
              style={{ fontSize:'clamp(42px,8vw,88px)', lineHeight:1, marginBottom:16 }}
              data-aos="fade-up" data-aos-delay="100">
            DESAFIO CULTURAL
          </h1>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:16, margin:'20px auto', maxWidth:320 }}
               data-aos="fade-up" data-aos-delay="150">
            <div style={{ flex:1, height:1, background:'linear-gradient(to right, transparent, rgba(214,163,84,0.3), transparent)' }} />
            <div style={{ width:6, height:6, borderRadius:'50%', background:'var(--gold)', boxShadow:'0 0 8px rgba(214,163,84,0.6)' }} />
            <div style={{ flex:1, height:1, background:'linear-gradient(to right, transparent, rgba(214,163,84,0.3), transparent)' }} />
          </div>
          <p style={{ color:'var(--text-muted)', fontSize:16, maxWidth:480, margin:'0 auto', lineHeight:1.7 }}
             data-aos="fade-up" data-aos-delay="200">
            Explore a riqueza cultural do Brasil.<br />
            <span style={{ fontSize:14 }}>Selecione um estado para descobrir os talentos de cada município.</span>
          </p>
          <div data-aos="fade-up" data-aos-delay="300"><StatBar /></div>
        </section>

        {/* Estados por região */}
        <section style={{ padding:'0 24px 80px', maxWidth:1200, margin:'0 auto' }}>
          {estadosPorRegiao.map(({ regiao, estados: list }, gi) => (
            <div key={regiao} style={{ marginBottom:48 }}>
              <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:20 }}
                   data-aos="fade-right" data-aos-delay={gi * 50}>
                <span className="badge">{regiaoLabel[regiao]}</span>
                <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(214,163,84,0.25), transparent)' }} />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(160px, 1fr))', gap:12 }}>
                {list.map((estado, i) => (
                  <div key={estado.id} data-aos="fade-up" data-aos-delay={Math.min(i * 60 + gi * 30, 500)}>
                    <EstadoCard estado={estado} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

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
