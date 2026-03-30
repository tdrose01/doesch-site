import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { featuredProduct } from '../data/products'

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[calc(100vh-72px)] items-end overflow-hidden px-6 py-14 md:px-10">
        <img
          src={featuredProduct.images[0]}
          alt={featuredProduct.name}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-6xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-zinc-400">DOÉSH FALLANTI</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-gold drop-shadow-[0_0_30px_rgba(127,90,166,0.5)] md:text-8xl">
            Objects of Desire,
            <span className="block text-zinc-100">Crafted for Legacy.</span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
            A modern atelier where sculptural silhouettes meet meticulous hand-finishing. Discover the house signature: {featuredProduct.name}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/collections"
              className="rounded-full border border-gold/50 bg-gold px-7 py-3 text-xs uppercase tracking-[0.22em] text-obsidian transition hover:bg-gold-soft"
            >
              Explore Collections
            </Link>
            <Link
              to={`/product/${featuredProduct.slug}`}
              className="rounded-full border border-zinc-600 px-7 py-3 text-xs uppercase tracking-[0.22em] text-zinc-200 transition hover:border-gold/60 hover:text-gold"
            >
              View Featured Piece
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
