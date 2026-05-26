import { useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  items: ReactNode[]
  direction?: 'left' | 'right'
  duration?: number
  pauseOnHover?: boolean
}

export default function Carousel({ items, direction = 'left', duration = 50, pauseOnHover = true }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  const duplicated = [...items, ...items]

  return (
    <div className="marquee-container" ref={containerRef}>
      <motion.div
        className="marquee-track group flex gap-8"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          },
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
      >
        {duplicated.map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
