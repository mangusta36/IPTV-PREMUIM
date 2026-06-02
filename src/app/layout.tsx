import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.iflexiptv.pro'),
  title: {
    default: "iflexiptv - Premium IPTV Subscription Service",
    template: "%s | iflexiptv",
  },
  description: "Experience the ultimate premium IPTV service with iflexiptv. 4K & FHD channels, global sports, movies, and VODs with anti-freeze technology.",
  keywords: ["iflexiptv", "premium iptv", "iptv subscription", "4k iptv", "best iptv service"],
  openGraph: {
    title: "iflexiptv - Premium IPTV Subscription Service",
    description: "Experience the ultimate premium IPTV service with iflexiptv. 4K & FHD channels, global sports, movies, and VODs.",
    url: "https://www.iflexiptv.pro",
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
    canonical: "https://www.iflexiptv.pro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand selection:text-background">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
