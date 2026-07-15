import SectionHeading from '../components/SectionHeading'
import PixelDivider from '../components/PixelDivider'
import { useDocumentMeta } from '../lib/useDocumentMeta'

const LINKS = [
  {
    label: 'Email',
    value: 'info@fizzymedia.org',
    href: 'mailto:info@fizzymedia.org',
    hint: 'The fastest way to reach me — projects, questions, or just to say hi.',
  },
  {
    label: 'GitHub',
    value: 'github.com/fordchastain',
    href: 'https://github.com/fordchastain',
    hint: 'Open-source projects and public code.',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/stanford-chastain',
    href: 'https://www.linkedin.com/in/stanford-chastain/',
    hint: 'Professional background and history.',
  },
  {
    label: 'Bandcamp',
    value: 'fordchastain.bandcamp.com',
    href: 'https://fordchastain.bandcamp.com/',
    hint: 'Music released under Fizzy Media Records.',
  },
]

const FAQ = [
  {
    q: 'What kind of projects do you take on?',
    a: 'Web applications and dashboards, small business tools, client marketing sites, and games — from a rough idea through to a deployed, working product. If it involves writing software, it\'s worth asking.',
  },
  {
    q: 'Where are you based?',
    a: 'Oklahoma City, Oklahoma. Work happens remotely, but local OKC projects and meetings are always welcome.',
  },
  {
    q: 'Do you work solo on every project?',
    a: 'Yes — Fizzy Media is built and run by one person. That means a direct line to whoever is actually writing your code, with no hand-offs in between.',
  },
  {
    q: 'What does getting started look like?',
    a: "Email a short description of what you're trying to build. If it's a good fit, the next step is a real conversation about scope, timeline, and cost before anything is promised.",
  },
]

export default function Contact() {
  useDocumentMeta('Contact', 'Get in touch with Fizzy Media — email, GitHub, LinkedIn, and Bandcamp.')

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-fizz-cyan">Contact</p>
        <h1 className="mt-3 text-4xl text-paper sm:text-5xl">
          Let's <span className="text-gradient">build something.</span>
        </h1>
        <p className="mt-5 text-base leading-relaxed text-paper/65 sm:text-lg">
          Whether it's a full application, a game, or a track — the best next step is an email.
          No forms, no gatekeeping.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group flex flex-col rounded-2xl border border-line bg-ink-soft/40 p-6 transition-colors hover:border-fizz-pink/60"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-fizz-lime">{link.label}</span>
            <span className="mt-2 text-lg text-paper group-hover:text-fizz-pink">{link.value}</span>
            <span className="mt-2 text-sm text-paper/55">{link.hint}</span>
          </a>
        ))}
      </div>

      <PixelDivider className="my-16" />

      <section>
        <SectionHeading eyebrow="Before you email" title="A few common questions" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {FAQ.map((item) => (
            <div key={item.q}>
              <h3 className="text-lg text-paper">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <PixelDivider className="my-16" />

      <section className="rounded-2xl border border-line bg-ink-soft/40 p-10 text-center sm:p-14">
        <h2 className="text-2xl text-paper sm:text-3xl">info@fizzymedia.org</h2>
        <p className="mx-auto mt-3 max-w-md text-paper/65">Oklahoma City, OK · Fizzy Media LLC</p>
        <a
          href="mailto:info@fizzymedia.org"
          className="mt-6 inline-block rounded-full bg-fizz-pink px-6 py-3 font-mono text-sm uppercase tracking-wide text-ink transition-transform hover:scale-105"
        >
          Send an email
        </a>
      </section>
    </div>
  )
}
