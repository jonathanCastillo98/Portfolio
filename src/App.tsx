
import './App.css'
import About from './components/about'

import Header from './components/header'
import Home from './components/home'
import Qualification from './components/qualification'
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
        <Qualification />
      </main>
    </>
  )
}

export default App
