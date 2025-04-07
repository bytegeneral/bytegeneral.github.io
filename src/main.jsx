import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import TechStackSlider from './components/Techstack/Techstack'
import Footer from './components/Footer/Footer'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <About />
    <TechStackSlider />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </StrictMode>,
)
