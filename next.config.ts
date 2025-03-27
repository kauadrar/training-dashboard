import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img-c.udemycdn.com',
        port: '',
        pathname: '/course/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
