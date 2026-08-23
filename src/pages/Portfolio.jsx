import content from '../content/portfolio.json'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import PortfolioPiece from '../components/PortfolioPiece'
import ProjectFooterNav from '../components/ProjectFooterNav'
import { routes } from '../data/site'
import '../App.css'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <>
      <Nav />
      <main id="main">
        <header className="portfolio-header">
          <div className="shell">
            <a className="portfolio-header__back" href={routes.projectsSection}>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                <path d="M16 10H4M9 5l-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All projects
            </a>

            <p className="portfolio-header__subtitle">{content.subtitle}</p>
            <h1 className="portfolio-header__title">{content.title}</h1>
            <p className="portfolio-header__intro">{content.intro}</p>

            <ul className="portfolio-header__index">
              {content.pieces.map((piece) => (
                <li key={piece.title}>{piece.title}</li>
              ))}
            </ul>
          </div>
        </header>

        {content.pieces.map((piece) => (
          <PortfolioPiece key={piece.title} piece={piece} />
        ))}

        <ProjectFooterNav current="portfolio" />
      </main>
      <Footer />
    </>
  )
}
