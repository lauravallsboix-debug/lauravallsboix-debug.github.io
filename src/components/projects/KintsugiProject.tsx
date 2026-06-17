import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageTransition } from '../../context/TransitionContext'

const BG = '#f5e6c8'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as any, delay },
  }
}

export default function KintsugiProject() {
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
        style={{ backgroundColor: 'rgba(245,230,200,0.92)', backdropFilter: 'blur(12px)', borderColor: 'rgba(100,60,20,0.1)' }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          style={{ color: '#5a3010' }}
        >
          ← Volver
        </button>
        <span style={{ color: 'rgba(90,48,16,0.3)' }}>·</span>
        <span className="text-sm font-medium" style={{ color: '#5a3010' }}>Kintsugi</span>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">

        {/* Título */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#5a3010', opacity: 0.6 }}>
            UX/UI · Figma · WordPress
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight" style={{ color: '#5a3010' }}>
            Kintsugi
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#5a3010', opacity: 0.75 }}>
            Diseño UX/UI completo para una plataforma de bienestar emocional. Identidad visual,
            sistema de componentes y prototipo interactivo — desde los primeros wireframes en Figma
            hasta la web funcional en WordPress.
          </p>
        </motion.div>

        {/* Hero screenshot */}
        <motion.figure
          className="overflow-hidden rounded-2xl mb-6 shadow-lg"
          {...fadeUp(0)}
        >
          <img
            src="/projects/kintsugi/home.png"
            alt="Kintsugi — pantalla principal"
            className="w-full object-cover object-top"
          />
        </motion.figure>

        {/* Video de la web */}
        <section className="mb-20">
          <motion.div className="mb-6" {...fadeUp(0)}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#5a3010', opacity: 0.5 }}>
              La web en acción
            </p>
            <h2 className="font-serif text-3xl md:text-4xl" style={{ color: '#5a3010' }}>
              Navegación completa
            </h2>
          </motion.div>
          <motion.div
            className="overflow-hidden rounded-2xl shadow-lg"
            style={{ backgroundColor: '#1a1a1a' }}
            {...fadeUp(0.1)}
          >
            <video
              src="/projects/kintsugi/web.mp4"
              poster="/projects/kintsugi/home.png"
              controls
              preload="none"
              className="w-full"
              style={{ maxHeight: 600, objectFit: 'contain' }}
            />
          </motion.div>
          <p className="mt-3 text-xs text-center" style={{ color: '#5a3010', opacity: 0.45 }}>
            Grabación del recorrido completo por la web
          </p>
        </section>

        {/* Proceso — Figma + mockup */}
        <section className="mb-20">
          <motion.div className="mb-8" {...fadeUp(0)}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#5a3010', opacity: 0.5 }}>
              Proceso
            </p>
            <h2 className="font-serif text-3xl md:text-4xl" style={{ color: '#5a3010' }}>
              De Figma a producción
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: '/projects/kintsugi/figma.jpg',   label: 'Diseño en Figma' },
              { src: '/projects/kintsugi/mockup.png',  label: 'Identidad visual' },
              { src: '/projects/kintsugi/captura.png', label: 'Vista de la web' },
            ].map((img, i) => (
              <motion.figure
                key={img.src}
                className={`overflow-hidden rounded-xl bg-white shadow ${i === 2 ? 'md:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img src={img.src} alt={img.label} className="w-full object-cover object-top" style={{ maxHeight: 400 }} />
                <figcaption className="px-4 py-3 text-xs font-medium tracking-wide" style={{ color: '#5a3010' }}>
                  {img.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

      </main>
    </motion.div>
  )
}
