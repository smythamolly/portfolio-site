import { featuredProjects, href, img } from '../data/site'
import './ProjectFooterNav.css'

export default function ProjectFooterNav({ current }) {
  const next = featuredProjects.find((project) => project.to !== current)
  if (!next) return null

  return (
    <nav className="next-project" aria-label="Next project">
      <a className="shell next-project__link" href={href(next)}>
        <figure className="next-project__figure">
          <img src={img(next.image)} alt="" loading="lazy" />
        </figure>

        <div className="next-project__body">
          <span className="next-project__label">Next</span>
          <span className="next-project__title">{next.title}</span>
          <span className="next-project__subtitle">{next.subtitle}</span>
        </div>

        <svg className="next-project__arrow" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
          <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </nav>
  )
}
