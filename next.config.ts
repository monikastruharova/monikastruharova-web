import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sluzby/cesta-dvojplamena",
        destination: "/dvojplamen",
        permanent: true,
      },
      {
        source: "/dvojplamene",
        destination: "/dvojplamen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
