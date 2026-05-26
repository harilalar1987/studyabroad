import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import SectionHeading from '../components/ui/SectionHeading'
import { fadeInUp } from '../hooks/useScrollAnimation'
import { HIGHLIGHTS } from '../utils/constants'

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

const MILESTONES = [
  { year: '2018', event: 'Founded with a vision to help Indian students access global education.' },
  { year: '2019', event: 'Placed our first 100 students in top universities across Canada and UK.' },
  { year: '2020', event: 'Expanded to 5+ destination countries and partnered with 20+ universities.' },
  { year: '2021', event: 'Achieved 95% visa success rate through dedicated documentation support.' },
  { year: '2022', event: 'Crossed 500 successful student placements worldwide.' },
  { year: '2023', event: 'Launched scholarship assistance program and post-arrival support services.' },
]

export default function AboutPage() {
  return (
    <>
      <SEOHead title="About Us" description="Learn about Altius Study Abroad — our mission, vision, and commitment to helping students achieve their dreams of studying abroad." />

      <section className="pt-32 pb-20 bg-gradient-to-b from-soft-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            {...fadeInUp}
            className="text-sky-400 font-semibold tracking-wider uppercase text-sm"
          >
            About Us
          </motion.span>
          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-navy mt-2 mb-6"
          >
            Your Trusted Partner for{' '}
            <span className="text-sky-400">Global Education</span>
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            At Altius Study Abroad, we believe every student deserves access to world-class education.
            With years of expertise and a passion for student success, we guide you through every
            step of your international academic journey.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {MISSION_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-gradient-to-br from-white to-soft-blue-50 rounded-2xl p-8 shadow-card border border-blue-100/50"
              >
                <span className="text-4xl">{card.icon}</span>
                <h3 className="text-2xl font-bold text-navy mt-4 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="By the Numbers" subtitle="Our track record speaks for itself" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {HIGHLIGHTS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center p-6 bg-white rounded-2xl shadow-card"
              >
                <span className="text-4xl font-changa text-navy">
                  {stat.value}{stat.suffix}
                </span>
                <p className="text-gray-500 text-sm mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Journey" subtitle="Milestones that define our growth" />
          <div className="max-w-3xl mx-auto mt-12">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-6 pb-8 relative"
              >
                {i < MILESTONES.length - 1 && (
                  <div className="absolute left-[31px] top-14 bottom-0 w-0.5 bg-sky-200" />
                )}
                <div className="shrink-0 w-16 h-16 rounded-full bg-navy text-white flex items-center justify-center font-changa text-lg">
                  {m.year.slice(2)}
                </div>
                <div className="pt-4">
                  <span className="text-sm font-bold text-sky-400 tracking-wider">{m.year}</span>
                  <p className="text-gray-600 mt-1">{m.event}</p>
                </div>
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
