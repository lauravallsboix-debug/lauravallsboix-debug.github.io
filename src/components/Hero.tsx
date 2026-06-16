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
      {/* Background accent */}
      <motion.div
        className="absolute top-20 right-0 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full opacity-40 pointer-events-none"
        style={{ backgroundColor: '#ffec9e' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

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
          <a
            href="#proyectos"
            className="px-7 py-3 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#631d3f', color: '#dfdcd4' }}
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-7 py-3 text-sm font-semibold tracking-wide rounded-full border transition-all duration-300 hover:scale-105"
            style={{ borderColor: '#631d3f', color: '#631d3f' }}
          >
            Contactar
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: '#631d3f', opacity: 0.5 }}>
          scroll
        </span>
        <motion.div
          className="w-px h-12"
          style={{ backgroundColor: '#631d3f', opacity: 0.3 }}
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
