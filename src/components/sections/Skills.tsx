"use client";

import { skillsData } from "@/data/resume";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 max-w-5xl mx-auto px-6 md:px-12 border-t border-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg font-bold text-foreground mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 bg-muted text-foreground rounded-full border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
