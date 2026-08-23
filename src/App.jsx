import Contact from './components/Contact'
import Education from './components/Education'
import Folders from './components/Folders'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Philosophy from './components/Philosophy'
import { useHashScroll } from './hooks/useHashScroll'
import './App.css'

export default function App() {
  useHashScroll()

  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Folders />
        <Education />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
