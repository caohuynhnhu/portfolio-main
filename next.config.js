/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['via.placeholder.com'],
  },
  // This ensures proper static HTML export
  output: 'export',
  transpilePackages: ['react-vertical-timeline-component'],
}

module.exports = nextConfig