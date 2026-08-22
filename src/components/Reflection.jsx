import { useReveal } from '../hooks/useReveal'
import './Reflection.css'

export default function Reflection({ reflection }) {
  const [ref, visible] = useReveal({ threshold: 0.1 })

  return (
    <section className={`reflection ${visible ? 'is-visible' : ''}`} ref={ref}>
      <div className="shell reflection__inner">
        <h2 className="reflection__title reveal">{reflection.title}</h2>
        <div className="reflection__body reveal">
          {reflection.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
