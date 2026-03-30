import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'
import { collections } from '../data/products'

export default function CollectionsPage() {
  return (
    <PageShell title="Collections" eyebrow="Seasonal Edit · 2026">
      <div className="grid gap-8 md:grid-cols-3">
        {collections.map((collection, idx) => (
          <motion.article
            key={collection.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.55 }}
            className="group overflow-hidden rounded-sm border border-zinc-800/70 bg-charcoal"
          >
            <div className="overflow-hidden">
              <img
                src={collection.image}
                alt={collection.name}
                className="h-80 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
            </div>
            <div className="space-y-3 p-6">
              <h2 className="font-display text-3xl text-gold">{collection.name}</h2>
              <p className="text-sm leading-relaxed text-zinc-400">{collection.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </PageShell>
  )
}
