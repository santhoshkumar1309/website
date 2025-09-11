/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "media.licdn.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "t3.ftcdn.net" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "i.ibb.co" }, // ✅ added for imgbb direct images
    ],
  },
};

module.exports = nextConfig;
