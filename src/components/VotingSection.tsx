'use client';
import { useState } from 'react';
import type { Banda } from '../data/mockData';

interface Props {
  municipioId: string;
  bandasPorGenero: Record<string, Banda[]>;
  generosOrdenados: string[];
}

// Ícones SVG por gênero musical
function GeneroIcon({ genero }: { genero: string }) {
  const g = genero.toLowerCase();
  if (g.includes('samba') || g.includes('pagode'))
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/></svg>;
  if (g.includes('forró') || g.includes('forro') || g.includes('xote') || g.includes('baião'))
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
  if (g.includes('axé') || g.includes('axe') || g.includes('reggae') || g.includes('marabaixo'))
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
  if (g.includes('rock') || g.includes('metal') || g.includes('punk') || g.includes('indie'))
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  if (g.includes('mpb') || g.includes('bossa') || g.includes('seresta') || g.includes('folk'))
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
  if (g.includes('jazz') || g.includes('blues') || g.includes('clássic') || g.includes('barroc'))
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>;
  if (g.includes('funk') || g.includes('tecnobrega') || g.includes('eletr'))
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
  if (g.includes('maracatu') || g.includes('frevo') || g.includes('ciranda') || g.includes('bumba') || g.includes('toada') || g.includes('carimbó') || g.includes('carimb'))
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>;
  if (g.includes('sertanejo') || g.includes('catira') || g.includes('gauch') || g.includes('chamamé'))
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>;
  // default: nota musical
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
}

