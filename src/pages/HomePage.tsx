import { lazy } from 'react'
import SEOHead from '../components/seo/SEOHead'

const HeroSection = lazy(() => import('../components/home/HeroSection'))
const HighlightsSection = lazy(() => import('../components/home/HighlightsSection'))
const CountryFlagsCarousel = lazy(() => import('../components/home/CountryFlagsCarousel'))
const FeaturedCountries = lazy(() => import('../components/home/FeaturedCountries'))
const WhyChooseUs = lazy(() => import('../components/home/WhyChooseUs'))
const UniversityCarousel = lazy(() => import('../components/home/UniversityCarousel'))
const ContactCta = lazy(() => import('../components/home/ContactCta'))

export default function HomePage() {
  return (
    <>
      <SEOHead title="Home" description="Altius Study Abroad — Your trusted partner for global education. Expert guidance for studying in Canada, UK, USA, Australia, and more." />
      <HeroSection />
      <CountryFlagsCarousel />
      <HighlightsSection />
      <FeaturedCountries />
      <WhyChooseUs />
      <UniversityCarousel />
      <ContactCta />
    </>
  )
}
