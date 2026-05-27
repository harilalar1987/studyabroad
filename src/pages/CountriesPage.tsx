import { motion } from 'framer-motion'
import SEOHead from '../components/seo/SEOHead'
import CountryGrid from '../components/countries/CountryGrid'
import { useCountries } from '../hooks/useCountries'
import { fadeInUp } from '../hooks/useScrollAnimation'

export default function CountriesPage() {
  const { countries, loading, error } = useCountries()

  return (
    <>
      <SEOHead
        title="Study Destinations"
        description="Explore top study destinations — Canada, UK, USA, Australia, Ireland, Germany and more. Find your perfect university and course."
      />

      <section className="relative pt-32 pb-20 bg-navy-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-sky-400/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            {...fadeInUp}
            className="text-sky-400 font-semibold tracking-wider uppercase text-sm"
          >
            Explore Destinations
          </motion.span>
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4"
          >
            Find Your Perfect{' '}
            <span className="text-sky-400">Study Destination</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Browse countries, explore universities, and download brochures to plan your international education journey.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountryGrid countries={countries} loading={loading} error={error} />
        </div>
      </section>
    </>
  )
}
