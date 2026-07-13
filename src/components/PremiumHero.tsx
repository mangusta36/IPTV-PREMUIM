"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Shield, Star, Tv, Zap, Gem } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/site-config";

const floatingFeatures = [
  { icon: Tv, label: "26,000+ Live Channels", color: "from-amber-500/20 to-yellow-600/10" },
  { icon: Gem, label: "100,000+ VOD Titles", color: "from-purple-500/20 to-violet-600/10" },
  { icon: Zap, label: "4K Ultra HD Quality", color: "from-cyan-500/20 to-blue-600/10" },
];

const nowPlaying = [
  "Premier League: Arsenal vs Chelsea",
  "Champions League: Real Madrid vs Bayern",
  "UFC 312: Main Event",
  "NBA: Lakers vs Celtics",
  "F1 Grand Prix: Monaco",
];

function Particles({ mounted }: { mounted: boolean }) {
  if (!mounted) return null;

  const particles = Array.from({ length: 20 }, (_, i) => {
    const seed = (i * 7 + 3) % 100;
    return {
      id: i,
      left: `${(seed * 1.13) % 100}%`,
      size: (seed % 3) + 1,
      duration: (seed % 20) + 15,
      delay: (seed % 15),
      opacity: ((seed % 30) / 100) + 0.1,
    };
  });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: `rgba(212, 175, 55, ${p.opacity})`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function NowPlayingTicker({ mounted }: { mounted: boolean }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % nowPlaying.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-badge inline-flex items-center gap-3 rounded-full border border-accent/15 bg-accent/[0.06] px-5 py-2.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Live</span>
      <span className="h-4 w-px bg-accent/20" />
      <span className="text-sm font-semibold text-foreground/80 transition-opacity duration-500">
        {mounted ? nowPlaying[current] : nowPlaying[0]}
      </span>
    </div>
  );
}

function FloatingFeatureCards() {
  return (
    <div className="relative hidden h-full lg:flex lg:flex-col lg:justify-center lg:gap-5 lg:pl-8">
      {floatingFeatures.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.label}
            className="hero-float-card premium-card group relative w-72 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-500 hover:border-accent/20 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_-12px_rgba(212,175,55,0.08)]"
            style={{ animationDelay: `${0.8 + i * 0.2}s` }}
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/[0.04] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/15 bg-accent/[0.06]">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <p className="text-sm font-bold text-foreground">{feature.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default function PremiumHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] overflow-hidden noise-overlay bg-background"
      aria-label="Hero"
    >
      {/* Background image */}
      <Image
        src="https://www.modeiptv.ca/wp-content/uploads/2024/11/AdobeStock_712972033-2-1024x683.jpeg"
        alt=""
        fill
        unoptimized
        priority
        sizes="100vw"
        className="-z-30 object-cover opacity-30"
      />

      {/* Dark overlays */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-navy/80 via-navy/50 to-navy" />
      <div className="pointer-events-none absolute inset-0 -z-19 bg-gradient-to-r from-navy/90 via-navy/40 to-navy/60" />
      {/* Bokeh dots */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bokeh-dot absolute left-[15%] top-[20%] h-[300px] w-[300px] rounded-full bg-accent/[0.04]" />
        <div className="bokeh-dot absolute right-[20%] top-[60%] h-[250px] w-[250px] rounded-full bg-purple-500/[0.03]" />
        <div className="bokeh-dot absolute bottom-[10%] left-[60%] h-[200px] w-[200px] rounded-full bg-cyan-500/[0.03]" />
      </div>

      {/* Particles */}
      <Particles mounted={mounted} />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 -z-5 bg-gradient-to-r from-background/95 via-background/60 to-background/40" />
      <div className="pointer-events-none absolute inset-0 -z-4 bg-gradient-to-t from-background via-transparent to-background/30" />

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 -z-3 dot-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_30%_50%,black,transparent)]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 lg:flex-row lg:items-center lg:gap-8 lg:py-0">
        {/* Left: Copy */}
        <div className="flex-1 lg:max-w-2xl">
          {/* Now Playing ticker */}
          <div className="mb-8" style={mounted ? { transform: `translateY(${scrollY * -0.1}px)` } : undefined}>
            <NowPlayingTicker mounted={mounted} />
          </div>

          {/* Headline */}
          <h1
            className="hero-title font-serif text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            style={mounted ? { transform: `translateY(${scrollY * -0.15}px)` } : undefined}
          >
            iFlex IPTV —{" "}
            <span className="luxury-gradient-text">Premium Entertainment</span>,{" "}
            Redefined
          </h1>

          {/* Subheading */}
          <p
            className="hero-subtitle mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl lg:text-2xl"
            style={mounted ? { transform: `translateY(${scrollY * -0.08}px)` } : undefined}
          >
            {siteConfig.brandName} delivers 4K live sports, exclusive premieres, and 100,000+ movies &amp; series&mdash;all in one sophisticated streaming platform.
          </p>

          {/* CTAs */}
          <div className="hero-cta mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={createWhatsAppSupportUrl("help starting my iFlex IPTV subscription")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero-whatsapp"
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-lg bg-gradient-to-r from-accent to-accent-hover px-8 text-base font-bold text-background shadow-[0_12px_40px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_60px_rgba(212,175,55,0.45)] hover:scale-[1.02]"
            >
              <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
              <WhatsAppIcon className="relative z-10 h-5 w-5" />
              <span className="relative z-10">Start Premium Experience</span>
            </Link>
            <Link
              href="/pricing"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-8 text-base font-bold text-foreground backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.06] hover:text-accent hover:scale-[1.02]"
            >
              <span className="relative z-10">View Plans</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="hero-stat mt-10 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-1 text-sm font-bold text-foreground">4.9</span>
              <span className="text-sm text-muted-foreground">/5</span>
            </div>
            <span className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-muted-foreground">7-Day Guarantee</span>
            </div>
            <span className="h-4 w-px bg-white/10" />
            <span className="text-sm font-semibold text-muted-foreground">Join 15,000+ Premium Subscribers</span>
          </div>

          {/* Mobile feature badges */}
          <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
            {floatingFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="text-xs font-semibold text-foreground">{f.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Floating feature cards (desktop) */}
        <div className="relative mt-12 hidden flex-1 lg:block">
          <FloatingFeatureCards />
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-5 rounded-full border border-white/10 p-1">
            <div className="h-2 w-full animate-bounce rounded-full bg-accent/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
