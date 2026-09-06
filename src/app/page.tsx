import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Film,
  Flame,
  Globe,
  Headphones,
  Layers,
  Play,
  Radio,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trophy,
  Tv,
  Zap,
  Check,
} from "lucide-react";
import PremiumHero from "@/components/PremiumHero";
import ChannelTicker from "@/components/ChannelTicker";
import AnimatedLogos from "@/components/AnimatedLogos";
import StatsBar from "@/components/StatsBar";
import MovieCarousel from "@/components/MovieCarousel";
import DeviceMarquee from "@/components/DeviceMarquee";
import PricingSelector from "@/components/PricingSelector";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";
import { pricingDeviceOptions } from "@/lib/pricing-data";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "iFlex IPTV - Premium IPTV Service | 26,000+ Live Channels, Sports & 4K VOD",
  description:
    "Experience ultra-stable 4K streaming with iFlex IPTV. Access 26,000+ live channels, 100,000+ movies & series, anti-freeze tech, EPG, and instant WhatsApp activation.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "iFlex IPTV - Premium IPTV Service | 26,000+ Live Channels, Sports & 4K VOD",
    description:
      "Experience ultra-stable 4K streaming with iFlex IPTV. Access 26,000+ live channels, 100,000+ movies & series, anti-freeze tech, EPG, and instant WhatsApp activation.",
    url: absoluteUrl("/"),
    siteName: siteConfig.brandName,
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "iFlex IPTV premium streaming service with live sports and 4K movies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iFlex IPTV - Premium IPTV Service | 26,000+ Live Channels, Sports & 4K VOD",
    description:
      "Experience ultra-stable 4K streaming with iFlex IPTV. Access 26,000+ live channels, 100,000+ movies & series, anti-freeze tech, EPG, and instant WhatsApp activation.",
    images: [siteConfig.ogImagePath],
  },
};

