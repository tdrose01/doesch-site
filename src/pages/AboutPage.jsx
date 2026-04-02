import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'

export default function AboutPage() {
  return (
    <PageShell title="House of DOÉSH FALLANTI" eyebrow="Our Story">
      <div className="space-y-12">
        {/* Designer Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1fr_1fr]"
        >
          <div className="space-y-6">
            <h2 className="font-display text-4xl text-gold">Alessio Fallanti</h2>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Creative Director</p>
            <p className="text-lg leading-relaxed text-zinc-300">
              Alessio Fallanti is the creative force behind Doésh Fallanti — a fusion of Italian elegance and modern street-luxury.
            </p>
          </div>
          <div className="space-y-5 border-l border-gold/20 pl-6">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-zinc-500 mb-2">Origin Energy</p>
              <p className="text-sm text-zinc-300">Milan × Rome influence — tailoring meets bold statement.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-zinc-500 mb-2">Design Philosophy</p>
              <p className="text-sm text-gold italic">"Controlled chaos in perfect form."</p>
              <p className="text-sm text-zinc-400 mt-2 italic">Luxury in Structure. Power in Simplicity.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-zinc-500 mb-2">Aesthetic</p>
              <p className="text-sm text-zinc-300">Monochrome dominance, sharp tailoring, statement patterns, elevated streetwear.</p>
            </div>
          </div>
        </motion.div>

        {/* House Story */}
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-zinc-300"
          >
            Founded between Rome and Milan, DOÉSH FALLANTI creates contemporary heirlooms for those who collect objects with intention — pieces designed for both women and men. Our atelier blends old-world leathercraft with a restrained, architectural approach to design.
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
      </div>
    </PageShell>
  )
}
