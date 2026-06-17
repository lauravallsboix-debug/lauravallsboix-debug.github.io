import { motion, type Variants } from 'framer-motion'

const sentence: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
}

const letter: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
}

const heading = 'Diseño que\ncomunica.'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 overflow-hidden"
      style={{ backgroundColor: '#dfdcd4' }}
    >

      <div className="relative z-10 max-w-4xl">
        <motion.p
          className="text-sm font-medium tracking-[0.2em] uppercase mb-6"
          style={{ color: '#631d3f' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Laura Valls Boix · Diseñadora de Producto & Gráfica
        </motion.p>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
          style={{ color: '#631d3f' }}
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {heading.split('').map((char, i) =>
            char === '\n' ? (
              <br key={i} />
            ) : (
              <motion.span key={i} variants={letter}>
                {char}
              </motion.span>
            )
          )}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-xl leading-relaxed mb-12"
          style={{ color: '#3d1127', opacity: 0.75 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          Desde la idea hasta el detalle. Branding, web, producto y editorial
          con identidad propia.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <button
            onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#631d3f', color: '#dfdcd4' }}
          >
            Ver proyectos
          </button>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3 text-sm font-semibold tracking-wide rounded-full border transition-all duration-300 hover:scale-105"
            style={{ borderColor: '#631d3f', color: '#631d3f' }}
          >
            Contactar
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="#631d3f" strokeOpacity="0.35" strokeWidth="1.5" />
          <motion.rect
            x="9" y="7" width="4" height="7" rx="2"
            fill="#631d3f" fillOpacity="0.5"
            animate={{ y: [7, 19], opacity: [0.6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeIn', repeatDelay: 0.5 }}
          />
        </svg>
      </motion.div>
    </section>
  )
}
