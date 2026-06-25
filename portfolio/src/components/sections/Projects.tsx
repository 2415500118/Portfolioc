import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'VoxGuard — Voice Authentication',
    description: 'Speaker identification system using deep learning. Enroll voice profiles and verify users by voice. Includes mel-spectrogram analysis with Resemblyzer, Firebase authentication, user history tracking, recording quality monitoring, and role-based enrollment authorization.',
    tags: ['Python', 'FastAPI', 'PyTorch', 'Librosa', 'Resemblyzer', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
    category: 'AI / Full Stack',
    year: '2026',
    link: 'https://mini-project-7k5l.onrender.com/',
    github: 'https://github.com/2415500118/Vox-Guard',
    featured: true,
    gradient: 'linear-gradient(135deg, #101a2a 0%, #1f2f4a 100%)',
    accent: '#89aef5',
  },
  {
    id: 2,
    title: 'BioActivity ML — Drug Screening',
    description: 'ML pipeline to predict Sertraline-like molecular bioactivity using RDKit molecular descriptors. Trained XGBoost and Gradient Boosting classifiers with AUC/F1 evaluation. Includes a Streamlit prediction UI for raw SMILES input, containerized with Docker.',
    tags: ['Python', 'RDKit', 'Scikit-learn', 'XGBoost', 'Streamlit', 'Docker'],
    category: 'ML',
    year: '2024',
    link: 'https://ml-project-9bp7.onrender.com',
    github: 'https://github.com/2415500118/ML_Project',
    featured: true,
    gradient: 'linear-gradient(135deg, #081116 0%, #16222a 100%)',
    accent: '#c49cdd',
  },
  {
    id: 3,
    title: 'CityCraft — AI Travel Planner',
    description: 'Full-stack travel planning app powered by Google Gemini AI for itinerary generation. Uses Supabase for auth/backend, Makcorps API for live hotel data, and React Query for efficient state management. Deployed on Vercel with CI/CD.',
    tags: ['React 18', 'TypeScript', 'Supabase', 'Gemini API', 'Tailwind', 'Vercel'],
    category: 'Full Stack',
    year: '2025',
    link: '#',
    github: 'https://github.com/2415500118/SkillCred01',
    featured: true,
    gradient: 'linear-gradient(135deg, #071018 0%, #0b1f2a 100%)',
    accent: '#6ec1b4',
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'AI / Full Stack']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hovered, setHovered] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section
      id="projects"
      ref={ref}
      style={{ padding: 'clamp(60px, 15vw, 120px) 2rem', borderTop: '1px solid var(--border)' }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
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
              Selected Work
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
            }}>
              Things I've{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-2)' }}>
                built
              </span>
            </h2>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.06em',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent-2)' : 'var(--border)',
                  background: activeCategory === cat ? 'rgba(196,169,110,0.1)' : 'transparent',
                  color: activeCategory === cat ? 'var(--accent)' : 'var(--text-3)',
                  cursor: 'none',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="projects-grid">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === project.id ? project.gradient : 'var(--surface)',
                  border: '1px solid',
                  borderColor: hovered === project.id ? project.accent + '33' : 'var(--border)',
                  borderRadius: '12px',
                  padding: '2rem',
                  transition: 'all 0.4s ease',
                  transform: hovered === project.id ? 'translateY(-4px)' : 'none',
                  cursor: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--text-3)',
                      border: '1px solid var(--border)',
                      padding: '2px 8px',
                      borderRadius: '100px',
                      letterSpacing: '0.06em',
                    }}>{project.year}</span>
                    {project.featured && (
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        color: project.accent,
                        letterSpacing: '0.1em',
                      }}>★ FEATURED</span>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <a href={project.github} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-3)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                    >GitHub ↗</a>
                    <a href={project.link} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: project.accent,
                      textDecoration: 'none',
                    }}>Live ↗</a>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                }}>{project.title}</h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-2)',
                  lineHeight: 1.7,
                  flex: 1,
                }}>{project.description}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--text-2)',
            textDecoration: 'none',
            letterSpacing: '0.06em',
            borderBottom: '1px solid var(--border-2)',
            paddingBottom: 2,
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent-2)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)'; e.currentTarget.style.borderColor = 'var(--border-2)' }}
          >
            View all projects on GitHub ↗
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
