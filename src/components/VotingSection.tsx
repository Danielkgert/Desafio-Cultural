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
      <div style={{
        padding: '24px 16px', textAlign: 'center',
        background: 'rgba(214,163,84,0.03)',
        border: '1px solid #1F1F1F',
        borderRadius: 14, marginBottom: 24,
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
          Nenhuma banda cadastrada para este município ainda.
        </p>
      </div>
    );
  }

  return (
    <section style={{ marginBottom: 36 }}>
      {/* Título da seção */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(214,163,84,0.4), transparent)' }} />
        <span className="font-display" style={{
          fontSize: 'clamp(16px, 5vw, 24px)',
          color: 'var(--gold)',
          letterSpacing: '0.08em',
          whiteSpace: 'nowrap',
        }}>
          🎵 VOTE NA BANDA
        </span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, rgba(214,163,84,0.4), transparent)' }} />
      </div>

      <p style={{
        color: 'var(--text-muted)',
        fontSize: 'clamp(11px, 3vw, 13px)',
        marginBottom: 16,
        textAlign: 'center',
        lineHeight: 1.5,
      }}>
        Escolha sua favorita em cada modalidade.{' '}
        <strong style={{ color: 'var(--text-sec)' }}>Um voto</strong> por município.
      </p>

      {/* Toast de feedback */}
      {toast && (
        <div style={{
          background: 'rgba(214,163,84,0.1)',
          border: '1px solid rgba(214,163,84,0.4)',
          borderRadius: 10,
          padding: '12px 16px',
          marginBottom: 18,
          color: 'var(--gold)',
          fontSize: 13,
          textAlign: 'center',
        }}>
          {toast}
        </div>
      )}

      {/* Lista de gêneros */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {generosOrdenados.map(genero => {
          const bandas      = bandasPorGenero[genero];
          const totalGenero = bandas.reduce((acc, b) => acc + (votos[b.id] ?? b.votos), 0);
          const sorted      = [...bandas].sort(
            (a, b) => (votos[b.id] ?? b.votos) - (votos[a.id] ?? a.votos)
          );

          return (
            <div
              key={genero}
              id={`genero-${genero.replace(/\s+/g, '-').toLowerCase()}`}
              style={{ scrollMarginTop: 72 }}
            >
              {/* Header do gênero */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{
                  padding: '3px 14px',
                  borderRadius: 20,
                  background: 'rgba(214,163,84,0.08)',
                  border: '1px solid rgba(214,163,84,0.22)',
                  flexShrink: 0,
                }}>
                  <span className="font-display" style={{
                    fontSize: 'clamp(13px, 4vw, 16px)',
                    color: 'var(--gold)',
                    letterSpacing: '0.07em',
                  }}>
                    {genero.toUpperCase()}
                  </span>
                </div>
                <div style={{
                  flex: 1, height: 1,
                  background: 'linear-gradient(to right, rgba(214,163,84,0.18), transparent)',
                }} />
                <span style={{ fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                  {bandas.length} · {totalGenero.toLocaleString('pt-BR')} votos
                </span>
              </div>

              {/* Bandas do gênero */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {sorted.map((banda, idx) => {
                  const votosAtual = votos[banda.id] ?? banda.votos;
                  const pct        = totalGenero > 0 ? (votosAtual / totalGenero) * 100 : 0;
                  const isVoted    = voted === banda.id;
                  const isLeader   = idx === 0;
                  const medal      = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : null;

                  return (
                    <div
                      key={banda.id}
                      style={{
                        background: isVoted ? 'rgba(214,163,84,0.06)' : 'var(--bg-card)',
                        border: `1px solid ${
                          isVoted   ? 'rgba(214,163,84,0.45)' :
                          isLeader  ? 'rgba(214,163,84,0.18)' :
                                      '#1F1F1F'
                        }`,
                        borderRadius: 11,
                        padding: '10px 12px',
                        transition: 'all 0.25s',
                      }}
                    >
                      {/* Linha principal */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginBottom: 8,
                        /* impede overflow no mobile */
                        overflow: 'hidden',
                      }}>
                        {/* Medalha / rank */}
                        <div style={{ flexShrink: 0, minWidth: 22, textAlign: 'center' }}>
                          {medal
                            ? <span style={{ fontSize: 15 }}>{medal}</span>
                            : <span className="font-display" style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                                #{idx + 1}
                              </span>
                          }
                        </div>

                        {/* Nome da banda — trunca se necessário */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontSize: 'clamp(12px, 3.5vw, 14px)',
                            fontWeight: 600,
                            color: isVoted ? 'var(--gold-hi)' : 'var(--text)',
                            lineHeight: 1.25,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}>
                            {banda.nome}
                          </div>
                        </div>

                        {/* Votos (escondido em telas muito pequenas via CSS) */}
                        <div className="votos-col" style={{ flexShrink: 0, textAlign: 'right', marginRight: 6 }}>
                          <div className="font-display" style={{
                            fontSize: 'clamp(14px, 4vw, 17px)',
                            color: 'var(--gold)',
                            lineHeight: 1,
                          }}>
                            {votosAtual.toLocaleString('pt-BR')}
                          </div>
                          <div style={{ fontSize: 8, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                            votos
                          </div>
                        </div>

                        {/* Botão de voto */}
                        <button
                          className="vote-btn"
                          onClick={() => handleVote(banda.id)}
                          disabled={!!voted}
                          style={{
                            flexShrink: 0,
                            background: isVoted
                              ? 'linear-gradient(135deg, var(--gold-dk), var(--gold))'
                              : voted ? 'rgba(20,20,20,0.9)' : 'transparent',
                            color: isVoted ? '#050505' : voted ? '#444' : 'var(--gold)',
                            border: `1px solid ${isVoted ? 'var(--gold)' : 'rgba(214,163,84,0.25)'}`,
                            borderRadius: 7,
                            padding: '6px 12px',
                            fontSize: 11,
                            fontWeight: 700,
                            cursor: voted ? 'not-allowed' : 'pointer',
                            transition: 'all 0.2s',
                            whiteSpace: 'nowrap',
                            minWidth: 64,
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {isVoted ? '✓ Votado' : 'Votar'}
                        </button>
                      </div>

                      {/* Barra de progresso */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{
                          flex: 1,
                          background: '#1A1A1A',
                          borderRadius: 3,
                          height: 3,
                          overflow: 'hidden',
                        }}>
                          <div style={{
                            height: '100%',
                            width: `${pct.toFixed(1)}%`,
                            background: isLeader
                              ? 'linear-gradient(to right, var(--gold-dk), var(--gold-hi))'
                              : 'linear-gradient(to right, #2a2a2a, var(--gold-dk))',
                            borderRadius: 3,
                            transition: 'width 0.8s ease',
                          }} />
                        </div>
                        <span className="pct-label" style={{
                          fontSize: 9,
                          color: 'var(--text-muted)',
                          minWidth: 32,
                          textAlign: 'right',
                          flexShrink: 0,
                        }}>
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
