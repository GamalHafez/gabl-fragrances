import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "your-cdn-host.com" }],
  },
  allowedDevOrigins: ["192.168.1.8"],
};

export default nextConfig;
