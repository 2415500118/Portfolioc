export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
        © {year} — Designed &amp; built with ♥
      </span>

      <a href="#" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--accent)',
        textDecoration: 'none',
        letterSpacing: '0.06em',
        transition: 'opacity 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        &lt;dev /&gt;
      </a>

      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.06em' }}>
        Back to top ↑
      </span>

      <style>{`
        @media (max-width: 768px) {
          footer {
            padding: 1.5rem 1rem !important;
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}
