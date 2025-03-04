
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, payment integration, and user authentication.",
    image: "/E-Commerce.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    liveUrl: "#",
    githubUrl: "https://github.com/RafiurRahmanSaikat/shopzone-frontend",
    category: "Full Stack",
  },

  {
    id: 3,
    title: "Real Estate Listing Platform",
    description:
      "A property listing platform with advanced search, filtering, and map integration for property locations.",
    image: "/rentease.png",
    tags: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    liveUrl: "#",
    githubUrl: "#",
    category: ["Full Stack",],
  },


  {
    id: 6,
    title: "API Gateway Service",
    description:
      "A microservice-based API gateway with rate limiting, authentication, and request routing capabilities.",
    image: "/api.png",
    tags: ["Python", "Django", "Redis",],
    liveUrl: "#",
    githubUrl: "#",
    category: "Backend",
  },
]

const categories = ["All", "Frontend", "Backend", "Full Stack"]

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="A selection of my recent work and personal projects" />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white dark:bg-blue-500"
                  : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-end space-x-2 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                      aria-label="View live project"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white">{project.title}</h3>
                  <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
                    {project.category}
                  </span>
                </div>
                <p className="mb-4 text-zinc-600 dark:text-zinc-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/RafiurRahmanSaikat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-center text-sm font-medium text-zinc-800 hover:bg-zinc-100 focus:outline-none focus:ring-4 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 dark:focus:ring-zinc-700"
          >
            <Github className="mr-2 h-5 w-5" />
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}



export default ProjectsSection