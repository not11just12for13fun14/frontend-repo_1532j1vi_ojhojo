import React from 'react'

const games = [
  { title: 'POLYDRIFTER', year: '2024', tag: 'Arcade Racer', desc: 'Low-poly neon drifting with synthwave soundtrack.' },
  { title: 'GHOST/LINE', year: '2023', tag: 'Puzzle', desc: 'Route haunted signals through a glitchy terminal grid.' },
  { title: 'TINY TURRETS', year: '2022', tag: 'Strategy', desc: 'Build bite-sized defenses against charming invaders.' },
]

function Projects() {
  return (
    <section id="projects" className="relative bg-[#060a06] py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="crt text-3xl sm:text-4xl mb-10">> PROJECTS_</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g) => (
            <div key={g.title} className="group rounded-lg border border-emerald-500/30 bg-black/40 p-5 backdrop-blur-sm shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:shadow-[0_0_50px_rgba(16,185,129,0.35)] transition-all">
              <div className="mb-3 flex items-center justify-between text-emerald-300/80">
                <span className="font-mono text-xs">{g.year}</span>
                <span className="font-mono text-[10px] tracking-widest uppercase">{g.tag}</span>
              </div>
              <h3 className="crt text-2xl mb-2">{g.title}</h3>
              <p className="crt-sub text-emerald-300/80 leading-relaxed">{g.desc}</p>
              <button className="mt-4 btn-crt w-full">PLAY DEMO</button>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 scanlines" />
    </section>
  )
}

export default Projects
