import { useEffect, useState } from 'react'
import { href, navLinks, profile, routes } from '../data/site'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <a className="nav__skip" href="#main">
        Skip to content
      </a>

      <div className="shell nav__inner">
        <a className="nav__brand" href={routes.home} onClick={() => setOpen(false)}>
          <span className="nav__name">{profile.name}</span>
          <span className="nav__role">{profile.role}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={href(link)} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
