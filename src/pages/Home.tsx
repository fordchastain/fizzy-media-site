import { Link } from 'react-router-dom'
import PsychedelicHero from '../components/PsychedelicHero'
import GlitchText from '../components/GlitchText'
import SectionHeading from '../components/SectionHeading'
import PixelDivider from '../components/PixelDivider'
import { disciplines, workItems } from '../data/work'
import { useDocumentMeta } from '../lib/useDocumentMeta'
import logo from '../assets/logo-hero.png'

const STATS = [
  { value: '2023', label: 'Founded in OKC' },
  { value: '3', label: 'Disciplines — apps, games, music' },
  { value: '20+', label: 'Projects shipped or in flight' },
  { value: '1', label: 'Person building all of it' },
]

const PROCESS = [
  { step: '01', title: 'Discover', body: 'A real conversation about the problem, the audience, and what "done" looks like — before a line of code exists.' },
  { step: '02', title: 'Build', body: 'Fast, working iterations over big-bang launches. You see real progress every week, not a wall of silence.' },
  { step: '03', title: 'Ship', body: 'Deployed, tested, and handed off cleanly — with the same person who built it standing behind it.' },
  { step: '04', title: 'Support', body: 'Software is never really finished. Fixes, iteration, and new features as the product keeps moving.' },
]

const STACK = [
  'React', 'TypeScript', 'Vite', '.NET / ASP.NET Core', 'PostgreSQL', 'Unity', 'C#',
  'React Native / Expo', 'Supabase', 'Web Audio API', 'Tailwind CSS', 'Docker',
]

export default function Home() {
  useDocumentMeta(
    'Software, games & music from Oklahoma City',
    'Fizzy Media is an Oklahoma City-based studio building web applications, games, and music — end to end, under one roof.'
  )

  const featured = workItems.filter((i) => i.featured)

  return (
    <>
      <PsychedelicHero className="border-b border-line">
        <img
          src={logo}
          alt=""
          className="pointer-events-none absolute right-[16%] top-1/2 hidden w-[22rem] -translate-y-1/2 opacity-90 drop-shadow-[0_0_60px_rgba(255,46,196,0.35)] lg:block"
        />
        <div className="mx-auto flex max-w-6xl flex-col items-start px-5 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <span className="rounded-full border border-fizz-pink/50 bg-fizz-pink/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-fizz-pink">
            Oklahoma City, OK · Fizzy Media LLC
          </span>

          <h1 className="mt-6 text-5xl leading-[0.98] text-paper sm:text-6xl md:text-7xl">
            <GlitchText text="SOFTWARE," /> <span className="text-gradient">GAMES,</span>
            <br />
            <GlitchText text="AND MUSIC." />
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/70 sm:text-xl">
            Fizzy Media is a one-person software and media studio building real, shipped work —
            web applications, games, and original music — from first idea to production, without
            handing pieces off to a committee.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/work"
              className="rounded-full bg-fizz-pink px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
            >
              See the work
            </Link>
            <a
              href="mailto:info@fizzymedia.org"
              className="rounded-full border border-paper/30 px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper transition-colors hover:border-fizz-cyan hover:text-fizz-cyan"
            >
              Get a quote
            </a>
          </div>

          <dl className="mt-16 grid w-full grid-cols-2 gap-6 border-t border-line/70 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl text-fizz-cyan sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-paper/50 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </PsychedelicHero>

      {/* Disciplines */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Three disciplines, one studio."
          lead="Most shops pick a lane. Fizzy Media treats software, games, and music as the same craft applied to different mediums — and ships all three."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {disciplines.map((d) => (
            <Link
              key={d.id}
              to="/work"
              className="group flex flex-col rounded-2xl border border-line bg-ink-soft/50 p-6 transition-colors hover:border-fizz-pink/60"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-fizz-lime">{d.label}</span>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/65">{d.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-paper/50 group-hover:text-fizz-pink">
                View work <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <PixelDivider />

      {/* Featured work teasers */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionHeading eyebrow="Try it now" title="Playable, not just pictures." lead="A few pieces of work you can actually use right on this site — no download, no login." />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {featured.map((item) => (
            <div key={item.slug} className="flex flex-col rounded-2xl border border-line bg-ink-soft/40 p-6">
              <span className="font-mono text-[11px] uppercase tracking-widest text-fizz-cyan">{item.status}</span>
              <h3 className="mt-2 text-xl text-paper">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/60">{item.blurb}</p>
              <Link
                to="/work"
                className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-fizz-pink"
              >
                Open on Work page <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <PixelDivider />

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionHeading eyebrow="How it works" title="A short, honest process." lead="No account managers, no scope creep by committee — just a direct line to the person building your product." />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <div key={p.step}>
              <span className="font-display text-3xl text-fizz-purple">{p.step}</span>
              <h3 className="mt-3 text-lg text-paper">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack marquee */}
      <section className="border-y border-line bg-ink-soft/40 py-12">
        <div className="mx-auto max-w-6xl px-5">
          <p className="font-mono text-xs uppercase tracking-widest text-paper/40">Working stack</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {STACK.map((s) => (
              <span key={s} className="rounded-full border border-line px-3.5 py-1.5 font-mono text-xs text-paper/70">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-24 text-center sm:py-32">
        <h2 className="text-3xl text-paper sm:text-5xl">
          Got something to <span className="text-gradient">build?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-paper/65 sm:text-lg">
          Tell me about the app, the game, or the track you want made real. I'll tell you straight
          whether it's a good fit.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@fizzymedia.org"
            className="rounded-full bg-fizz-pink px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
          >
            info@fizzymedia.org
          </a>
          <Link
            to="/contact"
            className="rounded-full border border-paper/30 px-6 py-3 font-mono text-sm uppercase tracking-wide text-paper transition-colors hover:border-fizz-cyan hover:text-fizz-cyan"
          >
            More ways to reach me
          </Link>
        </div>
      </section>
    </>
  )
}
