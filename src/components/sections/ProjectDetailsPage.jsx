import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { projects } from '../../data/projects';

// Import projects data


const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [readmeContent, setReadmeContent] = useState({
    fullContent: '',
    title: '',
    description: '',
    sections: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to parse README content
  const parseReadmeContent = (content) => {
    const lines = content.split('\n');
    const parsedContent = {
      fullContent: content,
      title: '',
      description: '',
      sections: []
    };

    // Extract title (first heading)
    const titleMatch = content.match(/^#\s+(.+)/);
    if (titleMatch) {
      parsedContent.title = titleMatch[1];
    }

    // Extract description (text between title and next heading)
    const descriptionMatch = content.match(/#\s+.+\n\n([\s\S]*?)(?=\n#|\n$)/);
    if (descriptionMatch) {
      parsedContent.description = descriptionMatch[1].trim();
    }

    // Extract sections
    const sectionPattern = /##\s+(.+)\n\n([\s\S]*?)(?=\n##|\n$)/g;
    let match;
    while ((match = sectionPattern.exec(content)) !== null) {
      parsedContent.sections.push({
        title: match[1].trim(),
        content: match[2].trim()
      });
    }

    return parsedContent;
  };

  useEffect(() => {
    // Find the project by ID
    const selectedProject = projects.find(p => p.id === Number(projectId));

    if (selectedProject) {
      setProject(selectedProject);

      // Function to fetch README
      const fetchReadme = async () => {
        if (!selectedProject.githubUrl || selectedProject.githubUrl === '#') {
          setIsLoading(false);
          return;
        }

        try {
          // Extract owner and repo from GitHub URL
          const githubUrlParts = selectedProject.githubUrl.replace('https://github.com/', '').split('/');
          const owner = githubUrlParts[0];
          const repo = githubUrlParts[1];

          // Attempt to fetch README from main branch
          const mainResponse = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`);

          // Fallback to master branch if main fails
          const response = mainResponse.ok
            ? mainResponse
            : await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`);

          if (!response.ok) {
            throw new Error('README not found');
          }

          const text = await response.text();
          setReadmeContent(parseReadmeContent(text));
        } catch (err) {
          console.error('Error fetching README:', err);
          setError('Could not fetch README. The repository might be private or README not found.');
        } finally {
          setIsLoading(false);
        }
      };

      fetchReadme();
    } else {
      // If no project is found, set loading to false
      setIsLoading(false);
    }
  }, [projectId]);

  // Loading state
  if (isLoading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-screen bg-white dark:bg-zinc-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-zinc-600 dark:text-zinc-300">Loading project details...</p>
        </div>
      </div>
    );
  }

  // No project found
  if (!project) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-screen bg-white dark:bg-zinc-900">
        <div className="text-center">
          <p className="text-zinc-600 dark:text-zinc-300">Project not found</p>
          <Link
            to="/#projects"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12   min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back Navigation */}
        <Link
          to="/#projects"
          className="inline-flex items-center mb-6 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Projects
        </Link>

        {/* Project Header with Image */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center mb-6">
            {/* Project Image */}
            {project.image && (
              <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg shadow-lg object-cover max-h-64"
                />
              </div>
            )}

            <div className="flex-grow">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">{project.title}</h1>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">{project.fullDescription}</p>
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* Features Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg"
                  >
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{feature.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technology Stack Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Technology Stack</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg"
                  >
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{tech.name}</h3>
                    <p className="text-zinc-600 dark:text-zinc-300">{tech.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Project Overview */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Project Overview</h2>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-zinc-600 dark:text-zinc-300">Category</p>
                    <p className="font-semibold text-zinc-900 dark:text-white">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-zinc-600 dark:text-zinc-300">Duration</p>
                    <p className="font-semibold text-zinc-900 dark:text-white">{project.duration}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Project Structure */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Project Structure</h2>
              <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{project.codeStructure}</code>
              </pre>
            </section>

            {/* Project Goals */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Project Goals</h2>
              <ul className="space-y-2 bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg">
                {project.goals.map((goal, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-zinc-600 dark:text-zinc-300">{goal}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* README Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-zinc-900 dark:text-white">Project README</h2>
          {error ? (
            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
              <p className="text-red-800 dark:text-red-300">{error}</p>
            </div>
          ) : (
            <div className="space-y-6">
              {readmeContent.title && (
                <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {readmeContent.title}
                  </h3>
                  {readmeContent.description && (
                    <p className="text-zinc-600 dark:text-zinc-300">
                      {readmeContent.description}
                    </p>
                  )}
                </div>
              )}

              {readmeContent.sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                    {section.title}
                  </h3>
                  <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300">
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      remarkPlugins={[remarkGfm]}
                    >
                      {section.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}

              {/* Full README as fallback */}
              {(!readmeContent.sections.length && readmeContent.fullContent) && (
                <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-lg">
                  <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300">
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      remarkPlugins={[remarkGfm]}
                    >
                      {readmeContent.fullContent}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsPage;