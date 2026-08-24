import { folders, href, projects } from '../data/site'
import Art from './art/Art'
import Section from './Section'
import './Folders.css'

function FolderIcon() {
  return (
    <svg className="folder__icon" viewBox="0 0 120 96" aria-hidden="true" focusable="false">
      {/* Back panel with the tab */}
      <path
        d="M6 20a8 8 0 0 1 8-8h26a6 6 0 0 1 4.7 2.3L51 22h55a8 8 0 0 1 8 8v52a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8Z"
        className="folder__back"
      />
      {/* Sheet peeking out of the top */}
      <rect x="26" y="28" width="68" height="44" rx="3" className="folder__sheet" />
      {/* Front panel */}
      <path d="M6 42h108v40a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8Z" className="folder__front" />
    </svg>
  )
}

export default function Folders() {
  return (
    <Section
      id="projects"
      title={projects.title}
      lead={projects.lead}
      art={<Art name="flower" width="clamp(34px, 4vw, 46px)" />}
    >
      <ul className="folders reveal">
        {folders.map((folder, i) => (
          <li key={folder.label} className="folders__item" data-tint={folder.tint} style={{ '--i': i }}>
            {/* Labelled explicitly: the visible label is faded out while stacked. */}
            <a className="folder" href={href(folder)} aria-label={folder.label}>
              <FolderIcon />
              <span className="folder__label">{folder.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
