const base = import.meta.env.BASE_URL

export const routes = {
  home: base,
  portfolio: `${base}portfolio/`,
  airPurifier: `${base}projects/air-purifier/`,
}

export const img = (path) => `${base}images/${path}`

export const profile = {
  name: 'Molly Smyth',
  role: 'Product Design Student',
  availability: 'Open to placements and studio work',
  intro: 'I design objects, and I make them to find out whether they work.',
  standfirst:
    'Product design student working through sketching, clay, foam and workshop tools — from first idea to a resolved model I can hold.',
  bio: [
    'I grew up with a workshop attached to the kitchen. My dad is a carpenter, now a lecturer in construction site management and a harp maker, and from about three years old I was handing up tools on treehouses, swing sets and monkey bars until I was trusted to use them myself. What that really taught me was that I could make anything — I only had to have an idea, design it and build it.',
    'That has turned into a way of working. I sketch broadly before committing, model early in clay, card or foam so I can judge a form in the hand rather than on a page, and keep developing an idea well past the point where it first looks finished.',
  ],
  details: [
    { label: 'Studying', value: 'Product Design, University of Limerick' },
    { label: 'Based in', value: 'Ireland' },
    { label: 'Recent', value: 'Air purifier — aesthetic design project' },
  ],
  email: 'smyth.a.molly@gmail.com',
  socials: [{ label: 'GitHub', href: 'https://github.com/smythamolly' }],
}

export const philosophy = {
  lead: 'I want to design products that solve problems worth solving.',
  body: [
    "I'm drawn to the psychology behind a design — how principles like MAYA, or a user's own biases, shape whether a product is understood and accepted. I'm just as interested in what layout, composition, colour and type communicate before a single word is read.",
    'My values point me toward life-centred design rather than purely human-centred: a design should be judged on its effect on the wider world, not only on the person holding it. On style, I sit between the ornate detail of traditional craftsmanship and the stripped-back minimalism that dominates now. Considered detail, achievable in real manufacturing — because less is not always more. Removing every button can make a product harder to use, not simpler.',
    'If design is partly about how something makes a person feel, I want people to feel that what they have bought was well considered, well made and built to last. Genuine sustainability means longevity: objects that can be repaired, with components that can be replaced.',
  ],
  attribution: 'From my design manifesto, April 2026',
}

export const strengths = [
  {
    title: 'Making and modelling',
    body: 'Clay, foam, card and cardboard prototypes used as thinking tools, plus workshop skills from lathe turning to carving and finishing.',
  },
  {
    title: 'Drawing and communication',
    body: 'Ideation sketching, orthographic and manufacturing drawings, rendering and presentation pages that explain how an object works.',
  },
  {
    title: 'Curiosity and empathy',
    body: 'A persistent interest in why a designer made the choices they did, and in the needs and frustrations of the person who ends up using the result.',
  },
]

export const featuredProjects = [
  {
    title: 'Air Purifier',
    subtitle: 'Aesthetic design project',
    year: '2026',
    summary:
      'A form-led air purifier developed from a style board of arches, stained glass and negative space — through ideation, clay and foam prototypes to a resolved final model.',
    tags: ['Ideation', 'Prototyping', 'Foam modelling', 'Rendering'],
    href: routes.airPurifier,
    image: 'air-purifier/final-hero.jpg',
    alt: 'Final foam model of the air purifier, a curved form with an open centre and vent panel',
  },
  {
    title: 'Making and Art',
    subtitle: 'Selected work',
    year: '2022 — 2025',
    summary:
      'Pen turning, an award-winning board game, a plantable greeting card company, carving, watercolour and a Junk Kouture dress built from a wedding dress and crisp packets.',
    tags: ['Craft', 'Graphics', 'Drawing', 'Enterprise'],
    href: routes.portfolio,
    image: 'portfolio/junk-kouture-dress.jpg',
    alt: 'Rose gold Junk Kouture dress made from repurposed party decorations',
  },
]

export const navLinks = [
  { label: 'Work', href: `${base}#work` },
  { label: 'Philosophy', href: `${base}#philosophy` },
  { label: 'About', href: `${base}#about` },
  { label: 'Contact', href: `${base}#contact` },
]
