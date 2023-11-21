/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.mooreandsondecorators.com", "mooreandsondecorators.com"],
    formats: ['image/avif', 'image/webp'],
  },
  output: "standalone",
}

module.exports = nextConfig
