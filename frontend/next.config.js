// @type {import('next').NextConfig}
module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    domains: ['ssl.pstatic.net'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
      },
      {
        protocol: 'https',
        hostname: 'k.kakaocdn.net',
      },
      {
        protocol: 'http',
        hostname: 'phinf.pstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'phinf.pstatic.net',
      },
    ],
  },
};

// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
