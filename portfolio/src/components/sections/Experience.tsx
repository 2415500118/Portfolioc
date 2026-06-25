import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    id: 1,
    title: 'Machine Learning Intern',
    company: 'SkillFied Mentor',
    period: 'Jan 2026 – Feb 2026',
    bullets: [
      'Built end-to-end ML workflows — data preprocessing, feature engineering, and model training using Scikit-learn, Pandas, and NumPy.',
      'Evaluated models with precision, recall, F1-score, and AUC; collaborated on AI/ML problem-solving tasks across team projects.',
    ],
  },
  {
    id: 2,
    title: 'Internship Trainee — AI/ML',
    company: 'Skillcred',
    period: 'Jun 2025 – Jul 2025',
    bullets: [
      'Built AI-integrated full-stack applications using GenAI technologies and LLMs; applied prompt engineering to optimize model outputs.',
      'Integrated AI features into web apps to automate workflows, gaining hands-on experience in real-world GenAI software development.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: 'clamp(60px, 15vw, 80px) 2rem', borderTop: '1px solid var(--border)', background: 'transparent' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-3)',
            letterSpacing: '0.15em',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: '1rem',
          }}>
            <span style={{ width: 32, height: 1, background: 'var(--border-2)', display: 'inline-block' }} />
            Experience
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}>
            Where I've{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-2)' }}>
              worked
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="experience-grid">
          {experiences.map((ex, i) => (
            <motion.div key={ex.id} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.08 }} style={{ padding: '1.75rem', border: '1px solid var(--border)', borderRadius: 12, background: 'var(--surface)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>{ex.title}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-3)' }}>{ex.company}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-3)' }}>{ex.period}</div>
              </div>

              <ul style={{ marginTop: 8, paddingLeft: '1rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                {ex.bullets.map(b => (
                  <li key={b} style={{ marginBottom: 8 }}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#experience { padding: 72px 1rem !important; }
          .experience-grid { grid-template-columns: 1fr !important; }
          .experience-grid > div { padding: 1.25rem !important; }
        }
      `}</style>
    </section>
  )
}
