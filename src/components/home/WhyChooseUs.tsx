import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { WHY_CHOOSE_US } from '../../utils/constants'

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose Us" subtitle="What sets Altius apart from the rest" light />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {WHY_CHOOSE_US.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:-translate-y-1 hover:border-sky-400/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-400/20 flex items-center justify-center text-2xl mb-5 group-hover:bg-sky-400 group-hover:text-navy transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
