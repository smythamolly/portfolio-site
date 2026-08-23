import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { routes } from '../data/site'
import '../App.css'
import './ProjectPlaceholder.css'

/** A project page with nothing in it yet. Swap for real content when ready. */
export default function ProjectPlaceholder({ title }) {
  return (
    <>
      <Nav />
      <main id="main">
        <div className="placeholder">
          <div className="shell">
            <a className="placeholder__back" href={routes.projectsSection}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <path d="M16 10H4M9 5l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All projects
            </a>

            <h1 className="placeholder__title">{title}</h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
