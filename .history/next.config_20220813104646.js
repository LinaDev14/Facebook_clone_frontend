/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org", 
      "pixabay.com", 
      "static.xx.fbcdn.net",],
  }
}

module.exports = nextConfig
