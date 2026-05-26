import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1F1F1F',
      padding: '32px 16px',
      textAlign: 'center',
      background: 'rgba(5,5,5,0.95)',
    }}>
      {/* Linha decorativa + logo */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 16, marginBottom: 14,
      }}>
        <div style={{ height: 1, width: 48, background: 'linear-gradient(to right, transparent, rgba(214,163,84,0.35))' }} />
        <div style={{ animation: 'floatAnim 4s ease-in-out infinite' }}>
          <Logo size={36} />
        </div>
        <div style={{ height: 1, width: 48, background: 'linear-gradient(to left, transparent, rgba(214,163,84,0.35))' }} />
      </div>

      {/* Nome */}
      <p className="font-display" style={{
        fontSize: 13,
        color: 'var(--text-muted)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        marginBottom: 4,
      }}>
        Desafio Cultural — Brasil
      </p>

      {/* Linha dourada fina */}
      <div style={{
        width: 40, height: 1,
        background: 'linear-gradient(to right, transparent, rgba(214,163,84,0.4), transparent)',
        margin: '8px auto',
      }} />

      {/* Copyright */}
      <p style={{ fontSize: 11, color: '#444', marginTop: 4 }}>
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>
    </footer>
  );
}
