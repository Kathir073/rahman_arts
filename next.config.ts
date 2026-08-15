import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rahman_arts",
  assetPrefix: "/rahman_arts/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
