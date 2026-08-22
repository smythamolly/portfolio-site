import { about, profile } from '../data/site'
import Section from './Section'
import './About.css'

export default function About() {
  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="about">
        <div className="about__body reveal">
          {profile.bioPlaceholder && (
            <p className="about__placeholder">
              Placeholder text — replace <code>bio</code> in <code>src/content/site.json</code>,
              then delete <code>bioPlaceholder</code> to remove this note.
            </p>
          )}

          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}

          <a className="link-arrow" href="#contact">
            Get in touch
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <dl className="about__details reveal" style={{ '--delay': '0.08s' }}>
          {profile.details.map((detail) => (
            <div key={detail.label} className="about__detail">
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
