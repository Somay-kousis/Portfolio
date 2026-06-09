"use client";

import { experienceData } from "@/data/resume";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 max-w-5xl mx-auto px-6 md:px-12 border-t border-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
        Experience
      </h2>

      <div className="space-y-12">
        {experienceData.map((exp) => (
          <div key={exp.id} className="border-l-2 border-accent pl-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-accent font-medium">{exp.company}</p>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">
                {exp.period}
              </p>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-sm text-muted-foreground leading-relaxed">
                  • {resp}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-accent-light text-accent rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:underline mt-3 inline-block"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
