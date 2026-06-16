import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60)
  })

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(223,220,212,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(99,29,63,0.1)' : 'none',
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#" aria-label="Laura Valls Boix — inicio">
        <img
          src="/logo.png"
          alt="Laura Valls Boix"
          className="h-14 w-14 rounded-full object-cover object-top"
        />
      </a>

      <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
        {['Proyectos', 'Sobre mí', 'Contacto'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="transition-opacity hover:opacity-60"
              style={{ color: '#3d1127' }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
