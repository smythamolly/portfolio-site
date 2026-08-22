import { profile, routes } from '../data/site'
import './Footer.css'

const links = [
  { label: 'Air Purifier', href: routes.airPurifier },
  { label: 'Making and Art', href: routes.portfolio },
  { label: 'Email', href: `mailto:${profile.email}` },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <p className="footer__note">
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <nav className="footer__links" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
