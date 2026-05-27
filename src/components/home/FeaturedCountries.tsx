import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../ui/SectionHeading'
import { useCountries } from '../../hooks/useCountries'
import { getCountryPaths } from '../../utils/countryLoader'

export default function FeaturedCountries() {
  const { countries } = useCountries()
  const featured = countries.slice(0, 4)

  if (featured.length === 0) return null

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Destinations" subtitle="Top countries for international students" light />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {featured.map((country, i) => {
            const paths = getCountryPaths(country.slug)
            return (
              <motion.div
                key={country.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={`/countries/${country.slug}`}
                  className="group block bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:-translate-y-2 hover:border-sky-400/30 transition-all duration-300"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-navy flex items-center justify-center relative overflow-hidden">
                    <img
                      src={paths.flag}
                      alt={country.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.classList.add('flex', 'items-center', 'justify-center')
                          const span = document.createElement('span')
                          span.className = 'text-6xl font-changa text-white/40'
                          span.textContent = country.name.charAt(0)
                          parent.appendChild(span)
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                      Study in {country.name}
                    </h3>
                    {country.description && (
                      <p className="text-sm text-gray-400 mt-1 line-clamp-2">{country.description}</p>
                    )}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {countries.length > 4 && (
          <div className="text-center mt-10">
            <Link
              to="/countries"
              className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-sky-300 transition-colors"
            >
              View All Countries
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
