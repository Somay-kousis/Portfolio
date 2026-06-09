"use client";

import { achievementsData } from "@/data/resume";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 max-w-5xl mx-auto px-6 md:px-12 border-t border-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
        Achievements & Recognition
      </h2>

      <div className="space-y-8">
        {achievementsData.map((achievement) => (
          <div
            key={achievement.id}
            className="border-l-2 border-accent pl-6"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {achievement.title}
                </h3>
                <p className="text-accent font-medium text-sm">
                  {achievement.role} • {achievement.description}
                </p>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">
                {achievement.year}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {achievement.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
