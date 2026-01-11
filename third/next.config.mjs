/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pixelstalk.net',
        port:"",
      },
    ],
  },
};

export default nextConfig;
