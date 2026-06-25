import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 2rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', letterSpacing: '0.1em', textDecoration: 'none' }}>
          &lt;dev /&gt;
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="navbar-desktop">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-2)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-2)')}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="https://drive.google.com/drive/folders/1LAW5iVTyKwcOPZfsaEU9k60prh3XqudC?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--bg)',
              background: 'var(--accent)',
              padding: '6px 16px',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              fontWeight: 500,
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Resume ↗
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'var(--text)',
          }}
          className="mobile-menu-btn"
        >
          <div style={{ width: 22, height: 14, position: 'relative' }}>
            <span style={{ position: 'absolute', top: menuOpen ? '50%' : 0, left: 0, right: 0, height: 1, background: 'var(--text)', transform: menuOpen ? 'translateY(-50%) rotate(45deg)' : 'none', transition: 'all 0.3s' }} />
            <span style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'var(--text)', opacity: menuOpen ? 0 : 1, transform: 'translateY(-50%)', transition: 'all 0.3s' }} />
            <span style={{ position: 'absolute', bottom: menuOpen ? '50%' : 0, left: 0, right: 0, height: 1, background: 'var(--text)', transform: menuOpen ? 'translateY(50%) rotate(-45deg)' : 'none', transition: 'all 0.3s' }} />
          </div>
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 64,
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(8,8,8,0.97)',
              padding: '1.25rem 1.5rem 1.5rem',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://drive.google.com/drive/folders/1LAW5iVTyKwcOPZfsaEU9k60prh3XqudC?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                color: 'var(--accent)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          nav { padding: 0 1rem !important; height: 64px !important; }
          .navbar-desktop { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .mobile-menu-btn { cursor: pointer !important; }
        }
      `}</style>
    </>
  )
}
