import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/collections', label: 'Collections' },
  { to: '/product/f-01-imperiale', label: 'Product' },
  { to: '/about', label: 'Story' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/10 bg-obsidian/85 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="font-display text-2xl tracking-luxe text-gold drop-shadow-[0_0_16px_rgba(127,90,166,0.4)]">
          DOÉSH FALLANTI
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
      </div>
    </header>
  )
}
