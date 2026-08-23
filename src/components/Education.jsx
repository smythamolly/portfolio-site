import { education } from '../data/site'
import Section from './Section'
import './Education.css'

export default function Education() {
  return (
    <Section id="education" title={education.title}>
      <ul className="education reveal">
        {education.entries.map((entry) => (
          <li key={entry.award} className="education__entry">
            <div>
              <h3 className="education__award">{entry.award}</h3>
              <p className="education__institution">{entry.institution}</p>
            </div>
            <p className="education__dates">{entry.dates}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
