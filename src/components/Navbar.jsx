import { useState, useEffect } from 'react'
import './Navbar.scss'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      setHidden(currentY > lastScrollY && currentY > 200)
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <nav className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="Vishal Gupta">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <rect width="42" height="42" rx="8" stroke="#64ffda" strokeWidth="1.5" fill="none" />
            <text x="21" y="28" fontFamily="Fira Code, monospace" fontSize="16" fontWeight="600" fill="#64ffda" textAnchor="middle">VG</text>
          </svg>
        </a>

        <ul className="nav-links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="nav-link">{label}</a>
            </li>
          ))}
          <li>
            <a
              href="mailto:vishalgvibrant98@gmail.com"
              className="nav-btn"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="mobile-nav-link" onClick={handleLinkClick}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:vishalgvibrant98@gmail.com"
              className="nav-btn mobile-hire"
              onClick={handleLinkClick}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
