import { motion } from 'framer-motion'
import PageShell from '../components/PageShell'

export default function ContactPage() {
  return (
    <PageShell title="Contact & Appointments" eyebrow="Private Client Services">
      <motion.form
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
        className="grid max-w-2xl gap-5"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-zinc-800 bg-charcoal px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-gold/60"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-zinc-800 bg-charcoal px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-gold/60"
        />
        <select className="w-full border border-zinc-800 bg-charcoal px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-gold/60">
          <option>Boutique Appointment</option>
          <option>Private Preview</option>
          <option>Press Inquiry</option>
        </select>
        <textarea
          rows="5"
          placeholder="Message"
          className="w-full border border-zinc-800 bg-charcoal px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-gold/60"
        />
        <button className="w-fit rounded-full border border-gold/50 bg-gold px-7 py-3 text-xs uppercase tracking-[0.2em] text-obsidian transition hover:bg-gold-soft">
          Submit Request
        </button>
      </motion.form>
    </PageShell>
  )
}
