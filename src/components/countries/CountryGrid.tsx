import { Link } from 'react-router-dom'
import CountryCard from './CountryCard'
import type { CountryManifestEntry } from '../../types'

interface Props {
  countries: CountryManifestEntry[]
  loading: boolean
  error: string | null
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 animate-pulse">
      <div className="aspect-[4/3] bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-2/3" />
        <div className="h-3 bg-gray-100 rounded w-full" />
      </div>
    </div>
  )
}

export default function CountryGrid({ countries, loading, error }: Props) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <span className="text-5xl mb-4 block">&#9888;</span>
        <h3 className="text-xl font-bold text-navy mb-2">Unable to Load Countries</h3>
        <p className="text-gray-500 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2.5 rounded-full bg-navy text-white font-medium hover:bg-navy-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (countries.length === 0) {
    return (
      <div className="text-center py-20">
        <span className="text-6xl mb-4 block">&#127758;</span>
        <h3 className="text-xl font-bold text-navy mb-2">No Destinations Listed</h3>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          We&apos;re currently updating our destination list. Check back soon or contact us for personalized guidance.
        </p>
        <Link
          to="/#contact"
          className="px-6 py-2.5 rounded-full bg-navy text-white font-medium hover:bg-navy-800 transition-colors inline-block"
        >
          Contact Us
        </Link>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {countries.map((country, i) => (
        <CountryCard key={country.slug} country={country} index={i} />
      ))}
    </div>
  )
}
