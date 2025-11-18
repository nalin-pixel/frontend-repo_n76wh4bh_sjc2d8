import React from 'react'
import Spline from '@splinetool/react-spline'
import { ShieldCheck, Zap, Lock, Menu } from 'lucide-react'

export default function Hero() {
  return (
    <header className="relative min-h-[88vh] overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and vignette overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,101,242,0.35),transparent_60%)] mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.25),transparent_60%)] mix-blend-screen pointer-events-none" />

      {/* Top navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-fuchsia-500 shadow-[0_0_25px_rgba(59,130,246,0.6)]" />
          <span className="text-lg font-semibold tracking-tight">NebulaHost</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#vps" className="hover:text-white transition">VPS</a>
          <a href="#dedicated" className="hover:text-white transition">Dedicated</a>
          <a href="#games" className="hover:text-white transition">Game Servers</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#reviews" className="hover:text-white transition">Reviews</a>
        </div>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-300/80 bg-sky-400/10 px-3 py-1 rounded-full ring-1 ring-sky-400/20 mb-6">
            <Zap className="h-3.5 w-3.5" /> Ultra-premium hosting
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            High-Performance Hosting Solutions
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl">
            Fast, secure and reliable infrastructure for modern apps and game servers. Neon-powered performance with enterprise DDoS protection and 99.99% uptime.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white font-medium shadow-[0_8px_30px_rgba(56,189,248,0.45)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.45)] transition">
              Order Now
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              Get Started
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300/90">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sky-300" /> 99.99% Uptime</div>
            <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-fuchsia-300" /> Enterprise DDoS</div>
            <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-sky-300" /> NVMe | 10G Network</div>
          </div>
        </div>
      </div>
    </header>
  )
}
