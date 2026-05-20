'use client';
import { useState } from 'react';
import { BANDAS_MOCK, type Banda } from '../data/mockData';

export default function VotingSection({ municipioId }: { municipioId: string }) {
  const [bandas, setBandas] = useState<Banda[]>(() => {
    try {
      const saved = typeof window !== 'undefined' && localStorage.getItem(`votos_${municipioId}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    return BANDAS_MOCK[municipioId] || [];
  });

  const [voted, setVoted] = useState<string | null>(() => {
    try { return typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(`voted_${municipioId}`) || 'null') : null; }
    catch { return null; }
  });

  const [toast, setToast] = useState<string | null>(null);

  const totalVotos = bandas.reduce((a, b) => a + b.votos, 0);

  const handleVote = (bandaId: string) => {
    if (voted) {
      setToast('Você já votou neste município!');
      setTimeout(() => setToast(null), 2500);
      return;
    }
    const updated = bandas.map(b => b.id === bandaId ? { ...b, votos: b.votos + 1 } : b);
    setBandas(updated);
    setVoted(bandaId);
    try {
      localStorage.setItem(`votos_${municipioId}`, JSON.stringify(updated));
      localStorage.setItem(`voted_${municipioId}`, JSON.stringify(bandaId));
    } catch {}
    setToast('Voto registrado! Obrigado por participar.');
    setTimeout(() => setToast(null), 3000);
  };

  if (bandas.length === 0) return null;

  const sorted = [...bandas].sort((a, b) => b.votos - a.votos);

  return (
    <section style={{ marginBottom:48 }}>
      <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:24 }}>
        <div style={{ flex:1, height:1, background:'linear-gradient(to right, rgba(214,163,84,0.4), transparent)' }} />
        <span className="font-display" style={{ fontSize:22, color:'var(--gold)', letterSpacing:'0.08em' }}>🎵 VOTE NA BANDA</span>
        <div style={{ flex:1, height:1, background:'linear-gradient(to left, rgba(214,163,84,0.4), transparent)' }} />
      </div>

      <p style={{ color:'var(--text-muted)', fontSize:13, marginBottom:20, textAlign:'center' }}>
        Qual banda representa melhor este município? Vote uma vez.
      </p>

      {toast && (
        <div style={{ background:'rgba(214,163,84,0.12)', border:'1px solid rgba(214,163,84,0.35)', borderRadius:10, padding:'12px 20px', marginBottom:20, color:'var(--gold)', fontSize:13, textAlign:'center' }}>
          {toast}
        </div>
      )}

      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        {sorted.map((banda, idx) => {
          const pct = totalVotos > 0 ? (banda.votos / totalVotos) * 100 : 0;
          const isVoted  = voted === banda.id;
          const isLeading = idx === 0;
          const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`;
          return (
            <div key={banda.id} style={{ background: isVoted ? 'rgba(214,163,84,0.07)' : 'var(--bg-card)', border:`1px solid ${isVoted ? 'rgba(214,163,84,0.5)' : isLeading ? 'rgba(214,163,84,0.2)' : '#1F1F1F'}`, borderRadius:12, padding:'14px 18px', transition:'all 0.3s' }}>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:10 }}>
                <span className="font-display" style={{ fontSize:20, color: idx === 0 ? 'var(--gold)' : idx === 1 ? 'var(--gold-dk)' : 'var(--text-muted)', minWidth:28 }}>{medal}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:15, fontWeight:600, color: isVoted ? 'var(--gold-hi)' : 'var(--text)' }}>{banda.nome}</div>
                  <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:2 }}>{banda.genero}</div>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                  <div style={{ textAlign:'right' }}>
                    <div className="font-display" style={{ fontSize:18, color:'var(--gold)' }}>{banda.votos.toLocaleString('pt-BR')}</div>
                    <div style={{ fontSize:10, color:'var(--text-muted)' }}>votos</div>
                  </div>
                  <button
                    onClick={() => handleVote(banda.id)}
                    disabled={!!voted}
                    style={{
                      background: isVoted ? 'linear-gradient(135deg, var(--gold-dk), var(--gold))' : voted ? 'rgba(30,30,30,0.8)' : 'transparent',
                      color: isVoted ? '#050505' : voted ? 'var(--text-muted)' : 'var(--gold)',
                      border:`1px solid ${isVoted ? 'var(--gold)' : 'rgba(214,163,84,0.3)'}`,
                      borderRadius:8, padding:'6px 14px', fontSize:12, fontWeight:600,
                      cursor: voted ? 'not-allowed' : 'pointer', transition:'all 0.2s', whiteSpace:'nowrap',
                    }}
                  >
                    {isVoted ? '✓ Votado' : 'Votar'}
                  </button>
                </div>
              </div>
              <div style={{ background:'#1F1F1F', borderRadius:4, height:4, overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${pct.toFixed(1)}%`, background: isLeading ? 'linear-gradient(to right, var(--gold-dk), var(--gold-hi))' : 'linear-gradient(to right, #333, var(--gold-dk))', borderRadius:4, transition:'width 1s ease' }} />
              </div>
              <div style={{ fontSize:10, color:'var(--text-muted)', marginTop:4, textAlign:'right' }}>{pct.toFixed(1)}%</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
