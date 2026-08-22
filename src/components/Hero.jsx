import { profile } from '../data/site'
import ArchMark from './ArchMark'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="hero__qualification">{profile.qualification}</p>

          <h1 className="hero__title">{profile.intro}</h1>
          <p className="hero__standfirst">{profile.standfirst}</p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#work">
              See the work
            </a>
            <a className="btn btn--quiet" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <ArchMark className="hero__mark" />
      </div>
    </section>
  )
}
