/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/My-Portfolio-website' : '',
  assetPrefix: isProd ? '/My-Portfolio-website/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;