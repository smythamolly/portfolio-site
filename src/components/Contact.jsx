import { profile } from '../data/site'
import Section from './Section'
import './Contact.css'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Start a conversation" className="section--alt">
      <div className="contact reveal">
        <p className="contact__lead">
          I take on a small number of projects at a time. Send a short outline of what you're
          working on and I'll respond within two business days.
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
