import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '⚛️',
    color: '#61dafb',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'Redux / Context API', level: 88 },
    ],
  },
  {
    title: 'UI & Styling',
    icon: '🎨',
    color: '#ff6b9d',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'SCSS / Sass', level: 88 },
      { name: 'Responsive Design', level: 92 },
      { name: 'CSS Animations', level: 82 },
    ],
  },
  {
    title: 'Tools & Practices',
    icon: '🛠️',
    color: '#64ffda',
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'Playwright Testing', level: 80 },
      { name: 'Accessibility (WCAG)', level: 88 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Performance Optimization', level: 85 },
    ],
  },
]

function SkillBar({ name, level, color }) {
  const ref = useScrollReveal()

  return (
    <div className="skill-item">
      <div className="skill-label">
        <span className="skill-name">{name}</span>
        <span className="skill-percent" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div
          ref={ref}
          className="skill-fill reveal"
          data-level={level}
          style={{ '--bar-color': color, '--bar-width': `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const headingRef = useScrollReveal()

  return (
    <section id="skills" className="section skills-section">
      <h2 ref={headingRef} className="section-heading reveal" data-number="02.">
        Tech Stack
      </h2>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <SkillCategory key={cat.title} category={cat} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}

function SkillCategory({ category, delay }) {
  const cardRef = useScrollReveal()

  return (
    <div
      ref={cardRef}
      className="skill-card reveal"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="skill-card-header">
        <span className="skill-card-icon" role="img" aria-label={category.title}>
          {category.icon}
        </span>
        <h3 className="skill-card-title" style={{ color: category.color }}>
          {category.title}
        </h3>
      </div>
      <div className="skill-bars">
        {category.skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} color={category.color} />
        ))}
      </div>
    </div>
  )
}
