import { useState } from 'react'

interface EmbedFrameProps {
  src: string
  title: string
  kind: 'iframe' | 'youtube'
  thumbnail?: string
}

export default function EmbedFrame({ src, title, kind, thumbnail }: EmbedFrameProps) {
  const [loaded, setLoaded] = useState(false)
  const aspect = kind === 'youtube' ? 'aspect-video' : 'aspect-[16/10]'

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className={`group relative flex w-full ${aspect} items-center justify-center overflow-hidden rounded-xl border border-line bg-ink-soft`}
      >
        {thumbnail && (
          <img src={thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50 transition-opacity group-hover:opacity-70" />
        )}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-fizz-pink text-ink shadow-[0_0_30px_rgba(255,46,196,0.5)] transition-transform group-hover:scale-110">
            ▶
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-paper/80">
            {kind === 'youtube' ? 'Play video' : 'Launch live preview'}
          </span>
        </div>
      </button>
    )
  }

  return (
    <div className={`w-full ${aspect} overflow-hidden rounded-xl border border-line bg-ink-soft`}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        className="h-full w-full"
        sandbox={kind === 'youtube' ? undefined : 'allow-scripts allow-same-origin allow-forms allow-popups'}
        allow={kind === 'youtube' ? 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' : undefined}
        allowFullScreen={kind === 'youtube'}
      />
    </div>
  )
}
