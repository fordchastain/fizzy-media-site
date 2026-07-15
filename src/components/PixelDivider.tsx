interface PixelDividerProps {
  className?: string
}

const COLORS = ['#ff2ec4', '#8b5cf6', '#21e6c1', '#d4ff3f', '#ff7a3d']

export default function PixelDivider({ className = '' }: PixelDividerProps) {
  const blocks = Array.from({ length: 28 })
  return (
    <div className={`flex w-full py-3 ${className}`} aria-hidden="true">
      {blocks.map((_, i) => {
        const color = COLORS[i % COLORS.length]
        return (
          <div
            key={i}
            className="h-2 flex-1"
            style={{
              backgroundColor: color,
              opacity: 0.9,
              boxShadow: `0 0 6px ${color}, 0 0 16px ${color}, 0 0 28px ${color}`,
            }}
          />
        )
      })}
    </div>
  )
}
