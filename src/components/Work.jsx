import { projects } from '../data/site'
import Section from './Section'
import './Work.css'

export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Recent projects"
      lead="A sample of engagements across design systems, product interfaces, and front-end delivery."
    >
      <ul className="work">
        {projects.map((project, i) => (
          <li key={project.title} className="work__row reveal" style={{ '--delay': `${0.05 * i}s` }}>
            <a className="work__link" href={project.href}>
              <span className="work__year">{project.year}</span>

              <span className="work__body">
                <span className="work__heading">
                  <h3 className="work__title">{project.title}</h3>
                  <span className="work__category">{project.category}</span>
                </span>
                <span className="work__summary">{project.summary}</span>
                <span className="work__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </span>
              </span>

              <span className="work__cue" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
