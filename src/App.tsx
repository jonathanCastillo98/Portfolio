
import './App.css'
import About from './components/about'
import Certifications from './components/certifications'
import Contact from './components/contact'
import Footer from './components/footer'

import Header from './components/header'
import Home from './components/home'
import Projects from './components/projects'
import Qualification from './components/qualification'
import Scrollup from './components/scrollup'
import Services from './components/services'
import Skills from './components/skills'
import Testimonials from './components/testimonials'

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Certifications />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  )
}

export default App
