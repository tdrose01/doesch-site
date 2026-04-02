import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gold/10 bg-gradient-to-b from-transparent to-black/20">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
        {/* Main footer content */}
        <div className="mb-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/images/logo.jpg" 
                alt="Doésh Fallanti" 
                className="h-14 w-14 rounded-full object-cover ring-1 ring-gold/20"
              />
            </Link>
            <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-500 md:text-left">
              Crafted with intention
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em]">
              <Link to="/" className="text-zinc-400 transition hover:text-gold">Home</Link>
              <Link to="/collections" className="text-zinc-400 transition hover:text-gold">Collections</Link>
              <Link to="/about" className="text-zinc-400 transition hover:text-gold">Story</Link>
              <Link to="/contact" className="text-zinc-400 transition hover:text-gold">Contact</Link>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gold/5 pt-8 md:flex-row">
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            © 2026 Doésh Fallanti. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            Rome · Milan · New York
          </p>
        </div>
      </div>
    </footer>
  )
}
