import { useReveal } from '../hooks/useReveal'

export default function Section({ id, eyebrow, title, lead, children, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <section id={id} ref={ref} className={`section ${visible ? 'is-visible' : ''} ${className}`}>
      <div className="shell">
        {(eyebrow || title || lead) && (
          <header className="section__head reveal">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="section__title">{title}</h2>}
            {lead && <p className="section__lead">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
