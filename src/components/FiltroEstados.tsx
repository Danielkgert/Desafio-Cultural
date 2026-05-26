'use client';
import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { type Estado, type Regiao, regioes, regiaoLabel } from '../data/mockData';

interface Props {
  estados: Estado[];
}

// Normaliza string para busca (remove acentos, lowercase)
export default function FiltroEstados({ estados }: Props) {
  const [busca, setBusca]           = useState('');
  const [regiaoFiltro, setRegiaoFiltro] = useState<Regiao | 'Todas'>('Todas');
  const [apenasComAcesso, setApenasComAcesso] = useState(false);
  const [view, setView]             = useState<'estados' | 'municipios'>('estados');
  const inputRef = useRef<HTMLInputElement>(null);

  // Foco automático no campo ao montar
  useEffect(() => { inputRef.current?.focus(); }, []);

  const termoBusca = normaliza(busca);

  // ── Estados filtrados ──────────────────────────────────────────────────────
  const estadosFiltrados = useMemo(() => {
    return estados.filter(e => {
      const matchRegiao  = regiaoFiltro === 'Todas' || e.regiao === regiaoFiltro;
      const matchBusca   = !termoBusca ||
        normaliza(e.nome).includes(termoBusca) ||
        normaliza(e.sigla).includes(termoBusca) ||
        e.municipios.some(m => normaliza(m.nome).includes(termoBusca));
      return matchRegiao && matchBusca;
    });
  }, [estados, regiaoFiltro, termoBusca]);

  // ── Municípios flat filtrados ──────────────────────────────────────────────
  const municipiosFiltrados = useMemo(() => {
    const todos = estados
      .filter(e => regiaoFiltro === 'Todas' || e.regiao === regiaoFiltro)
      .flatMap(e => e.municipios.map(m => ({ ...m, estado: e })));

    return todos
      .filter(m => {
        const matchBusca    = !termoBusca || normaliza(m.nome).includes(termoBusca) || normaliza(m.estado.sigla).includes(termoBusca) || normaliza(m.estado.nome).includes(termoBusca);
        const matchAcesso   = !apenasComAcesso || !!m.videoId;
        return matchBusca && matchAcesso;
      })
      .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  }, [estados, regiaoFiltro, termoBusca, apenasComAcesso]);

  const totalMunComAcesso = estadosFiltrados.reduce(
    (acc, e) => acc + e.municipios.filter(m => m.videoId).length, 0
  );

  const temFiltro = busca !== '' || regiaoFiltro !== 'Todas' || apenasComAcesso;

  function limparFiltros() {
    setBusca('');
    setRegiaoFiltro('Todas');
    setApenasComAcesso(false);
    inputRef.current?.focus();
  }

  return (
    <div>
      {/* ── Barra de busca principal ── */}
      <div style={{
        position: 'relative',
        marginBottom: 14,
      }}>
        {/* Ícone lupa */}
        <div style={{
          position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
          color: 'rgba(214,163,84,0.5)', pointerEvents: 'none', zIndex: 1,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={busca}
          onChange={e => setBusca(e.target.value)}
          placeholder="Buscar estado ou município..."
          style={{
            width: '100%',
            background: 'rgba(214,163,84,0.04)',
            border: '1px solid rgba(214,163,84,0.2)',
            borderRadius: 12,
            padding: '12px 44px 12px 42px',
            color: 'var(--text)',
            fontSize: 14,
            fontFamily: 'Inter, sans-serif',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => { e.currentTarget.style.borderColor = 'rgba(214,163,84,0.5)'; }}
          onBlur={e => { e.currentTarget.style.borderColor = 'rgba(214,163,84,0.2)'; }}
        />
        {/* Botão limpar */}
        {busca && (
          <button
            onClick={() => { setBusca(''); inputRef.current?.focus(); }}
            style={{
              position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
              background: 'rgba(214,163,84,0.12)', border: '1px solid rgba(214,163,84,0.2)',
              borderRadius: '50%', width: 22, height: 22,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--gold)', fontSize: 13, lineHeight: 1,
            }}
          >
            ×
          </button>
        )}
      </div>

      {/* ── Filtros de região (chips) ── */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
        {(['Todas', ...regioes] as const).map(r => {
          const ativo = regiaoFiltro === r;
          return (
            <button
              key={r}
              onClick={() => setRegiaoFiltro(r)}
              style={{
                background: ativo ? 'linear-gradient(135deg, var(--gold-dk), var(--gold))' : 'rgba(214,163,84,0.06)',
                color: ativo ? '#050505' : 'var(--gold)',
                border: `1px solid ${ativo ? 'var(--gold)' : 'rgba(214,163,84,0.2)'}`,
                borderRadius: 20,
                padding: '5px 12px',
                fontSize: 11,
                fontWeight: ativo ? 700 : 400,
                cursor: 'pointer',
                transition: 'all 0.18s',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              }}
            >
              {r === 'Todas' ? 'Todas as Regiões' : regiaoLabel[r]}
            </button>
          );
        })}
      </div>

      {/* ── Linha 2: toggles e stats ── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        flexWrap: 'wrap', marginBottom: 20,
      }}>
        {/* Toggle view estados/municípios */}
        <div style={{
          display: 'flex',
          background: 'rgba(214,163,84,0.06)',
          border: '1px solid rgba(214,163,84,0.15)',
          borderRadius: 10, overflow: 'hidden',
          flexShrink: 0,
        }}>
          {(['estados', 'municipios'] as const).map(v => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                background: view === v ? 'rgba(214,163,84,0.15)' : 'transparent',
                color: view === v ? 'var(--gold)' : 'var(--text-muted)',
                border: 'none',
                padding: '6px 14px',
                fontSize: 11,
                fontWeight: view === v ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.18s',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              {v === 'estados' ? 'Estados' : 'Municípios'}
            </button>
          ))}
        </div>

        {/* Toggle: apenas com acesso (só na view municípios) */}
        {view === 'municipios' && (
          <button
            onClick={() => setApenasComAcesso(v => !v)}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: apenasComAcesso ? 'rgba(214,163,84,0.12)' : 'rgba(214,163,84,0.04)',
              border: `1px solid ${apenasComAcesso ? 'rgba(214,163,84,0.4)' : 'rgba(214,163,84,0.15)'}`,
              borderRadius: 10, padding: '6px 12px',
              cursor: 'pointer', fontSize: 11,
              color: apenasComAcesso ? 'var(--gold)' : 'var(--text-muted)',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.18s',
              flexShrink: 0,
            }}
          >
            <span style={{
              width: 12, height: 12, borderRadius: '50%',
              background: apenasComAcesso ? 'var(--gold)' : 'rgba(214,163,84,0.2)',
              border: '1px solid rgba(214,163,84,0.4)',
              display: 'inline-block', flexShrink: 0,
              transition: 'background 0.18s',
            }} />
            Só participando
          </button>
        )}

        {/* Limpar filtros */}
        {temFiltro && (
          <button
            onClick={limparFiltros}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,100,100,0.25)',
              borderRadius: 10, padding: '6px 12px',
              fontSize: 11, color: 'rgba(255,120,120,0.7)',
              cursor: 'pointer', fontFamily: 'Inter, sans-serif',
              transition: 'all 0.18s',
              flexShrink: 0,
            }}
          >
            Limpar filtros
          </button>
        )}

        {/* Contador de resultados */}
        <div style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
          {view === 'estados'
            ? <><span style={{ color: 'var(--gold)', fontWeight: 600 }}>{estadosFiltrados.length}</span> estado{estadosFiltrados.length !== 1 ? 's' : ''}</>
            : <><span style={{ color: 'var(--gold)', fontWeight: 600 }}>{municipiosFiltrados.length}</span> município{municipiosFiltrados.length !== 1 ? 's' : ''}</>
          }
        </div>
      </div>

      {/* ── Resultados ── */}

      {/* VIEW: ESTADOS */}
      {view === 'estados' && (
        <>
          {estadosFiltrados.length === 0 ? (
            <Vazio termo={busca} onLimpar={limparFiltros} />
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(160px, calc(50% - 5px)), 1fr))',
              gap: 10,
            }}>
              {estadosFiltrados.map(estado => (
                <Link
                  key={estado.id}
                  href={`/${estado.id}`}
                  className="card gold-glow"
                  style={{ padding: '14px 16px', display: 'block', position: 'relative', overflow: 'hidden' }}
                >
                  {/* Sigla decorativa */}
                  <div className="font-display" aria-hidden style={{
                    fontSize: 44, color: 'rgba(214,163,84,0.08)', lineHeight: 1,
                    marginBottom: 4, userSelect: 'none', letterSpacing: '-0.01em',
                  }}>
                    {estado.sigla}
                  </div>
                  <div className="font-display" style={{
                    fontSize: 14, color: 'var(--text-sec)', lineHeight: 1.2,
                    marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>
                    {/* Destaca o termo buscado */}
                    {termoBusca ? <Highlight texto={estado.nome} termo={termoBusca} /> : estado.nome}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span className="badge" style={{ fontSize: 9, padding: '1px 6px' }}>{estado.regiao}</span>
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 4 }}>
                    {estado.municipios.filter(m => m.videoId).length}/{estado.municipios.length} municípios
                  </div>
                  <div style={{ position: 'absolute', bottom: 10, right: 10, color: 'rgba(214,163,84,0.2)', fontSize: 13 }}>→</div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}

      {/* VIEW: MUNICÍPIOS */}
      {view === 'municipios' && (
        <>
          {municipiosFiltrados.length === 0 ? (
            <Vazio termo={busca} onLimpar={limparFiltros} />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {municipiosFiltrados.map(municipio => {
                const temAcesso = !!municipio.videoId;
                if (temAcesso) {
                  return (
                    <Link
                      key={`${municipio.estado.id}-${municipio.id}`}
                      href={`/${municipio.estado.id}/${municipio.id}`}
                      className="card gold-glow"
                      style={{ display: 'block', padding: '12px 16px' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontSize: 14, fontWeight: 600, color: 'var(--text)',
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                          }}>
                            {termoBusca ? <Highlight texto={municipio.nome} termo={termoBusca} /> : municipio.nome}
                          </div>
                          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>
                            {municipio.estado.sigla} · {municipio.estado.nome} · {municipio.estado.regiao}
                          </div>
                        </div>
                        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span className="badge" style={{ fontSize: 9, padding: '2px 7px' }}>
                            {municipio.estado.sigla}
                          </span>
                          <span style={{ color: 'rgba(214,163,84,0.4)', fontSize: 14 }}>→</span>
                        </div>
                      </div>
                    </Link>
                  );
                }
                return (
                  <div
                    key={`${municipio.estado.id}-${municipio.id}`}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: 12, padding: '10px 14px',
                      display: 'flex', alignItems: 'center', gap: 10,
                      cursor: 'not-allowed',
                    }}
                  >
                    {/* Letra inicial apagada */}
                    <div className="font-display" style={{
                      fontSize: 28, color: 'rgba(255,255,255,0.06)',
                      lineHeight: 1, flexShrink: 0, minWidth: 22, userSelect: 'none',
                    }}>
                      {municipio.nome[0]}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: 13, color: 'rgba(255,255,255,0.2)',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        letterSpacing: '0.02em',
                      }}>
                        {municipio.nome}
                      </div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.1)', marginTop: 2 }}>
                        {municipio.estado.sigla} · não integrou ainda
                      </div>
                    </div>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ── Sub-componente: nenhum resultado ──────────────────────────────────────────
function Vazio({ termo, onLimpar }: { termo: string; onLimpar: () => void }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px 16px' }}>
      <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 16 }}>
        {termo
          ? <>Nenhum resultado para <strong style={{ color: 'var(--gold)' }}>"{termo}"</strong></>
          : 'Nenhum resultado para os filtros selecionados'}
      </p>
      <button
        onClick={onLimpar}
        className="btn-outline"
        style={{ fontSize: 12 }}
      >
        Limpar filtros
      </button>
    </div>
  );
}

// ── Sub-componente: destaque do termo buscado ─────────────────────────────────
function Highlight({ texto, termo }: { texto: string; termo: string }) {
  const idx = normaliza(texto).indexOf(termo);
  if (idx === -1) return <>{texto}</>;
  return (
    <>
      {texto.slice(0, idx)}
      <span style={{ color: 'var(--gold-hi)', background: 'rgba(241,200,122,0.12)', borderRadius: 3, padding: '0 1px' }}>
        {texto.slice(idx, idx + termo.length)}
      </span>
      {texto.slice(idx + termo.length)}
    </>
  );
}

function normaliza(s: string) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
