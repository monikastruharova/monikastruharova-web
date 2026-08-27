import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sluzby/cesta-dvojplamena",
        destination: "/dvojplamene",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
