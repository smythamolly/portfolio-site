/**
 * Stamps intrinsic width/height onto every image entry in the content JSON so the
 * browser can reserve space before the file loads. Re-run after adding images:
 *   npm run images
 */
import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const files = ['src/content/air-purifier.json', 'src/content/portfolio.json', 'src/content/featured.json']

const dimensions = (src) => {
  const file = resolve(root, 'public/images', src)
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file], {
    encoding: 'utf8',
  })
  return {
    w: Number(out.match(/pixelWidth:\s*(\d+)/)[1]),
    h: Number(out.match(/pixelHeight:\s*(\d+)/)[1]),
  }
}

const walk = (node) => {
  if (Array.isArray(node)) return node.forEach(walk)
  if (!node || typeof node !== 'object') return

  const src = node.src ?? node.image
  if (typeof src === 'string') Object.assign(node, dimensions(src))

  Object.values(node).forEach(walk)
}

for (const file of files) {
  const path = resolve(root, file)
  let data
  try {
    data = JSON.parse(readFileSync(path, 'utf8'))
  } catch {
    continue
  }
  walk(data)
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`)
  console.log(`updated ${file}`)
}
