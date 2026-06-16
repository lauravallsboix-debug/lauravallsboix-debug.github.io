import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import ScrollPath from './components/ScrollPath'

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollPath />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer
        className="py-6 px-8 text-center text-xs"
        style={{ color: '#631d3f', opacity: 0.5 }}
      >
        © {new Date().getFullYear()} Laura Valls Boix
      </footer>
    </>
  )
}
