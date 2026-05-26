import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS, SITE_NAME, CONTACT_EMAIL, WHATSAPP_URL } from '../../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <span className={`text-2xl font-changa transition-colors duration-300 ${
              scrolled ? 'text-navy' : 'text-white'
            }`}>
              {SITE_NAME}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-300 h-16 flex items-center ${
                  scrolled ? 'text-gray-700 hover:text-navy' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-4 left-0 w-full h-0.5 bg-sky-400 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`text-sm font-medium px-5 py-2 rounded-full border transition-all duration-300 ${
                scrolled
                  ? 'border-navy text-navy hover:bg-navy hover:text-white'
                  : 'border-white/60 text-white hover:bg-white hover:text-navy'
              }`}
            >
              Contact Us
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-5 py-2 rounded-full bg-sky-400 text-white hover:bg-sky-500 transition-all duration-300 shadow-md shadow-sky-400/25"
            >
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-0.5 rounded transition-colors ${
                scrolled ? 'bg-navy' : 'bg-white'
              }`}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block w-6 h-0.5 rounded transition-colors ${
                scrolled ? 'bg-navy' : 'bg-white'
              }`}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`block w-6 h-0.5 rounded transition-colors ${
                scrolled ? 'bg-navy' : 'bg-white'
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-navy/5 text-navy'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block text-center px-4 py-3 rounded-full border-2 border-navy text-navy font-medium hover:bg-navy hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-3 rounded-full bg-sky-400 text-white font-medium hover:bg-sky-500 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
