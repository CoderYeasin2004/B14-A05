import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './component/nav.tsx'
import Hero from './component/hero.tsx'
import Technologies from './component/technologies.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Technologies />

  </StrictMode>,
)
