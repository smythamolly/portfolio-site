import { capabilities } from '../data/site'
import Section from './Section'
import './Services.css'

export default function Services() {
  return (
    <Section
      id="capabilities"
      eyebrow="Capabilities"
      title="How I can help"
      lead="Most engagements draw on two of these three areas."
    >
      <ul className="services">
        {capabilities.map((item, i) => (
          <li key={item.title} className="services__item reveal" style={{ '--delay': `${0.06 * i}s` }}>
            <h3 className="services__title">{item.title}</h3>
            <p className="services__body">{item.body}</p>
            <ul className="services__skills">
              {item.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
