import { useEffect } from 'react'
import Cursor from './components/ui/Cursor'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/ui/Footer'

export default function App() {
  useEffect(() => {
    const prefersFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    document.body.style.cursor = prefersFinePointer ? 'none' : 'auto'

    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg)' }}>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
