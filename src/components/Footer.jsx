import React from 'react'
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, CreditCard, Bitcoin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-fuchsia-500 mb-3" />
          <div className="text-slate-300 text-sm">Premium infrastructure with neon-grade performance.</div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@nebulahost.io</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> London • Paris • NYC</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Follow</h4>
          <div className="flex items-center gap-3 text-slate-300">
            <a className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center" href="#" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            <a className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center" href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center" href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Payments</h4>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-2"><CreditCard className="h-4 w-4" /> Visa</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-2"><CreditCard className="h-4 w-4" /> Mastercard</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 mt-3">
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-2"><CreditCard className="h-4 w-4" /> PayPal</span>
            <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-2"><Bitcoin className="h-4 w-4" /> Crypto</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 text-slate-500 text-sm">© {new Date().getFullYear()} NebulaHost. All rights reserved.</div>
    </footer>
  )
}
