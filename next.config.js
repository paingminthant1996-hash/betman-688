/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // အားလုံးကို ခွင့်ပြုထားတာပါ
      },
    ],
  },
};

module.exports = nextConfig;
