import { profile } from '../data/site'
import Art from './art/Art'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <div className="hero__copy">
          <div className="hero__titleblock">
            <h1 className="hero__title">{profile.name}</h1>
            <Art name="flower" className="hero__bloom" width="clamp(38px, 5vw, 58px)" eager />
          </div>

          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__bio">
            {profile.bioPlaceholder && (
              <p className="hero__placeholder">
                Placeholder text — replace <code>bio</code> in <code>src/content/site.json</code>,
                then delete <code>bioPlaceholder</code> to remove this note.
              </p>
            )}

            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#projects">
              See the projects
            </a>
            <a className="btn btn--quiet" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <div className="hero__art">
          <Art name="bulb" className="hero__bulb" eager />
        </div>
      </div>
    </section>
  )
}
