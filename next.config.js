/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.mooreandsondecorators.com",
    ],
  },
  output: "standalone",
}

module.exports = nextConfig
