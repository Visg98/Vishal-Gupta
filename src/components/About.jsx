import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const highlights = [
  'React & Next.js',
  'TypeScript',
  'Component Architecture',
  'Accessibility (WCAG)',
  'Performance Optimization',
  'REST API Integration',
]

export default function About() {
  const headingRef = useScrollReveal()
  const textRef = useScrollReveal()
  const codeRef = useScrollReveal()

  return (
    <section id="about" className="section about-section">
      <h2 ref={headingRef} className="section-heading reveal" data-number="01.">
        About Me
      </h2>

      <div className="about-grid">
        <div ref={textRef} className="about-text reveal">
          <p>
            Hey there! I'm <span className="about-highlight">Vishal</span>, a Frontend Developer
            based in <span className="about-highlight">Bangalore</span> with over{' '}
            <span className="about-highlight">4 years of experience</span>{' '}
            crafting scalable, performant, and accessible web applications.
          </p>

          <p>
            My passion lies in turning complex problems into simple, intuitive interfaces.
            I care deeply about the details — from clean component architecture to pixel-perfect
            UI and inclusive design that works for everyone.
          </p>

          <p>
            I've had the privilege of working on large-scale production applications at
            <span className="about-highlight"> ANZ Bank</span>, where I built critical
            financial tools used by thousands of customers daily.
          </p>

          <p>Here are some technologies I work with regularly:</p>

          <ul className="tech-list">
            {highlights.map((tech) => (
              <li key={tech}>
                <span className="tech-arrow">▹</span>
                {tech}
              </li>
            ))}
          </ul>

          <div className="about-links">
            <a
              href="https://www.linkedin.com/in/vishalgupta-dev/"
              target="_blank"
              rel="noreferrer"
              className="about-link-btn"
            >
              View LinkedIn
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a
              href="https://github.com/Visg98"
              target="_blank"
              rel="noreferrer"
              className="about-link-btn"
            >
              View GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        <div ref={codeRef} className="about-code-card reveal reveal-delay-2">
          <div className="code-card-header">
            <span className="code-dot red" />
            <span className="code-dot yellow" />
            <span className="code-dot green" />
            <span className="code-card-filename">vishal.js</span>
          </div>
          <pre className="code-card-body">
            <code>
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">vishal</span>{' '}
              <span className="code-operator">=</span>{' '}
              <span className="code-punctuation">{'{'}</span>{'\n'}
              {'  '}<span className="code-property">name</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-string">'Vishal Gupta'</span>
              <span className="code-punctuation">,</span>{'\n'}
              {'  '}<span className="code-property">role</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-string">'Frontend Developer'</span>
              <span className="code-punctuation">,</span>{'\n'}
              {'  '}<span className="code-property">experience</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-string">'4+ years'</span>
              <span className="code-punctuation">,</span>{'\n'}
              {'  '}<span className="code-property">location</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-string">'Bangalore'</span>
              <span className="code-punctuation">,</span>{'\n'}
              {'  '}<span className="code-property">focus</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-punctuation">['</span>
              <span className="code-string">React</span>
              <span className="code-punctuation">', '</span>
              <span className="code-string">TypeScript</span>
              <span className="code-punctuation">', '</span>
              <span className="code-string">Accessibility</span>
              <span className="code-punctuation">'],</span>{'\n'}
              {'  '}<span className="code-property">values</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-punctuation">{'{'}</span>{'\n'}
              {'    '}<span className="code-property">cleanCode</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-boolean">true</span>
              <span className="code-punctuation">,</span>{'\n'}
              {'    '}<span className="code-property">userFirst</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-boolean">true</span>
              <span className="code-punctuation">,</span>{'\n'}
              {'    '}<span className="code-property">accessibility</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-string">'always'</span>
              <span className="code-punctuation">,</span>{'\n'}
              {'  '}<span className="code-punctuation">{'}'}</span>
              <span className="code-punctuation">,</span>{'\n'}
              {'  '}<span className="code-property">openToWork</span>
              <span className="code-punctuation">:</span>{' '}
              <span className="code-boolean">true</span>
              <span className="code-punctuation">,</span>{'\n'}
              <span className="code-punctuation">{'}'}</span>
            </code>
          </pre>
          <div className="code-card-glow" />
        </div>
      </div>
    </section>
  )
}
