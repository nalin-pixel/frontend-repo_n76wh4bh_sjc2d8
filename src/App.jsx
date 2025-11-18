import React from 'react'
import Hero from './components/Hero'
import HostingSections from './components/HostingSections'
import GameHosting from './components/GameHosting'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-sky-500/30 selection:text-white">
      <Hero />
      <HostingSections />
      <GameHosting />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
