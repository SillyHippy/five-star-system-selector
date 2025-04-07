/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Add trailing slash to match traditional .html behavior
  trailingSlash: true,
};

// Export the config directly - don't use redirects with export mode
module.exports = nextConfig;