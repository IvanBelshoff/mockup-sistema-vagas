/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "10.86.177.250",
          },
          {
            protocol: "https",
            hostname: "attachments.gupy.io",
          },
        ],
      },
};

export default nextConfig;
