import {
    ArrowLeft,
    ExternalLink,
    Github
} from 'lucide-react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';


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
  // Add more projects here
];

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-white">
          Project Not Found
        </h1>
        <Link
          to="/"
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="mr-2" /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center mb-8 text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2" /> Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden">
          {/* Project Image */}
          <div className="relative">
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            </div>
          </div>

          {/* Project Links */}
          <div className="p-6 flex space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                <Github /> <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                <ExternalLink /> <span>Live Project</span>
              </a>
            )}
          </div>

          {/* Project Details */}
          <div className="p-6">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
              <p className="text-zinc-700 dark:text-zinc-300">{project.fullDescription}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg"
                  >
                    <h3 className="font-bold mb-2">{tech.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">{tech.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg"
                  >
                    <h3 className="font-bold mb-2 text-blue-800 dark:text-blue-300">
                      {feature.name}
                    </h3>
                    <p className="text-zinc-700 dark:text-zinc-300">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;