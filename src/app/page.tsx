import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle, Clock, MonitorPlay, ShieldCheck, Sparkles, Tv, Zap } from "lucide-react";
import HeroStreamingMockup from "@/components/HeroStreamingMockup";
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

const trustBadges = [
  siteConfig.claims.channels,
  siteConfig.claims.vod,
  siteConfig.claims.quality,
  "Fast Activation",
  "24/7 Support",
];

const featureCards = [
  {
    icon: <Zap className="h-6 w-6 text-brand" />,
    title: "Sports-ready streaming setup",
    description:
      "Prepare your Smart TV, Fire Stick, Android TV, or mobile device before major sports nights with EPG support and guided setup.",
  },
  {
    icon: <MonitorPlay className="h-6 w-6 text-blue-300" />,
    title: "Live TV, movies, and series",
    description:
      "Browse live entertainment categories, movie nights, series shelves, news, kids content, and international options in one IPTV setup.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-green-300" />,
    title: "Clear device plans",
    description:
      "Choose 1, 2, or 3 active device plans. Install on supported devices and watch according to your selected connection package.",
  },
];

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

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-black pt-20 sm:pt-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.24),transparent_28rem),radial-gradient(circle_at_80%_12%,rgba(234,179,8,0.18),transparent_26rem),radial-gradient(circle_at_70%_82%,rgba(22,163,74,0.18),transparent_28rem),linear-gradient(180deg,#020617_0%,#000_76%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="container mx-auto grid min-h-[calc(100svh-4rem)] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 px-4 py-2 text-sm font-bold text-green-200">
              <span className="h-2 w-2 rounded-full bg-green-300 shadow-[0_0_18px_rgba(134,239,172,0.85)]" />
              Fast WhatsApp activation for IPTV setup
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              iFlex IPTV - Premium Live TV, Sports, Movies & 4K Streaming
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Get instant IPTV access for live sports, movies, series, news, kids, and international categories across Smart TV, Fire Stick, Android TV, iPhone, PC, and more.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={createWhatsAppSupportUrl("help starting my iFlex IPTV subscription")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-whatsapp"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-green-500 px-8 text-base font-black text-white shadow-[0_14px_40px_rgba(22,163,74,0.36)] transition hover:-translate-y-1 hover:bg-green-400"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Start on WhatsApp
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:border-brand/50 hover:text-brand"
              >
                View Pricing
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white/72">
                  <CheckCircle className="h-4 w-4 text-brand" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <HeroStreamingMockup />
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#030712] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <article key={feature.title} className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-black/20">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/35">
                  {feature.icon}
                </div>
                <h2 className="text-xl font-black text-white">{feature.title}</h2>
                <p className="mt-3 leading-7 text-white/62">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-brand">All major devices</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">Install on your favorite screen</h2>
              <p className="mt-5 leading-7 text-white/62">
                iFlex IPTV supports common IPTV players and devices. Active streams depend on your selected 1, 2, or 3 device plan.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {deviceChips.map((device) => (
                <div key={device} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5">
                  <Tv className="mb-4 h-6 w-6 text-brand" />
                  <p className="font-black text-white">{device}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSelector />

      <section className="border-y border-white/10 bg-[#020617] py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <Clock className="mb-4 h-7 w-7 text-brand" />
              <h3 className="font-black text-white">Before match time</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">Message support early, test your device, and confirm your EPG/channel categories are loaded.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <Sparkles className="mb-4 h-7 w-7 text-blue-300" />
              <h3 className="font-black text-white">Quality where available</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">HD, FHD, and 4K streams depend on your internet speed, selected channel, device, and connection stability.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <ShieldCheck className="mb-4 h-7 w-7 text-green-300" />
              <h3 className="font-black text-white">Support-led setup</h3>
              <p className="mt-2 text-sm leading-6 text-white/60">Our WhatsApp support helps with app selection, login details, EPG refreshes, and basic troubleshooting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.26em] text-brand">2026 IPTV guides</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">Helpful setup articles</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-brand hover:text-brand-hover">
              Browse blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:border-brand/40">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{post.category}</p>
                <h3 className="mt-3 text-xl font-black text-white group-hover:text-brand">{post.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/60">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.18),transparent_30rem),#020617] py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-white sm:text-5xl">Ready to activate iFlex IPTV?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Send a WhatsApp message, choose your package, receive payment instructions, and get your activation details with setup help.
          </p>
          <Link
            href={createWhatsAppSupportUrl("help activating iFlex IPTV")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="support-whatsapp"
            className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-green-500 px-8 text-base font-black text-white transition hover:-translate-y-1 hover:bg-green-400"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Start on WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
