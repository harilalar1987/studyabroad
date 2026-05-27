import { motion } from 'framer-motion'
import SEOHead from '../components/seo/SEOHead'
import { CONTACT_EMAIL, CONTACT_WHATSAPP, WHATSAPP_URL, MAILTO_URL } from '../utils/constants'

export default function ContactPage() {
  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with Altius Study Abroad. Reach us via WhatsApp or email for expert guidance on studying abroad." />

      <section className="relative pt-32 pb-20 bg-navy-gradient overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-sky-400/5 blur-3xl" />
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sky-400 font-semibold tracking-wider uppercase text-sm"
            >
              Get In Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4"
            >
              We&apos;re Here to{' '}
              <span className="text-sky-400">Help</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto"
            >
              Reach out to us through WhatsApp or Email. Our expert counselors are ready to guide you on your study abroad journey.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">WhatsApp</h3>
                <p className="text-gray-400 text-sm">{CONTACT_WHATSAPP}</p>
              </div>
              <span className="text-sky-400 text-sm font-medium group-hover:underline">
                Start Chat &rarr;
              </span>
            </motion.a>

            <motion.a
              href={MAILTO_URL}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-sky-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Email</h3>
                <p className="text-gray-400 text-sm">{CONTACT_EMAIL}</p>
              </div>
              <span className="text-sky-400 text-sm font-medium group-hover:underline">
                Send Email &rarr;
              </span>
            </motion.a>
          </div>
        </div>
      </section>
    </>
  )
}
