import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.vectorstock.com",
        port: "",
        pathname: "/i/1000v/**",
      },
      {
        protocol: "https",
        hostname: "cdn1.vectorstock.com",
        port: "",
        pathname: "/i/1000x1000/**",
      },
      {
        protocol: "https",
        hostname: "cdn.devicon.dev",
        port: "",
        pathname: "/icons/**",
      },
    ],
  },
};

export default nextConfig;
