/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'x-created-by',
            value: 'https://www.vincentsuryakim.com',
          },
        ],
      },
    ]
  }
}

module.exports = nextConfig
