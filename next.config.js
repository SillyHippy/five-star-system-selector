/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true, // Ensure trailing slash for routes
  // Removed redirects configuration which isn't compatible with static exports
};

module.exports = nextConfig;