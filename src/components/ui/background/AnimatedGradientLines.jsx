import React, { memo, useCallback, useEffect, useRef, useState } from "react";

// Extract GradientLine to a memoized component
const GradientLine = memo(({ left }) => (
  <div
    className="absolute z-10 h-16 w-[1px] animate-move-down bg-gradient-to-b from-blue-500/0 to-blue-500 dark:from-purple-500/0 dark:to-purple-500"
    style={{ left: `${left}px`, top: "-64px" }}
  />
));

GradientLine.displayName = 'GradientLine';

const AnimatedGradientLines = ({
  containerRef,
  lineCount = 6,
  intervalMs = 500,
  durationMs = 7000,
}) => {
  const [lines, setLines] = useState([]);
  const [width, setWidth] = useState(0);
  const requestRef = useRef(null);
  const timeoutRefs = useRef([]);

  // Memoize the resize handler
  const handleResize = useCallback(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
  }, [containerRef]);

  // Memoize the line creation function
  const createLine = useCallback(() => {
    if (width === 0) return;

    const id = crypto.randomUUID();
    const left = Math.random() * (width - 64);

    setLines(prev => [...prev, { id, left }]);

    const timeoutId = setTimeout(() => {
      setLines(prev => prev.filter(line => line.id !== id));
    }, durationMs);

    timeoutRefs.current.push(timeoutId);
  }, [width, durationMs]);

  // Effect for initial sizing and resize listener
  useEffect(() => {
    handleResize();

    // Use requestAnimationFrame for smoother resize handling
    const handleResizeRAF = () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      requestRef.current = requestAnimationFrame(handleResize);
    };

    window.addEventListener("resize", handleResizeRAF);

    return () => {
      window.removeEventListener("resize", handleResizeRAF);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleResize]);

  // Effect for creating initial lines and setting up interval
  useEffect(() => {
    if (width === 0) return;

    // Create initial lines
    for (let i = 0; i < lineCount; i++) {
      createLine();
    }

    // Set up interval for new lines
    const interval = setInterval(createLine, intervalMs);

    return () => {
      clearInterval(interval);
      timeoutRefs.current.forEach(clearTimeout);
      timeoutRefs.current = [];
    };
  }, [width, lineCount, intervalMs, createLine]);

  return lines.map(({ id, left }) => <GradientLine key={id} left={left} />);
};

// Export as memoized component to prevent unnecessary re-renders
export default memo(AnimatedGradientLines);