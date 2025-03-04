import { useEffect, useState } from "react"

const SkillsSection = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        },
        { threshold: 0.1 },
      )

      const element = document.getElementById("skills-section")
      if (element) observer.observe(element)

      return () => {
        if (element) observer.unobserve(element)
      }
    }, [])

    return (
      <section id="skills" className=" py-24 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-800 dark:text-white">Tech Stack & Skills</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="mt-4 text-xl text-zinc-600 max-w-3xl mx-auto dark:text-zinc-300">
              My expertise spans across various technologies and tools that enable me to build comprehensive solutions
            </p>
          </div>

          <div id="skills-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend */}
            <div
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 dark:bg-zinc-800/50"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                transitionDelay: "0.1s",
              }}
            >
              <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
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
                  className="text-blue-400"
                  style={{ width: 28, height: 28 }}
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <circle cx="9" cy="9" r="2"></circle>
                  <path d="M15 9h.01"></path>
                  <path d="M15 15h.01"></path>
                  <path d="M9 15h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">Frontend</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      alt="React"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">React</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Expert
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      alt="Next.js"
                      className="w-6 h-6 dark:invert"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Next.js</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Advanced
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">TypeScript</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Intermediate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                      alt="Tailwind CSS"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Tailwind CSS</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Expert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 dark:bg-zinc-800/50"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                transitionDelay: "0.2s",
              }}
            >
              <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
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
                  className="text-blue-400"
                  style={{ width: 28, height: 28 }}
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" x2="6" y1="6" y2="6"></line>
                  <line x1="6" x2="6" y1="18" y2="18"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">Backend</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Node.js</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Advanced
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                      alt="Express"
                      className="w-6 h-6 dark:invert"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Express</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Intermediate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                      alt="Python"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Python</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Moderate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                      alt="Django"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Django</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Beginner
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Database */}
            <div
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 dark:bg-zinc-800/50"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                transitionDelay: "0.3s",
              }}
            >
              <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
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
                  className="text-blue-400"
                  style={{ width: 28, height: 28 }}
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">Database</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                      alt="MongoDB"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">MongoDB</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Expert
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                      alt="PostgreSQL"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">PostgreSQL</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Intermediate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                      alt="MySQL"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">MySQL</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Moderate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                      alt="Firebase"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Firebase</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Advanced
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:transform hover:-translate-y-2 dark:bg-zinc-800/50"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                transitionDelay: "0.4s",
              }}
            >
              <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6">
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
                  className="text-blue-400"
                  style={{ width: 28, height: 28 }}
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">Tools & Others</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                      alt="Git"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Git</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Expert
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                      alt="Docker"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Docker</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Beginner
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                      alt="Linux"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Linux</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Intermediate
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 flex items-center justify-center">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                      alt="Figma"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-zinc-800 dark:text-white">Figma</h4>
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                        Moderate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Solving Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-800 dark:text-white">
                Problem Solving & Algorithms
              </h3>
              <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg dark:bg-zinc-800/50">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                  <img
                    src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
                    alt="Coding GIF"
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
                <div className="md:w-2/3 md:pl-10">
                  <p className="text-zinc-600 mb-6 dark:text-zinc-300">
                    I have a passion for solving challenging problems through algorithmic thinking and efficient
                    solutions. My expertise includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-zinc-100 p-4 rounded-lg dark:bg-zinc-700/50">
                      <div className="flex items-center mb-2">
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
                          className="text-blue-500 mr-2 dark:text-blue-400"
                        >
                          <path d="M12 3v3"></path>
                          <path d="M18.5 8.5 16 11"></path>
                          <path d="M8 1v3"></path>
                          <path d="M16 1v3"></path>
                          <path d="M9 17H3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-6"></path>
                          <path d="m9 17 3 3 3-3"></path>
                        </svg>
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400">Data Structures</h4>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Arrays, Linked Lists, Trees, Graphs, Hash Tables
                      </p>
                    </div>
                    <div className="bg-zinc-100 p-4 rounded-lg dark:bg-zinc-700/50">
                      <div className="flex items-center mb-2">
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
                          className="text-blue-500 mr-2 dark:text-blue-400"
                        >
                          <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                          <path d="M13 5v2"></path>
                          <path d="M13 17v2"></path>
                          <path d="M13 11v2"></path>
                        </svg>
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400">Algorithms</h4>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Sorting, Searching, Dynamic Programming, Greedy Algorithms
                      </p>
                    </div>
                    <div className="bg-zinc-100 p-4 rounded-lg dark:bg-zinc-700/50">
                      <div className="flex items-center mb-2">
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
                          className="text-blue-500 mr-2 dark:text-blue-400"
                        >
                          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                          <path d="M10 2c1 .5 2 2 2 5"></path>
                        </svg>
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400">Competitive Programming</h4>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Active on LeetCode, Codeforces, and HackerRank
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
export default SkillsSection