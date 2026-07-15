import { Link } from 'react-router-dom'
import logo from '../assets/logo-icon.png'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/fordchastain' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stanford-chastain/' },
  { label: 'Bandcamp', href: 'https://fordchastain.bandcamp.com/' },
  { label: 'Email', href: 'mailto:info@fizzymedia.org' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="" className="-my-2 -mr-0.5 h-11 w-auto object-contain" />
              <span className="font-display text-lg text-paper">FIZZY MEDIA</span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
              A software and media studio in Oklahoma City building web applications, games,
              and music — start to finish, under one roof.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper/40">Site</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-paper/70 hover:text-fizz-pink" to="/work">Work</Link></li>
              <li><Link className="text-paper/70 hover:text-fizz-pink" to="/about">About</Link></li>
              <li><Link className="text-paper/70 hover:text-fizz-pink" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper/40">Connect</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    className="text-paper/70 hover:text-fizz-cyan"
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fizzy Media LLC · Oklahoma City, OK</p>
          <p className="font-mono">Est. 2023</p>
        </div>
      </div>
    </footer>
  )
}
