import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle, Clock, Globe, ShieldCheck, Tv } from "lucide-react";
import PremiumHero from "@/components/PremiumHero";
import ChannelTicker from "@/components/ChannelTicker";
import StatsBar from "@/components/StatsBar";
import MovieCarousel from "@/components/MovieCarousel";
import DeviceMarquee from "@/components/DeviceMarquee";
import PricingSelector from "@/components/PricingSelector";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";
import { pricingDeviceOptions } from "@/lib/pricing-data";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "iFlex IPTV - Premium IPTV for Live Sports, Movies & 4K TV",
  description: siteConfig.defaultDescription,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "iFlex IPTV - Premium IPTV for Live Sports, Movies & 4K TV",
    description: siteConfig.defaultDescription,
    url: absoluteUrl("/"),
    siteName: siteConfig.brandName,
    images: [{ url: siteConfig.ogImagePath, width: 1200, height: 630, alt: "iFlex IPTV premium IPTV service" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iFlex IPTV - Premium IPTV for Live Sports, Movies & 4K TV",
    description: siteConfig.defaultDescription,
    images: [siteConfig.ogImagePath],
  },
};

const deviceChips = ["Smart TV", "Fire Stick", "Android TV", "iPhone/iPad", "Windows/Mac", "MAG Box"];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.domain,
    logo: absoluteUrl(siteConfig.logoPath),
    description: siteConfig.defaultDescription,
    sameAs: [createWhatsAppSupportUrl()],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "35",
      highPrice: "149",
      offerCount: pricingDeviceOptions.reduce((total, option) => total + option.plans.length, 0),
    },
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* ─── HERO ─── */}
      <PremiumHero />

      {/* ─── CHANNEL TICKER ─── */}
      <ChannelTicker />

      {/* ─── STATS BAR ─── */}
      <StatsBar />

      {/* ─── MOVIE CAROUSEL ─── */}
      <MovieCarousel />

      {/* ─── DEVICES ─── */}
      <section className="relative bg-background py-20" aria-label="Supported devices">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">All major devices</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl">Install on your favorite screen</h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                iFlex IPTV supports common IPTV players and devices. Active streams depend on your selected 1, 2, or 3 device plan.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {deviceChips.map((device, i) => (
                <div key={device} className={`stagger-in group rounded-2xl border border-border bg-card/50 p-5 transition-all duration-400 hover:border-accent/30 hover:bg-card`}>
                  <Tv className="mb-4 h-6 w-6 text-accent transition-transform duration-400 group-hover:scale-110" />
                  <p className="font-bold text-foreground">{device}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DEVICE MARQUEE ─── */}
      <DeviceMarquee />

      {/* ─── PRICING ─── */}
      <PricingSelector />

      {/* ─── TIPS ─── */}
      <section className="relative border-y border-border bg-card/30 py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Before you watch</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl">Get the best experience</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: <Clock className="h-6 w-6 text-accent" />, title: "Before match time", desc: "Message support early, test your device, and confirm your EPG/channel categories are loaded." },
              { icon: <Globe className="h-6 w-6 text-accent" />, title: "Quality where available", desc: "HD, FHD, and 4K streams depend on your internet speed, selected channel, device, and connection stability." },
              { icon: <ShieldCheck className="h-6 w-6 text-accent" />, title: "Support-led setup", desc: "Our WhatsApp support helps with app selection, login details, EPG refreshes, and basic troubleshooting." },
            ].map((tip) => (
              <div key={tip.title} className="stagger-in group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 transition-all duration-500 hover:border-accent/25 hover:shadow-[0_16px_48px_-12px_rgba(212,175,55,0.08)]">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/[0.06] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.06]">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{tip.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section className="relative bg-background py-20" aria-label="Blog articles">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">2026 IPTV guides</p>
              <h2 className="mt-4 text-3xl font-black text-foreground sm:text-5xl">Helpful setup articles</h2>
            </div>
            <Link href="/blog" className="group inline-flex items-center gap-2 font-bold text-accent transition-colors hover:text-accent-hover">
              Browse blog <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="stagger-in group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_60px_-12px_rgba(212,175,55,0.1)]">
                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-accent/[0.05] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="relative text-xs font-bold uppercase tracking-[0.22em] text-accent">{post.category}</p>
                <h3 className="relative mt-3 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">{post.title}</h3>
                <p className="relative mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden border-t border-border bg-card/20 py-28 text-center" aria-label="Get started">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
          <div className="absolute bottom-0 left-[20%] h-[300px] w-[400px] rounded-full bg-accent/[0.02] blur-[100px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-5 dot-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/[0.05] px-4 py-2 text-sm font-semibold text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Limited time offer
            </div>
            <h2 className="font-serif text-3xl font-black tracking-tight text-foreground sm:text-5xl">Ready to activate <span className="luxury-gradient-text">{siteConfig.brandName}</span>?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Send a WhatsApp message, choose your package, receive payment instructions, and get your activation details with setup help.
            </p>
          </div>
          <Link
            href={createWhatsAppSupportUrl("help activating iFlex IPTV")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="support-whatsapp"
            className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-accent to-accent-hover px-9 text-base font-bold text-background shadow-[0_12px_40px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(212,175,55,0.45)] hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Start Premium Experience
          </Link>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> 7-day guarantee</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> No contracts</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Cancel anytime</span>
          </div>
        </div>
      </section>
    </>
  );
}
