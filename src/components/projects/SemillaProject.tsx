import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageTransition } from '../../context/TransitionContext'

const BG = '#e8f0d8'

const boards = [
  { src: '/projects/semilla/otono.webp',    season: 'Otoño',     desc: 'Árbol, setas y uvas. Colores tierra y violeta.' },
  { src: '/projects/semilla/invierno.jpg',  season: 'Invierno',  desc: 'Nubes, muñeco de nieve y elementos sensoriales fríos.' },
  { src: '/projects/semilla/verano.webp',   season: 'Verano',    desc: 'Sol, helados y gafas. Texturas y colores cálidos.' },
  { src: '/projects/semilla/invierno-2.webp', season: 'Primavera / conjunto', desc: 'Los cuatro tableros como sistema completo.' },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as any, delay },
  }
}

export default function SemillaProject() {
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
        style={{ backgroundColor: 'rgba(232,240,216,0.92)', backdropFilter: 'blur(12px)', borderColor: 'rgba(60,90,40,0.1)' }}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-60"
          style={{ color: '#3c5a28' }}
        >
          ← Volver
        </button>
        <span style={{ color: 'rgba(60,90,40,0.3)' }}>·</span>
        <span className="text-sm font-medium" style={{ color: '#3c5a28' }}>Semilla</span>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">

        {/* Hero imagen — banner con tableros + planos */}
        <motion.div
          className="w-full overflow-hidden rounded-2xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/projects/semilla/banner.jpg"
            alt="Semilla — tableros y planos técnicos"
            className="w-full object-cover"
          />
        </motion.div>

        {/* Título */}
        <motion.div className="mb-20" {...fadeUp(0)}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#3c5a28', opacity: 0.6 }}>
            Diseño de Producto · SolidWorks · KeyShot · TFG
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight" style={{ color: '#3c5a28' }}>
            Semilla
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-serif italic" style={{ color: '#3c5a28', opacity: 0.8 }}>
            "Un juego para los que olvidan la estación del año,<br />
            pero recuerdan todo lo que importa."
          </p>
        </motion.div>

        {/* El problema */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#3c5a28', opacity: 0.5 }}>
                El problema
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mb-6 leading-tight" style={{ color: '#3c5a28' }}>
                Cuando perder la noción del tiempo afecta a la vida diaria
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#3c5a28', opacity: 0.75 }}>
                Los pacientes con Alzheimer pierden progresivamente la orientación temporal. No saben en qué
                estación están — y eso afecta a todo: qué ropa ponerse, qué aparato encender, cómo organizar
                su día. Una pérdida pequeña que se convierte en una barrera enorme.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#3c5a28', opacity: 0.75 }}>
                El proyecto nació de observar a estos pacientes de cerca — sus rutinas, sus manías, sus
                momentos de lucidez — y de preguntarnos: ¿y si se puede volver a aprender lo que se olvidó?
              </p>
            </motion.div>
            <motion.figure className="overflow-hidden rounded-2xl" {...fadeUp(0.15)}>
              <img
                src="/projects/semilla/abrazo.png"
                alt="Abuela y nieta abrazándose"
                className="w-full object-cover"
              />
            </motion.figure>
          </div>
        </section>

        {/* La solución */}
        <section className="mb-24">
          <motion.div
            className="rounded-2xl p-10 md:p-16"
            style={{ backgroundColor: 'rgba(60,90,40,0.07)' }}
            {...fadeUp(0)}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#3c5a28', opacity: 0.5 }}>
              La solución
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: '#3c5a28' }}>
              Cuatro tableros. Cuatro estaciones. Un sistema sensorial.
            </h2>
            <p className="text-base leading-relaxed max-w-3xl mb-4" style={{ color: '#3c5a28', opacity: 0.75 }}>
              Semilla es un sistema de cuatro tableros de madera — uno por estación — diseñados para
              trabajar la orientación temporal a través de la estimulación cognitiva y sensorial.
              Cada tablero tiene elementos que se pueden tocar, oler y manipular: frutas, animales,
              texturas y colores propios de cada época del año.
            </p>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: '#3c5a28', opacity: 0.75 }}>
              No es solo un juego. Es una herramienta terapéutica que devuelve pequeños momentos
              de independencia y conexión — para el paciente, pero también para su familia y cuidadores.
              Un proyecto desarrollado hasta planos técnicos completos, listo para dar el salto a producción.
            </p>

            {/* 4 cards de estaciones — justo debajo del texto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
              {boards.map((board, i) => (
                <motion.figure
                  key={board.season}
                  className="overflow-hidden rounded-xl bg-white"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={board.src} alt={board.season} className="w-full h-full object-contain p-4" style={{ backgroundColor: '#f5f5f0' }} />
                  </div>
                  <div className="px-3 py-3">
                    <p className="text-sm font-semibold mb-1" style={{ color: '#3c5a28' }}>{board.season}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#3c5a28', opacity: 0.6 }}>{board.desc}</p>
                  </div>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Los 4 tableros — overview */}
        <section className="mb-16">
          <motion.div className="mb-8" {...fadeUp(0)}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#3c5a28', opacity: 0.5 }}>
              Los tableros
            </p>
            <h2 className="font-serif text-3xl md:text-4xl" style={{ color: '#3c5a28' }}>
              Del render al producto real
            </h2>
          </motion.div>

          <motion.figure className="overflow-hidden rounded-2xl" {...fadeUp(0.1)}>
            <img
              src="/projects/semilla/abuelo.jpg"
              alt="Abuelo con su familia"
              className="w-full object-cover"
              style={{ maxHeight: 500 }}
            />
          </motion.figure>
        </section>

        {/* Render final */}
        <section className="mb-20">
          <motion.div className="mb-6" {...fadeUp(0)}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: '#3c5a28', opacity: 0.5 }}>
              Resultado
            </p>
            <h2 className="font-serif text-3xl md:text-4xl" style={{ color: '#3c5a28' }}>
              Diseñado para producción
            </h2>
          </motion.div>
          <motion.figure className="overflow-hidden rounded-2xl" {...fadeUp(0.1)}>
            <img
              src="/projects/semilla/tableros-render.jpg"
              alt="Render final Semilla"
              className="w-full object-cover"
              style={{ maxHeight: 520 }}
            />
          </motion.figure>
          <motion.p
            className="mt-6 text-sm leading-relaxed max-w-2xl"
            style={{ color: '#3c5a28', opacity: 0.65 }}
            {...fadeUp(0.2)}
          >
            Semilla se desarrolló hasta planos técnicos completos en SolidWorks
            y renders fotorrealistas en KeyShot — preparado para producción, aunque sin llegar a fabricarse.
            Un proyecto que demuestra que la empatía y el rigor técnico no son opuestos — son el mismo proceso.
          </motion.p>
        </section>

        {/* PDF download */}
        <motion.div
          className="flex flex-col items-center gap-4 py-16 border-t"
          style={{ borderColor: 'rgba(60,90,40,0.15)' }}
          {...fadeUp(0)}
        >
          <p className="text-sm" style={{ color: '#3c5a28', opacity: 0.6 }}>
            Documentación técnica completa del proyecto
          </p>
          <a
            href="/projects/semilla/PROYECTO SEMILLA.pdf"
            download
            className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#3c5a28', color: '#e8f0d8' }}
          >
            Descargar memoria del proyecto
          </a>
        </motion.div>

      </main>
    </motion.div>
  )
}
