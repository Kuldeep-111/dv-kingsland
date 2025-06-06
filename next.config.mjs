/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  };
  
  export default nextConfig;
  