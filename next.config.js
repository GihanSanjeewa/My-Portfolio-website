/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Enables static export
  basePath: isProd ? '/My-Portfolio-website' : '', // Matches your repo name
  assetPrefix: isProd ? '/My-Portfolio-website/' : '', // Ensures assets load correctly
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

module.exports = nextConfig;
