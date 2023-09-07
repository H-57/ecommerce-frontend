/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST: process.env.HOST,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.dummyjson.com","tailwindui.com","images.unsplash.com","cdn-icons-png.flaticon.com"],
  }
}
module.exports = nextConfig
 

