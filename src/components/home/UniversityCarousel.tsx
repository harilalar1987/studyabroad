import Carousel from '../ui/Carousel'
import SectionHeading from '../ui/SectionHeading'

const LOGO_NAMES = [
  'University of Toronto', 'UBC', 'McGill University', 'Oxford University',
  'Cambridge University', 'Imperial College', 'LSE', 'Harvard University',
  'MIT', 'Stanford University', 'Yale University', 'University of Melbourne',
]

export default function UniversityCarousel() {
  const items = LOGO_NAMES.map((name) => (
    <div
      key={name}
      className="flex items-center justify-center min-w-[160px] h-16 px-6 rounded-xl bg-white/5 border border-white/10 hover:border-sky-400/30 transition-colors duration-300"
    >
      <span className="text-sm font-semibold text-gray-400 whitespace-nowrap">{name}</span>
    </div>
  ))

  return (
    <section className="py-16 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <SectionHeading title="Partner Universities" subtitle="We partner with top-ranked institutions worldwide" light />
      </div>
      <div className="space-y-6">
        <Carousel items={items} direction="left" duration={45} />
        <Carousel items={items.reverse()} direction="right" duration={50} />
      </div>
    </section>
  )
}
