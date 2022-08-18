/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com"],
  },
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/profile',
        permanent: true,
      },
      {
        source: '/account',
        destination: '/account/login',
        permanent: true,
      },
    ]
  },
  env: {
    PUBLIC_URL: "",
  },
  ...nextTranslate(),
}

module.exports = nextConfig
