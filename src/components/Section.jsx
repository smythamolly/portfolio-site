import { useReveal } from '../hooks/useReveal'

export default function Section({ id, title, lead, art, children, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <section id={id} ref={ref} className={`section ${visible ? 'is-visible' : ''} ${className}`}>
      <div className="shell">
        {(title || lead) && (
          <header className="section__head reveal">
            <div className="section__heading">
              {title && <h2 className="section__title">{title}</h2>}
              {art}
            </div>
            {lead && <p className="section__lead">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
