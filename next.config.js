/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'raw.githubusercontent.com'],
  },
  env: {
    OWNER: process.env.OWNER,
    REPO: process.env.REPO,
    // todo: add labels limit
    LABELS: '',
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = nextConfig
