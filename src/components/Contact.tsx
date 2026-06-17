import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contacto"
      className="py-24 px-8 md:px-16 lg:px-24"
      style={{ backgroundColor: '#dfdcd4' }}
    >
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-sm font-medium tracking-[0.2em] uppercase mb-4"
          style={{ color: '#631d3f' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contacto
        </motion.p>

        <motion.h2
          className="font-serif text-4xl md:text-6xl mb-6 leading-tight"
          style={{ color: '#631d3f' }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Trabajemos juntos
        </motion.h2>

        <motion.p
          className="text-base leading-relaxed mb-12"
          style={{ color: '#3d1127', opacity: 0.7 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 0.7, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ¿Tenés un proyecto en mente? Hablemos. Estoy disponible para
          proyectos de branding, diseño web, editorial y producto.
        </motion.p>

        <motion.a
          href="mailto:lauravallsboix@gmail.com"
          className="inline-block px-10 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 mb-16"
          style={{ backgroundColor: '#631d3f', color: '#dfdcd4' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.04, backgroundColor: '#3d1127' }}
        >
          lauravallsboix@gmail.com
        </motion.a>

        <motion.div
          className="flex justify-center gap-8 pt-12 border-t"
          style={{ borderColor: 'rgba(99,29,63,0.15)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laura-valls-boix-47178913a/' },
            { label: 'Instagram', href: 'https://www.instagram.com/lull_vb/' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wide transition-opacity hover:opacity-50"
              style={{ color: '#631d3f' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Laura Valls Boix Portfolio.pdf"
            download
            className="text-sm font-medium tracking-wide transition-opacity hover:opacity-50"
            style={{ color: '#631d3f' }}
          >
            Portfolio PDF
          </a>
        </motion.div>
      </div>
    </section>
  )
}
