import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { estados, getEstado, getMunicipiosAgrupados } from '../../data/mockData';
import Header from '../../components/Header';
import AmbientGlow from '../../components/AmbientGlow';

interface Props { params: { estado: string } }

export function generateStaticParams() {
  return estados.map(e => ({ estado: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const estado = getEstado(params.estado);
  if (!estado) return {};
  return { title: `${estado.nome} — Municípios`, description: `Municípios de ${estado.nome} no Desafio Cultural.` };
}

export default function EstadoPage({ params }: Props) {
  const estado = getEstado(params.estado);
  if (!estado) notFound();

  const grupos = getMunicipiosAgrupados(params.estado);
  const letras = Object.keys(grupos).sort();
  const totalComAcesso = estado.municipios.filter(m => m.videoId).length;
  const totalSemAcesso = estado.municipios.length - totalComAcesso;

  return (
    <main style={{ minHeight:'100vh', background:'var(--bg-primary)', position:'relative' }}>
      <Header breadcrumbs={[{ label: estado.nome }]} />
      <AmbientGlow />

      <div style={{ position:'relative', zIndex:1, maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
        <div style={{ paddingTop:96, marginTop:16 }}>
          <Link href="/" className="btn-outline" style={{ textDecoration:'none', display:'inline-block', marginBottom:32 }}>
            ← Todos os estados
          </Link>

          {/* Header do estado */}
          <div style={{ display:'flex', alignItems:'flex-end', gap:20, marginBottom:12 }}>
            <span className="font-display" style={{ fontSize:'clamp(72px,12vw,120px)', color:'rgba(214,163,84,0.08)', lineHeight:1, userSelect:'none' }}>
              {estado.sigla}
            </span>
            <div style={{ paddingBottom:12 }}>
              <span className="badge" style={{ marginBottom:8, display:'inline-flex' }}>{estado.regiao}</span>
              <h1 className="font-display" style={{ fontSize:'clamp(28px,5vw,56px)', color:'var(--text)', display:'block', lineHeight:1 }}>
                {estado.nome}
              </h1>
              <p style={{ color:'var(--text-muted)', fontSize:13, marginTop:6 }}>
                {totalComAcesso} município{totalComAcesso !== 1 ? 's' : ''} participando
                {totalSemAcesso > 0 && (
                  <span style={{ color:'#444', marginLeft:8 }}>
                    · {totalSemAcesso} ainda não aderiu{totalSemAcesso !== 1 ? 'ram' : ''}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div style={{ height:1, background:'linear-gradient(to right, rgba(214,163,84,0.4), rgba(214,163,84,0.05), transparent)', marginBottom:36 }} />

          {/* Índice alfabético rápido */}
          <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:36 }}>
            {letras.map(letra => (
              <a key={letra} href={`#letra-${letra}`} style={{ textDecoration:'none' }}>
                <div style={{
                  width:36, height:36, borderRadius:8,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  background:'rgba(214,163,84,0.06)', border:'1px solid rgba(214,163,84,0.15)',
                  color:'var(--gold)', fontSize:14, fontFamily:'Bebas Neue,sans-serif',
                  letterSpacing:'0.05em', cursor:'pointer',
                  transition:'all 0.2s',
                }}>
                  {letra}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Municípios agrupados por letra */}
        <section style={{ paddingBottom:80 }}>
          {letras.map(letra => (
            <div key={letra} id={`letra-${letra}`} style={{ marginBottom:40, scrollMarginTop:100 }}>
              {/* Separador de letra */}
              <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:16 }}>
                <div className="font-display" style={{
                  width:48, height:48, borderRadius:10,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  background:'rgba(214,163,84,0.08)', border:'1px solid rgba(214,163,84,0.2)',
                  fontSize:26, color:'var(--gold)', flexShrink:0,
                }}>
                  {letra}
                </div>
                <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(214,163,84,0.2), transparent)' }} />
                <span style={{ fontSize:11, color:'var(--text-muted)' }}>
                  {grupos[letra].length} município{grupos[letra].length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Cards dos municípios */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:14, marginLeft:64 }}>
                {grupos[letra].map(municipio => {
                  const temAcesso = !!municipio.videoId;
                  return (
                    <div key={municipio.id}>
                      {temAcesso ? (
                        <Link
                          href={`/${estado.id}/${municipio.id}`}
                          className="card gold-glow"
                          style={{ display:'block', textDecoration:'none', padding:'16px 20px', position:'relative', overflow:'hidden' }}
                        >
                          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                            <div>
                              <div className="font-display" style={{ fontSize:18, color:'var(--text)', lineHeight:1.2 }}>
                                {municipio.nome}
                              </div>
                              <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:4 }}>
                                {municipio.descricao?.split('.')[0]}
                              </div>
                            </div>
                            <span style={{ color:'rgba(214,163,84,0.4)', fontSize:18, marginLeft:12 }}>→</span>
                          </div>
                          {/* Miniatura do YouTube */}
                          <div style={{ marginTop:10, borderRadius:6, overflow:'hidden', height:80, position:'relative', background:'#0B0B0D' }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={`https://img.youtube.com/vi/${municipio.videoId}/mqdefault.jpg`}
                              alt=""
                              style={{ width:'100%', height:'100%', objectFit:'cover', opacity:0.4 }}
                            />
                            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(17,17,17,0.6), transparent)' }} />
                            <div style={{ position:'absolute', top:8, right:8, background:'rgba(214,163,84,0.15)', border:'1px solid rgba(214,163,84,0.3)', borderRadius:4, padding:'2px 8px', fontSize:10, color:'var(--gold)' }}>
                              ▶ Vídeo
                            </div>
                          </div>
                        </Link>
                      ) : (
                        // Município sem acesso — bloqueado
                        <div style={{
                          background:'rgba(17,17,17,0.5)',
                          border:'1px solid #1a1a1a',
                          borderRadius:16,
                          padding:'16px 20px',
                          opacity:0.55,
                          cursor:'not-allowed',
                          position:'relative',
                        }}>
                          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                            <div>
                              <div className="font-display" style={{ fontSize:18, color:'var(--text-muted)', lineHeight:1.2 }}>
                                {municipio.nome}
                              </div>
                              <div style={{ fontSize:11, color:'#444', marginTop:4 }}>Ainda não aderiu ao projeto</div>
                            </div>
                            <div style={{ fontSize:18, color:'#333' }}>🔒</div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
