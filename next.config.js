/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'raw.githubusercontent.com'],
  },
  env: {
    OWNER: process.env.OWNER,
    REPO: process.env.REPO,
    LABELS: 'published',
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  basePath: process.env.DEPLOY_TARGET === 'gh-pages' && process.env.REPO !== `${process.env.OWNER}.github.io`
    ? `/${process.env.REPO}`
    : '',
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = nextConfig
