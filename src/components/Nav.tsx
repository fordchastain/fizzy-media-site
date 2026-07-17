import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-icon.png'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="-my-3 -mr-1 h-14 w-auto object-contain" />
          <span className="font-display text-lg tracking-tight text-paper">FIZZY MEDIA</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-mono text-sm uppercase tracking-wide transition-colors ${
                  isActive ? 'bg-fizz-pink/15 text-fizz-pink' : 'text-paper/70 hover:text-paper'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="mailto:fizzymediagames@gmail.com"
          className="hidden rounded-full border border-fizz-cyan/60 px-4 py-2 font-mono text-sm text-fizz-cyan transition-colors hover:bg-fizz-cyan/10 md:inline-block"
        >
          Get a quote
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-paper md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-lg">{open ? '×' : '≡'}</span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 font-mono text-sm uppercase tracking-wide ${
                    isActive ? 'bg-fizz-pink/15 text-fizz-pink' : 'text-paper/70'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="mailto:fizzymediagames@gmail.com"
              className="mt-2 rounded-lg border border-fizz-cyan/60 px-3 py-2.5 text-center font-mono text-sm text-fizz-cyan"
            >
              Get a quote
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
