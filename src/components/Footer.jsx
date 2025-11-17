import React from 'react'

function Footer() {
  return (
    <footer className="relative bg-black py-10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="crt-sub text-emerald-400/80">© {new Date().getFullYear()} Neon Rabbit Games — All glitches reserved.</p>
        <p className="crt-sub text-emerald-500/60 mt-2">hello@neonrabbit.games</p>
      </div>
      <div className="pointer-events-none absolute inset-0 scanlines" />
    </footer>
  )
}

export default Footer
