export const metadata: Metadata = {
  metadataBase: new URL('https://www.iflexiptv.pro'),  // Beddel .net -> .pro
  title: {
    default: "iflexiptv - Premium IPTV Subscription Service",
    template: "%s | iflexiptv",
  },
  description: "Experience the ultimate premium IPTV service with iflexiptv. 4K & FHD channels, global sports, movies, and VODs with anti-freeze technology.",
  keywords: ["iflexiptv", "premium iptv", "iptv subscription", "4k iptv", "best iptv service"],
  openGraph: {
    title: "iflexiptv - Premium IPTV Subscription Service",
    description: "Experience the ultimate premium IPTV service with iflexiptv. 4K & FHD channels, global sports, movies, and VODs.",
    url: "https://www.iflexiptv.pro",  // Beddel .net -> .pro
    siteName: "iflexiptv",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "iflexiptv Premium Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iflexiptv - Premium IPTV Subscription Service",
    description: "Experience the ultimate premium IPTV service with iflexiptv.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.iflexiptv.pro",  // Beddel .net -> .pro
  },
};
