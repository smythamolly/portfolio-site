/**
 * Thin loader over the JSON in src/content.
 * Edit the JSON files to change any copy on the site — nothing here needs touching.
 */
import site from '../content/site.json'
import featured from '../content/featured.json'

const base = import.meta.env.BASE_URL

export const routes = {
  home: base,
  portfolio: `${base}portfolio/`,
  airPurifier: `${base}projects/air-purifier/`,
}

/** Resolve an image path from src/content JSON to a URL. */
export const img = (path) => `${base}images/${path}`

/** Resolve a `to` route key (plus optional `hash`) from JSON to a URL. */
export const href = ({ to, hash }) => {
  const path = routes[to] ?? to ?? ''
  return hash ? `${path}#${hash}` : path
}

export const { profile, philosophy, strengths, about, contact, work } = site
export const navLinks = site.nav
export const featuredProjects = featured
