import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import PixelDivider from '../components/PixelDivider'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import headshot from '../assets/headshot.png'

const VALUES = [
  {
    title: 'Ship real things',
    body: "Prototypes are cheap to talk about and expensive to fake. Everything on the Work page either runs in production or is an honest, labeled prototype — nothing here is a mockup dressed up as a product.",
  },
  {
    title: 'One point of contact',
    body: 'No account managers, no hand-offs between departments. Whoever you talk to about the project is the person who writes the code, ships it, and answers when something breaks.',
  },
  {
    title: 'Own the stack',
    body: "Fizzy Media Game Services exists because paying rent to a third-party backend for every game title doesn't scale. The same instinct — build the leverage instead of renting it — shows up across the apps and tools too.",
  },
  {
    title: 'Craft over templates',
    body: "A theme off the shelf is fast but forgettable. Every site and app here is built for the thing it's actually for, not squeezed into a generic layout that happens to load fast.",
  },
]

const STACK_BY_DISCIPLINE = [
  {
    label: 'Apps & Web',
    items: ['React', 'TypeScript', 'Vite', '.NET / ASP.NET Core', 'PostgreSQL', 'Supabase', 'React Native / Expo', 'Tailwind CSS'],
  },
  {
    label: 'Games',
    items: ['Unity 6', 'C#', 'Universal Render Pipeline', '2D & low-poly 3D', 'ASP.NET Core game backends'],
  },
  {
    label: 'Music',
    items: ['Songwriting & production', 'Bandcamp / streaming release', 'Fizzy Media Records'],
  },
]

export default function About() {
  useDocumentMeta(
    'About',
    'Fizzy Media LLC is an Oklahoma City studio run by Ford Chastain, building software, games, and music under one roof.'
  )

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-fizz-cyan">About</p>
        <h1 className="mt-3 text-4xl text-paper sm:text-5xl">
          One studio. <span className="text-gradient">Three mediums.</span> No committee.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-paper/70 sm:text-lg">
          Fizzy Media LLC is a software and media studio based in Oklahoma City, founded in 2023.
          It's run day-to-day by one person — Ford Chastain, a full-stack software engineer — who
          builds web applications, games, and music as three parts of the same practice rather than
          three separate businesses.
        </p>
        <p className="mt-4 text-base leading-relaxed text-paper/70 sm:text-lg">
          That's an unusual shape for a studio, on purpose. Client sites and internal tools pay the
          bills and sharpen the same skills that go into shipping a Unity game or producing a track
          — clean architecture, a good ear for what's unnecessary, and the discipline to actually
          finish things. The Work page is the evidence: a working drum machine, a puzzle game you can
          play right now, a self-hosted backend running real game titles, and original music released
          under the studio's own label.
        </p>
      </div>

      <PixelDivider className="my-16" />

      {/* Founder */}
      <section className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <div className="h-28 w-28 rounded-full bg-gradient-to-br from-fizz-pink via-fizz-purple to-fizz-cyan p-1">
            <img
              src={headshot}
              alt="Ford Chastain"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.25em] text-fizz-cyan">Founder</p>
          <h2 className="mt-3 text-3xl text-paper">Ford Chastain</h2>
          <p className="mt-2 font-mono text-sm text-paper/50">Oklahoma City, OK</p>
        </div>
        <div className="space-y-4 text-paper/70">
          <p>
            Ford is a full-stack software engineer who founded Fizzy Media to build software and
            games without diluting either through a big studio structure. The day-to-day covers the
            full range of the job: product decisions, architecture, writing the code, deploying it,
            and supporting it afterward.
          </p>
          <p>
            Outside of client and studio work, Ford records and releases music as <strong className="text-paper">Ford Chastain</strong> —
            bedroom and dreampop songwriting — under the Fizzy Media Records label, which lives on
            this site's Work page alongside the software.
          </p>
        </div>
      </section>

      <PixelDivider className="my-16" />

      {/* Values */}
      <section>
        <SectionHeading eyebrow="How Fizzy Media works" title="What that actually means in practice" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-line bg-ink-soft/40 p-6">
              <h3 className="text-lg text-paper">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <PixelDivider className="my-16" />

      {/* Stack */}
      <section>
        <SectionHeading eyebrow="Under the hood" title="Tooling by discipline" lead="Defaults, not dogma — the right tool wins if there's a good reason for it." />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {STACK_BY_DISCIPLINE.map((group) => (
            <div key={group.label} className="rounded-2xl border border-line p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-fizz-lime">{group.label}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-paper/70">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <PixelDivider className="my-16" />

      <section className="rounded-2xl border border-line bg-ink-soft/40 p-8 text-center sm:p-12">
        <h2 className="text-2xl text-paper sm:text-3xl">Want to see the work first?</h2>
        <p className="mx-auto mt-3 max-w-xl text-paper/65">
          The Work page has live, playable pieces — not just screenshots.
        </p>
        <Link
          to="/work"
          className="mt-6 inline-block rounded-full bg-fizz-pink px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
        >
          Browse the work
        </Link>
      </section>
    </div>
  )
}
