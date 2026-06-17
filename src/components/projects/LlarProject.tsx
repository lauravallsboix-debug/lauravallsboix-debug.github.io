import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageTransition } from '../../context/TransitionContext'

const BG = '#dce6f0'

const images = [
  { src: '/projects/llar/portada.jpg',          label: 'Portada & contraportada' },
  { src: '/projects/llar/abierto-1.jpg',        label: 'Catálogo abierto' },
  { src: '/projects/llar/interior-sabanas.jpg', label: 'Interior — sábanas' },
  { src: '/projects/llar/interior-cotilina.jpg',label: 'Interior — cotilina' },
  { src: '/projects/llar/interior-vip.jpg',     label: 'Interior — VIP cotton' },
  { src: '/projects/llar/lifestyle.png',        label: 'Lifestyle' },
]

export default function LlarProject() {
  const navigate = useNavigate()
  const { state, clearTransition } = usePageTransition()
  const bgColor = state.active ? state.color : BG

  useEffect(() => {
    const timer = setTimeout(clearTransition, 150)
    return () => clearTimeout(timer)
  }, [clearTransition])

  return (
    <motion.div
      style={{ backgroundColor: bgColor, minHeight: '100vh' }}
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
    >
      <header
        className="sticky top-0 z-50 flex items-center gap-4 px-8 py-4 border-b"
        style={{ backgroundColor: 'rgba(220,230,240,0.92)', backdropFilter: 'blur(12px)', borderColor: 'rgba(30,60,100,0.1)' }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          style={{ color: '#1e3c64' }}
        >
          ← Volver
        </button>
        <span style={{ color: 'rgba(30,60,100,0.3)' }}>·</span>
        <span className="text-sm font-medium" style={{ color: '#1e3c64' }}>
          LLAR Homestyle
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#e5a020' }}>
            Diseño Editorial · InDesign · Print
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight" style={{ color: '#1e3c64' }}>
            LLAR Homestyle
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#1e3c64', opacity: 0.75 }}>
            Catálogo y revista para marca de textil para el hogar. Maquetación, composición tipográfica,
            retoque fotográfico y preparación para imprenta. Un proyecto editorial que combina
            fotografía de producto con diseño limpio y comercial.
          </p>
        </motion.div>

        {/* Portada destacada */}
        <motion.figure
          className="overflow-hidden rounded-2xl mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/projects/llar/portada.jpg"
            alt="Portada LLAR"
            className="w-full object-cover rounded-2xl"
            style={{ maxHeight: 480 }}
          />
        </motion.figure>

        {/* Grid interiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(1).map((img, i) => (
            <motion.figure
              key={img.src}
              className="overflow-hidden rounded-xl bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img src={img.src} alt={img.label} className="w-full aspect-video object-cover" />
              <figcaption className="px-3 py-2 text-xs font-medium tracking-wide" style={{ color: '#1e3c64' }}>
                {img.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </main>
    </motion.div>
  )
}
