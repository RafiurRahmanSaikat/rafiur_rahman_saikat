
import {
  BookOpen,
  Code,
  ExternalLink,
  FileText,
  Github,
  Layers,
  Puzzle,
  X
} from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

const ProjectDetails = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [readmeContent, setReadmeContent] = useState('');

  // Keyboard event handler
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Effect for adding and removing keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Fetch README content (simulated - you'd replace with actual fetching logic)
  useEffect(() => {
    const fetchReadme = async () => {
      try {
        // In a real app, fetch from GitHub API or local file
        const response = await fetch(`/readmes/${project.id}.md`);
        const content = await response.text();
        setReadmeContent(content);
      } catch (error) {
        console.error('Failed to fetch README', error);
        setReadmeContent('No README available for this project.');
      }
    };

    fetchReadme();
  }, [project.id]);

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
      id: 'readme',
      icon: <FileText className="mr-2 h-5 w-5" />,
      label: 'README'
    },
    {
      id: 'code',
      icon: <Code className="mr-2 h-5 w-5" />,
      label: 'Code Structure'
    }
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div className="container mx-auto my-8 max-w-6xl relative">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-red-500/20 text-red-600 hover:bg-red-500/30 rounded-full p-2 transition-all"
            aria-label="Close project details"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Header with Project Image and Basic Info */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-600/50 opacity-75 blur-2xl"></div>
            <img
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              className="w-full h-72 object-cover relative z-10"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2
                id="project-title"
                className="text-4xl font-bold text-white drop-shadow-lg"
              >
                {project.title}
              </h2>
              <div className="flex space-x-3 mt-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors"
                    aria-label="View GitHub repository"
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
                    aria-label="View live project"
                  >
                    <ExternalLink className="h-7 w-7" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
            <nav className="flex justify-center overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-colors whitespace-nowrap ${
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
          <div className="p-8 max-h-[calc(100vh-200px)] overflow-y-auto">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-white">
                    Project Description
                  </h3>
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
                  <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-white">
                    Project Goals
                  </h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-4 h-4 mr-2 mt-1 text-blue-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
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
                    <h4 className="font-bold text-lg mb-2 text-zinc-800 dark:text-white">
                      {tech.name}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      {tech.description}
                    </p>
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
                    <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
                      {feature.name}
                    </h4>
                    <p className="text-zinc-700 dark:text-zinc-300">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'readme' && (
              <div className="prose dark:prose-invert max-w-none">
                <pre
                  className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed"
                >
                  {readmeContent}
                </pre>
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