import React from 'react'
import { Server, Cpu, Gauge, Gamepad2, Network, Shield, Zap, HardDrive } from 'lucide-react'

function Card({ title, icon: Icon, children }) {
  return (
    <div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 hover:border-sky-500/40 transition">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 flex items-center justify-center">
            <Icon className="h-5 w-5 text-sky-300" />
          </div>
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        <div className="text-slate-300 text-sm">{children}</div>
      </div>
    </div>
  )
}

export default function HostingSections() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-8" id="vps">
        <div className="col-span-full mb-2">
          <h2 className="text-3xl font-bold tracking-tight">Our Hosting</h2>
          <p className="text-slate-400 mt-2">Choose the right performance tier for your workload.</p>
        </div>

        <Card title="VPS Hosting" icon={Cpu}>
          Blazing NVMe storage, KVM virtualization and instant deployment. Root access, snapshots and scalable resources.
        </Card>
        <Card title="Dedicated Servers" icon={Server}>
          Bare-metal power with full control. Latest-gen CPUs, ECC RAM and 10G networking for mission-critical apps.
        </Card>
        <Card title="Game Servers" icon={Gamepad2}>
          Optimized for FiveM, Minecraft, Rust and ARK with ultra-low latency, DDoS protection and one-click mods.
        </Card>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-6 grid md:grid-cols-4 gap-6">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 flex items-center gap-3"><Shield className="h-5 w-5 text-fuchsia-300" /> Enterprise DDoS</div>
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 flex items-center gap-3"><Network className="h-5 w-5 text-sky-300" /> 10G Network</div>
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 flex items-center gap-3"><HardDrive className="h-5 w-5 text-sky-300" /> NVMe SSD</div>
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 flex items-center gap-3"><Gauge className="h-5 w-5 text-fuchsia-300" /> 99.99% Uptime</div>
      </div>
    </section>
  )
}
