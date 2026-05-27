import { HashRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ErrorBoundary from './components/layout/ErrorBoundary'
import Layout from './components/layout/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const CountriesPage = lazy(() => import('./pages/CountriesPage'))
const CountryDetailPage = lazy(() => import('./pages/CountryDetailPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950">
      <div className="w-8 h-8 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="countries" element={<CountriesPage />} />
              <Route path="countries/:slug" element={<CountryDetailPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </ErrorBoundary>
  )
}
