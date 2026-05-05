import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/brooklynpetspa',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'brooklynpetspa.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
