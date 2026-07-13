import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Outfit, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.defaultDescription,
  keywords: ["iFlex IPTV", "premium IPTV", "IPTV subscription", "4K IPTV", "live sports IPTV", "IPTV 2026"],
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.domain,
    siteName: siteConfig.brandName,
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "iFlex IPTV premium streaming service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.ogImagePath],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0E27",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9BZMFD8Q3C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9BZMFD8Q3C');
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className="relative min-h-full overflow-x-hidden flex flex-col bg-background text-foreground selection:bg-accent selection:text-background"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:left-4 focus:top-4 focus:rounded-full focus:bg-accent focus:px-6 focus:py-3 focus:text-background focus:font-bold focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="relative flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
