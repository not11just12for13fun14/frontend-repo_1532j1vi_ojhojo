import React from 'react'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-black/70 backdrop-blur border-b border-emerald-600/20">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="crt text-xl">NRG_</a>
        <nav className="flex items-center gap-6 text-emerald-300/90">
          <a href="#projects" className="hover:text-emerald-400 transition-colors">projects</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">about</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">contact</a>
        </nav>
      </div>
      <div className="pointer-events-none scanlines absolute inset-0" />
    </header>
  )
}

export default Navbar
