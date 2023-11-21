/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.mooreandsondecorators.com", "mooreandsondecorators.com", "https://www.mooreandsondecorators.com", 'https://localhost:3000'],
    formats: ['image/avif', 'image/webp'],
  },
  output: "standalone",
}

module.exports = nextConfig
