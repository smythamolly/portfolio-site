import { profile } from '../data/site'
import { Blossom, BulbVase, Butterfly, Leaf } from './art/Motifs'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <div className="hero__copy">
          <div className="hero__titleblock">
            <h1 className="hero__title">{profile.name}</h1>
            <Blossom className="hero__bloom hero__bloom--a" size={30} />
            <Blossom className="hero__bloom hero__bloom--b" size={20} />
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
          <BulbVase className="hero__bulb" size={320} />
          <Butterfly className="hero__butterfly" size={44} tone="pink" />
          <Leaf className="hero__leaf" size={52} rotate={22} />
        </div>
      </div>
    </section>
  )
}