const homeFaqs = [
  {
    question: "How quickly is my iFlex IPTV subscription activated?",
    answer:
      "Activation is typically completed within 5 to 10 minutes after confirming your package with our WhatsApp support team. You will receive your pre-configured Xtream Codes API credentials or M3U playlist along with step-by-step setup assistance tailored for your specific device.",
  },
  {
    question: "How many devices can I stream on simultaneously?",
    answer:
      "You can install our service on as many devices as you like, but simultaneous streaming depends on your chosen plan. We offer 1, 2, and 3 active device packages so everyone in your home can watch different live sports, movies, or series at the same time without stream collisions.",
  },
  {
    question: "What internet speed is recommended for 4K and FHD streaming?",
    answer:
      "For stable HD streaming, a minimum speed of 10-15 Mbps is recommended. For 1080p FHD 60FPS sports, 20-25 Mbps is ideal, and for 4K Ultra HD streams, we recommend 35+ Mbps. For the best stability during major live sporting events, connecting your main TV via an Ethernet cable or 5 GHz Wi-Fi is strongly advised.",
  },
  {
    question: "Which IPTV player applications are recommended?",
    answer:
      "We support all leading IPTV applications across all platforms. On Android TV and Amazon Firestick, TiviMate and IPTV Smarters Pro provide the smoothest experience. For Apple devices (Apple TV, iPhone, iPad), IPTV Smarters, GSE Smart IPTV, or UHF are recommended. For Samsung and LG Smart TVs, you can use IPTV Smarters, Smart IPTV, or Nanomid.",
  },
  {
    question: "What is the 7-Day Money-Back Guarantee?",
    answer:
      "We stand 100% behind our streaming stability and service quality. If you experience technical problems that our WhatsApp concierge support cannot resolve within your first 7 days, you are eligible for a prompt, no-questions-asked refund according to our refund policy.",
  },
  {
    question: "How does Anti-Freeze 9.3 prevent buffering during peak sports?",
    answer:
      "Unlike standard IPTV services that rely on single overloaded servers, iFlex IPTV utilizes intelligent Multi-CDN routing and load balancing. When millions of viewers tune into a major match, our network automatically distributes the traffic across 10 Gbps edge nodes to prevent packet congestion and buffer spikes.",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.brandName,
        url: siteConfig.domain,
        logo: absoluteUrl(siteConfig.logoPath),
        description: siteConfig.defaultDescription,
        sameAs: [createWhatsAppSupportUrl()],
      },
      {
        "@type": "WebSite",
        name: siteConfig.brandName,
        url: siteConfig.domain,
        description: siteConfig.defaultDescription,
        inLanguage: "en-US",
      },
      {
        "@type": "Product",
        name: `${siteConfig.brandName} Premium Subscription`,
        description:
          "Premium IPTV subscription with 26,000+ live channels, 100,000+ VOD movies and series, EPG TV guide, and 4K live sports streaming.",
        brand: {
          "@type": "Brand",
          name: siteConfig.brandName,
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "35",
          highPrice: "149",
          offerCount: pricingDeviceOptions.reduce((total, option) => total + option.plans.length, 0),
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "15200",
          bestRating: "5",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* ─── 1. HERO SECTION (Split Left/Right) ─── */}
      <PremiumHero />

      {/* ─── 2. CHANNEL TICKER & BRAND MARQUEE ─── */}
      <ChannelTicker />
      <AnimatedLogos />

      {/* ─── 3. STATS COUNTER BAR ─── */}
      <StatsBar />

      {/* ─── 4. ALTERNATING LEFT/RIGHT FEATURE SHOWCASES ─── */}

      {/* SECTION A: LIVE SPORTS (Left Copy / Right Visual Showcase) */}
      <section
        id="sports-showcase"
        className="relative overflow-hidden bg-background py-24 sm:py-32"
        aria-labelledby="sports-showcase-heading"
      >
        <div className="pointer-events-none absolute -left-48 top-1/4 -z-10 h-96 w-96 rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-80 w-80 rounded-full bg-blue-500/[0.03] blur-[100px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Sports Value Proposition */}
            <div className="flex flex-col">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <Trophy className="h-3.5 w-3.5" />
                Unrivaled Live Sports in 4K 60FPS
              </div>

              <h2
                id="sports-showcase-heading"
                className="mt-6 font-serif text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Never Miss a Kickoff, Grand Prix, or{" "}
                <span className="luxury-gradient-text">Title Fight</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Broadcast-grade sports streaming with sub-2-second latency. Enjoy every Premier League
                clash, Champions League fixture, UFC Main Event, Formula 1 race, and NBA game in fluid
                60 FPS without spoiler notifications ruining the moment.
              </p>

              {/* 2x2 Feature Grid */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-card/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">Sub-2s Low Latency</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Watch goals unfold in real time before sports apps and social feeds notify you.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">Anti-Freeze 9.3</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Multi-CDN routing prevents packet loss and buffer freezes during peak championship finals.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">7-Day Sports Catch-Up</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Missed an early morning race or late-night fight? Rewind and stream matches on demand.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card/70">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Radio className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-bold text-white">Interactive EPG Guide</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Instant channel timelines, multi-language commentary, and accurate kickoff schedules.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={createWhatsAppSupportUrl("help with sports channels and activation")}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="sports-whatsapp"
                  className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-hover px-7 text-sm font-bold text-background shadow-lg shadow-accent/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-accent/30"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                  Get Sports Access
                </Link>
                <Link
                  href="/channels"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/[0.08]"
                >
                  Explore Sports Lineup <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: Layered Sports Visual Showcase */}
            <div className="relative">
              <div className="relative mx-auto max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-card/80 p-3 shadow-2xl shadow-black/60">
                {/* Main sports image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src="/imgs/sports/bg4.jpg"
                    alt="Live football stadium match action under bright floodlights in 4K"
                    fill
                    sizes="(min-width: 1024px) 500px, 90vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  {/* Top floating live badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-red-500/40 bg-black/60 px-3.5 py-1 backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-red-400">Live 4K 60FPS</span>
                  </div>

                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-bold text-white/90 backdrop-blur-md">
                    Ultra Low Latency
                  </div>

                  {/* Scoreboard overlay */}
                  <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-black/75 p-3 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs font-bold text-white/70">
                      <span className="flex items-center gap-1.5 text-accent">
                        <Flame className="h-3.5 w-3.5" /> Champions League · Final
                      </span>
                      <span>87:24</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between font-mono text-base font-black text-white">
                      <span>Real Madrid</span>
                      <span className="rounded bg-white/10 px-2 py-0.5 text-accent">2 - 1</span>
                      <span>Bayern Munich</span>
                    </div>
                  </div>
                </div>

                {/* Secondary row with mini card & specs */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-white/70">
                  <div className="rounded-xl border border-white/6 bg-white/[0.03] py-2.5">
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Bitrate</span>
                    <span className="font-bold text-accent">25 Mbps FHD</span>
                  </div>
                  <div className="rounded-xl border border-white/6 bg-white/[0.03] py-2.5">
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Audio</span>
                    <span className="font-bold text-white">Dolby 5.1</span>
                  </div>
                  <div className="rounded-xl border border-white/6 bg-white/[0.03] py-2.5">
                    <span className="block text-[10px] text-muted-foreground uppercase tracking-wider">Catch-Up</span>
                    <span className="font-bold text-green-400">7 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: MASSIVE VOD CINEMA VAULT (Left Visual Showcase / Right Copy) */}
      <section
        id="cinema-vod"
        className="relative overflow-hidden border-t border-border bg-card/20 py-24 sm:py-32"
        aria-labelledby="cinema-vod-heading"
      >
        <div className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-accent/[0.04] blur-[120px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Cinematic Poster Bento Showcase */}
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg">
                {/* 2x3 poster grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { img: "/imgs/movies/movie_1.webp", title: "Dune Part Two", tag: "4K UHD" },
                    { img: "/imgs/movies/movie_2.webp", title: "Oppenheimer", tag: "Dolby Atmos" },
                    { img: "/imgs/movies/movie_3.webp", title: "The Batman", tag: "IMDb 8.9" },
                    { img: "/imgs/movies/movie_4.webp", title: "John Wick 4", tag: "4K HDR" },
                    { img: "/imgs/movies/movie_5.webp", title: "Avatar 2", tag: "3D Audio" },
                    { img: "/imgs/movies/movie_6.webp", title: "Top Gun", tag: "Blockbuster" },
                  ].map((movie, index) => (
                    <div
                      key={movie.title}
                      className={`group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/8 bg-card shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-accent/15 ${
                        index === 1 ? "-translate-y-2" : index === 4 ? "translate-y-2" : ""
                      }`}
                    >
                      <Image
                        src={movie.img}
                        alt={`${movie.title} movie poster preview in 4K VOD library`}
                        fill
                        sizes="(min-width: 1024px) 160px, 30vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-95" />
                      <div className="absolute inset-x-2 bottom-2">
                        <span className="rounded bg-accent/90 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-background">
                          {movie.tag}
                        </span>
                        <p className="mt-1 truncate text-xs font-bold text-white">{movie.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating VOD stat badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full border border-white/10 bg-card/90 px-6 py-2.5 shadow-2xl backdrop-blur-xl">
                  <Film className="h-4 w-4 text-accent" />
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    100,000+ VOD Titles Available
                  </span>
                </div>
              </div>
            </div>

            {/* Right: VOD Copy & Features */}
            <div className="order-1 flex flex-col lg:order-2">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <Film className="h-3.5 w-3.5" />
                Massive On-Demand Cinema
              </div>

              <h2
                id="cinema-vod-heading"
                className="mt-6 font-serif text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Your Personal Home Theater,{" "}
                <span className="luxury-gradient-text">Updated Daily</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Binge complete seasons of the world&apos;s best series from HBO, Netflix, Disney+, and
                Apple TV+, alongside brand-new Hollywood blockbusters freshly released from the box office.
                Instant playback, crystal-clear 4K HDR video, and immersive Dolby Audio.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: "Fresh Releases Every Day",
                    desc: "Our automated scrapers add new theatrical releases and trending series episodes within hours of airtime.",
                  },
                  {
                    title: "Multi-Language Audio & Subtitles",
                    desc: "Switch effortlessly between original English, French, Spanish, Arabic, German, and 20+ subtitle tracks.",
                  },
                  {
                    title: "Pristine 4K UHD & Dolby Surround",
                    desc: "Enjoy uncompressed video bitstreams with vivid HDR10 color and room-filling 5.1/7.1 Dolby surround sound.",
                  },
                  {
                    title: "Smart Search & Category Shelves",
                    desc: "Filter seamlessly by actor, director, genre, IMDb score, or release year across modern IPTV players.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/channels"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-hover px-7 text-sm font-bold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-0.5"
                >
                  <Play className="h-4 w-4 fill-current" /> Browse Movie Shelves
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-accent/40"
                >
                  View Subscription Tiers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: ANTI-FREEZE 9.3 & SERVER INFRASTRUCTURE (Left Copy / Right Server Dashboard) */}
      <section
        id="anti-freeze-infrastructure"
        className="relative overflow-hidden bg-background py-24 sm:py-32"
        aria-labelledby="anti-freeze-heading"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Anti-freeze Copy */}
            <div className="flex flex-col">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <Server className="h-3.5 w-3.5" />
                Zero-Buffering Infrastructure
              </div>

              <h2
                id="anti-freeze-heading"
                className="mt-6 font-serif text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Engineered for Zero Freezes, Powered by{" "}
                <span className="luxury-gradient-text">Multi-CDN Edge</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Cheap IPTV services freeze during major sporting events because they rely on single,
                overloaded servers. iFlex IPTV deploys intelligent Multi-CDN edge clustering that
                dynamically routes your stream to the closest high-speed node with 99.9% uptime.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-card/40 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Globe className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-white">10 Gbps Edge Nodes</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Dedicated international bandwidth distributed across Frankfurt, London, New York, and Dallas.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Shield className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-white">ISP Throttling Bypass</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Header encapsulation prevents internet providers from intentionally slowing live video feeds.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Layers className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-white">AV1 &amp; HEVC Ready</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Next-generation compression cuts bandwidth requirements by up to 50% without quality loss.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Sparkles className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-white">Sub-Second Auto-Reroute</h3>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    If an edge node experiences packet congestion, your player seamlessly switches routes instantly.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/blog/next-gen-iptv-streaming-tech-av1-cdn-low-latency-2026"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:text-accent-hover"
                >
                  Read our Next-Gen IPTV Streaming Tech Guide <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: Glassmorphism Server Dashboard Mockup */}
            <div className="relative">
              <div className="relative mx-auto max-w-lg rounded-3xl border border-white/10 bg-card/75 p-6 shadow-2xl backdrop-blur-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-3 w-3 items-center justify-center">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-white">Global Edge Network</p>
                      <p className="text-[11px] text-muted-foreground">Anti-Freeze 9.3 Active</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                    99.98% Uptime
                  </span>
                </div>

                {/* Metrics */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/6 bg-white/[0.03] p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Average Ping</span>
                    <p className="mt-1 font-mono text-2xl font-black text-white">12 ms</p>
                    <span className="text-[10px] text-green-400">Ultra-low latency</span>
                  </div>
                  <div className="rounded-2xl border border-white/6 bg-white/[0.03] p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Packet Loss</span>
                    <p className="mt-1 font-mono text-2xl font-black text-white">0.00%</p>
                    <span className="text-[10px] text-green-400">Zero frame drops</span>
                  </div>
                </div>

                {/* Node Status List */}
                <div className="mt-5 space-y-2.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Active Edge Clusters
                  </p>
                  {[
                    { location: "Frankfurt (DE-01)", ping: "11 ms", load: "34%" },
                    { location: "London (UK-02)", ping: "14 ms", load: "41%" },
                    { location: "New York (US-01)", ping: "22 ms", load: "38%" },
                    { location: "Dallas (US-02)", ping: "26 ms", load: "29%" },
                  ].map((node) => (
                    <div
                      key={node.location}
                      className="flex items-center justify-between rounded-xl border border-white/6 bg-white/[0.02] px-3.5 py-2 text-xs"
                    >
                      <span className="font-semibold text-white/90">{node.location}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-accent">{node.ping}</span>
                        <span className="rounded bg-white/6 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                          {node.load}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: MULTI-SCREEN COMPATIBILITY (Left Visual Device Mockup / Right Copy) */}
      <section
        id="multi-screen-devices"
        className="relative overflow-hidden border-t border-border bg-card/20 py-24 sm:py-32"
        aria-labelledby="devices-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Device Visual Showcase */}
            <div className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg rounded-3xl border border-white/10 bg-card/60 p-4 shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/8">
                  <Image
                    src="/imgs/bg_sliders/bg_slider_1.webp"
                    alt="iFlex IPTV streaming on modern Samsung Smart TV in dark living room"
                    fill
                    sizes="(min-width: 1024px) 500px, 90vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                    <span className="rounded-lg bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                      Smart TV 4K Interface
                    </span>
                    <span className="rounded-lg bg-accent/90 px-3 py-1 text-xs font-black text-background">
                      All Devices Supported
                    </span>
                  </div>
                </div>

                {/* Device Chips Grid */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  {["Smart TV", "Fire Stick", "Android TV", "Apple TV", "Windows/Mac", "iPhone/iPad"].map(
                    (device) => (
                      <div
                        key={device}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-white/6 bg-white/[0.03] py-2.5 text-white/80 transition hover:border-accent/30 hover:text-white"
                      >
                        <Tv className="h-3.5 w-3.5 text-accent" />
                        <span>{device}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right: Device Copy & Screen Plans */}
            <div className="order-1 flex flex-col lg:order-2">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                <Smartphone className="h-3.5 w-3.5" />
                Multi-Screen Freedom
              </div>

              <h2
                id="devices-heading"
                className="mt-6 font-serif text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                One Subscription, Any Screen in{" "}
                <span className="luxury-gradient-text">Your Home</span>
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                Whether you watch in the living room on a Samsung or LG Smart TV, in the bedroom with an
                Amazon Fire Stick, or on the go with your iPhone or Android tablet, iFlex IPTV provides
                unrestricted compatibility across all modern players.
              </p>

              {/* 1, 2, or 3 Device Plans explanation */}
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/8 bg-card/40 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">1 Active Device Plan</h3>
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold text-accent">
                      Solo Viewer
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Perfect for individuals streaming on a single living room TV or Firestick.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-card/40 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">2 Active Devices Plan</h3>
                    <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-bold text-accent">
                      Couples &amp; Rooms
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Stream two completely different channels simultaneously in living room and bedroom.
                  </p>
                </div>

                <div className="rounded-2xl border border-accent/30 bg-accent/[0.04] p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">3 Active Devices Plan</h3>
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-black text-background">
                      Family Pack
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Sports in the lounge, cartoons on the tablet, and movies in the master suite at the same time.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/pricing"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-hover px-7 text-sm font-bold text-background shadow-lg shadow-accent/20 transition hover:-translate-y-0.5"
                >
                  Select Active Device Plan
                </Link>
                <Link
                  href="/blog/legacy-mag-stalker-vs-modern-multi-screen-iptv-apps-2026"
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent hover:underline"
                >
                  Migrating from an Old MAG Box? Read the 2026 Guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. TRENDING MOVIE CAROUSEL ─── */}
      <MovieCarousel />

      {/* ─── 6. DEVICE MARQUEE ─── */}
      <DeviceMarquee />

      {/* ─── 7. INTERACTIVE PRICING SELECTOR ─── */}
      <PricingSelector />

      {/* ─── 8. WHY CHOOSE IFLEX IPTV BENTO GRID ─── */}
      <section className="relative border-y border-border bg-card/30 py-24 sm:py-32" aria-label="Why choose iFlex IPTV">
        <div className="pointer-events-none absolute inset-0 -z-10 dot-grid opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">The iFlex Standard</p>
            <h2 className="mt-4 font-serif text-3xl font-black tracking-tight text-white sm:text-5xl">
              Why 15,000+ Viewers Stream with <span className="luxury-gradient-text">iFlex IPTV</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
              We combine enterprise server stability with personal WhatsApp concierge onboarding to give you
              the highest-converting, most dependable IPTV experience on the market.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Headphones className="h-6 w-6 text-accent" />,
                title: "24/7 WhatsApp Concierge",
                desc: "Real human technical support ready to assist with playlist imports, app setup, and troubleshooting in minutes.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-accent" />,
                title: "7-Day Money-Back Guarantee",
                desc: "Test our streaming stability with total peace of mind. If you encounter issues we cannot solve, get a full refund.",
              },
              {
                icon: <Globe className="h-6 w-6 text-accent" />,
                title: "Comprehensive EPG TV Guide",
                desc: "Interactive schedule grids with up to 7-day program listings and match times across international channels.",
              },
              {
                icon: <Clock className="h-6 w-6 text-accent" />,
                title: "No Contracts, No Surprises",
                desc: "Pay transparently with zero hidden fees, auto-renewal traps, or lock-in commitments. Cancel anytime.",
              },
              {
                icon: <Zap className="h-6 w-6 text-accent" />,
                title: "Under 5-Minute Setup",
                desc: "Send us a WhatsApp message with your device name, and our team will guide you through instant activation.",
              },
              {
                icon: <Server className="h-6 w-6 text-accent" />,
                title: "Anti-Freeze 9.3 Architecture",
                desc: "Intelligent Multi-CDN routing and hardware codec optimization keep your live sports buttery smooth.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="stagger-in group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-[0_16px_48px_-12px_rgba(212,175,55,0.1)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.06]">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. INTERACTIVE FAQ ACCORDION ─── */}
      <section className="relative bg-background py-24 sm:py-32" aria-labelledby="home-faq-heading">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Got questions?</p>
            <h2 id="home-faq-heading" className="mt-4 font-serif text-3xl font-black text-white sm:text-5xl">
              Frequently Asked <span className="luxury-gradient-text">Questions</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Everything you need to know about setting up and streaming with iFlex IPTV.
            </p>
          </div>

          <FAQAccordion items={homeFaqs} />

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">Have a specific question not listed here?</p>
            <Link
              href={createWhatsAppSupportUrl("I have a question before ordering iFlex IPTV")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-bold text-accent transition hover:text-accent-hover"
            >
              <WhatsAppIcon className="h-4 w-4" /> Ask our WhatsApp Support Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 10. LATEST 2026 IPTV GUIDES (BLOG PREVIEWS) ─── */}
      <section className="relative border-t border-border bg-card/20 py-24 sm:py-32" aria-label="Blog articles">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">2026 Streaming Guides</p>
              <h2 className="mt-4 font-serif text-3xl font-black text-white sm:text-5xl">
                Latest Insights &amp; Setup Tutorials
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-bold text-accent transition-colors hover:text-accent-hover"
            >
              Browse all 14 articles{" "}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {blogPosts.slice(12, 15).concat(blogPosts.slice(0, 3)).slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="stagger-in group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_60px_-12px_rgba(212,175,55,0.1)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-bold text-accent backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="font-serif text-lg font-black text-white transition-colors duration-300 group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-xs leading-5 text-muted-foreground">{post.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-black text-accent">
                    Read guide <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. HIGH-CONVERTING CLOSING HERO CTA ─── */}
      <section className="relative overflow-hidden border-t border-border bg-card/30 py-28 text-center" aria-label="Get started">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.05] blur-[140px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-5 dot-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-2 text-sm font-semibold text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Limited Time Special Pricing
            </div>

            <h2 className="font-serif text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Ready to Activate <span className="luxury-gradient-text">{siteConfig.brandName}</span>?
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Send a quick WhatsApp message with your device name. Receive payment details and get your active
              credentials configured in under 10 minutes.
            </p>
          </div>

          <Link
            href={createWhatsAppSupportUrl("help activating iFlex IPTV")}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="support-whatsapp"
            className="mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-accent to-accent-hover px-10 text-base font-bold text-background shadow-[0_12px_40px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(212,175,55,0.45)] hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Start Premium Experience
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" /> 7-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" /> Zero contracts or commitments
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" /> Instant WhatsApp support
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
