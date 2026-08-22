import { profile } from '../data/site'
import Section from './Section'
import './Contact.css'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch" className="section--alt">
      <div className="contact reveal">
        <p className="contact__lead">
          I'm looking for placements, studio experience and projects where I can be involved in
          making as well as designing. Do get in touch.
        </p>

        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <ul className="contact__socials">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
