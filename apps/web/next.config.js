/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@snippetly/types", "@snippetly/utils"],
};

module.exports = nextConfig;
