import React from 'react'
import { Cpu, HardDrive, Network, Shield, Zap } from 'lucide-react'

const tiers = [
  {
    name: 'VPS Nano',
    price: '$8/mo',
    specs: [
      { icon: Cpu, label: '2 vCPU' },
      { icon: HardDrive, label: '40 GB NVMe' },
      { icon: Zap, label: '4 GB RAM' },
      { icon: Network, label: '2 TB Bandwidth' },
      { icon: Shield, label: 'DDoS Protected' },
    ],
  },
  {
    name: 'VPS Pro',
    price: '$16/mo',
    highlighted: true,
    specs: [
      { icon: Cpu, label: '4 vCPU' },
      { icon: HardDrive, label: '80 GB NVMe' },
      { icon: Zap, label: '8 GB RAM' },
      { icon: Network, label: '4 TB Bandwidth' },
      { icon: Shield, label: 'DDoS Protected' },
    ],
  },
  {
    name: 'VPS Max',
    price: '$32/mo',
    specs: [
      { icon: Cpu, label: '8 vCPU' },
      { icon: HardDrive, label: '160 GB NVMe' },
      { icon: Zap, label: '16 GB RAM' },
      { icon: Network, label: '8 TB Bandwidth' },
      { icon: Shield, label: 'DDoS Protected' },
    ],
  },
]

function TierCard({ tier }) {
  return (
    <div className={`relative rounded-2xl p-6 border ${tier.highlighted ? 'border-sky-500/40 bg-slate-900/70 shadow-[0_8px_50px_rgba(56,189,248,0.25)]' : 'border-slate-800/80 bg-slate-900/50'}`}>
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500">Popular</div>
      )}
      <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
      <div className="text-3xl font-extrabold mt-2 bg-gradient-to-r from-sky-300 to-fuchsia-300 bg-clip-text text-transparent">{tier.price}</div>
      <ul className="mt-5 space-y-3 text-sm text-slate-300">
        {tier.specs.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <Icon className="h-4 w-4 text-sky-300" />
            </span>
            {label}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-xl px-4 py-2.5 bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-medium hover:opacity-95 transition">Deploy Now</button>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold tracking-tight">VPS Hosting Pricing</h2>
          <p className="text-slate-400 mt-2">Sleek, scalable plans with NVMe performance and enterprise security.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  )
}
