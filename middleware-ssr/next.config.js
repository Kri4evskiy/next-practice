/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['scoop.co.za'],
  },
}

module.exports = nextConfig
