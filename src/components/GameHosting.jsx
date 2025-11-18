import React from 'react'
import { Shield, Zap, Gauge, Cpu } from 'lucide-react'

const features = [
  { icon: Shield, title: 'DDoS protection', desc: 'Layered enterprise-grade mitigation.' },
  { icon: Zap, title: 'Ultra-low latency', desc: 'Direct peering and 10G uplinks.' },
  { icon: Cpu, title: 'Scalable RAM & CPU', desc: 'Upgrade resources on demand.' },
  { icon: Gauge, title: 'Instant setup', desc: 'Deploy in under a minute.' },
]

export default function GameHosting() {
  return (
    <section id="games" className="relative bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Game Server Hosting</h2>
            <p className="text-slate-400 mt-2">FiveM, Minecraft, Rust, ARK, GTA RP — optimized for competitive performance.</p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-slate-300">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">FiveM</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Minecraft</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Rust</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">ARK</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-sky-300" />
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-slate-300 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
