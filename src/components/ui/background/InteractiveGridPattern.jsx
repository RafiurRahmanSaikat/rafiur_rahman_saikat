

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "../../../hooks/useTheme";

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// Extract grid square to its own memoized component
const GridSquare = memo(({ x, y, width, height, index, isHovered, onHover, className }) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      className={cn(
        "stroke-gray-300/50 dark:stroke-gray-100 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
        isHovered ? "fill-gray-300 dark:fill-gray-100" : "fill-transparent",
        className
      )}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    />
  );
});

GridSquare.displayName = 'GridSquare';

function InteractiveGridPattern({
  width = 40,
  height = 40,
  className,
  squaresClassName,
  maxSquares = 1000, // Limit max squares for performance
  ...props
}) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hoveredSquare, setHoveredSquare] = useState(null);
  const requestRef = useRef(null);
  const { isDarkMode } = useTheme();

  // Memoize the dimensions update function
  const updateDimensions = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame for smoother resize handling
    const handleResize = () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      requestRef.current = requestAnimationFrame(updateDimensions);
    };

    // Only run on client-side
    if (typeof window !== 'undefined') {
      updateDimensions();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      }
    };
  }, [updateDimensions]);

  // Don't render anything if dimensions are not set yet
  if (dimensions.width === 0 || dimensions.height === 0) {
    return null;
  }

  // Calculate grid dimensions
  const horizontal = Math.ceil(dimensions.width / width);
  const vertical = Math.ceil(dimensions.height / height);
  const totalSquares = horizontal * vertical;

  // Limit number of squares for performance
  const actualSquares = Math.min(totalSquares, maxSquares);

  // Create squares array
  const squares = [];
  for (let i = 0; i < actualSquares; i++) {
    const x = (i % horizontal) * width;
    const y = Math.floor(i / horizontal) * height;

    squares.push(
      <GridSquare
        key={i}
        x={x}
        y={y}
        width={width}
        height={height}
        index={i}
        isHovered={hoveredSquare === i}
        onHover={setHoveredSquare}
        className={squaresClassName}
      />
    );
  }

  // Create a unique ID for the gradient to avoid conflicts when multiple instances exist
  const gradientId = `fade-gradient-${Math.random().toString(36).substring(2, 9)}`;
  const maskId = `fade-mask-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      className={cn("fixed inset-0 pointer-events-none", className)}
      style={{ pointerEvents: 'none' }}
      {...props}
    >
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor={isDarkMode ? "#1a1a2e" : "white"} stopOpacity="1" />
          <stop offset="70%" stopColor={isDarkMode ? "#1a1a2e" : "white"} stopOpacity="0.9" />
          <stop offset="100%" stopColor={isDarkMode ? "#1a1a2e" : "white"} stopOpacity="0" />
        </radialGradient>
        <mask id={maskId}>
          <rect width="100%" height="100%" fill={`url(#${gradientId})`} />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`} style={{ pointerEvents: 'auto' }}>
        {squares}
      </g>
    </svg>
  );
}

export default memo(InteractiveGridPattern);