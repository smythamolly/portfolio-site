import { featuredProjects, img } from '../data/site'
import Section from './Section'
import './Work.css'

export default function Work() {
  return (
    <Section
      id="work"
      eyebrow="Work"
      title="Two places to start"
      lead="A full design project from brief to final model, and a wider body of making and art."
    >
      <ul className="work">
        {featuredProjects.map((project, i) => (
          <li key={project.title} className="work__item reveal" style={{ '--delay': `${0.06 * i}s` }}>
            <a className="work__card" href={project.href}>
              <figure className="work__figure">
                <img src={img(project.image)} alt={project.alt} loading="lazy" />
              </figure>

              <div className="work__body">
                <div className="work__meta">
                  <span>{project.subtitle}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="work__title">{project.title}</h3>
                <p className="work__summary">{project.summary}</p>

                <ul className="work__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                <span className="work__cue">
                  View project
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
