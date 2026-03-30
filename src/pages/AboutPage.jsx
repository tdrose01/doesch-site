import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'

export default function AboutPage() {
  return (
    <PageShell title="House of DOÉSH FALLANTI" eyebrow="Our Story">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-zinc-300"
        >
          Founded between Paris and Milan, DOÉSH FALLANTI creates contemporary heirlooms for women who collect objects with intention. Our atelier blends old-world leathercraft with a restrained, architectural approach to design.
          Every piece begins as a hand sketch, then evolves through a meticulous process of prototyping, balancing, and finishing until form and function are in perfect harmony.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="space-y-5 border-l border-gold/20 pl-6"
        >
          <p className="text-xs uppercase tracking-[0.26em] text-zinc-500">Atelier Values</p>
          <p className="text-sm text-zinc-300">Limited production runs for rarity and quality control.</p>
          <p className="text-sm text-zinc-300">European leather partners with traceable sourcing.</p>
          <p className="text-sm text-zinc-300">Finishing standards inspired by haute joaillerie.</p>
        </motion.div>
      </div>
    </PageShell>
  )
}
