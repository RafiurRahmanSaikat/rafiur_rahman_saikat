/**
 * Animated Lines Component
 *
 * Creates animated lines in the background for visual effect
 */
const AnimatedLines = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Horizontal lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent dark:via-zinc-400/10"
            style={{
              top: `${10 + i * 8}%`,
              left: 0,
              animation: `slideRight ${3 + i * 0.5}s linear infinite`,
              opacity: 0.5 - i * 0.03,
            }}
          />
        ))}
        {/* Vertical lines */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-zinc-500/20 to-transparent dark:via-zinc-400/10"
            style={{
              left: `${15 + i * 8}%`,
              top: 0,
              animation: `slideDown ${3 + i * 0.5}s linear infinite`,
              opacity: 0.5 - i * 0.03,
            }}
          />
        ))}
      </div>
    )
  }
  export default AnimatedLines