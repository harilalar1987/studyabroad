export interface University {
  name: string
  course?: string
  description?: string
  pdfFile: string
}

export interface CountryData {
  name: string
  slug: string
  description: string
  universities: University[]
}

export interface CountryManifestEntry {
  slug: string
  name: string
  description: string
}

export interface NavLink {
  label: string
  path: string
}

export type ButtonVariant = 'primary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface Highlight {
  value: number
  suffix: string
  label: string
}

export interface FeatureCard {
  title: string
  description: string
  icon: string
}
