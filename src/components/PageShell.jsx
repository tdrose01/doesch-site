import { motion } from 'framer-motion'

export default function PageShell({ title, eyebrow, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24"
    >
      <p className="mb-4 text-xs uppercase tracking-[0.26em] text-zinc-500">{eyebrow}</p>
      <h1 className="font-display text-4xl leading-none text-gold md:text-6xl">{title}</h1>
      <div className="mt-10">{children}</div>
    </motion.section>
  )
}
