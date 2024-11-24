import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  middleware: ["middleware.ts"],
  debug: true,
};

export default nextConfig;
