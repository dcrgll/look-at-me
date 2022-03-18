/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js"
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug"
      }
    ]
  },
  images: {
    domains: ["cdn.discordapp.com"]
  }
}

module.exports = nextConfig
