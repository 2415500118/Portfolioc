import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import profilePhoto from '../../assets/photo.png'

const stats = [
  { value: '2', label: 'Internships' },
  { value: '2+', label: 'Projects Shipped' },
  { value: '2', label: 'Azure Certs' },
  { value: 'B.Tech', label: 'CSE (AI/ML)' },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(60px, 15vw, 120px) 2rem',
        position: 'relative',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Section label */}
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} style={{ marginBottom: '5rem' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-3)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <span style={{ width: 32, height: 1, background: 'var(--border-2)', display: 'inline-block' }} />
              About Me
            </span>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
          className="about-grid"
          >
            {/* Text side */}
            <div>
              <motion.h2 variants={fadeUp} style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}>
                Turning ideas<br />
                into{' '}
                <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-2)' }}>
                  experiences
                </span>
              </motion.h2>

              <motion.p variants={fadeUp} style={{
                color: 'var(--text-2)',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                marginBottom: '1.5rem',
              }}>
                Hey, I'm Ayush — a CSE undergrad at GLA University specializing in AI, ML & Data Science. I build full-stack applications powered by GenAI, combining React frontends with Python backends and real ML pipelines that actually ship to production.
              </motion.p>

              <motion.p variants={fadeUp} style={{
                color: 'var(--text-2)',
                lineHeight: 1.8,
                fontSize: '0.95rem',
                marginBottom: '2.5rem',
              }}>
                I've interned as an ML Engineer (SkillFied) and an AI/ML trainee (Skillcred), where I worked with LLMs, prompt engineering, and GenAI-integrated web apps. I hold Azure AZ-900 & AI-900 certifications and love turning complex ideas into clean, deployable software.
              </motion.p>

              {/* Stats */}
              <motion.div variants={fadeUp} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
              }} className="stats-grid">
                {stats.map(s => (
                  <div key={s.label} style={{
                    padding: '1rem',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    background: 'var(--surface)',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginBottom: 4,
                    }}>{s.value}</div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--text-3)',
                      letterSpacing: '0.06em',
                    }}>{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Photo side */}
            <motion.div variants={fadeUp} style={{ position: 'relative' }}>
              {/* Decorative frame */}
              <div style={{
                position: 'absolute',
                top: 20,
                left: 20,
                right: -20,
                bottom: -20,
                border: '1px solid var(--border-2)',
                borderRadius: '12px',
                zIndex: 0,
              }} />

              {/* Photo container */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '10px',
                overflow: 'hidden',
                minHeight: 640,
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}>
                <img
                  src={profilePhoto}
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(20%) contrast(1.05)',
                    transition: 'filter 0.4s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) contrast(1)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(20%) contrast(1.05)')}
                  onError={e => {
                    // Fallback if image not found
                    e.currentTarget.style.display = 'none'
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      parent.style.display = 'flex'
                      parent.style.alignItems = 'center'
                      parent.style.justifyContent = 'center'
                      parent.innerHTML = `<span style="font-family:var(--font-mono);font-size:0.8rem;color:var(--text-3)">[ photo.png ]</span>`
                    }
                  }}
                />

                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 100%)',
                }} />

                {/* Name tag on photo (moved lower, only 'Developer') */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.9rem',
                  left: '1.5rem',
                  right: '1.5rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--text)',
                    letterSpacing: '-0.02em',
                  }}>Developer</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
