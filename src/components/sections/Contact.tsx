"use client";

import { profileData } from "@/data/resume";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 max-w-5xl mx-auto px-6 md:px-12 border-t border-gray-200"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
        Let's Connect
      </h2>

      <p className="text-muted-foreground mb-8 max-w-2xl">
        I'm always interested in connecting with recruiters, collaborators, and
        fellow builders exploring AI, systems design, and product engineering.
        Feel free to reach out.
      </p>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Email</p>
          <a
            href={`mailto:${profileData.email}`}
            className="text-lg text-accent hover:underline font-medium"
          >
            {profileData.email}
          </a>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">Links</p>
          <div className="flex gap-6">
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              GitHub
            </a>
            <a
              href={profileData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              LinkedIn
            </a>
            <a
              href={profileData.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
