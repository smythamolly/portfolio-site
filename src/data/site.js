/**
 * Thin loader over the JSON in src/content.
 * Edit the JSON files to change any copy on the site — nothing here needs touching.
 */
import site from '../content/site.json'
import featured from '../content/featured.json'
import projectFolders from '../content/projects.json'

const base = import.meta.env.BASE_URL

export const routes = {
  home: base,
  /** Back links point here so leaving a project returns you to the stack, not the top. */
  projectsSection: `${base}#projects`,
  portfolio: `${base}portfolio/`,
  airPurifier: `${base}projects/air-purifier/`,
  projectOne: `${base}projects/project-one/`,
  projectTwo: `${base}projects/project-two/`,
  projectThree: `${base}projects/project-three/`,
}

/** Resolve an image path from src/content JSON to a URL. */
export const img = (path) => `${base}images/${path}`

/** Resolve a `to` route key (plus optional `hash`) from JSON to a URL. */
export const href = ({ to, hash }) => {
  const path = routes[to] ?? to ?? ''
  return hash ? `${path}#${hash}` : path
}

export const { profile, philosophy, strengths, contact, education, projects } = site
export const navLinks = site.nav
export const featuredProjects = featured
export const folders = projectFolders
