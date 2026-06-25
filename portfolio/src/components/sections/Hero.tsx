import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['Full Stack Developer', 'AI/ML Engineer', 'GenAI Builder', 'React + Python Dev']

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let i = 0
    let charIdx = 0
    let isDeleting = false
    let timer: ReturnType<typeof setTimeout>

    const type = () => {
      const current = ROLES[i % ROLES.length]
      const el = roleRef.current
      if (!el) return

      if (!isDeleting) {
        el.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) {
          isDeleting = true
          timer = setTimeout(type, 1800)
          return
        }
      } else {
        el.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          isDeleting = false
          i++
        }
      }
      timer = setTimeout(type, isDeleting ? 40 : 70)
    }

    timer = setTimeout(type, 600)
    return () => clearTimeout(timer)
  }, [])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 2rem 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(42,42,42,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(42,42,42,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        mask: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
        WebkitMask: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
      }} />

      {/* Glow orb */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(232,213,176,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative' }}>
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Availability badge */}
          <motion.div variants={item} style={{ marginBottom: '2rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-2)',
              border: '1px solid var(--border-2)',
              padding: '5px 14px',
              borderRadius: '100px',
              letterSpacing: '0.06em',
            }}>
              <span style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--green)',
                boxShadow: '0 0 8px var(--green)',
                animation: 'pulse 2s infinite',
              }} />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 variants={item} style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 7.5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            marginBottom: '1rem',
            color: 'var(--text)',
          }}>
            Building<br />
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--accent-2)',
            }}>digital</span>
            {' '}things<br />
            that matter.
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={item} style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
            color: 'var(--text-2)',
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <span style={{ color: 'var(--accent)' }}>→</span>
            <span ref={roleRef} />
            <span style={{
              display: 'inline-block',
              width: 2,
              height: '1em',
              background: 'var(--accent)',
              animation: 'blink 1s steps(1) infinite',
            }} />
          </motion.div>

          {/* Description */}
          <motion.p variants={item} style={{
            maxWidth: 520,
            color: 'var(--text-2)',
            fontSize: '1rem',
            lineHeight: 1.7,
            marginBottom: '3rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
          }}>
            CS undergrad @ GLA University specializing in AI, ML & Data Science. I build full-stack apps powered by GenAI — from React frontends to ML pipelines deployed with Docker.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--accent)',
              color: 'var(--bg)',
              padding: '14px 28px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'all 0.2s',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--text)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              View My Work →
            </a>

            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'transparent',
              color: 'var(--text)',
              padding: '14px 28px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '0.9rem',
              border: '1px solid var(--border-2)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-2)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social row */}
          <motion.div variants={item} style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.1em' }}>FIND ME ON</span>
            <div style={{ flex: 1, height: 1, background: 'var(--border)', maxWidth: 40 }} />
            {[
              { label: 'GitHub', href: 'https://github.com/2415500118' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-gangwar' },
              { label: 'Email', href: 'mailto:ayushgangwar8887@gmail.com' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-3)',
                  textDecoration: 'none',
                  letterSpacing: '0.06em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
              >
                {s.label} ↗
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.1em', writingMode: 'vertical-rl' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--text-3), transparent)' }}
        />
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.4 } }
        
        @media (max-width: 768px) {
          #home { padding: 80px 1.5rem 60px !important; }
        }
      `}</style>
    </section>
  )
}
