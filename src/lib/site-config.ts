export const siteConfig = {
  brandName: "iFlex IPTV",
  domain: "https://www.iflexiptv.pro",
  supportEmail: "support@iflexiptv.pro",
  whatsappNumber: "+44 7828 714977",
  logoPath: "/logo.png",
  ogImagePath: "/og-image.jpg",
  defaultTitle: "iFlex IPTV - Premium IPTV for Live Sports, Movies & 4K TV",
  defaultDescription:
    "iFlex IPTV offers premium IPTV access with 26,000+ live channels, 100,000+ VOD titles, HD/FHD/4K quality, fast WhatsApp activation, EPG support, and setup help for all major devices.",
  legalDisclaimer:
    "iFlex IPTV is an independent IPTV service. Channel availability may vary by package and region. iFlex IPTV is not affiliated with broadcasters, streaming platforms, sports leagues, FIFA, World Cup organizers, or channel owners.",
  claims: {
    channels: "26,000+ Live Channels",
    vod: "100,000+ VOD Titles",
    quality: "HD / FHD / 4K Quality",
    support: "24/7 iFlex IPTV Support",
    refund: "7-Day Money-Back Guarantee",
    devices:
      "Smart TV, Fire Stick, Android TV, iPhone/iPad, Windows/Mac, MAG Box",
    devicePolicy:
      "Install on multiple supported devices. Active streams depend on your selected device plan.",
  },
} as const;

export function absoluteUrl(path = "") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
}
