import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className = '', hover = false, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl shadow-card border border-blue-100/50 p-6 ${
        hover ? 'cursor-pointer hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
