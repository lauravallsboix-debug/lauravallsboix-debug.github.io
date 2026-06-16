import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const W = 40
const H = 1000

const buildPath = () => {
  const segments = 10
  const segH = H / segments
  let d = `M ${W / 2} 0`
  for (let i = 0; i < segments; i++) {
    const x = i % 2 === 0 ? W - 4 : 4
    const y0 = segH * i
    const y1 = y0 + segH * 0.4
    const y2 = y0 + segH * 0.6
    const y3 = y0 + segH
    d += ` C ${x} ${y1}, ${x} ${y2}, ${W / 2} ${y3}`
  }
  return d
}

const PATH = buildPath()

export default function ScrollPath() {
  const { scrollYProgress } = useScroll()
  const [aboutRange, setAboutRange] = useState<[number, number]>([0.45, 0.72])

  useEffect(() => {
    const measure = () => {
      const el = document.getElementById('sobre-mí')
      if (!el) return
      const totalH = document.documentElement.scrollHeight
      const start = el.offsetTop / totalH
      const end = (el.offsetTop + el.offsetHeight) / totalH
      setAboutRange([start, end])
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.95, 1], [0, 1, 1, 0])

  const strokeColor = useTransform(
    scrollYProgress,
    [aboutRange[0], aboutRange[0] + 0.001, aboutRange[1], aboutRange[1] + 0.001],
    ['#631d3f', '#ffec9e', '#ffec9e', '#631d3f']
  )

  const trackOpacity = useTransform(
    scrollYProgress,
    [aboutRange[0], aboutRange[0] + 0.001, aboutRange[1], aboutRange[1] + 0.001],
    [0.12, 0.25, 0.25, 0.12]
  )

  return (
    <div
      className="fixed left-4 top-0 h-screen z-30 pointer-events-none"
      style={{ width: W }}
    >
      <svg
        width={W}
        height="100%"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        overflow="visible"
      >
        {/* Track faint */}
        <motion.path
          d={PATH}
          fill="none"
          stroke="#631d3f"
          strokeWidth={1.5}
          strokeDasharray="4 8"
          strokeLinecap="round"
          style={{ opacity: trackOpacity }}
        />

        {/* Animated line */}
        <motion.path
          d={PATH}
          fill="none"
          strokeWidth={1.5}
          strokeDasharray="4 8"
          strokeLinecap="round"
          style={{ pathLength, opacity, stroke: strokeColor }}
        />
      </svg>
    </div>
  )
}
