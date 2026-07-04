import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/projects/techling-ai-marketing',
        destination: '/projects/techling-cold-email',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
