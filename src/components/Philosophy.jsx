import { philosophy, strengths } from '../data/site'
import Section from './Section'
import './Philosophy.css'

export default function Philosophy() {
  return (
    <Section id="philosophy" eyebrow="Philosophy" title="How I think about design" className="section--alt">
      <div className="philosophy">
        <div className="philosophy__statement reveal">
          <p className="philosophy__lead">{philosophy.lead}</p>
          {philosophy.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="philosophy__attribution">{philosophy.attribution}</p>
        </div>

        <ul className="philosophy__strengths reveal" style={{ '--delay': '0.08s' }}>
          {strengths.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
