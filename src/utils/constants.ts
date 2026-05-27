import type { NavLink, Highlight, FeatureCard } from '../types'

export const SITE_NAME = 'Altius Study Abroad'
export const SITE_TAGLINE = 'Your Trusted Partner for Global Education'
export const BASE_PATH = '/'
export const CONTACT_EMAIL = 'altiusprofessionals@gmail.com'
export const CONTACT_WHATSAPP = '+918138970654'
export const WHATSAPP_URL = 'https://wa.me/918138970654'
export const MAILTO_URL = `mailto:${CONTACT_EMAIL}?subject=Inquiry%20on%20Course`

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Countries', path: '/countries' },
  { label: 'Contact Us', path: '/contact' },
]

export const WHY_CHOOSE_US: FeatureCard[] = [
  {
    title: 'Expert Guidance',
    description: 'Experienced counselors guide you through every step — from university selection to visa approval.',
    icon: '🎓',
  },
  {
    title: 'University Partnerships',
    description: 'Direct partnerships with top-ranked universities across the globe for guaranteed admissions.',
    icon: '🤝',
  },
  {
    title: 'Visa Success',
    description: '98% visa success rate with dedicated documentation support and interview preparation.',
    icon: '✅',
  },
  {
    title: 'End-to-End Support',
    description: 'From test preparation to accommodation — we support your entire study abroad journey.',
    icon: '🏠',
  },
  {
    title: 'Scholarship Assistance',
    description: 'We help identify and apply for scholarships, reducing your financial burden significantly.',
    icon: '💰',
  },
  {
    title: 'Post-Arrival Care',
    description: 'Airport pickup, orientation, and ongoing support ensure a smooth transition abroad.',
    icon: '✈️',
  },
]

export const PARTNER_LOGOS: string[] = Array.from(
  { length: 20 },
  (_, i) => `university-${i + 1}.png`
)

export const HIGHLIGHTS: Highlight[] = [
  { value: PARTNER_LOGOS.length, suffix: '+', label: 'Partner Universities' },
  { value: 98, suffix: '%', label: 'Visa Success Rate' },
]
