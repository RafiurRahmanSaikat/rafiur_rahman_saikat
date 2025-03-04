import {
  BookOpen,
  ChevronLeft,
  Code,
  ExternalLink,
  Github,
  Layers,
  Puzzle
} from 'lucide-react';
import React, { useState } from 'react';

const ProjectDetails = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    {
      id: 'overview',
      icon: <BookOpen className="mr-2 h-5 w-5" />,
      label: 'Overview'
    },
    {
      id: 'technologies',
      icon: <Layers className="mr-2 h-5 w-5" />,
      label: 'Technologies'
    },
    {
      id: 'features',
      icon: <Puzzle className="mr-2 h-5 w-5" />,
      label: 'Features'
    },
    {
      id: 'code',
      icon: <Code className="mr-2 h-5 w-5" />,
      label: 'Code Structure'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm">
      <div className="container mx-auto my-8 max-w-5xl">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          {/* Header with Project Image and Basic Info */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-600/50 opacity-75 blur-2xl"></div>
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="w-full h-72 object-cover relative z-10"
            />
            <button
              onClick={onClose}
              className="absolute top-4 left-4 z-20 bg-white/20 rounded-full p-2 backdrop-blur-sm hover:bg-white/30 transition-all"
            >
              <ChevronLeft className="text-white h-6 w-6" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">{project.title}</h2>
              <div className="flex space-x-3 mt-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    <Github className="h-7 w-7" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="h-7 w-7" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
            <nav className="flex justify-center">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Sections */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-white">Project Description</h3>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {project.fullDescription}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div>
                      <span className="font-semibold">Category:</span> {project.category}
                    </div>
                    <div>
                      <span className="font-semibold">Project Duration:</span> {project.duration}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-white">Project Goals</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'technologies' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-zinc-100 dark:bg-zinc-800 p-5 rounded-lg hover:shadow-md transition-all"
                  >
                    <h4 className="font-bold text-lg mb-2 text-zinc-800 dark:text-white">{tech.name}</h4>
                    <p className="text-zinc-600 dark:text-zinc-300">{tech.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800"
                  >
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">{feature.name}</h4>
                    <p className="text-zinc-700 dark:text-zinc-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'code' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-white">
                  Code Architecture
                </h3>
                <div className="bg-zinc-100 dark:bg-zinc-800 p-5 rounded-lg">
                  <pre className="text-sm overflow-x-auto text-zinc-700 dark:text-zinc-300">
                    {project.codeStructure}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;