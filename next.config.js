/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.chec.io',
      },
    ],
  },
}

module.exports = nextConfig
