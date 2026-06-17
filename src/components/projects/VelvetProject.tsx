import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageTransition } from '../../context/TransitionContext'

const BG = '#e8e4d8'

const pieces = [
  {
    src: '/projects/velvet/cartel-vermouth.jpg',
    label: 'Cartel — It\'s time for Vermouth',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/projects/velvet/cartel-cocktail.jpg',
    label: 'Cartel — It\'s time for Cocktail',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/projects/velvet/menu.png',
    label: 'Carta de menú',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/projects/velvet/rotulo.png',
    label: 'Rótulo exterior',
    aspect: 'aspect-video',
  },
]

export default function VelvetProject() {
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
      {/* Header */}
      <header
        className="sticky top-0 z-50 flex items-center gap-4 px-8 py-4 border-b"
        style={{ backgroundColor: 'rgba(232,228,216,0.92)', backdropFilter: 'blur(12px)', borderColor: 'rgba(40,32,20,0.1)' }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          style={{ color: '#2a1f0e' }}
        >
          ← Volver
        </button>
        <span style={{ color: 'rgba(40,32,20,0.3)' }}>·</span>
        <span className="text-sm font-medium" style={{ color: '#2a1f0e' }}>
          Velvet Club
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">

        {/* Intro */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#c8a840' }}>
            Diseño Gráfico · Ilustración · Illustrator · Print
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight" style={{ color: '#2a1f0e' }}>
            Velvet Club
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#2a1f0e', opacity: 0.75 }}>
            Comunicación visual para un bar de cócteles con estética art déco. Serie de carteles
            ilustrados, carta de menú y rótulo con tipografía dorada sobre azul profundo. Un universo
            gráfico que evoca el glamour de los años 20.
          </p>
        </motion.div>

        {/* Carteles — dos columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {pieces.slice(0, 2).map((piece, i) => (
            <motion.figure
              key={piece.src}
              className="overflow-hidden rounded-2xl bg-[#1a2f4a]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`w-full ${piece.aspect} overflow-hidden`}>
                <img src={piece.src} alt={piece.label} className="w-full h-full object-cover" />
              </div>
              <figcaption className="px-4 py-3 text-xs font-medium tracking-wide" style={{ color: '#c8a840' }}>
                {piece.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Menú y rótulo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pieces.slice(2).map((piece, i) => (
            <motion.figure
              key={piece.src}
              className="overflow-hidden rounded-2xl bg-[#1a2f4a]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`w-full ${piece.aspect} overflow-hidden`}>
                <img src={piece.src} alt={piece.label} className="w-full h-full object-cover" />
              </div>
              <figcaption className="px-4 py-3 text-xs font-medium tracking-wide" style={{ color: '#c8a840' }}>
                {piece.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>

      </main>
    </motion.div>
  )
}
