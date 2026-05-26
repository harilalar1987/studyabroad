import { readdirSync, readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const COUNTRIES_DIR = join(process.cwd(), 'public', 'countries')
const MANIFEST_PATH = join(COUNTRIES_DIR, 'manifest.json')

function generateManifest() {
  if (!existsSync(COUNTRIES_DIR)) {
    mkdirSync(COUNTRIES_DIR, { recursive: true })
    writeFileSync(MANIFEST_PATH, JSON.stringify({ countries: [] }, null, 2))
    console.log('[manifest] Created empty manifest — no countries directory found.')
    return
  }

  const entries = readdirSync(COUNTRIES_DIR, { withFileTypes: true })
  const countries = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue

    const dataPath = join(COUNTRIES_DIR, entry.name, 'data.json')

    if (existsSync(dataPath)) {
      try {
        const raw = readFileSync(dataPath, 'utf-8')
        const parsed = JSON.parse(raw)
        countries.push({
          slug: parsed.slug || entry.name,
          name: parsed.name || entry.name,
          description: parsed.description || '',
        })
      } catch (err) {
        console.warn(`[manifest] Skipping "${entry.name}" — invalid data.json:`, err.message)
        countries.push({
          slug: entry.name,
          name: entry.name.charAt(0).toUpperCase() + entry.name.slice(1),
          description: '',
        })
      }
    } else {
      countries.push({
        slug: entry.name,
        name: entry.name.charAt(0).toUpperCase() + entry.name.slice(1),
        description: '',
      })
    }
  }

  const manifest = { countries }
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2))
  console.log(`[manifest] Generated manifest with ${countries.length} countries.`)
}

generateManifest()
