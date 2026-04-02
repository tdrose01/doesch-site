import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/collections', label: 'Collections' },
  { to: '/product/f-01-imperiale', label: 'Product' },
  { to: '/about', label: 'Story' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-gold/10 bg-obsidian/85 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Doésh Fallanti" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-xl tracking-luxe text-gold drop-shadow-[0_0_16px_rgba(127,90,166,0.4)]">
            DOÉSH FALLANTI
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.26em] transition ${isActive ? 'text-gold' : 'text-zinc-400 hover:text-zinc-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex items-center justify-center rounded-md border border-gold/25 p-2 text-gold transition hover:border-gold/50 hover:bg-gold/10 md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              className="absolute inset-0 h-full w-full bg-obsidian/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.aside
              className="absolute right-0 top-0 flex h-full w-72 flex-col border-l border-gold/20 bg-obsidian/95 p-6 shadow-[0_0_40px_rgba(212,175,55,0.12)] backdrop-blur-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: 'easeOut' }}
            >
              <div className="mb-8 flex items-center justify-end">
                <button
                  type="button"
                  aria-label="Close mobile menu"
                  className="rounded-md border border-gold/25 p-2 text-gold transition hover:border-gold/50 hover:bg-gold/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-xs uppercase tracking-[0.26em] transition ${isActive ? 'text-gold' : 'text-zinc-300 hover:text-zinc-100'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
