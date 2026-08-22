import { navLinks, profile } from '../data/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="footer__note">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <nav className="footer__links" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="#top">Back to top</a>
        </nav>
      </div>
    </footer>
  )
}
