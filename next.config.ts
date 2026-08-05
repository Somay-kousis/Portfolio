import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    // Next 16 rejects any quality not listed here. Screenshots carry fine
    // detail (code, table rules) that 75 visibly mushes.
    qualities: [75, 90],
    // All project imagery is local now, so no remote hosts to allow.
    remotePatterns: [],
  },
};

export default nextConfig;
