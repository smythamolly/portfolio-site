import { contact, profile } from '../data/site'
import Art from './art/Art'
import Section from './Section'
import './Contact.css'

export default function Contact() {
  return (
    <Section
      id="contact"
      title={contact.title}
      art={<Art name="bulb" width="clamp(72px, 9vw, 104px)" />}
      className="section--alt"
    >
      <div className="contact reveal">
        <p className="contact__lead">{contact.lead}</p>

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
