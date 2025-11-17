import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black crt-vignette">
      {/* Background Spline */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Beams + Vignette + Grain */}
      <div className="beams" />
      <div className="noise" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* HUD corners */}
      <span className="hud-corner left-4 top-4" />
      <span className="hud-corner right-4 top-4" />
      <span className="hud-corner left-4 bottom-4" />
      <span className="hud-corner right-4 bottom-4" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center p-6">
        <div className="max-w-3xl float">
          <h1 className="crt text-4xl sm:text-6xl font-black tracking-wider mb-4 glow">
            > NEON RABBIT GAMES_
          </h1>
          <p className="crt-sub text-emerald-300/90 text-lg sm:text-xl max-w-2xl mx-auto">
            Independent studio crafting small, punchy experiences with heart.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects" className="btn-crt">
              VIEW PROJECTS
            </a>
            <a href="#about" className="btn-crt-secondary">
              ABOUT STUDIO
            </a>
          </div>
        </div>
      </div>

      {/* Scanlines overlay */}
      <div className="pointer-events-none absolute inset-0 scanlines" />
    </section>
  )
}

export default Hero
