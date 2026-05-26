import { motion } from 'framer-motion'
import type { University } from '../../types'
import { getCountryPaths } from '../../utils/countryLoader'

interface Props {
  universities: University[]
  slug: string
  loading?: boolean
}

export default function BrochureList({ universities, slug, loading = false }: Props) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse bg-gray-100 rounded-2xl h-28" />
        ))}
      </div>
    )
  }

  if (universities.length === 0) {
    return (
      <div className="text-center py-12 px-4 bg-soft-blue-50 rounded-2xl">
        <span className="text-4xl mb-3 block">&#128218;</span>
        <h3 className="text-lg font-bold text-navy mb-2">Brochures Coming Soon</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We&apos;re preparing detailed brochures for this destination. Contact our counselors for the latest information on universities and courses.
        </p>
      </div>
    )
  }

  const paths = getCountryPaths(slug)

  return (
    <div className="space-y-4">
      {universities.map((uni, i) => (
        <motion.div
          key={uni.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex-1">
            <h3 className="text-lg font-bold text-navy">{uni.name}</h3>
            {uni.course && (
              <p className="text-sky-400 font-medium text-sm mt-0.5">{uni.course}</p>
            )}
            {uni.description && (
              <p className="text-gray-500 text-sm mt-1.5 line-clamp-2">{uni.description}</p>
            )}
          </div>
          <div className="flex gap-3">
            {uni.pdfFile ? (
              <>
                <a
                  href={paths.brochure(uni.pdfFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-navy text-white text-sm font-medium hover:bg-navy-800 transition-colors whitespace-nowrap"
                >
                  Download PDF
                </a>
                <a
                  href={paths.brochure(uni.pdfFile)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:border-navy hover:text-navy transition-colors whitespace-nowrap"
                >
                  Preview
                </a>
              </>
            ) : (
              <span className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-400 text-sm font-medium whitespace-nowrap cursor-not-allowed">
                Coming Soon
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
