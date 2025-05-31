import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {},
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
    appIsrStatus: true,
  }
};

export default nextConfig;
