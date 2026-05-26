import { Link } from 'react-router-dom'
import Carousel from '../ui/Carousel'
import SectionHeading from '../ui/SectionHeading'
import { useCountries } from '../../hooks/useCountries'
import { getCountryPaths } from '../../utils/countryLoader'

export default function CountryFlagsCarousel() {
  const { countries } = useCountries()

  if (countries.length === 0) return null

  const items = countries.map((country) => {
    const paths = getCountryPaths(country.slug)
    return (
      <Link
        key={country.slug}
        to={`/countries/${country.slug}`}
        className="flex flex-col items-center gap-2 group min-w-[100px]"
      >
        <div className="w-20 h-14 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
          <img
            src={paths.flag}
            alt={country.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget
              const parent = target.parentElement
              if (parent) {
                target.style.display = 'none'
                const fallback = document.createElement('div')
                fallback.className = 'w-full h-full bg-navy flex items-center justify-center'
                fallback.innerHTML = `<span class="text-white font-changa">${country.name.charAt(0)}</span>`
                parent.appendChild(fallback)
              }
            }}
          />
        </div>
        <span className="text-xs font-medium text-gray-600 group-hover:text-navy transition-colors">
          {country.name}
        </span>
      </Link>
    )
  })

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <SectionHeading title="Explore Destinations" subtitle="Find your perfect study destination" />
      </div>
      <Carousel items={items} direction="left" duration={40} />
    </section>
  )
}
