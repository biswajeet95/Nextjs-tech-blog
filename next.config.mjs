/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'iqraconsultancy.in',
          },
        ],
        destination: 'https://www.iqraconsultancy.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
