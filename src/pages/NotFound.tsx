import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../lib/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta('Page not found', 'This page does not exist.')

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-5 py-32 text-center">
      <span className="glitch-text font-display text-7xl text-paper" data-text="404">404</span>
      <p className="mt-6 text-lg text-paper/65">That page fizzled out. Let's get you back.</p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-full bg-fizz-pink px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
      >
        Back home
      </Link>
    </div>
  )
}
