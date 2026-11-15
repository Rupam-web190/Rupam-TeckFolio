/** @type {import('next').NextConfig} */
const nextConfig = {
  // No ESLint config is committed to this repo yet, so `next lint` cannot run during builds.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Type checking is enforced — a broken build must fail loudly.
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
