import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/contact.html',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
