import { useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";

const CodeProfile = () => {
  const [visible, setVisible] = useState(false);
  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const typingIntervalRef = useRef(null);
  const containerRef = useRef(null);

  const codeString = `const RafiurRahmanSaikat = {
  personalInfo: {
    name: "Rafiur Rahman Saikat",
    role: "Full-Stack Developer",
    location: "Bangladesh",
    phone: +88 01647076735,
  },
  primaryFocus: "Learning ",
  passions: [
    "Open Source Contribution",
    "Learning New Technologies",
    "Problem Solving",
    "Algorithm Challenges"
  ],
  additionalInfo: {
    yearsOfExperience: 2.5,
    currentlyLearning: "AI/ML",
    openToWork: true
  },
  contactMe: function() {
    return "Let's build together!";
  },
};`;

  const codeLines = codeString.split("\n");

  // Reveal the component when it enters the viewport
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

  // Typing animation logic
  useEffect(() => {
    if (!visible) return;

    if (typingIntervalRef.current !== null) {
      window.clearInterval(typingIntervalRef.current);
    }

    typingIntervalRef.current = window.setInterval(() => {
      const currentLine = codeLines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        setCurrentCharIndex((prev) => prev + 1);
        setTypedLines((prevLines) => {
          const newLines = [...prevLines];
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          return newLines;
        });
      } else {
        window.clearInterval(typingIntervalRef.current);

        setTimeout(() => {
          if (currentLineIndex < codeLines.length - 1) {
            setCurrentLineIndex((prev) => prev + 1);
            setCurrentCharIndex(0);
          } else {
            // Reset the typing animation after a short delay
            setTimeout(() => {
              setTypedLines([]);
              setCurrentLineIndex(0);
              setCurrentCharIndex(0);
            }, 2000);
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

  // Simple syntax highlighter
  const tokenizeLine = (line = "") => {
    const safeLineString = String(line);
    const tokens = [];

    const patterns = [
      { type: "keyword", regex: /\b(const|let|var|function|return|if|else|for|while)\b/g },
      { type: "property", regex: /(\w+)(?=:)/g },
      { type: "string", regex: /"([^"]*)"/g },
      { type: "bracket", regex: /[[\]{}()]/g },
      { type: "number", regex: /\b\d+\b/g },
      { type: "boolean", regex: /\b(true|false)\b/g },
      { type: "operator", regex: /[=:,]/g },
    ];

    let remainingLine = safeLineString;

    while (remainingLine.length > 0) {
      let matchFound = false;

      for (const { type, regex } of patterns) {
        regex.lastIndex = 0;
        const match = regex.exec(remainingLine);

        if (match && match.index === 0) {
          tokens.push({ type, value: match[0] });
          remainingLine = remainingLine.substring(match[0].length);
          matchFound = true;
          break;
        }
      }

      if (!matchFound) {
        const nextSpecialCharMatch = /[=:{}"[\],()]/.exec(remainingLine);
        const textLength = nextSpecialCharMatch ? nextSpecialCharMatch.index : remainingLine.length;

        if (textLength > 0) {
          tokens.push({
            type: "default",
            value: remainingLine.substring(0, textLength),
          });
          remainingLine = remainingLine.substring(textLength);
        } else {
          tokens.push({
            type: "default",
            value: remainingLine.charAt(0),
          });
          remainingLine = remainingLine.substring(1);
        }
      }
    }

    return tokens;
  };

  const renderToken = (token, index) => {
    if (!token) return null;

    const colorMap = {
      keyword: "text-blue-400",
      property: "text-red-400",
      string: "text-green-300",
      bracket: "text-yellow-200",
      number: "text-purple-400",
      boolean: "text-orange-400",
      operator: "text-gray-300",
      default: "text-purple-500",
    };

    return (
      <span key={index} className={`${colorMap[token.type] || "text-white"} whitespace-pre`}>
        {token.value}
      </span>
    );
  };

  return (
    <div className="w-full px-2 sm:px-4" ref={containerRef}>
      <div
        className={cn(

          "mx-auto w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl",
          "bg-zinc-900 rounded-2xl shadow-2xl border-2 border-zinc-800",

          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          "transition-all duration-500",

          "overflow-y-auto"
        )}
        style={{ maxHeight: "80vh" }}
      >
        {/* Code editor header */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-800 border-b border-zinc-700">
          {/* "Traffic light" buttons */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-zinc-400 hidden sm:block">RafiurRahmanSaikat.js</div>
          <div className="text-xs text-zinc-400">JavaScript</div>
        </div>

        {/* Code content */}
        <div className="p-4 font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
          <pre className="text-white break-all whitespace-pre-wrap">
            <code>
              {codeLines.map((line, lineIndex) => {
                if (lineIndex > currentLineIndex) {
                  return null;
                }

                // The current line is partially typed
                if (lineIndex === currentLineIndex) {
                  const typedPortion = line.substring(0, currentCharIndex);
                  return (
                    <div key={lineIndex} className="line">
                      {(tokenizeLine(typedPortion) || []).map((token, i) =>
                        token ? renderToken(token, i) : null
                      )}
                      <span className="animate-cursor-blink">|</span>
                    </div>
                  );
                }

                // Fully typed lines
                return (
                  <div key={lineIndex} className="line">
                    {(tokenizeLine(line) || []).map((token, i) =>
                      token ? renderToken(token, i) : null
                    )}
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Code editor footer */}
        <div className="px-4 py-2 bg-zinc-800 border-t border-zinc-700 flex items-center justify-between text-xs text-zinc-400">
          {/* Show this label only on sm+ screens */}
          <span className="hidden sm:block">Full-Stack Developer Profile</span>
          <div className="flex items-center gap-4">
            <span>UTF-8</span>
            <span>
              Ln {Math.min(currentLineIndex + 1, codeLines.length)}, Col{" "}
              {currentLineIndex === codeLines.length ? 0 : currentCharIndex}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeProfile;
