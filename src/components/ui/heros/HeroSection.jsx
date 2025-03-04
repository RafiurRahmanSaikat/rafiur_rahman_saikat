import React, { useRef } from "react";
import { useTheme } from "../../../hooks/useTheme";
import AnimatedGradientLines from "../background/AnimatedGridPattern";
import SocialIcon from "../buttons/SocialIcon";


const BackgroundGrid = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: isDarkMode
          ? "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='40' height='40' fill='none' stroke-width='1' stroke='rgb(30 58 138 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")"
          : "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='40' height='40' fill='none' stroke-width='0.2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        mask: "linear-gradient(180deg, #000 50%, transparent)",
      }}
    />
  );
};

const HeroContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
    {/* Job title badge */}
    <div className="mb-4 flex items-center justify-center">
      <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-sm font-medium text-zinc-800 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1 h-3.5 w-3.5"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        Full-Stack Developer & Softwere Engineer
      </span>
    </div>

    {/* Main heading with gradient text */}
    <h1 className="mb-6 text-center text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
      Hi, I'm{" "}
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
        Rafiur Rahman Saikat
      </span>
    </h1>

    {/* Subtitle */}
    <p className="mb-8 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400">
      Building robust, scalable, and innovative web applications with passion and precision. Specialized in React,
      Next.js, Node.js, and modern web technologies.
    </p>

    {/* CTA Buttons */}
    <div className="mb-12 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <a
        href="#projects"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative rounded-md  px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
          <span className="flex items-center">
           Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </span>
      </a>
      {/* <a
        href="#contact"
        className="rounded-lg border border-zinc-300 bg-transparent px-5 py-2.5 text-zinc-900 hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-zinc-200 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800 dark:focus:ring-zinc-700"
      >
        Contact Me
      </a> */}
    </div>

    {/* Social Media Links */}
    <div className="flex space-x-4">
      <SocialIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        }
        href="https://github.com/RafiurRahmanSaikat"
      />
      <SocialIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        }
        href="https://www.linkedin.com/in/rafiurrahmansaikat"
      />
      <SocialIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        }
        href="https://twitter.com/RafiurSaikat"
      />
      <SocialIcon
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        }
        href="mailto:md.rafiur.rahman.saikat@gmail.com"
      />
    </div>

    {/* Tech stack tags */}
    <div className="absolute bottom-10 left-0 right-0 flex justify-center">
      <div className="flex flex-wrap justify-center gap-2">
        {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech, index) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: "pulse 2s infinite",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
    // <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-36">
    //   <div className="relative">
    //     <span className={`relative z-10 mb-4 inline-block rounded-full border ${
    //       isDarkMode ? 'border-zinc-700 bg-zinc-900/20' : 'border-zinc-300 bg-zinc-100/70'
    //     } px-3 py-1.5 text-xs ${
    //       isDarkMode ? 'text-zinc-50' : 'text-zinc-800'
    //     }`}>
    //       Full-Stack Developer
    //       <span className={`absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r ${
    //         isDarkMode
    //           ? 'from-zinc-500/0 via-zinc-300 to-zinc-500/0'
    //           : 'from-zinc-300/0 via-zinc-600 to-zinc-300/0'
    //       }`}></span>
    //     </span>
    //   </div>
    //   <h1 className={`mb-3 text-center text-3xl font-bold leading-tight ${
    //     isDarkMode ? 'text-zinc-50' : 'text-zinc-800'
    //   } sm:text-4xl md:text-5xl lg:text-7xl`}>
    //     Building Digital Experiences
    //   </h1>
    //   <p className={`mb-9 max-w-2xl text-center text-base ${
    //     isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
    //   } sm:text-lg`}>
    //     Crafting responsive, high-performance web applications with React, Tailwind CSS, and modern JavaScript.
    //   </p>
    //   <div className="flex flex-col items-center gap-6 sm:flex-row">
    //     <button className={`flex items-center gap-2 rounded-md ${
    //       isDarkMode
    //         ? 'bg-gradient-to-br from-blue-400 to-blue-700 text-zinc-50 ring-blue-500/50'
    //         : 'bg-gradient-to-br from-blue-500 to-blue-700 text-white ring-blue-400/50'
    //     } px-4 py-2 ring-2 ring-offset-2 ${
    //       isDarkMode ? 'ring-offset-zinc-950' : 'ring-offset-white'
    //     } transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70`}>
    //       View Projects
    //       <svg
    //         stroke="currentColor"
    //         fill="none"
    //         strokeWidth="2"
    //         viewBox="0 0 24 24"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         height="1em"
    //         width="1em"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <line x1="5" y1="12" x2="19" y2="12"></line>
    //         <polyline points="12 5 19 12 12 19"></polyline>
    //       </svg>
    //     </button>
    //     <button className={`rounded-md px-4 py-2 ${
    //       isDarkMode
    //         ? 'text-zinc-100 hover:bg-zinc-800 hover:text-zinc-50'
    //         : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900'
    //     } transition-all hover:scale-[1.02] active:scale-[0.98]`}>
    //       Contact Me
    //     </button>
    //   </div>
    // </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { isDarkMode } = useTheme();

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[600px] overflow-hidden ${
        isDarkMode ? 'bg-zinc-950' : 'bg-zinc-50'
      }`}
    >
      <HeroContent />
      <AnimatedGradientLines containerRef={sectionRef} />
      <BackgroundGrid />
    </section>
  );
};

export default HeroSection;