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

          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Gallery</p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
              {featuredProduct.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative aspect-square overflow-hidden rounded-xl border transition-all duration-300 ${
                    i === activeIndex
                      ? 'border-gold/90 shadow-[0_0_0_1px_rgba(212,175,55,0.55),0_12px_26px_rgba(0,0,0,0.55)]'
                      : 'border-zinc-700/60 shadow-[0_8px_20px_rgba(0,0,0,0.38)] hover:-translate-y-0.5 hover:border-zinc-400/80 hover:shadow-[0_16px_28px_rgba(0,0,0,0.48)]'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${featuredProduct.name} thumbnail ${i + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-white/5 opacity-80" />
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
