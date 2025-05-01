import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  env: {
    DB_TYPE: process.env.DB_TYPE,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
};

export default nextConfig;
