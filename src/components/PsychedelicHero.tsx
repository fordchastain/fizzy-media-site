import type { ReactNode } from 'react'

interface PsychedelicHeroProps {
  children: ReactNode
  className?: string
}

/**
 * Pure CSS "psychedelic" backdrop: layered blurred gradient blobs drifting
 * on GPU-accelerated transforms. No canvas/WebGL — cheap on battery/perf,
 * and respects prefers-reduced-motion via the global animation-duration
 * clamp in index.css.
 */
export default function PsychedelicHero({ children, className = '' }: PsychedelicHeroProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10 bg-ink">
        <div className="blob blob-pink" />
        <div className="blob blob-cyan" />
        <div className="blob blob-purple" />
        <div className="blob blob-lime" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-ink)_75%)]" />
      </div>
      {children}
    </div>
  )
}
