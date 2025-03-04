
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with advanced product management and user experience.",
    fullDescription: "A full-featured e-commerce platform designed to provide a seamless shopping experience. The project integrates robust product management, secure payment gateways, and personalized user authentication to create a modern online marketplace.",
    image: "/E-Commerce.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    liveUrl: "https://shopzone-frontend.vercel.app",
    githubUrl: "https://github.com/RafiurRahmanSaikat/shopzone-frontend",
    category: "Full Stack",
    duration: "3 months",
    goals: [
      "Create a scalable e-commerce platform",
      "Implement secure user authentication",
      "Develop responsive and intuitive UI"
    ],
    technologies: [
      {
        name: "React",
        description: "Frontend library for building interactive user interfaces"
      },
      {
        name: "Node.js",
        description: "Backend runtime for scalable server-side applications"
      },
      {
        name: "MongoDB",
        description: "NoSQL database for flexible data storage"
      }
    ],
    features: [
      {
        name: "Product Management",
        description: "Comprehensive CRUD operations for product catalog"
      },
      {
        name: "User Authentication",
        description: "Secure login with JWT and role-based access"
      },
      {
        name: "Shopping Cart",
        description: "Advanced cart functionality with state management"
      }
    ],
    codeStructure: `
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── redux/
├── backend/
│   ├── controllers/
│   ├── models/
│   └── routes/
└── docker-compose.yml
    `
  },
  {
    id: 2,
    title: "Real Estate Platform",
    description: "Advanced property listing platform with geospatial search and filtering.",
    fullDescription: "A comprehensive real estate application that allows users to search, filter, and explore properties using advanced geospatial technologies and intuitive design.",
    image: "/rentease.png",
    tags: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    liveUrl: "https://rentease.vercel.app",
    githubUrl: "https://github.com/RafiurRahmanSaikat/RentEase",
    category: "Full Stack",
    duration: "2.5 months",
    goals: [
      "Create an intuitive property search experience",
      "Implement advanced geospatial filtering",
      "Develop a responsive and modern interface"
    ],
    technologies: [
      {
        name: "React",
        description: "Frontend library for building interactive interfaces"
      },
      {
        name: "PostgreSQL",
        description: "Relational database with geospatial extensions"
      },
      {
        name: "Google Maps API",
        description: "Integrating location-based services"
      }
    ],
    features: [
      {
        name: "Geospatial Search",
        description: "Advanced property search with map-based filtering"
      },
      {
        name: "Property Listings",
        description: "Comprehensive property details and image galleries"
      },
      {
        name: "User Profiles",
        description: "Personalized user accounts and saved searches"
      }
    ],
    codeStructure: `
├── client/
│   ├── components/
│   ├── pages/
│   └── hooks/
├── server/
│   ├── controllers/
│   ├── models/
│   └── routes/
└── database/
    └── migrations/
    `
  },
  {
    id: 3,
    title: "API Gateway Service",
    description: "Robust microservice-based API gateway with advanced routing and security features.",
    fullDescription: "A scalable API gateway solution providing rate limiting, authentication, and intelligent request routing across multiple microservices.",
    image: "/api.png",
    tags: ["Python", "Django", "Redis", "Microservices"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Backend",
    duration: "2 months",
    goals: [
      "Design a scalable API management system",
      "Implement robust security mechanisms",
      "Create efficient request routing"
    ],
    technologies: [
      {
        name: "Python",
        description: "Primary backend programming language"
      },
      {
        name: "Django",
        description: "High-level Python web framework"
      },
      {
        name: "Redis",
        description: "In-memory data structure store for caching"
      }
    ],
    features: [
      {
        name: "Rate Limiting",
        description: "Intelligent request throttling mechanism"
      },
      {
        name: "Authentication",
        description: "Secure token-based user authentication"
      },
      {
        name: "Request Routing",
        description: "Dynamic routing across microservices"
      }
    ],
    codeStructure: `
├── services/
│   ├── authentication/
│   ├── routing/
│   └── rate_limiting/
├── configs/
└── middleware/
    `
  }
];
const categories = ["All", "Frontend", "Backend", "Full Stack"]

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

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
              <div
                className="relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
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

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default ProjectsSection



