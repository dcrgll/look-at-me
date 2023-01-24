/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require("next-plausible")

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com"]
  }
}

module.exports = withPlausibleProxy()(nextConfig)
