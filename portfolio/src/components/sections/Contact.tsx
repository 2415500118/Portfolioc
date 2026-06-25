import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const email = 'ayushgangwar8887@gmail.com'

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('deAkfDAZFjCeoeavC') // Get this from emailjs.com dashboard
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      await emailjs.send(
        'service_x2fb82a', // Get this from emailjs.com
        'template_ts1n6y4', // Get this from emailjs.com
        {
          to_email: email,
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        }
      )
      setSending(false)
      setSent(true)
      setFormState({ name: '', email: '', message: '' })
      // Reset sent state after 5 seconds
      setTimeout(() => setSent(false), 5000)
    } catch (err) {
      setSending(false)
      setError('Failed to send message. Please try again.')
      console.error('EmailJS error:', err)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '12px 16px',
    fontFamily: 'var(--font-display)',
    fontSize: '0.9rem',
    color: 'var(--text)',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: 'clamp(60px, 15vw, 120px) 2rem',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 800,
        height: 400,
        background: 'radial-gradient(ellipse at bottom, rgba(232,213,176,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}
        className="contact-grid"
        >
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
              Get In Touch
            </span>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}>
              Let's build<br />
              something{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-2)' }}>
                great
              </span>
            </h2>

            <p style={{
              color: 'var(--text-2)',
              lineHeight: 1.8,
              fontSize: '0.95rem',
              marginBottom: '3rem',
            }}>
              I'm currently open to new opportunities — freelance projects,
              full-time roles, or just an interesting conversation. Reach out and I'll get back to you.
            </p>

            {/* Email copy */}
            <div
              onClick={copyEmail}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 20px',
                border: '1px solid var(--border-2)',
                borderRadius: '8px',
                cursor: 'none',
                transition: 'all 0.2s',
                marginBottom: '2rem',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-2)'; e.currentTarget.style.background = 'rgba(196,169,110,0.05)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.background = 'transparent' }}
            >
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text)' }}>{email}</span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: copied ? 'var(--green)' : 'var(--text-3)',
                letterSpacing: '0.06em',
                transition: 'color 0.2s',
              }}>
                {copied ? 'COPIED ✓' : 'COPY'}
              </span>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'GitHub', handle: '@2415500118', href: 'https://github.com/2415500118' },
                { label: 'LinkedIn', handle: 'Ayush Gangwar', href: 'https://www.linkedin.com/in/ayush-gangwar' },
                { label: 'Phone', handle: '+91 8418942853', href: 'tel:+918418942853' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: '1px solid var(--border)',
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-3)', letterSpacing: '0.06em' }}>{s.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text)', fontWeight: 600 }}>{s.handle} ↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right side — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {sent ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 2rem',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                background: 'var(--surface)',
                textAlign: 'center',
                gap: '1rem',
              }}>
                <div style={{ fontSize: '3rem' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>Message sent!</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>Thanks for reaching out. I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                padding: '2.5rem',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                background: 'var(--surface)',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                  SEND A MESSAGE
                </div>

                {error && (
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#ef4444',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {error}
                  </div>
                )}

                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', display: 'block', marginBottom: 6, letterSpacing: '0.06em' }}>NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-2)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', display: 'block', marginBottom: 6, letterSpacing: '0.06em' }}>EMAIL</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-2)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-3)', display: 'block', marginBottom: 6, letterSpacing: '0.06em' }}>MESSAGE</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-2)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    background: sending ? 'var(--surface-2)' : 'var(--accent)',
                    color: sending ? 'var(--text-2)' : 'var(--bg)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'none',
                    transition: 'all 0.2s',
                    letterSpacing: '-0.01em',
                  }}
                  onMouseEnter={e => { if (!sending) e.currentTarget.style.background = 'var(--text)' }}
                  onMouseLeave={e => { if (!sending) e.currentTarget.style.background = 'var(--accent)' }}
                >
                  {sending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
