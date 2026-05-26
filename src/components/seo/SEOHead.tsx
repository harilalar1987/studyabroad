import { useEffect } from 'react'

interface Props {
  title: string
  description: string
}

export default function SEOHead({ title, description }: Props) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title ? `${title} — Altius Study Abroad` : 'Altius Study Abroad'

    const meta = document.querySelector('meta[name="description"]')
    const prevContent = meta?.getAttribute('content') ?? ''
    if (meta && description) {
      meta.setAttribute('content', description)
    }

    return () => {
      document.title = prevTitle
      if (meta) {
        meta.setAttribute('content', prevContent)
      }
    }
  }, [title, description])

  return null
}
