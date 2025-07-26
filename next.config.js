require("dotenv").config();

const isProd = process.env.NEXT_PUBLIC_ENV === "production";
const repo = process.env.NEXT_PUBLIC_BASE_PATH;

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? repo : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
