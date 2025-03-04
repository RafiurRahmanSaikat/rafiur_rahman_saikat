import { useRef, useState } from "react";

import { useEffect } from "react";
import { cn } from "../../../lib/utils";

const CodeProfile = () => {
  const [visible, setVisible] = useState(false);
  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const typingIntervalRef = useRef(null);
  const containerRef = useRef(null);

  // Code to be displayed with typing animation
  const codeString = `const R.R Saikat = {
  WorkingOn: "Full-stack applications with modern technologies",
  Learning: ["React BestPatterns", "Microservices Architecture"],
  reachMeAt: "md.rafiur.rahman.saikat@gmail.com",
  funFact: "I love solving complex coding challenges "
};`;

  const codeLines = codeString.split("\n");

  // Intersection observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!visible) return;

    // Clear any existing interval
    if (typingIntervalRef.current !== null) {
      window.clearInterval(typingIntervalRef.current);
    }

    typingIntervalRef.current = window.setInterval(() => {
      const currentLine = codeLines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        setCurrentCharIndex((prev) => prev + 1);
        setTypedLines(prevLines => {
          const newLines = [...prevLines];
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          return newLines;
        });
      } else {
        window.clearInterval(typingIntervalRef.current);

        // Short delay before moving to next line
        setTimeout(() => {
          if (currentLineIndex < codeLines.length - 1) {
            // Move to next line
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
          } else {
            // Reset to start the loop again with a brief pause
            setTimeout(() => {
              setTypedLines([]);
              setCurrentLineIndex(0);
              setCurrentCharIndex(0);
            }, 2000); // Pause for 2 seconds before restarting
          }
        }, 100);
      }
    }, 20);

    return () => {
      if (typingIntervalRef.current !== null) {
        window.clearInterval(typingIntervalRef.current);
      }
    };
  }, [visible, currentLineIndex, currentCharIndex, codeLines]);

  // Syntax highlighting function
  const tokenizeLine = (line) => {
    const tokens = [];

    // Patterns for different token types
    const patterns = [
      { type: 'keyword', regex: /\b(const|let|var|function|return|if|else|for|while)\b/g },
      { type: 'property', regex: /(\w+)(?=:)/g },
      { type: 'string', regex: /"([^"]*)"/g },
      { type: 'bracket', regex: /[[\]{}]/g },
      { type: 'variable', regex: /\b(developer)\b/g },
      { type: 'operator', regex: /[=:,]/g },
    ];

    let remainingLine = line;
    let lastIndex = 0;

    while (remainingLine.length > 0) {
      let matchFound = false;

      for (const { type, regex } of patterns) {
        regex.lastIndex = 0;  // Reset regex state
        const match = regex.exec(remainingLine);

        if (match && match.index === 0) {
          tokens.push({
            type,
            value: match[0]
          });

          remainingLine = remainingLine.substring(match[0].length);
          matchFound = true;
          break;
        }
      }

      if (!matchFound) {
        // Handle default text (no special token)
        const nextSpecialCharMatch = /[=:{}"[\],]/.exec(remainingLine);
        const textLength = nextSpecialCharMatch ? nextSpecialCharMatch.index : remainingLine.length;

        if (textLength > 0) {
          tokens.push({
            type: 'default',
            value: remainingLine.substring(0, textLength)
          });

          remainingLine = remainingLine.substring(textLength);
        } else {
          // Move past any unrecognized character
          tokens.push({
            type: 'default',
            value: remainingLine.charAt(0)
          });
          remainingLine = remainingLine.substring(1);
        }
      }
    }

    return tokens;
  };

  // Render a token with appropriate color
  const renderToken = (token, index) => {
    const colorMap = {
      keyword: 'text-syntax-keyword',
      property: 'text-syntax-property',
      string: 'text-syntax-string',
      bracket: 'text-syntax-bracket',
      variable: 'text-syntax-variable',
      operator: 'text-white',
      default: 'text-white',
      comment: 'text-syntax-comment'
    };

    return (
      <span key={index} className={colorMap[token.type]}>
        {token.value}
      </span>
    );
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white"> Inside JavaScript</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-2"></div>
        </div> */}

        <div className="max-w-3xl mx-auto">
          <div
            ref={containerRef}
            className={cn(
              "bg-zinc-900 rounded-lg shadow-2xl overflow-hidden",
              "hover:shadow-primary/20 hover:shadow-xl",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
              "transition-all duration-500"
            )}
          >
            {/* Code editor header */}
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-zinc-400">R.R Saikat.js</div>
              <div className="text-xs text-zinc-400">JavaScript</div>
            </div>

            {/* Code content with syntax highlighting */}
            <div className="p-6 font-mono text-sm sm:text-base overflow-x-auto">
              <pre className="whitespace-pre text-white">
                <code>
                  {codeLines.map((line, lineIndex) => {
                    // Skip rendering lines that haven't been "typed" yet
                    if (lineIndex > currentLineIndex) {
                      return null;
                    }

                    // For the current line being typed, only show what's been typed so far
                    if (lineIndex === currentLineIndex) {
                      const typedPortion = line.substring(0, currentCharIndex);
                      return (
                        <div key={lineIndex} className="line">
                          {tokenizeLine(typedPortion).map((token, i) => renderToken(token, i))}
                          {/* Show cursor at end of typing */}
                          <span className="animate-cursor-blink">|</span>
                        </div>
                      );
                    }

                    // For completed lines, show with full syntax highlighting
                    return (
                      <div key={lineIndex} className="line">
                        {tokenizeLine(line).map((token, i) => renderToken(token, i))}
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>

            {/* Code editor footer */}
            <div className="px-4 py-2 bg-zinc-800 border-t border-zinc-700 flex justify-between text-xs text-zinc-400">
              <span>JavaScript</span>
              <span>UTF-8</span>
              <span>
                Ln {Math.min(currentLineIndex + 1, codeLines.length)},
                Col {currentLineIndex === codeLines.length ? 0 : currentCharIndex}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeProfile