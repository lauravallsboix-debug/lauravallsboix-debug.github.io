import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePageTransition } from '../../context/TransitionContext'

const palette = ['#8CA6A1', '#2F7074', '#E5B95D', '#654B5F', '#C4D6DF', '#F3EEE5']

const conceptA = {
  title: 'Tú a tu ritmo',
  description:
    'Una propuesta que invita a reconectar con lo esencial: disfrutar del trayecto, tomarse el tiempo necesario y encontrar belleza en lo cotidiano. Motivos vegetales y gráficos que mezclan lo artesanal con lo moderno.',
  images: [
    { src: '/projects/uo/cogin-lifestyle.png', label: 'Funda de cojín' },
    { src: '/projects/uo/cogin-texto.png', label: 'Funda de cojín — texto' },
    { src: '/projects/uo/calcetines.png', label: 'Calcetines' },
    { src: '/projects/uo/panuelo.png', label: 'Pañuelo de seda' },
    { src: '/projects/uo/bag-charm-bolso.png', label: 'Bag charm' },
    { src: '/projects/uo/bag-charm.png', label: 'Bag charm — detalle' },
    { src: '/projects/uo/llavero.png', label: 'Llavero metálico' },
    { src: '/projects/uo/packaging-tu-ritmo.png', label: 'Kit regalo' },
  ],
}

const conceptB = {
  title: 'Spoiler: me encantas',
  description:
    'Una colección que celebra el cariño cotidiano, los pequeños gestos y el arte de decir mucho con poco. Entre tonos cálidos, líneas suaves y motivos naturales, cada pieza invita a disfrutar del momento con calma, estilo y buen humor.',
  images: [
    { src: '/projects/uo/cogin-rayas.png', label: 'Funda de cojín' },
    { src: '/projects/uo/tazas.png', label: 'Taza' },
    { src: '/projects/uo/tote-bag.png', label: 'Bolsa de tela' },
    { src: '/projects/uo/packaging-regalo.png', label: 'Kit regalo' },
  ],
}

function ImageGrid({ images }: { images: typeof conceptA.images }) {
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
          <img
            src={img.src}
            alt={img.label}
            className="w-full aspect-square object-cover"
          />
          <figcaption
            className="px-3 py-2 text-xs font-medium tracking-wide"
            style={{ color: '#631d3f' }}
          >
            {img.label}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  )
}

export default function UOProject() {
  const navigate = useNavigate()
  const { state, clearTransition } = usePageTransition()
  const bgColor = state.active ? state.color : '#e8f0ee'

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
        style={{ backgroundColor: 'rgba(245,243,239,0.92)', backdropFilter: 'blur(12px)', borderColor: 'rgba(99,29,63,0.1)' }}
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
          UO — Colección AW 26/27
        </span>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-16">

        {/* Hero del proyecto */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: '#631d3f' }}
          >
            Diseño de Producto · MidJourney · Illustrator
          </p>
          <h1
            className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
            style={{ color: '#631d3f' }}
          >
            UO — Colección<br />AW 26/27
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl leading-relaxed mb-10"
            style={{ color: '#3d1127', opacity: 0.75 }}
          >
            Mini colección para la campaña Otoño/Invierno 26-27 de UO, desarrollada
            teniendo en cuenta las tendencias del mercado, la paleta de color y la
            identidad de la marca. Dos conceptos propios con productos de lifestyle,
            accesorios y packaging regalo.
          </p>

          {/* Paleta de color */}
          <div className="flex gap-3 flex-wrap">
            {palette.map((color) => (
              <div key={color} className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-10 rounded-full border"
                  style={{ backgroundColor: color, borderColor: 'rgba(0,0,0,0.08)' }}
                />
                <span className="text-xs font-mono" style={{ color: '#631d3f', opacity: 0.5 }}>
                  {color}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Concepto A */}
        <section className="mb-20">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
              style={{ color: '#631d3f', opacity: 0.5 }}
            >
              Concepto 01
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl mb-4"
              style={{ color: '#631d3f' }}
            >
              {conceptA.title}
            </h2>
            <p
              className="text-base max-w-xl leading-relaxed"
              style={{ color: '#3d1127', opacity: 0.7 }}
            >
              {conceptA.description}
            </p>
          </motion.div>
          <ImageGrid images={conceptA.images} />
        </section>

        {/* Divider */}
        <div className="w-full h-px mb-20" style={{ backgroundColor: 'rgba(99,29,63,0.12)' }} />

        {/* Concepto B */}
        <section className="mb-20">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
              style={{ color: '#631d3f', opacity: 0.5 }}
            >
              Concepto 02
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl mb-4"
              style={{ color: '#631d3f' }}
            >
              {conceptB.title}
            </h2>
            <p
              className="text-base max-w-xl leading-relaxed"
              style={{ color: '#3d1127', opacity: 0.7 }}
            >
              {conceptB.description}
            </p>
          </motion.div>
          <ImageGrid images={conceptB.images} />
        </section>

        {/* PDF download */}
        <motion.div
          className="flex flex-col items-center gap-4 py-16 border-t"
          style={{ borderColor: 'rgba(99,29,63,0.12)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm" style={{ color: '#3d1127', opacity: 0.6 }}>
            ¿Querés ver la presentación completa?
          </p>
          <a
            href="/projects/uo/PRUEBA UO_LAURA VALLS.pdf"
            download
            className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#631d3f', color: '#f5f3ef' }}
          >
            Descargar presentación PDF
          </a>
        </motion.div>

      </main>
    </motion.div>
  )
}
