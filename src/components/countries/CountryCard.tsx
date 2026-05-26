import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { CountryManifestEntry } from '../../types'
import { getCountryPaths } from '../../utils/countryLoader'

interface Props {
  country: CountryManifestEntry
  index: number
}

export default function CountryCard({ country, index }: Props) {
  const [imgError, setImgError] = useState(false)
  const paths = getCountryPaths(country.slug)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link
        to={`/countries/${country.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300"
      >
        <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-navy flex items-center justify-center relative overflow-hidden">
          {!imgError ? (
            <img
              src={paths.flag}
              alt={`${country.name} flag`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-5xl font-changa text-white/70">{country.name.charAt(0)}</span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-navy group-hover:text-sky-500 transition-colors">
            {country.name}
          </h3>
          {country.description && (
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{country.description}</p>
          )}
          <span className="inline-flex items-center gap-1 text-xs font-medium text-sky-400 mt-3 group-hover:gap-2 transition-all">
            View Universities
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
