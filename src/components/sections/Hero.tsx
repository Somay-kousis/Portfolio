"use client";

import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 max-w-5xl mx-auto px-6 md:px-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 leading-tight">
              {profileData.name}
            </h1>
            <p className="text-xl text-accent font-medium">{profileData.title}</p>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed">
            {profileData.subtitle}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {profileData.summary}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed font-medium">
            Current focus:{" "}
            <span className="text-foreground">{profileData.currentFocus}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href={`mailto:${profileData.email}`}
              className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Get in Touch
            </a>
            <a
              href={profileData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-accent text-accent rounded-lg hover:bg-accent-light transition-colors text-sm font-medium"
            >
              GitHub
            </a>
          </div>

          {/* Contact Info */}
          <div className="pt-8 space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href={`mailto:${profileData.email}`}
                className="text-accent hover:underline"
              >
                {profileData.email}
              </a>
            </p>
            <p>
              <span className="font-medium">Location:</span> {profileData.location}
            </p>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-80 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={profileData.profileImage}
              alt={profileData.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
