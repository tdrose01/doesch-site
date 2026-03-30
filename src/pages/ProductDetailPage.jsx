import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { featuredProduct } from '../data/products'
import PageShell from '../components/PageShell'

export default function ProductDetailPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <PageShell title={featuredProduct.name} eyebrow="Signature Piece">
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="space-y-4">
          <div className="relative h-[34rem] w-full overflow-hidden rounded-sm shadow-luxe">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={featuredProduct.images[activeIndex]}
                alt={`${featuredProduct.name} - view ${activeIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
          <div className="flex gap-3">
            {featuredProduct.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-20 w-20 overflow-hidden rounded-sm border-2 transition-all duration-300 ${
                  i === activeIndex ? 'border-gold shadow-[0_0_12px_rgba(212,175,55,0.4)]' : 'border-zinc-800 hover:border-zinc-600'
                }`}
              >
                <img src={img} alt={`${featuredProduct.name} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
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
