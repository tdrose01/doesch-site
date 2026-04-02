import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { featuredProduct } from '../data/products'
import PageShell from '../components/PageShell'

export default function ProductDetailPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <PageShell title={featuredProduct.name} eyebrow="Signature Piece">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="space-y-6">
          <div className="relative h-[34rem] w-full overflow-hidden rounded-2xl border border-zinc-700/40 bg-zinc-900 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-zinc-900/35 via-transparent to-white/10" />
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={featuredProduct.images[activeIndex]}
                alt={`${featuredProduct.name} - view ${activeIndex + 1}`}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-400">Gallery</p>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {featuredProduct.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative aspect-[4/5] overflow-hidden rounded-2xl border transition-all duration-500 ${
                    i === activeIndex
                      ? 'border-gold/90 ring-2 ring-gold/30 shadow-[0_0_0_1px_rgba(212,175,55,0.4),0_20px_40px_rgba(0,0,0,0.6),0_0_60px_rgba(212,175,55,0.15)]'
                      : 'border-zinc-800/70 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:border-zinc-600/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(212,175,55,0.08)]'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${featuredProduct.name} thumbnail ${i + 1}`}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-50" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="space-y-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{featuredProduct.price}</p>
          <p className="max-w-xl text-base leading-relaxed text-zinc-300">{featuredProduct.subtitle}</p>

          <div>
            <h3 className="mb-4 font-display text-2xl text-gold">Specifications</h3>
            <ul className="space-y-3">
              {featuredProduct.specs.map((spec) => (
                <li key={spec} className="border-b border-zinc-800 pb-3 text-sm text-zinc-300">
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-gold/20 bg-zinc-950/40 p-6">
            <h3 className="mb-3 font-display text-2xl text-gold">Craftsmanship Notes</h3>
            <p className="text-sm leading-relaxed text-zinc-300">{featuredProduct.craftsmanship}</p>
          </div>

          <button className="rounded-full border border-gold/50 bg-gold px-8 py-3 text-xs uppercase tracking-[0.2em] text-obsidian transition hover:bg-gold-soft">
            Request Private Appointment
          </button>
        </motion.div>
      </div>
    </PageShell>
  )
}
