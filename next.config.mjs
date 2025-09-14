/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove useLightningcss to fix the error
  },
  serverExternalPackages: ['@neondatabase/serverless'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure proper CSS handling
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
  // Remove standalone output for Vercel deployment
  // output: 'standalone',
  // Optimize images
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true,
  },
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

export default nextConfig
