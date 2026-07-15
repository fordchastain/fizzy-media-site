import type { WorkItem } from '../data/work'
import EmbedFrame from './EmbedFrame'

const YOUTUBE_THUMB = (src: string) => {
  const id = src.split('/embed/')[1]
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined
}

export default function WorkCard({ item }: { item: WorkItem }) {
  if (item.featured) {
    return (
      <div className="grid gap-6 rounded-2xl border border-line bg-ink-soft/60 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
        <div>
          {item.embedSrc && (
            <EmbedFrame
              src={item.embedSrc}
              title={item.title}
              kind={item.kind === 'youtube' ? 'youtube' : 'iframe'}
              thumbnail={item.kind === 'youtube' ? YOUTUBE_THUMB(item.embedSrc) : undefined}
            />
          )}
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-fizz-lime">{item.status}</span>
          <h3 className="mt-2 text-2xl text-paper">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-paper/65 sm:text-base">{item.blurb}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-paper/60">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {item.href && (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-fizz-pink px-4 py-2 font-mono text-xs uppercase tracking-wide text-ink"
              >
                Visit site
              </a>
            )}
            {item.secondaryHref && (
              <a
                href={item.secondaryHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper/80"
              >
                {item.secondaryLabel ?? 'Learn more'}
              </a>
            )}
            {item.repoHref && (
              <a
                href={item.repoHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper/80"
              >
                View source
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  const hasLink = item.href || item.repoHref
  const primaryHref = item.href ?? item.repoHref

  return (
    <div className="flex h-full flex-col rounded-2xl border border-line bg-ink-soft/40 p-6 transition-colors hover:border-fizz-purple/60">
      <span className="font-mono text-[11px] uppercase tracking-widest text-paper/40">{item.status}</span>
      <h3 className="mt-2 text-lg text-paper">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/60">{item.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-ink px-2.5 py-1 font-mono text-[10px] text-paper/50">
            {tag}
          </span>
        ))}
      </div>
      {hasLink && (
        <a
          href={primaryHref}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-fizz-cyan"
        >
          {item.href ? 'Visit site' : 'View source'} <span aria-hidden="true">→</span>
        </a>
      )}
    </div>
  )
}
