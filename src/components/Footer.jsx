import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="https://github.com/Visg98" target="_blank" rel="noreferrer" className="footer-credit">
          <span>Designed & Built by</span>
          <strong>Vishal Gupta</strong>
        </a>
        <p className="footer-stack">
          Built with{' '}
          <span className="footer-tech">React</span>
          {' · '}
          <span className="footer-tech">Vite</span>
        </p>
      </div>
    </footer>
  )
}
