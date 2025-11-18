import React from 'react'
import { Star } from 'lucide-react'

const reviews = [
  { name: 'Alex R.', text: 'Rock-solid uptime and insane speeds. Our FiveM community moved here and never looked back.', rating: 5 },
  { name: 'Mina K.', text: 'Deployment is instant and support is fantastic. The premium look matches the performance.', rating: 5 },
  { name: 'Leo G.', text: 'DDoS protection actually works. Had attacks last month and our servers stayed online.', rating: 5 },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Loved by real customers</h2>
          <p className="text-slate-400 mt-2">Proven reliability and performance for apps and games.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
              <Stars count={r.rating} />
              <p className="text-slate-200 mt-3">“{r.text}”</p>
              <div className="mt-4 text-sm text-slate-400">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
