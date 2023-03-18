
import './App.css'
import About from './components/about'

import Header from './components/header'
import Home from './components/home'
import Services from './components/services'
import Skills from './components/skills'

function App() {

  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  )
}

export default App
