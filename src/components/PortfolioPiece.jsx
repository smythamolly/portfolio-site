import { img } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import './PortfolioPiece.css'

export default function PortfolioPiece({ piece }) {
  const [ref, visible] = useReveal({ threshold: 0.06 })

  return (
    <article className={`piece ${visible ? 'is-visible' : ''}`} ref={ref}>
      <div className="shell piece__inner">
        <header className="piece__head reveal">
          <h2 className="piece__title">{piece.title}</h2>
          <p className="piece__discipline">{piece.discipline}</p>
          {piece.note && <p className="piece__note">{piece.note}</p>}
        </header>

        <div className="piece__body reveal">
          {piece.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <ul className="piece__gallery">
          {piece.images.map((image, i) => (
            <li
              key={image.src}
              className={`piece__shot reveal ${image.span ? `is-${image.span}` : ''}`}
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
      </div>
    </article>
  )
}
