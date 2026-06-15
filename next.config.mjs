/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'blob.vercel-storage.com',
    ],
  },
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
}

export default nextConfig
