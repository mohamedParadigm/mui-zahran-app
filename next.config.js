/** @type {import('next').NextConfig} */

const nextTranslate = require("next-translate");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com"],
  },
  env: {
    PUBLIC_URL: "",
  },
  ...nextTranslate(),
}

module.exports = nextConfig
