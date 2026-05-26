import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { WHATSAPP_URL } from '../../utils/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-gradient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-20 right-1/3 w-64 h-64 rounded-full bg-sky-400/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, #ffffff08 1px, transparent 1px), linear-gradient(#ffffff08 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block text-sky-400 text-sm font-semibold tracking-wider uppercase mb-4 bg-sky-400/10 px-4 py-1.5 rounded-full"
            >
              Your Global Education Partner
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Your Journey to{' '}
              <span className="text-sky-400">Global Education</span>{' '}
              Begins Here
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-gray-300 text-lg mt-6 mb-10 max-w-xl lg:max-w-none leading-relaxed"
            >
              Expert guidance for studying in Canada, UK, USA, Australia, and more.
              From university selection to visa approval — we support your entire journey abroad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/countries"
                className="px-8 py-4 rounded-full bg-sky-400 text-white font-semibold hover:bg-sky-500 transition-all shadow-lg shadow-sky-400/25 text-center"
              >
                Explore Programs
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white hover:text-navy transition-all text-center"
              >
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-navy-800 bg-navy-600 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                Trusted by <strong className="text-white">500+</strong> students worldwide
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <span className="text-8xl">🎓</span>
                  <p className="text-white/80 mt-4 text-lg font-medium">
                    Your Future Awaits
                  </p>
                </div>
              </div>

              {[
                { icon: '🇨🇦', pos: '-top-4 -right-4' },
                { icon: '🇬🇧', pos: '-bottom-4 -left-4' },
                { icon: '🇺🇸', pos: 'top-1/2 -right-8' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.8 }}
                  className={`absolute ${item.pos} w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-2xl shadow-xl`}
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
