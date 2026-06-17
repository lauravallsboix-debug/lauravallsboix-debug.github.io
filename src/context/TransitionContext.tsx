import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface Rect { top: number; left: number; width: number; height: number }

interface TransitionState {
  active: boolean
  color: string
  rect: Rect
}

interface TransitionContextValue {
  state: TransitionState
  triggerTransition: (color: string, rect: DOMRect) => void
  clearTransition: () => void
}

const TransitionContext = createContext<TransitionContextValue>(null!)

const DEFAULT: TransitionState = {
  active: false,
  color: '#e8f0ee',
  rect: { top: 0, left: 0, width: 0, height: 0 },
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TransitionState>(DEFAULT)

  const triggerTransition = useCallback((color: string, rect: DOMRect) => {
    setState({
      active: true,
      color,
      rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
    })
  }, [])

  const clearTransition = useCallback(() => {
    setState(DEFAULT)
  }, [])

  return (
    <TransitionContext.Provider value={{ state, triggerTransition, clearTransition }}>
      {children}
    </TransitionContext.Provider>
  )
}

export const usePageTransition = () => useContext(TransitionContext)
