import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { projects } from '../data/projects'

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.article
      ref={ref}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ backgroundColor: project.color }}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      onClick={() => project.url && window.open(project.url, '_blank')}
    >
      <div className="w-full aspect-[4/3] overflow-hidden" style={{ backgroundColor: project.color }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
              project.imageFit === 'contain' ? 'object-contain p-8' : 'object-cover'
            }`}
            style={{ objectPosition: project.imagePosition ?? 'center' }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl font-serif"
            style={{ color: '#631d3f', opacity: 0.3 }}>
            {project.title[0]}
          </div>
        )}
      </div>

      <div className="p-6">
        <p
          className="text-xs font-semibold tracking-[0.15em] uppercase mb-2"
          style={{ color: '#631d3f' }}
        >
          {project.category}
        </p>
        <h3
          className="font-serif text-2xl font-medium mb-3"
          style={{ color: '#3d1127' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#3d1127', opacity: 0.7 }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(99,29,63,0.1)', color: '#631d3f' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(99,29,63,0.85)' }}
      >
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#ffec9e' }}>
          {project.url ? 'Ver web →' : 'Ver proyecto →'}
        </span>
      </motion.div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="proyectos" className="py-24 px-8 md:px-16 lg:px-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p
          className="text-sm font-medium tracking-[0.2em] uppercase mb-4"
          style={{ color: '#631d3f' }}
        >
          Trabajo
        </p>
        <h2
          className="font-serif text-4xl md:text-5xl"
          style={{ color: '#631d3f' }}
        >
          Proyectos seleccionados
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
