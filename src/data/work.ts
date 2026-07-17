export type Discipline = 'apps' | 'games' | 'music'
export type WorkKind = 'iframe' | 'youtube' | 'link'

export interface WorkItem {
  slug: string
  title: string
  discipline: Discipline
  blurb: string
  tags: string[]
  kind: WorkKind
  embedSrc?: string
  href?: string
  repoHref?: string
  secondaryHref?: string
  secondaryLabel?: string
  status: string
  featured?: boolean
}

export const workItems: WorkItem[] = [
  // --- Apps & Web ---
  {
    slug: 'fizzy-beats',
    title: 'Fizzy Beats',
    discipline: 'apps',
    blurb:
      "A cross-browser drum sequencer built on the Web Audio API and React. Adjustable BPM, eight pattern slots, and four drum kits — 808, Acoustic, Electro, and Vinyl. Built as a playground for programming beats in the browser, no DAW required.",
    tags: ['React', 'Web Audio API', 'TypeScript'],
    kind: 'iframe',
    embedSrc: 'https://fordchastain.github.io/fizzy-beats/',
    href: 'https://fordchastain.github.io/fizzy-beats/',
    repoHref: 'https://github.com/fordchastain/fizzy-beats',
    status: 'Live — play with it below',
    featured: true,
  },
  {
    slug: 'glitchy',
    title: 'Glitchy',
    discipline: 'apps',
    blurb:
      'A browser-based glitch-art editor — the spiritual successor to the original Glitch Pic desktop app. Layer noise, pixel-sort, hue-rotation, and more onto any image entirely client-side, with a growing library of effects.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Canvas'],
    kind: 'link',
    repoHref: 'https://github.com/fordchastain/Glitchy',
    status: 'In development',
  },
  {
    slug: 'penny-lane-therapy',
    title: 'Penny Lane Therapy',
    discipline: 'apps',
    blurb:
      'An informational marketing site for an Oklahoma City counseling practice — individual, couples, and family therapy. Clean, calm, and built to help visitors learn about the practice and its approach to care.',
    tags: ['Client work', 'Web design'],
    kind: 'link',
    href: 'https://pennylanetherapy.com/',
    status: 'Live · client site',
  },
  {
    slug: 'post-melon',
    title: 'Post Melon',
    discipline: 'apps',
    blurb:
      "A lightweight, fully local API testing tool — the anti-cloud alternative to Postman. Every request, environment, and history entry stays on your machine, with no account and no vendor lock-in.",
    tags: ['React', 'TypeScript', 'Express', 'SQLite'],
    kind: 'link',
    repoHref: 'https://github.com/fordchastain/Post-Melon',
    status: 'Open source',
  },
  {
    slug: 'fizzy-money',
    title: 'Fizzy Money',
    discipline: 'apps',
    blurb:
      'A full-stack personal budgeting app. Create budget periods, assign spending categories with limits, and import bank transactions via CSV to track spending automatically. Reusable scheduled categories make setting up a new budget fast.',
    tags: ['.NET', 'React', 'TypeScript'],
    kind: 'link',
    status: 'In development',
  },
  {
    slug: 'due-beacon',
    title: 'DueBeacon',
    discipline: 'apps',
    blurb:
      'A renewal tracker for small businesses — add licenses, domains, and subscriptions with due dates, and get email reminders at 30, 7, and 1 day out so nothing lapses quietly.',
    tags: ['React 19', 'TypeScript', 'Supabase'],
    kind: 'link',
    status: 'In development',
  },
  {
    slug: 'dinner-loop',
    title: 'Dinner Loop',
    discipline: 'apps',
    blurb:
      'A household dinner-planning app: store recipes, schedule them on a shared weekly calendar, and auto-generate a consolidated grocery list. Decide, schedule, shop — the whole loop runs end to end, no AI required.',
    tags: ['Expo', 'React Native Web', 'PWA'],
    kind: 'link',
    status: 'In development',
  },
  {
    slug: 'fizzy-cal',
    title: 'Fizzy Cal',
    discipline: 'apps',
    blurb: 'A calorie-tracking mobile app built with Expo and React Native, focused on fast daily logging over fussy nutrition science.',
    tags: ['Expo', 'React Native'],
    kind: 'link',
    status: 'In development',
  },

  // --- Games ---
  {
    slug: 'fizzy-sums',
    title: 'Fizzy Sums',
    discipline: 'games',
    blurb:
      'An arithmetic puzzle that plays like a cross between kakuro and sudoku: fill each row and column with 1–9 exactly once so every equation checks out, order of operations included. Fractions and negative numbers welcome.',
    tags: ['React', 'Puzzle'],
    kind: 'iframe',
    embedSrc: 'https://fordchastain.github.io/fizzy-sums/',
    href: 'https://fizzysums.com',
    repoHref: 'https://github.com/fordchastain/fizzy-sums',
    status: 'Live — play it below',
    featured: true,
  },
  {
    slug: 'donut-daze',
    title: 'Donut Daze',
    discipline: 'games',
    blurb: 'A 2D puzzle-platformer where you control a donut with rolling, jumping, and hole-based traversal mechanics. Prototype-first — playable feel comes before polish.',
    tags: ['Unity 6', '2D', 'URP'],
    kind: 'link',
    status: 'Prototype',
  },
  {
    slug: 'untitled-2025-game',
    title: 'Untitled 2025 Game',
    discipline: 'games',
    blurb: 'A 2D side-scrolling action game — platforming, enemy combat, and respawns from cryo pods. Working title; more to come as it takes shape.',
    tags: ['Unity', 'URP'],
    kind: 'link',
    status: 'Prototype',
  },
  {
    slug: 'grid-sums-mobile',
    title: 'Grid Sums (Mobile)',
    discipline: 'games',
    blurb: 'A native mobile take on the Grid Sums arithmetic-puzzle concept, rebuilt in Unity for touch.',
    tags: ['Unity', 'Mobile'],
    kind: 'link',
    status: 'In development',
  },
  {
    slug: 'fizzy-media-game-services',
    title: 'Fizzy Media Game Services',
    discipline: 'games',
    blurb: 'The shared backend platform powering Fizzy Media titles — player auth, cloud saves, event ingestion, crash reporting, and remote config, all self-hosted with no third-party lock-in.',
    tags: ['.NET 9', 'ASP.NET Core', 'PostgreSQL'],
    kind: 'link',
    status: 'Internal platform',
  },
  {
    slug: 'more-in-the-lab',
    title: 'More in the lab',
    discipline: 'games',
    blurb: 'Several more titles are actively in prototyping — genres and details are still taking shape, but the roster keeps growing.',
    tags: ['Alpine Ales', 'Bartender', 'Normal Life', 'Office Game', 'Running Late', 'Sparky', 'Trickshift'],
    kind: 'link',
    status: 'Prototyping',
  },

  // --- Music ---
  {
    slug: 'ford-chastain',
    title: 'Ford Chastain',
    discipline: 'music',
    blurb:
      "Fizzy Media's artist identity — indie bedroom / dreampop songwriting released under Fizzy Media Records. Written, recorded, and produced the same way the software gets built: independently, and from scratch.",
    tags: ['Bedroom pop', 'Dreampop', 'Fizzy Media Records'],
    kind: 'youtube',
    embedSrc: 'https://www.youtube.com/embed/BgV8rsxVuvc',
    href: 'https://fordchastain.bandcamp.com/',
    secondaryHref: 'https://fordchastain.com/',
    secondaryLabel: 'fordchastain.com',
    status: 'Live — listen below',
    featured: true,
  },
]

export const disciplines: { id: Discipline; label: string; description: string }[] = [
  {
    id: 'apps',
    label: 'Apps & Web',
    description: 'Responsive sites, dashboards, and full-stack apps — from client marketing sites to tools built for daily use.',
  },
  {
    id: 'games',
    label: 'Games',
    description: 'Unity-built games spanning platformers, sims, and puzzle titles, backed by a self-hosted game-services platform.',
  },
  {
    id: 'music',
    label: 'Music',
    description: 'Original songwriting and production released as Ford Chastain under the Fizzy Media Records label.',
  },
]
