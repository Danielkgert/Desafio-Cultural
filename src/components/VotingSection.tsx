'use client';
import { useState } from 'react';
import type { Banda } from '../data/mockData';

interface Props {
  municipioId: string;
  bandasPorGenero: Record<string, Banda[]>;
  generosOrdenados: string[];
}

export default function VotingSection({ municipioId, bandasPorGenero, generosOrdenados }: Props) {
  const [votos, setVotos] = useState<Record<string, number>>(() => {
    try {
      const saved = typeof window !== 'undefined' && localStorage.getItem(`votos_${municipioId}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    // inicializa com valores do mock
    const init: Record<string, number> = {};
    Object.values(bandasPorGenero).flat().forEach(b => { init[b.id] = b.votos; });
    return init;
  });

  const [voted, setVoted] = useState<string | null>(() => {
    try { return typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(`voted_${municipioId}`) || 'null') : null; }
    catch { return null; }
  });

  const [toast, setToast] = useState<string | null>(null);

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
    setToast('Voto registrado! Obrigado por participar. 🎵');
    setTimeout(() => setToast(null), 3500);
  };

  if (generosOrdenados.length === 0) {
    return (
      <div style={{ padding:'32px 24px', textAlign:'center', background:'rgba(214,163,84,0.04)', border:'1px solid #1F1F1F', borderRadius:16, marginBottom:32 }}>
        <p style={{ color:'var(--text-muted)', fontSize:14 }}>Nenhuma banda cadastrada para este município ainda.</p>
      </div>
    );
  }

  return (
    <section style={{ marginBottom:48 }}>
      {/* Header da seção */}
      <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
        <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(214,163,84,0.4), transparent)' }} />
        <span className="font-display" style={{ fontSize:26, color:'var(--gold)', letterSpacing:'0.08em', whiteSpace:'nowrap' }}>
          🎵 VOTE NA BANDA
        </span>
        <div style={{ flex:1, height:1, background:'linear-gradient(to left, rgba(214,163,84,0.4), transparent)' }} />
      </div>

      <p style={{ color:'var(--text-muted)', fontSize:13, marginBottom:20, textAlign:'center' }}>
        Escolha sua favorita em cada modalidade. Você pode votar <strong style={{ color:'var(--text-sec)' }}>uma vez</strong> por município.
      </p>

      {/* Toast */}
      {toast && (
        <div style={{
          background:'rgba(214,163,84,0.1)', border:'1px solid rgba(214,163,84,0.4)',
          borderRadius:12, padding:'14px 24px', marginBottom:24,
          color:'var(--gold)', fontSize:14, textAlign:'center',
          animation:'fadeUp 0.3s ease',
        }}>
          {toast}
        </div>
      )}

      {/* Gêneros em ordem alfabética */}
      <div style={{ display:'flex', flexDirection:'column', gap:36 }}>
        {generosOrdenados.map(genero => {
          const bandas = bandasPorGenero[genero];
          const totalGenero = bandas.reduce((acc, b) => acc + (votos[b.id] ?? b.votos), 0);
          const sortedBandas = [...bandas].sort((a, b) =>
            (votos[b.id] ?? b.votos) - (votos[a.id] ?? a.votos)
          );

          return (
            <div
              key={genero}
              id={`genero-${genero.replace(/\s+/g,'-').toLowerCase()}`}
              style={{ scrollMarginTop: 90 }}
            >
              {/* Cabeçalho do gênero */}
              <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:14 }}>
                <div style={{
                  padding:'4px 16px', borderRadius:20,
                  background:'rgba(214,163,84,0.08)', border:'1px solid rgba(214,163,84,0.25)',
                  flexShrink:0,
                }}>
                  <span className="font-display" style={{ fontSize:16, color:'var(--gold)', letterSpacing:'0.08em' }}>
                    {genero.toUpperCase()}
                  </span>
                </div>
                <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(214,163,84,0.2), transparent)' }} />
                <span style={{ fontSize:11, color:'var(--text-muted)', whiteSpace:'nowrap' }}>
                  {bandas.length} banda{bandas.length !== 1 ? 's' : ''} · {totalGenero.toLocaleString('pt-BR')} votos
                </span>
              </div>

              {/* Bandas do gênero */}
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {sortedBandas.map((banda, idx) => {
                  const votosAtual = votos[banda.id] ?? banda.votos;
                  const pct = totalGenero > 0 ? (votosAtual / totalGenero) * 100 : 0;
                  const isVoted  = voted === banda.id;
                  const isLeader = idx === 0;
                  const medal    = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : null;

                  return (
                    <div
                      key={banda.id}
                      style={{
                        background: isVoted ? 'rgba(214,163,84,0.06)' : 'var(--bg-card)',
                        border: `1px solid ${isVoted ? 'rgba(214,163,84,0.45)' : isLeader ? 'rgba(214,163,84,0.18)' : '#1F1F1F'}`,
                        borderRadius: 12,
                        padding: '12px 16px',
                        transition: 'all 0.25s',
                      }}
                    >
                      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
                        {/* Rank */}
                        <div style={{ minWidth:28, textAlign:'center' }}>
                          {medal
                            ? <span style={{ fontSize:18 }}>{medal}</span>
                            : <span className="font-display" style={{ fontSize:14, color:'var(--text-muted)' }}>#{idx + 1}</span>
                          }
                        </div>

                        {/* Nome */}
                        <div style={{ flex:1 }}>
                          <div style={{ fontSize:14, fontWeight:600, color: isVoted ? 'var(--gold-hi)' : 'var(--text)', lineHeight:1.3 }}>
                            {banda.nome}
                          </div>
                        </div>

                        {/* Votos */}
                        <div style={{ textAlign:'right', marginRight:8 }}>
                          <div className="font-display" style={{ fontSize:17, color:'var(--gold)', lineHeight:1 }}>
                            {votosAtual.toLocaleString('pt-BR')}
                          </div>
                          <div style={{ fontSize:9, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.1em' }}>votos</div>
                        </div>

                        {/* Botão */}
                        <button
                          onClick={() => handleVote(banda.id)}
                          disabled={!!voted}
                          style={{
                            background: isVoted
                              ? 'linear-gradient(135deg, var(--gold-dk), var(--gold))'
                              : voted ? 'rgba(25,25,25,0.8)' : 'transparent',
                            color: isVoted ? '#050505' : voted ? '#444' : 'var(--gold)',
                            border: `1px solid ${isVoted ? 'var(--gold)' : 'rgba(214,163,84,0.25)'}`,
                            borderRadius: 8,
                            padding: '6px 14px',
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: voted ? 'not-allowed' : 'pointer',
                            transition: 'all 0.2s',
                            whiteSpace: 'nowrap',
                            minWidth: 72,
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {isVoted ? '✓ Votado' : 'Votar'}
                        </button>
                      </div>

                      {/* Barra de progresso */}
                      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                        <div style={{ flex:1, background:'#1A1A1A', borderRadius:4, height:4, overflow:'hidden' }}>
                          <div style={{
                            height:'100%',
                            width:`${pct.toFixed(1)}%`,
                            background: isLeader
                              ? 'linear-gradient(to right, var(--gold-dk), var(--gold-hi))'
                              : 'linear-gradient(to right, #2a2a2a, var(--gold-dk))',
                            borderRadius:4,
                            transition:'width 0.8s ease',
                          }} />
                        </div>
                        <span style={{ fontSize:10, color:'var(--text-muted)', minWidth:36, textAlign:'right' }}>
                          {pct.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
