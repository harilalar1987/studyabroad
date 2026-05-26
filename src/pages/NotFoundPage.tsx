import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <span className="text-8xl font-changa text-sky-400">404</span>
        <h1 className="text-3xl font-bold text-navy mt-4 mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-full bg-navy text-white font-medium hover:bg-navy-800 transition-colors"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
