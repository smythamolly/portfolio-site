import { img } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import './ProcessStep.css'

export default function ProcessStep({ step }) {
  const [ref, visible] = useReveal({ threshold: 0.08 })

  return (
    <section className={`step ${visible ? 'is-visible' : ''}`} ref={ref}>
      <div className="shell step__inner">
        <div className="step__head reveal">
          <span className="step__number">{step.number}</span>
          <h2 className="step__title">{step.title}</h2>
        </div>

        <div className="step__body reveal">
          {step.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        {step.images?.length > 0 && (
          <ul className="step__gallery">
            {step.images.map((image, i) => (
              <li
                key={image.src}
                className={`step__shot reveal ${image.span === 'wide' ? 'is-wide' : ''}`}
                style={{ '--delay': `${0.04 * i}s` }}
              >
                <figure>
                  <img
                    src={img(image.src)}
                    alt={image.alt}
                    width={image.w}
                    height={image.h}
                    loading="lazy"
                  />
                  {image.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
