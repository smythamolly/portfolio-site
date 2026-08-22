import { profile } from '../data/site'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell">
        <p className="hero__status">
          <span className="hero__dot" aria-hidden="true" />
          {profile.availability}
        </p>

        <h1 className="hero__title">{profile.intro}</h1>

        <div className="hero__meta">
          <p className="hero__role">{profile.role}</p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#work">
              Selected work
            </a>
            <a className="btn btn--quiet" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
