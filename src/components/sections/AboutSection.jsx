import { useEffect, useState } from "react"
import CodeProfile from "../ui/typography/CodeProfile"

const  AboutSection= () => {
  const [isVisible, setIsVisible] = useState(false)

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
      <section  id="about" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white sm:text-4xl">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-300">
            I'm a passionate full-stack developer with a focus on creating efficient, scalable, and user-friendly web
            applications.
          </p>
        </div>

        <div id="about-section" className="grid gap-12 md:grid-cols-2">
          {/* Profile image with animation */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <div className="relative h-full overflow-hidden rounded-lg">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"></div> */}
              <CodeProfile/>

              {/* <img

                src="/placeholder.svg?height=600&width=500"
                alt="Rafiur Rahman Saikat"
                className="h-full w-full object-cover"
              /> */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent"></div> */}
            </div>
          </div>

          {/* About text with animation */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
              transitionDelay: "0.2s",
            }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 text-2xl font-bold text-zinc-800 dark:text-white">
              Building digital solutions since 2022
            </h3>
            <p className="mb-6 text-zinc-600 dark:text-zinc-300">
              I'm Rafiur Rahman Saikat, a full-stack developer with over 5 years of experience in building web
              applications. I specialize in JavaScript technologies across the stack and have a passion for creating
              clean, efficient, and user-friendly solutions.
            </p>
            <p className="mb-6 text-zinc-600 dark:text-zinc-300">
              My journey in web development started with a curiosity about how websites work, which led me to dive deep
              into HTML, CSS, and JavaScript. Since then, I've expanded my skills to include modern frameworks and
              libraries like React, Next.js, Node.js, and more.
            </p>
            <p className="mb-8 text-zinc-600 dark:text-zinc-300">
              I enjoy solving complex problems and turning ideas into reality through code. When I'm not coding, you can
              find me exploring new technologies, contributing to open-source projects, or solving algorithmic
              challenges.
            </p>

            {/* Skill cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
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
                  className="mb-2 h-6 w-6 text-blue-600 dark:text-blue-400"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h4 className="mb-1 font-semibold text-zinc-800 dark:text-white">Frontend</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Creating responsive and interactive user interfaces
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
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
                  className="mb-2 h-6 w-6 text-purple-600 dark:text-purple-400"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" x2="6" y1="6" y2="6"></line>
                  <line x1="6" x2="6" y1="18" y2="18"></line>
                </svg>
                <h4 className="mb-1 font-semibold text-zinc-800 dark:text-white">Backend</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  Building robust APIs and server-side applications
                </p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
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
                  className="mb-2 h-6 w-6 text-green-600 dark:text-green-400"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
                <h4 className="mb-1 font-semibold text-zinc-800 dark:text-white">Database</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Designing efficient data models and queries</p>
              </div>
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
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
                  className="mb-2 h-6 w-6 text-amber-600 dark:text-amber-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <h4 className="mb-1 font-semibold text-zinc-800 dark:text-white">Web Services</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Integrating third-party APIs and services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutSection