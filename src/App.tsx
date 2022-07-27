import './App.css'
import { About } from './components/About'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Tecnologies } from './components/Tecnologies'
import { Works } from './components/Works'

function App() {

  return (
    <div>
      <Tecnologies />
      <Hero />
      <About />
      <Works />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
