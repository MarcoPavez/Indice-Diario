/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/indice-diario',
  trailingSlash:true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig