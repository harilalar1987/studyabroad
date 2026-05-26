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

      <section className="pt-32 pb-20 bg-gradient-to-b from-soft-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            {...fadeInUp}
            className="text-sky-400 font-semibold tracking-wider uppercase text-sm"
          >
            Explore Destinations
          </motion.span>
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy mt-2 mb-4"
          >
            Find Your Perfect{' '}
            <span className="text-sky-400">Study Destination</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Browse countries, explore universities, and download brochures to plan your international education journey.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CountryGrid countries={countries} loading={loading} error={error} />
        </div>
      </section>
    </>
  )
}
