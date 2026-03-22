import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

const featuredProjects = [
  {
    id: 0,
    title: 'Build Pipeline',
    description:
      'A visual pipeline builder where users can create and connect nodes to design complex workflows. Features a drag-and-drop interface built with React Flow, custom reusable node components, and a modular frontend architecture that makes it intuitive to compose data pipelines.',
    tech: ['React', 'React Flow', 'JavaScript', 'CSS', 'Python', 'Fast API'],
    github: 'https://github.com/Visg98/Build-Pipeline',
    live: 'https://build-pipeline.netlify.app/',
    icon: '⚙️',
  },
  {
    id: 1,
    title: 'Scratch Starter Project',
    description:
      'Developed a beginner-friendly Scratch starter project to simplify building interactive animations and games, providing a structured foundation to learn core programming concepts like events, loops, and logic through block-based coding. Designed reusable components and a pre-configured project setup to enable faster development, while improving accessibility and ease of use through well-organized assets, scripts, and workflows.',
    tech: ['React', 'Build Tools', 'Automation', 'JavaScript', 'CSS'],
    github: 'https://github.com/Visg98/scratch-starter-project',
    live: 'https://scratch-starter-vishal.netlify.app/',
    icon: '🧩',
  },
  {
    id: 2,
    title: 'Movie Explorer',
    description:
      'A fully responsive React application that lets users discover and browse movies using a public movie API. Features skeleton loading states for smooth UX, rating overlays on posters, pagination, and optimized image loading for fast performance.',
    tech: ['React', 'JavaScript', 'REST API', 'CSS'],
    github: 'https://github.com/Visg98/Movie-Explorer',
    live: 'https://movie-explorer-ap.netlify.app/',
    icon: '🎬',
  },
  {
    id: 3,
    title: 'Home Loan Borrowing Calculator',
    client: 'ANZ Bank',
    description:
      'Dynamic financial calculator for ANZ Bank that helps customers estimate their borrowing capacity. Built with complex financial calculation logic, robust form validation, API integration, and full WCAG accessibility compliance.',
    tech: ['React', 'TypeScript', 'REST APIs'],
    github: null,
    live: 'https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/',
    icon: '🧮',
  },
  {
    id: 4,
    title: 'FindANZ',
    client: 'ANZ Bank',
    description:
      'Location-based search feature for ANZ Bank that lets customers find nearby branches and ATMs across Australia. Integrated interactive maps, filtering options for branches vs ATMs, and optimised for fast performance and great UX.',
    tech: ['React', 'TypeScript', 'REST APIs', 'Maps Integration'],
    github: null,
    live: 'https://www.anz.com.au/locations/',
    icon: '📍',
  },
]

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function FeaturedProjectCard({ project, index }) {
  const ref = useScrollReveal()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`featured-project reveal ${isEven ? '' : 'featured-project--reverse'}`}
    >
      <div className="featured-project-content">
        <p className="featured-label">
          {project.client ? `Professional Project · ${project.client}` : 'Featured Project'}
        </p>
        <h3 className="featured-title">{project.title}</h3>
        <div className="featured-desc-card">
          <p>{project.description}</p>
        </div>
        <ul className="featured-tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="featured-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Repository" className="icon-link">
              <GitHubIcon />
            </a>
          )}
          <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo" className="icon-link">
            <ExternalIcon />
          </a>
        </div>
      </div>

      <div className="featured-project-visual">
        <a href={project.live} target="_blank" rel="noreferrer" className="featured-visual-link" aria-label={`Visit ${project.title}`}>
          <div className="featured-mockup">
            <div className="mockup-bar">
              <div className="mockup-dots">
                <span /><span /><span />
              </div>
              <div className="mockup-url">{project.live.replace('https://', '')}</div>
            </div>
            <div className="mockup-screen">
              <div className="mockup-icon">{project.icon}</div>
              <p className="mockup-project-name">{project.title}</p>
              {project.client && (
                <span className="mockup-client-badge">{project.client}</span>
              )}
              <div className="mockup-lines">
                <div /><div /><div />
              </div>
            </div>
          </div>
          <div className="featured-visual-overlay" />
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const headingRef = useScrollReveal()

  return (
    <section id="projects" className="section projects-section">
      <h2 ref={headingRef} className="section-heading reveal" data-number="03.">
        Things I've Built
      </h2>

      <div className="featured-projects">
        {featuredProjects.map((p, i) => (
          <FeaturedProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
