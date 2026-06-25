import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'AI/ML',
    icon: '◈',
    skills: [
      { name: 'Scikit-learn / XGBoost', level: 82 },
      { name: 'Pandas / NumPy', level: 85 },
      { name: 'Google Gemini API', level: 78 },
      { name: 'Prompt Engineering', level: 80 },
    ],
  },
  {
    category: 'Full Stack',
    icon: '◉',
    skills: [
      { name: 'React 18 / TypeScript', level: 85 },
      { name: 'Tailwind / shadcn/ui', level: 88 },
      { name: 'Supabase / REST APIs', level: 75 },
      { name: 'Python / Streamlit', level: 80 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '◎',
    skills: [
      { name: 'Microsoft Azure', level: 78 },
      { name: 'Docker', level: 72 },
      { name: 'Git / GitHub / Vercel', level: 88 },
      { name: 'CI/CD', level: 68 },
    ],
  },
]

const techTags = [
  'Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'React 18', 'Vite', 'Tailwind', 'shadcn/ui', 'React Query',
  'Scikit-learn', 'XGBoost', 'RDKit', 'Streamlit', 'Pandas', 'NumPy', 'Supabase', 'Docker', 'Azure', 'Vercel',
  'Git', 'LLMs', 'GenAI',
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: 'clamp(60px, 15vw, 120px) 2rem',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(8rem, 20vw, 20rem)',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.02)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '-0.05em',
      }}>
        SKILLS
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem' }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--text-3)',
            letterSpacing: '0.15em',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: '1.5rem',
          }}>
            <span style={{ width: 32, height: 1, background: 'var(--border-2)', display: 'inline-block' }} />
            Tech Stack
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}>
            What I work<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-2)' }}>
              with
            </span>
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '5rem',
        }}
        className="skills-grid"
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: gi * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                padding: '2rem',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                background: 'var(--surface)',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-2)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.75rem' }}>
                <span style={{ color: 'var(--accent-2)', fontSize: '1.1rem' }}>{group.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-2)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>{group.category}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.85rem',
                        color: 'var(--text)',
                        fontWeight: 500,
                      }}>{skill.name}</span>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-3)',
                      }}>{skill.level}%</span>
                    </div>
                    <div style={{
                      height: 3,
                      background: 'var(--border)',
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: gi * 0.15 + si * 0.08 + 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          height: '100%',
                          background: 'linear-gradient(to right, var(--accent-2), var(--accent))',
                          borderRadius: 2,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-3)',
            letterSpacing: '0.1em',
            marginBottom: '1.25rem',
          }}>ALSO FAMILIAR WITH</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.03 }}
                className="tag"
                style={{ cursor: 'default' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
