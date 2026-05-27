import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HIGHLIGHTS } from '../../utils/constants'
import { useCountries } from '../../hooks/useCountries'

function CountUp({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  return (
    <span className="text-4xl md:text-5xl font-changa text-sky-400 tabular-nums">
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {value}{suffix}
        </motion.span>
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  )
}

export default function HighlightsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { countries } = useCountries()

  const stats = [
    ...HIGHLIGHTS,
    { value: countries.length, suffix: '+', label: 'Countries' },
  ]

  return (
    <section className="py-16 lg:py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <CountUp value={stat.value} suffix={stat.suffix} isInView={isInView} />
              <p className="text-gray-400 text-sm font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
