import { BASE_PATH } from './constants'
import type { CountryManifestEntry, CountryData } from '../types'

export async function fetchManifest(): Promise<{ countries: CountryManifestEntry[] }> {
  const url = `${BASE_PATH}countries/manifest.json`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to fetch manifest: ${res.status}`)
  }
  return res.json()
}

export async function fetchCountryData(slug: string): Promise<CountryData> {
  const url = `${BASE_PATH}countries/${slug}/data.json`
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Failed to fetch country data for ${slug}: ${res.status}`)
  }
  return res.json()
}

export function getCountryPaths(slug: string) {
  const base = `${BASE_PATH}countries/${slug}/`
  return {
    flag: `${base}flag.svg`,
    data: `${base}data.json`,
    brochure: (filename: string) => `${base}brochures/${filename}`,
  }
}
