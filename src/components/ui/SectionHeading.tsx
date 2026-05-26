import { motion } from 'framer-motion'

interface Props {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionHeading({ title, subtitle, align = 'center', light = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2
        className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${
          light ? 'text-gray-300' : 'text-gray-500'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-sky-400 ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
