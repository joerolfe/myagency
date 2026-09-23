import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  // Lets phones on the same Wi-Fi load the dev server via its LAN IP
  // (e.g. http://192.168.1.x:3000) instead of only localhost.
  allowedDevOrigins: ["192.168.1.*"],
};

export default nextConfig;
