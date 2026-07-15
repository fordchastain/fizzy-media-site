interface GlitchTextProps {
  text: string
  as?: 'span' | 'h1' | 'h2'
  className?: string
}

export default function GlitchText({ text, as = 'span', className = '' }: GlitchTextProps) {
  const Tag = as
  return (
    <Tag className={`glitch-text ${className}`} data-text={text}>
      {text}
    </Tag>
  )
}
