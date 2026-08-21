/** @type {import('next').NextConfig} */
// Plain .mjs on purpose: a next.config.ts requires the `typescript` package at
// runtime, which is a devDependency and therefore absent from a production
// install. Next.js worked around that by npm-installing it during startup,
// which failed the first config load after each deploy.
const nextConfig = {};

export default nextConfig;