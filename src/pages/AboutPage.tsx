import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import { fadeInUp } from '../hooks/useScrollAnimation'

const LOGO_PATH = import.meta.env.BASE_URL + 'MAIN%20LOGO.jpeg'

const MISSION_CARDS = [
  {
    title: 'Our Mission',
    description: 'To empower students with world-class education opportunities abroad, providing end-to-end guidance that transforms their academic and professional futures.',
    icon: '🎯',
  },
  {
    title: 'Our Vision',
    description: 'To become the most trusted study abroad consultancy, bridging the gap between talented students and premier global universities.',
    icon: '🔭',
  },
]

export default function AboutPage() {
  return (
    <>
      <SEOHead title="About Us" description="Learn about Altius Study Abroad — our mission, vision, and commitment to helping students achieve their dreams of studying abroad." />

      <section className="relative pt-32 pb-20 bg-navy-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-sky-400/5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="mb-6">
            <img
              src={LOGO_PATH}
              alt="Altius Study Abroad"
              className="h-32 md:h-40 w-auto mx-auto"
            />
          </motion.div>
          <motion.span
            {...fadeInUp}
            className="text-sky-400 font-semibold tracking-wider uppercase text-sm mt-6"
          >
            About Us
          </motion.span>
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6"
          >
            Your Trusted Partner for{' '}
            <span className="text-sky-400">Global Education</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            At Altius Study Abroad, we believe every student deserves access to world-class education.
            With years of expertise and a passion for student success, we guide you through every
            step of your international academic journey.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {MISSION_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <span className="text-4xl">{card.icon}</span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-navy-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg mb-8"
          >
            Let our experts guide you toward the best university and course for your future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/countries"
              className="px-8 py-3.5 rounded-full bg-sky-400 text-white font-semibold hover:bg-sky-500 transition-all shadow-lg shadow-sky-400/25"
            >
              Explore Countries
            </Link>
            <a
              href="https://wa.me/918138970654"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white hover:text-navy transition-all"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
