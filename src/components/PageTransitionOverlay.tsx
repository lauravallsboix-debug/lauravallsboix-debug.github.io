import { AnimatePresence, motion } from 'framer-motion'
import { usePageTransition } from '../context/TransitionContext'

export default function PageTransitionOverlay() {
  const { state } = usePageTransition()

  return (
    <AnimatePresence>
      {state.active && (
        <motion.div
          key="transition-overlay"
          style={{
            position: 'fixed',
            backgroundColor: state.color,
            zIndex: 9998,
            pointerEvents: 'none',
            borderRadius: 16,
          }}
          initial={{
            top: state.rect.top,
            left: state.rect.left,
            width: state.rect.width,
            height: state.rect.height,
            borderRadius: 16,
            opacity: 1,
          }}
          animate={{
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  )
}
