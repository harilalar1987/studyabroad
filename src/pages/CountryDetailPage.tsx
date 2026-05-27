import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEOHead from '../components/seo/SEOHead'
import BrochureList from '../components/countries/BrochureList'
import { fetchCountryData, getCountryPaths } from '../utils/countryLoader'
import type { CountryData } from '../types'

type PageState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: CountryData }

export default function CountryDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [state, setState] = useState<PageState>({ status: 'loading' })

  useEffect(() => {
    if (!slug) {
      setState({ status: 'error', message: 'Country not found.' })
      return
    }
    setState({ status: 'loading' })
    fetchCountryData(slug)
      .then((data) => setState({ status: 'success', data }))
      .catch(() => setState({ status: 'error', message: 'Country information not available.' }))
  }, [slug])

  if (state.status === 'loading') {
    return (
      <div className="pt-32 pb-20 bg-navy-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="w-full lg:w-80 h-52 bg-white/10 rounded-2xl" />
              <div className="flex-1 space-y-4">
                <div className="h-8 bg-white/10 rounded w-48" />
                <div className="h-4 bg-white/10 rounded w-full" />
                <div className="h-4 bg-white/10 rounded w-3/4" />
              </div>
            </div>
            <div className="mt-16 space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-white/5 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (state.status === 'error') {
    return (
      <div className="min-h-[70vh] pt-32 pb-20 flex items-center justify-center px-4 bg-navy-950">
        <div className="text-center">
          <span className="text-6xl font-changa text-gray-600">404</span>
          <h1 className="text-2xl font-bold text-white mt-4 mb-2">{state.message}</h1>
          <p className="text-gray-400 mb-6">
            The country you&apos;re looking for isn&apos;t available yet. Please check back later or contact us for more information.
          </p>
          <Link
            to="/countries"
            className="inline-block px-6 py-3 rounded-full bg-sky-400 text-navy font-medium hover:bg-sky-500 transition-colors"
          >
            Browse All Countries
          </Link>
        </div>
      </div>
    )
  }

  const { data } = state
  const paths = getCountryPaths(data.slug)

  return (
    <>
      <SEOHead title={data.name} description={data.description} />

      <section className="relative pt-32 pb-16 bg-navy-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-80 shrink-0"
            >
              <img
                src={paths.flag}
                alt={`${data.name} flag`}
                className="w-full h-52 object-cover rounded-2xl shadow-lg border border-white/10"
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent && !parent.querySelector('.flag-fallback')) {
                    const fallback = document.createElement('div')
                    fallback.className = 'flag-fallback w-full h-52 rounded-2xl bg-white/10 flex items-center justify-center'
                    fallback.innerHTML = `<span class="text-6xl font-changa text-white">${data.name.charAt(0)}</span>`
                    parent.appendChild(fallback)
                  }
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex-1"
            >
              <Link
                to="/countries"
                className="text-sm text-sky-400 hover:text-sky-300 font-medium transition-colors mb-3 inline-block"
              >
                &larr; All Destinations
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Study in {data.name}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                {data.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">Available Brochures</h2>
            <p className="text-gray-400 mb-10">
              Explore detailed brochures for universities in {data.name}. Each brochure contains course details, fees, and admission requirements.
            </p>
          </motion.div>
          <BrochureList universities={data.universities} slug={data.slug} />
        </div>
      </section>

      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Interested in Studying in {data.name}?
          </h3>
          <p className="text-gray-400 mb-8">
            Contact our expert counselors for personalized guidance on university selection, applications, and visa process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/918138970654?text=I'm%20interested%20in%20studying%20in%20${encodeURIComponent(data.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-sky-400 text-white font-semibold hover:bg-sky-500 transition-all shadow-lg shadow-sky-400/25"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:altiusprofessionals@gmail.com?subject=Inquiry%20-%20Study%20in%20${encodeURIComponent(data.name)}`}
              className="px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white hover:text-navy transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
