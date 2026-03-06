import { useState, useEffect } from 'react'
import './Hero.scss'

const roles = [
  'Frontend Developer',
  'React Specialist',
  'TypeScript Enthusiast',
  'Accessibility Advocate',
  'UI Craftsman',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" className="hero">
      <div className={`hero-content ${mounted ? 'mounted' : ''}`}>
        <p className="hero-greeting reveal-hero" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </p>

        <h1 className="hero-name reveal-hero" style={{ animationDelay: '200ms' }}>
          Vishal Gupta.
        </h1>

        <h2 className="hero-tagline reveal-hero" style={{ animationDelay: '300ms' }}>
          <span className="typed-text">{displayed}</span>
          <span className="cursor" aria-hidden="true" />
        </h2>

        <p className="hero-description reveal-hero" style={{ animationDelay: '400ms' }}>
          Frontend Developer with{' '}
          <span className="highlight">4+ years of experience</span> building scalable,
          user-friendly web applications. I specialize in{' '}
          <span className="highlight">React</span> &{' '}
          <span className="highlight">TypeScript</span>, turning complex problems into
          simple, intuitive interfaces with a focus on performance and accessibility.
        </p>

        <div className="hero-cta reveal-hero" style={{ animationDelay: '500ms' }}>
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="hero-scroll-hint reveal-hero" style={{ animationDelay: '700ms' }}>
          <div className="scroll-line" />
          <span>scroll</span>
        </div>
      </div>

      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
    </section>
  )
}
