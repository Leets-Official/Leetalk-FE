/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main/feed',
        permanent: true,
      },
      {
        source: '/main',
        destination: '/main/feed',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
