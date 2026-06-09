"use client";

import { projectsData } from "@/data/resume";

export default function Projects() {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="py-20 max-w-5xl mx-auto px-6 md:px-12 border-t border-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-gray-200 rounded-lg p-6 hover:border-accent hover:shadow-lg transition-all"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-accent font-medium text-sm">{project.subtitle}</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>

            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-accent-light text-accent rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 text-accent text-sm font-medium group-hover:translate-x-1 transition-transform">
              View Project →
            </div>
          </a>
        ))}
      </div>

      {/* All Projects Link */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <p className="text-sm text-muted-foreground mb-4">
          More projects and work available on GitHub.
        </p>
        <a
          href="https://github.com/Somay-kousis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline font-medium"
        >
          View All Projects →
        </a>
      </div>
    </section>
  );
}
