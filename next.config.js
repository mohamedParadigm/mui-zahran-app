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
  async redirects() {
    return [
      {
        source: "/with-locale/dashboard",
        destination: "/dashboard/profile",
        permanent: true,
      },
      {
        source: "/with-locale/account",
        destination: "/account/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
