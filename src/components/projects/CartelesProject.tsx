import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageTransition } from '../../context/TransitionContext'

const BG = '#e8dde0'

const images = [
  { src: '/projects/carteles/bon-nadal-santa.jpg',  label: 'Bon Nadal — Papá Noel', aspect: 'aspect-[9/16]' },
  { src: '/projects/carteles/bon-nadal-muñeco.jpg', label: 'Bon Nadal — Muñeco de nieve', aspect: 'aspect-[9/16]' },
  { src: '/projects/carteles/bon-nadal-mesa.jpg',   label: 'Bon Nadal — Mesa navideña', aspect: 'aspect-[9/16]' },
  { src: '/projects/carteles/dreams-come-true.jpg', label: 'Dreams Come True — cartel editorial', aspect: 'aspect-[3/4]' },
  { src: '/projects/carteles/cartel-veranda.jpg',   label: 'Cocktail Party — Veranda Garden Bar', aspect: 'aspect-[3/4]' },
  { src: '/projects/carteles/sibi.jpg',             label: 'SIBI — logo personal', aspect: 'aspect-[3/4]' },
]

export default function CartelesProject() {
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
        style={{ backgroundColor: 'rgba(232,221,224,0.92)', backdropFilter: 'blur(12px)', borderColor: 'rgba(99,29,63,0.1)' }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          style={{ color: '#631d3f' }}
        >
          ← Volver
        </button>
        <span style={{ color: 'rgba(99,29,63,0.3)' }}>·</span>
        <span className="text-sm font-medium" style={{ color: '#631d3f' }}>
          Ilustración & Carteles
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#631d3f', opacity: 0.6 }}>
            Ilustración · Illustrator · Photoshop
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight" style={{ color: '#631d3f' }}>
            Ilustración<br />& Carteles
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#3d1127', opacity: 0.75 }}>
            Serie de ilustraciones y carteles personales firmados LVB. Tarjetas navideñas ilustradas,
            logos de marca personal, carteles editoriales y comunicación visual para eventos y clientes.
          </p>
        </motion.div>

        {/* Grid masonry-style: 3 columnas, primeras 3 en vertical, resto en cuadrado */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              className="overflow-hidden rounded-2xl bg-white"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={`w-full ${img.aspect} overflow-hidden`}>
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              </div>
              <figcaption className="px-3 py-2 text-xs font-medium tracking-wide" style={{ color: '#631d3f' }}>
                {img.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </main>
    </motion.div>
  )
}
