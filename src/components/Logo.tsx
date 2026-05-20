interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 64, className = '' }: LogoProps) {
  return (
    <div
      style={{ width: size, height: size, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}
      className={className}
    >
      {/* Nova imagem — fundo removido via mix-blend-mode */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.jpeg"
        alt="Desafio Cultural"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          mixBlendMode: 'screen',
          filter: 'contrast(1.1) brightness(1.05)',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />
      {/* Fallback SVG (fica atrás) */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      >
        <defs>
          <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#9A6A2F" />
            <stop offset="40%"  stopColor="#D6A354" />
            <stop offset="70%"  stopColor="#F1C87A" />
            <stop offset="100%" stopColor="#9A6A2F" />
          </linearGradient>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#161616" />
            <stop offset="100%" stopColor="#050505" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="58" fill="url(#goldRing)" />
        <circle cx="60" cy="60" r="54" fill="url(#bgGrad)" />
        <rect x="53" y="30" width="14" height="26" rx="7" fill="url(#goldRing)" />
        <rect x="53" y="36" width="14" height="1.5" fill="#050505" opacity="0.6" />
        <rect x="53" y="41" width="14" height="1.5" fill="#050505" opacity="0.6" />
        <rect x="53" y="46" width="14" height="1.5" fill="#050505" opacity="0.6" />
        <rect x="59" y="56" width="2"  height="10" fill="url(#goldRing)" />
        <path d="M51 66 Q60 72 69 66" stroke="url(#goldRing)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <line x1="60" y1="68" x2="60" y2="74" stroke="url(#goldRing)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="52" y1="74" x2="68" y2="74" stroke="url(#goldRing)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
