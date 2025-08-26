import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Rocket } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'

const NavItem = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl hover:bg-foreground/10 transition-colors ${isActive ? 'bg-foreground/10 text-foreground' : 'text-foreground/80'}`
    }
    onClick={onClick}
  >
    {label}
  </NavLink>
)

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-xl">
        <div className="mt-4 glass rounded-2xl px-4 md:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-extrabold tracking-wide">
            <div className="h-9 w-9 rounded-xl bg-primary/20 grid place-items-center shadow-neon">
              <Rocket size={18}/>
            </div>
            <span className="text-lg">Suraj Portfolio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/projects" label="Projects" />
            <NavItem to="/experience" label="Experience" />
            <NavItem to="/blog" label="Blog" />
            <NavItem to="/contact" label="Contact" />
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button className="md:hidden btn-ghost rounded-xl" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
              {open ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-2 flex flex-col">
            <NavItem to="/" label="Home" onClick={() => setOpen(false)} />
            <NavItem to="/about" label="About" onClick={() => setOpen(false)} />
            <NavItem to="/projects" label="Projects" onClick={() => setOpen(false)} />
            <NavItem to="/experience" label="Experience" onClick={() => setOpen(false)} />
            <NavItem to="/blog" label="Blog" onClick={() => setOpen(false)} />
            <NavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
          </div>
        )}
      </div>
    </header>
  )
}
