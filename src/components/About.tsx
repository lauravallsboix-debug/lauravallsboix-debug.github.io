import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign',
  'Adobe After Effects', 'Adobe Premiere', 'SolidWorks', 'KeyShot', 'Cinema 4D',
  'Canva', 'Procreate', 'MidJourney', 'WordPress', 'Pacdora',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="sobre-mí"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: '#631d3f' }}
    >
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p
              className="text-sm font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: '#ffec9e' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Sobre mí
            </motion.p>

            <motion.h2
              className="font-serif text-4xl md:text-5xl mb-8 leading-tight"
              style={{ color: '#dfdcd4' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Creativa, ingeniosa<br />y apasionada.
            </motion.h2>

            <motion.p
              className="text-base leading-relaxed mb-6"
              style={{ color: '#dfdcd4', opacity: 0.8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 0.8, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Diseñadora de producto y gráfica formada en la EASD Valencia y con
              Máster en Diseño Gráfico y Creatividad por Mastermedia. Desde
              pequeña, el arte y la música han guiado mi forma de ver el mundo.
            </motion.p>

            <motion.p
              className="text-base leading-relaxed mb-10"
              style={{ color: '#dfdcd4', opacity: 0.8 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 0.8, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A lo largo de los años, mis experiencias profesionales me han
              llevado a ampliar conocimientos, aprender de los errores y
              perfeccionar mis procesos creativos. Me apasiona el diseño por
              todas las posibilidades que ofrece de materializar una idea,
              darle forma y crear algo único. He trabajado en branding,
              packaging, editorial, web y producto para marcas como
              Gio De Giovanni y como freelance.
            </motion.p>

            {/* Experience highlights */}
            <motion.div
              className="flex gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { number: '6+', label: 'Años de experiencia' },
                { number: '20+', label: 'Proyectos completados' },
                { number: '5+', label: 'Empresas colaboradoras' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-medium" style={{ color: '#ffec9e' }}>
                    {stat.number}
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#dfdcd4', opacity: 0.6 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p
              className="text-sm font-medium tracking-[0.15em] uppercase mb-6"
              style={{ color: '#ffec9e' }}
            >
              Skills
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium border"
                  style={{
                    borderColor: 'rgba(223,220,212,0.3)',
                    color: '#dfdcd4',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  whileHover={{
                    backgroundColor: '#ffec9e',
                    borderColor: '#ffec9e',
                    color: '#631d3f',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
