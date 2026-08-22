import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Philosophy from './components/Philosophy'
import Work from './components/Work'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Philosophy />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
