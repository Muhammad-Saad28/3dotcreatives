import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        // Cache GLB models for 1 year — they never change between deploys
        source: "/models/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Also cache other static assets (images, fonts, icons)
        source: "/:file(.*\\.(?:png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
