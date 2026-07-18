/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      // Blog cover images are a free-form URL field on the (auth-protected)
      // admin post form, not public user uploads, so we optimize any https
      // source rather than maintaining an allowlist of stock-photo hosts.
      { protocol: 'https', hostname: '**' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/login.html', destination: '/login', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
