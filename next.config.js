/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true, // Ensure trailing slash for routes
  async redirects() {
    return [
      {
        source: '/card',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;