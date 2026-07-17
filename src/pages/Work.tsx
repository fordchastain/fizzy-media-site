import SectionHeading from '../components/SectionHeading'
import PixelDivider from '../components/PixelDivider'
import WorkCard from '../components/WorkCard'
import { disciplines, workItems, type Discipline } from '../data/work'
import { useDocumentMeta } from '../lib/useDocumentMeta'

function DisciplineSection({ id, label, description }: { id: Discipline; label: string; description: string }) {
  const items = workItems.filter((i) => i.discipline === id)
  const featured = items.filter((i) => i.featured)
  const rest = items.filter((i) => !i.featured)

  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <SectionHeading eyebrow={`0${['apps', 'games', 'music'].indexOf(id) + 1} / Discipline`} title={label} lead={description} />

      {featured.length > 0 && (
        <div className="mt-10 space-y-6">
          {featured.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <WorkCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}

export default function Work() {
  useDocumentMeta(
    'Work',
    'Apps, games, and music from Fizzy Media — live embeds you can try right now, plus the full project roster.'
  )

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-fizz-cyan">The work</p>
        <h1 className="mt-3 text-4xl text-paper sm:text-5xl">
          Everything here <span className="text-gradient">shipped</span> — or is actively getting there.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-paper/65 sm:text-lg">
          A few of these you can play with directly on this page. The rest link out to the source,
          the live site, or the studio they were built for. Nothing here is a mockup.
        </p>
      </div>

      <nav className="mt-10 flex flex-wrap gap-3">
        {disciplines.map((d) => (
          <a
            key={d.id}
            href={`#${d.id}`}
            className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-wide text-paper/70 hover:border-fizz-pink hover:text-fizz-pink"
          >
            {d.label}
          </a>
        ))}
      </nav>

      <div className="divide-y divide-line">
        {disciplines.map((d) => (
          <DisciplineSection key={d.id} id={d.id} label={d.label} description={d.description} />
        ))}
      </div>

      <PixelDivider className="my-4" />

      <section className="rounded-2xl border border-line bg-ink-soft/40 p-8 text-center sm:p-12">
        <h2 className="text-2xl text-paper sm:text-3xl">See something that fits what you need?</h2>
        <p className="mx-auto mt-3 max-w-xl text-paper/65">
          Whatever stage your idea is at, I'd rather hear about it too early than too late.
        </p>
        <a
          href="mailto:fizzymediagames@gmail.com"
          className="mt-6 inline-block rounded-full bg-fizz-pink px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
        >
          fizzymediagames@gmail.com
        </a>
      </section>
    </div>
  )
}
