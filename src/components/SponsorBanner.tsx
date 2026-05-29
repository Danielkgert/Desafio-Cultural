'use client';
// SponsorBanner.tsx — responsivo para mobile
// No mobile: 1 quadrado grande por linha (scroll horizontal ou 1 coluna)
// No desktop: 3 quadrados lado a lado
// Para ativar um anúncio: passe adImageUrl e adLink no slot correspondente.

import { useEffect, useState } from 'react';

interface AdSlot {
  id: string;
  adLink?: string;
  adImageUrl?: string;
  adTitle?: string;
}

interface SponsorBannerProps {
  count?: number;
  slots?: AdSlot[];
}

function AdSquare({ slot, isMobile }: { slot: AdSlot; isMobile: boolean }) {
  const hasAd = Boolean(slot.adImageUrl);

  const box = (
    <div
      className="ad-square"
      style={{
        width: '100%',
        aspectRatio: isMobile ? '16 / 9' : '1 / 1',
        borderRadius: isMobile ? 12 : 14,
        overflow: 'hidden',
        position: 'relative',
        background: hasAd ? 'transparent' : '#262626',
        border: hasAd
          ? '1px solid rgba(214,163,84,0.2)'
          : '1.5px dashed #3a3a3a',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? 14 : 10,
        padding: isMobile ? '0 20px' : '0',
        cursor: hasAd ? 'pointer' : 'default',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        boxSizing: 'border-box',
      }}
    >
      {hasAd ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={slot.adImageUrl}
          alt={slot.adTitle ?? 'Anúncio'}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <>
          {/* Ícone */}
          <div style={{
            width: isMobile ? 48 : 44,
            height: isMobile ? 48 : 44,
            borderRadius: '50%',
            background: '#303030',
            border: '1px solid #424242',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#777',
            flexShrink: 0,
          }}>
            <svg
              width={isMobile ? 22 : 20}
              height={isMobile ? 22 : 20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 11v2a1 1 0 001 1h2l4 4V7L6 11H4a1 1 0 00-1 1z"/>
              <path d="M20 8c.9 1 1.5 2.4 1.5 3.9S20.9 15 20 16"/>
              <path d="M17 10.5c.5.6.9 1.5.9 2.5s-.4 1.9-.9 2.5"/>
            </svg>
          </div>

          {/* Texto */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 4 : 6,
          }}>
            <div style={{
              fontSize: isMobile ? 14 : 13,
              fontWeight: 700,
              color: '#6a6a6a',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              lineHeight: 1.3,
              fontFamily: 'Inter, sans-serif',
              textAlign: isMobile ? 'left' : 'center',
            }}>
              {isMobile ? 'Adicione seu anúncio aqui' : <>Adicione o seu<br />anúncio aqui</>}
            </div>
            <div style={{
              fontSize: isMobile ? 11 : 10,
              color: '#484848',
              fontFamily: 'Inter, sans-serif',
              lineHeight: 1.5,
              textAlign: isMobile ? 'left' : 'center',
            }}>
              {isMobile ? 'contato@desafiocultural.com.br' : (
                <>Espaço publicitário<br />
                <span style={{ color: '#3e3e3e' }}>contato@desafiocultural.com.br</span></>
              )}
            </div>
          </div>
        </>
      )}

      {/* Badge PATROCINADO */}
      <span style={{
        position: 'absolute',
        top: 7,
        left: 8,
        fontSize: 8,
        color: '#555',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        userSelect: 'none',
        background: '#1c1c1c',
        padding: '2px 6px',
        borderRadius: 4,
      }}>
        PATROCINADO
      </span>
    </div>
  );

  if (hasAd && slot.adLink) {
    return (
      <a
        href={slot.adLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', width: '100%', textDecoration: 'none' }}
      >
        {box}
      </a>
    );
  }

  return box;
}

export default function SponsorBanner({ count = 3, slots }: SponsorBannerProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const finalSlots: AdSlot[] = Array.from({ length: count }, (_, i) => ({
    id: `slot-${i}`,
    ...(slots?.[i] ?? {}),
  }));

  return (
    <div style={{ width: '100%' }}>
      {/* Cabeçalho */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <span style={{
          fontSize: 9,
          color: '#484848',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontFamily: 'Inter, sans-serif',
          whiteSpace: 'nowrap',
        }}>
          Espaço Patrocinado
        </span>
        <div style={{
          flex: 1,
          height: 1,
          background: 'linear-gradient(to right, #303030, transparent)',
        }} />
      </div>

      {/* Grade */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : `repeat(${count}, 1fr)`,
        gap: isMobile ? 8 : 10,
        width: '100%',
      }}>
        {finalSlots.map(slot => (
          <AdSquare key={slot.id} slot={slot} isMobile={isMobile} />
        ))}
      </div>

      <style>{`
        .ad-square:hover {
          border-color: #555 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.5);
        }
      `}</style>
    </div>
  );
}
