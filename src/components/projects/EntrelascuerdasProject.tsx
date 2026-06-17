import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageTransition } from '../../context/TransitionContext'

const BG = '#fff3e0'

const sections = [
  {
    label: 'Identidad',
    title: 'Logo & Sistema de marca',
    description:
      'Logo FSO con la columna vertebral integrada en las siglas — el elemento central del concepto. Paleta azul marino y naranja que conecta la solidez de la clínica con la energía del deporte. Exploración tipográfica, variantes y sistema de marca completo.',
    images: [
      { src: '/projects/entrelascuerdas/logo-board.png', label: 'Exploración de logo' },
      { src: '/projects/entrelascuerdas/fso-sombra.png', label: 'Logo FSO — aplicación' },
      { src: '/projects/entrelascuerdas/fso-pista.png', label: 'Logo FSO — sobre pista' },
      { src: '/projects/entrelascuerdas/camiseta.jpg', label: 'Logo en camiseta' },
    ],
  },
  {
    label: 'Comunicación',
    title: 'Carteles & Redes sociales',
    description:
      'Serie de carteles ilustrados con lenguaje directo y visual impactante. Diseño de posts y stories para redes sociales con coherencia de marca, combinando fotografía, tipografía y los elementos gráficos del sistema.',
    images: [
      { src: '/projects/entrelascuerdas/cartel-fisura.png', label: '¡Fisura! — póster ilustrado' },
      { src: '/projects/entrelascuerdas/cartel-recupera.png', label: 'Recupera tu juego — flyer' },
      { src: '/projects/entrelascuerdas/cartel-volver.png', label: 'Volver más fuerte — póster' },
      { src: '/projects/entrelascuerdas/stories.png', label: 'Stories & posts RRSS' },
    ],
  },
  {
    label: 'Aplicaciones',
    title: 'Tarjetería & Merchandising',
    description:
      'Aplicación de la identidad en piezas físicas: tarjetas de visita con pelotas de tenis como elemento escenográfico, y línea de merchandising — gorra navy, tote bag y camiseta — que refuerzan la presencia de marca fuera de la clínica.',
    images: [
      { src: '/projects/entrelascuerdas/tarjetas.png', label: 'Tarjetas de visita' },
      { src: '/projects/entrelascuerdas/merch-spread.png', label: 'Merchandising — spread' },
      { src: '/projects/entrelascuerdas/merch-conjunto.png', label: 'Merchandising — conjunto' },
    ],
  },
]

function ImageGrid({ images }: { images: { src: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <motion.figure
          key={img.src}
          className="overflow-hidden rounded-xl bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
        >
          <img src={img.src} alt={img.label} className="w-full aspect-square object-cover" />
          <figcaption className="px-3 py-2 text-xs font-medium tracking-wide" style={{ color: '#1a3a5c' }}>
            {img.label}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}

export default function EntrelascuerdasProject() {
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
        style={{ backgroundColor: 'rgba(255,243,224,0.92)', backdropFilter: 'blur(12px)', borderColor: 'rgba(26,58,92,0.1)' }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          style={{ color: '#1a3a5c' }}
        >
          ← Volver
        </button>
        <span style={{ color: 'rgba(26,58,92,0.3)' }}>·</span>
        <span className="text-sm font-medium" style={{ color: '#1a3a5c' }}>
          Fisio Entrelascuerdas
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">

        {/* Hero imagen */}
        <motion.div
          className="w-full overflow-hidden rounded-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src="/projects/entrelascuerdas/hero.png"
            alt="Fisio Entrelascuerdas — logo sobre pista"
            className="w-full object-cover"
            style={{ maxHeight: 420, objectPosition: 'center' }}
          />
        </motion.div>

        {/* Intro */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#E57200' }}>
            Identidad de Marca · Branding · Logo · Illustrator
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight" style={{ color: '#1a3a5c' }}>
            Fisio<br />Entrelascuerdas
          </h1>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#1a3a5c', opacity: 0.75 }}>
            Identidad visual completa para una clínica de fisioterapia especializada en tenistas.
            El logo integra la columna vertebral en las siglas FSO, uniendo el mundo de la salud
            con el del tenis. Paleta azul marino y naranja, sistema de comunicación y aplicaciones
            en merchandising.
          </p>
        </motion.div>

        {/* Secciones */}
        {sections.map((section) => (
          <section key={section.label} className="mb-20">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#E57200' }}>
                {section.label}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: '#1a3a5c' }}>
                {section.title}
              </h2>
              <p className="text-base max-w-xl leading-relaxed" style={{ color: '#1a3a5c', opacity: 0.7 }}>
                {section.description}
              </p>
            </motion.div>
            <ImageGrid images={section.images} />
            <div className="w-full h-px mt-20" style={{ backgroundColor: 'rgba(26,58,92,0.1)' }} />
          </section>
        ))}

        {/* PDF download */}
        <motion.div
          className="flex flex-col items-center gap-4 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm" style={{ color: '#1a3a5c', opacity: 0.6 }}>
            ¿Querés ver la presentación completa?
          </p>
          <a
            href="/projects/entrelascuerdas/ENTRELASCUERDAS.pdf"
            download
            className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#1a3a5c', color: '#fff3e0' }}
          >
            Descargar presentación PDF
          </a>
        </motion.div>

      </main>
    </motion.div>
  )
}
