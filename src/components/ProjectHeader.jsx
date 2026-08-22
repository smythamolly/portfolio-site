import { img, routes } from '../data/site'
import './ProjectHeader.css'

export default function ProjectHeader({ project }) {
  return (
    <header className="project-header">
      <div className="shell">
        <a className="project-header__back" href={routes.home}>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
            <path d="M16 10H4M9 5l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All work
        </a>

        <div className="project-header__meta">
          <span>{project.subtitle}</span>
          <span>{project.year}</span>
        </div>

        <h1 className="project-header__title">{project.title}</h1>
        <p className="project-header__intro">{project.intro}</p>

        <dl className="project-header__facts">
          {project.meta.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="shell">
        <figure className="project-header__hero">
          <img
            src={img(project.hero.image)}
            alt={project.hero.alt}
            width={project.hero.w}
            height={project.hero.h}
          />
        </figure>
      </div>
    </header>
  )
}
