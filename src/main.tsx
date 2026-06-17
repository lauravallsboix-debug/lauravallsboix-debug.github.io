import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { TransitionProvider } from './context/TransitionContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <TransitionProvider>
        <App />
      </TransitionProvider>
    </HashRouter>
  </StrictMode>,
)
