import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { WHY_CHOOSE_US } from '../../utils/constants'

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-soft-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Why Choose Us" subtitle="What sets Altius apart from the rest" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {WHY_CHOOSE_US.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-2xl p-8 shadow-card border border-blue-100/50 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
