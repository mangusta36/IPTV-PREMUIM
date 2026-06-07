import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.pexels.com",   pathname: "/**" },
      // Wikimedia — primary logo source
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
      // Fallback logo CDNs (kept in case any logo still points here)
      { protocol: "https", hostname: "logo.clearbit.com",   pathname: "/**" },
      // Extra CDNs from user-supplied logo list
      { protocol: "https", hostname: "e7.pngegg.com",           pathname: "/**" },
      { protocol: "https", hostname: "pluspng.com",             pathname: "/**" },
      { protocol: "https", hostname: "cdn.freebiesupply.com",   pathname: "/**" },
      { protocol: "https", hostname: "1000logos.net",           pathname: "/**" },
      { protocol: "https", hostname: "img.favpng.com",          pathname: "/**" },
      { protocol: "https", hostname: "toppng.com",              pathname: "/**" },
      { protocol: "https", hostname: "icon2.cleanpng.com",      pathname: "/**" },
      { protocol: "https", hostname: "www.citypng.com",         pathname: "/**" },
      { protocol: "https", hostname: "logos-world.net",         pathname: "/**" },
      { protocol: "https", hostname: "freepnglogo.com",         pathname: "/**" },
      { protocol: "https", hostname: "static.vecteezy.com",     pathname: "/**" },
    ],
  },
};

export default nextConfig;
