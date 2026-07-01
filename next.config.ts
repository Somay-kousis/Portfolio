import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.phototourl.com",
      },
      {
        protocol: "https",
        hostname: "www.image2url.com",
      },
    ],
  },
};

export default nextConfig;
