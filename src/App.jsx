import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-emerald-400">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="relative bg-[#050805] py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="crt text-3xl sm:text-4xl mb-6">> ABOUT_</h2>
          <p className="crt-sub text-emerald-300/90 leading-relaxed max-w-3xl">
            We are a tiny indie studio chasing big feelings with small games. We love crunchy pixels, punchy loops,
            and cozy late-night vibes. Every project is a playground for playful mechanics and a love letter to the
            era of glowing CRTs, fuzzy VHS, and neon dreams.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0 scanlines" />
      </section>

      <Projects />

      {/* Contact */}
      <section id="contact" className="relative bg-[#040604] py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="crt text-3xl sm:text-4xl mb-6">> CONTACT_</h2>
          <form className="grid sm:grid-cols-2 gap-4">
            <input className="input-crt" placeholder="your email" type="email" />
            <input className="input-crt" placeholder="subject" />
            <textarea className="input-crt sm:col-span-2 min-h-[140px]" placeholder="message" />
            <button className="btn-crt sm:col-span-2">SEND TRANSMISSION</button>
          </form>
        </div>
        <div className="pointer-events-none absolute inset-0 scanlines" />
      </section>

      <Footer />
    </div>
  )
}

export default App
