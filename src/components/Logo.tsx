interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 64, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#533E06" />
          <stop offset="35%"  stopColor="#C9A012" />
          <stop offset="65%"  stopColor="#F0D060" />
          <stop offset="100%" stopColor="#7A5C09" />
        </linearGradient>
        <linearGradient id="goldFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#A07A0D" />
          <stop offset="50%"  stopColor="#E8C040" />
          <stop offset="100%" stopColor="#8B6A0C" />
        </linearGradient>
        <linearGradient id="micGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#F0D060" />
          <stop offset="100%" stopColor="#8B6A0C" />
        </linearGradient>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#161616" />
          <stop offset="100%" stopColor="#060606" />
        </radialGradient>
      </defs>

      {/* Outer gold ring */}
      <circle cx="60" cy="60" r="58" fill="url(#goldRing)" />
      {/* Inner dark bg */}
      <circle cx="60" cy="60" r="54" fill="url(#bgGrad)" />

      {/* Brazil silhouette — simplified outline */}
      <g opacity="0.55">
        <path
          d="M42 22 L49 19 L56 20 L63 22 L70 27 L74 33 L76 40 L74 48
             L78 56 L76 64 L73 70 L68 75 L61 79 L54 78 L47 74
             L41 68 L36 61 L34 53 L36 44 L33 36 L36 28 Z"
          fill="none"
          stroke="url(#goldFill)"
          strokeWidth="1.8"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* State divider lines (simplified) */}
        <line x1="55" y1="20" x2="55" y2="50" stroke="url(#goldFill)" strokeWidth="0.7" opacity="0.5" />
        <line x1="42" y1="40" x2="76" y2="45" stroke="url(#goldFill)" strokeWidth="0.7" opacity="0.5" />
        <line x1="44" y1="55" x2="75" y2="58" stroke="url(#goldFill)" strokeWidth="0.7" opacity="0.5" />
      </g>

      {/* Microphone body */}
      <rect x="53" y="30" width="14" height="26" rx="7" fill="url(#micGrad)" />

      {/* Mic grille stripes */}
      <rect x="53" y="36" width="14" height="1.5" fill="#060606" opacity="0.6" />
      <rect x="53" y="40" width="14" height="1.5" fill="#060606" opacity="0.6" />
      <rect x="53" y="44" width="14" height="1.5" fill="#060606" opacity="0.6" />
      <rect x="53" y="48" width="14" height="1.5" fill="#060606" opacity="0.6" />

      {/* Mic neck */}
      <rect x="59" y="56" width="2" height="10" fill="url(#micGrad)" />

      {/* Mic arm/stand */}
      <path
        d="M51 66 Q60 72 69 66"
        stroke="url(#micGrad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <line x1="60" y1="68" x2="60" y2="74" stroke="url(#micGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="74" x2="68" y2="74" stroke="url(#micGrad)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Bottom text arc placeholder — just decorative dots */}
      <circle cx="30" cy="90" r="1.2" fill="url(#goldFill)" opacity="0.7" />
      <circle cx="60" cy="96" r="1.5" fill="url(#goldFill)" opacity="0.9" />
      <circle cx="90" cy="90" r="1.2" fill="url(#goldFill)" opacity="0.7" />
    </svg>
  );
}
