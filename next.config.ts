import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