export default function VotingSection({ municipioId, bandasPorGenero, generosOrdenados }: Props) {
  const [votos, setVotos] = useState<Record<string, number>>(() => {
    try {
      const saved = typeof window !== 'undefined' && localStorage.getItem(`votos_${municipioId}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    const init: Record<string, number> = {};
    Object.values(bandasPorGenero).flat().forEach(b => { init[b.id] = b.votos; });
    return init;
  });

  const [voted, setVoted] = useState<string | null>(() => {
    try {
      return typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem(`voted_${municipioId}`) || 'null')
        : null;
    } catch { return null; }
  });

  const [toast, setToast] = useState<string | null>(null);
  const [generoAberto, setGeneroAberto] = useState<string | null>(generosOrdenados[0] ?? null);

  const handleVote = (bandaId: string) => {
    if (voted) {
      setToast('Você já votou neste município!');
      setTimeout(() => setToast(null), 2500);
      return;
    }
    const updated = { ...votos, [bandaId]: (votos[bandaId] || 0) + 1 };
    setVotos(updated);
    setVoted(bandaId);
    try {
      localStorage.setItem(`votos_${municipioId}`, JSON.stringify(updated));
      localStorage.setItem(`voted_${municipioId}`, JSON.stringify(bandaId));
    } catch {}
    setToast('Voto registrado! Obrigado 🎵');
    setTimeout(() => setToast(null), 3500);
  };

  if (generosOrdenados.length === 0) {
    return (
      <div style={{ padding:'24px 16px', textAlign:'center', background:'rgba(214,163,84,0.03)', border:'1px solid #1F1F1F', borderRadius:14, marginBottom:24 }}>
        <p style={{ color:'var(--text-muted)', fontSize:13 }}>Nenhuma banda cadastrada para este município ainda.</p>
      </div>
    );
  }

  return (
    <section style={{ marginBottom: 36 }}>
      {/* Título */}
      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
        <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(214,163,84,0.4), transparent)' }} />
        <span className="font-display" style={{ fontSize:'clamp(16px,5vw,24px)', color:'var(--gold)', letterSpacing:'0.08em', whiteSpace:'nowrap' }}>
          🎵 VOTE NA BANDA
        </span>
        <div style={{ flex:1, height:1, background:'linear-gradient(to left, rgba(214,163,84,0.4), transparent)' }} />
      </div>

      <p style={{ color:'var(--text-muted)', fontSize:'clamp(11px,3vw,13px)', marginBottom:20, textAlign:'center', lineHeight:1.5 }}>
        Escolha sua favorita em cada modalidade. <strong style={{ color:'var(--text-sec)' }}>Um voto</strong> por município.
      </p>

      {toast && (
        <div style={{ background:'rgba(214,163,84,0.1)', border:'1px solid rgba(214,163,84,0.4)', borderRadius:10, padding:'12px 16px', marginBottom:18, color:'var(--gold)', fontSize:13, textAlign:'center' }}>
          {toast}
        </div>
      )}

      {/* Tabs de gênero */}
      <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom:20 }}>
        {generosOrdenados.map(genero => {
          const ativo = generoAberto === genero;
          const totalGenero = bandasPorGenero[genero].reduce((acc, b) => acc + (votos[b.id] ?? b.votos), 0);
          const temVotado = bandasPorGenero[genero].some(b => voted === b.id);
          return (
            <button
              key={genero}
              onClick={() => setGeneroAberto(ativo ? null : genero)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                background: ativo
                  ? 'linear-gradient(135deg, rgba(154,106,47,0.3), rgba(214,163,84,0.15))'
                  : 'rgba(214,163,84,0.05)',
                border: `1px solid ${ativo ? 'rgba(214,163,84,0.5)' : 'rgba(214,163,84,0.15)'}`,
                borderRadius: 10,
                padding: '7px 13px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <span style={{ color: ativo ? 'var(--gold-hi)' : 'rgba(214,163,84,0.5)' }}>
                <GeneroIcon genero={genero} />
              </span>
              <span className="font-display" style={{ fontSize:13, color: ativo ? 'var(--gold-hi)' : 'var(--gold)', letterSpacing:'0.06em', whiteSpace:'nowrap' }}>
                {genero.toUpperCase()}
              </span>
              <span style={{ fontSize:9, color:'var(--text-muted)', background:'rgba(255,255,255,0.05)', borderRadius:20, padding:'1px 6px', whiteSpace:'nowrap' }}>
                {bandasPorGenero[genero].length}
              </span>
              {temVotado && (
                <span style={{ fontSize:9, color:'var(--gold)', background:'rgba(214,163,84,0.15)', borderRadius:20, padding:'1px 6px' }}>✓</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Painel do gênero selecionado */}
      {generoAberto && bandasPorGenero[generoAberto] && (() => {
        const bandas = bandasPorGenero[generoAberto];
        const totalGenero = bandas.reduce((acc, b) => acc + (votos[b.id] ?? b.votos), 0);
        const sorted = [...bandas].sort((a, b) => (votos[b.id] ?? b.votos) - (votos[a.id] ?? a.votos));

        return (
          <div
            id={`genero-${generoAberto.replace(/\s+/g,'-').toLowerCase()}`}
            style={{
              background: 'rgba(214,163,84,0.025)',
              border: '1px solid rgba(214,163,84,0.2)',
              borderRadius: 14,
              overflow: 'hidden',
              animation: 'fadeUp 0.25s ease',
            }}
          >
            {/* Header do painel */}
            <div style={{ padding:'14px 16px 10px', borderBottom:'1px solid rgba(214,163,84,0.1)', display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ color:'var(--gold)', opacity:0.7 }}><GeneroIcon genero={generoAberto} /></span>
              <span className="font-display" style={{ fontSize:16, color:'var(--gold)', letterSpacing:'0.08em' }}>
                {generoAberto.toUpperCase()}
              </span>
              <div style={{ flex:1 }} />
              <span style={{ fontSize:10, color:'var(--text-muted)' }}>
                {bandas.length} banda{bandas.length !== 1 ? 's' : ''} · {totalGenero.toLocaleString('pt-BR')} votos
              </span>
            </div>

            {/* Lista de bandas */}
            <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
              {sorted.map((banda, idx) => {
                const votosAtual = votos[banda.id] ?? banda.votos;
                const pct = totalGenero > 0 ? (votosAtual / totalGenero) * 100 : 0;
                const isVoted  = voted === banda.id;
                const isLeader = idx === 0;
                const medal    = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : null;

                return (
                  <div
                    key={banda.id}
                    style={{
                      padding:'12px 16px',
                      background: isVoted ? 'rgba(214,163,84,0.07)' : 'transparent',
                      borderBottom: idx < sorted.length - 1 ? '1px solid rgba(214,163,84,0.06)' : 'none',
                      transition: 'background 0.2s',
                    }}
                  >
                    <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:7, overflow:'hidden' }}>
                      {/* Rank */}
                      <div style={{ minWidth:24, textAlign:'center', flexShrink:0 }}>
                        {medal
                          ? <span style={{ fontSize:15 }}>{medal}</span>
                          : <span className="font-display" style={{ fontSize:12, color:'var(--text-muted)' }}>#{idx+1}</span>
                        }
                      </div>

                      {/* Nome */}
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{
                          fontSize:14, fontWeight:600,
                          color: isVoted ? 'var(--gold-hi)' : isLeader ? '#FFFFFF' : 'var(--text-sec)',
                          overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap',
                          lineHeight:1.3,
                        }}>
                          {banda.nome}
                        </div>
                      </div>

                      {/* Votos */}
                      <div className="votos-col" style={{ flexShrink:0, textAlign:'right', marginRight:8 }}>
                        <div className="font-display" style={{ fontSize:'clamp(14px,4vw,17px)', color:'var(--gold)', lineHeight:1 }}>
                          {votosAtual.toLocaleString('pt-BR')}
                        </div>
                        <div style={{ fontSize:8, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.08em' }}>votos</div>
                      </div>

                      {/* Botão */}
                      <button
                        className="vote-btn"
                        onClick={() => handleVote(banda.id)}
                        disabled={!!voted}
                        style={{
                          flexShrink:0,
                          background: isVoted
                            ? 'linear-gradient(135deg, var(--gold-dk), var(--gold))'
                            : voted ? 'rgba(20,20,20,0.9)' : 'rgba(214,163,84,0.08)',
                          color: isVoted ? '#050505' : voted ? '#444' : 'var(--gold)',
                          border:`1px solid ${isVoted ? 'var(--gold)' : voted ? '#222' : 'rgba(214,163,84,0.3)'}`,
                          borderRadius:8, padding:'6px 12px',
                          fontSize:11, fontWeight:700,
                          cursor: voted ? 'not-allowed' : 'pointer',
                          transition:'all 0.2s', whiteSpace:'nowrap',
                          minWidth:64, fontFamily:'Inter, sans-serif',
                        }}
                      >
                        {isVoted ? '✓ Votado' : 'Votar'}
                      </button>
                    </div>

                    {/* Barra de progresso */}
                    <div style={{ display:'flex', alignItems:'center', gap:8, paddingLeft:34 }}>
                      <div style={{ flex:1, background:'rgba(255,255,255,0.04)', borderRadius:3, height:3, overflow:'hidden' }}>
                        <div style={{
                          height:'100%', width:`${pct.toFixed(1)}%`,
                          background: isLeader
                            ? 'linear-gradient(to right, var(--gold-dk), var(--gold-hi))'
                            : 'linear-gradient(to right, #2a2a2a, var(--gold-dk))',
                          borderRadius:3, transition:'width 0.8s ease',
                        }} />
                      </div>
                      <span className="pct-label" style={{ fontSize:9, color:'var(--text-muted)', minWidth:32, textAlign:'right', flexShrink:0 }}>
                        {pct.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}
    </section>
  );
}
