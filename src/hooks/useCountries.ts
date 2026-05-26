import { useState, useEffect } from 'react'
import { fetchManifest } from '../utils/countryLoader'
import type { CountryManifestEntry } from '../types'

interface UseCountriesResult {
  countries: CountryManifestEntry[]
  loading: boolean
  error: string | null
  isEmpty: boolean
  retry: () => void
}

export function useCountries(): UseCountriesResult {
  const [countries, setCountries] = useState<CountryManifestEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryKey, setRetryKey] = useState(0)

  const retry = () => setRetryKey((k) => k + 1)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetchManifest()
      .then((data) => {
        if (!cancelled) {
          setCountries(data.countries ?? [])
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load countries')
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [retryKey])

  return {
    countries,
    loading,
    error,
    isEmpty: !loading && !error && countries.length === 0,
    retry,
  }
}
