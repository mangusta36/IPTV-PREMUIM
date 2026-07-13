import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Activity, ArrowRight, MonitorPlay, RefreshCw, Shield, Wifi, Zap } from "lucide-react";
import { premiumImages } from "@/lib/media";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "iFlex IPTV Features - EPG, Device Support & HD/FHD/4K Quality",
  description: "Discover iFlex IPTV features including EPG TV guide support, HD/FHD/4K quality where available, device compatibility, setup help, and stable streaming guidance.",
  alternates: {
    canonical: absoluteUrl("/features"),
  },
};

const features = [
  {
    icon: <Zap className="h-8 w-8 text-accent" />,
    title: "Stable Streaming Focus",
    description: "Our setup guidance focuses on stable internet, the right device, app configuration, and support checks before major live viewing moments.",
  },
  {
    icon: <MonitorPlay className="h-8 w-8 text-accent" />,
    title: "4K, FHD & HD Quality",
    description: "Experience your favorite movies, TV shows, and live sports in breathtaking 4K and Full HD resolution. Standard HD and SD options are also available for slower connections.",
  },
  {
    icon: <Activity className="h-8 w-8 text-accent" />,
    title: "Sports-Ready Categories",
    description: "Prepare for popular live sports categories and major event nights with setup support, EPG guidance, and device recommendations.",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-accent" />,
    title: "Electronic Program Guide (EPG)",
    description: "Navigate easily with our integrated EPG. See what is playing now and what is coming up next across all our live TV channels.",
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: "Clear Support Process",
    description: "WhatsApp support helps with package choice, payment instructions, activation details, login checks, and troubleshooting.",
  },
  {
    icon: <Wifi className="h-8 w-8 text-accent" />,
    title: "Multi-Device Support",
    description: siteConfig.claims.devicePolicy,
  },
];

export default function FeaturesPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Image
          src={premiumImages.featureHero}
          alt="Modern television in a dark premium room showing IPTV streaming quality"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,6,0.96),rgba(5,5,6,0.76)_52%,rgba(5,5,6,0.96)),radial-gradient(circle_at_78%_24%,rgba(244,199,107,0.22),transparent_32rem)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Premium engineering</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl font-serif">Why We Are The Best</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              iFlex IPTV is built around practical setup support, clear device plans, EPG guidance, and HD/FHD/4K streaming quality where available.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="luxury-surface group rounded-[1.5rem] p-8 transition duration-500 hover:-translate-y-1 hover:border-accent/30">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/[0.08] shadow-lg shadow-accent/10">
                  {feature.icon}
                </div>
                <h2 className="text-xl font-bold mb-3">{feature.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/6 p-4 shadow-2xl shadow-black/30 backdrop-blur lg:grid-cols-2 lg:p-6">
            <div className="relative aspect-video overflow-hidden rounded-[1.5rem]">
              <Image
                src={premiumImages.featureSports}
                alt="Live sports action streaming through premium IPTV channels"
                fill
                unoptimized
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/72 via-transparent to-transparent" />
            </div>
            <div className="p-4 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">Built for peak time</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">Live matches, movie nights, and weekend marathons stay smooth.</h3>
              <p className="mt-5 text-muted-foreground leading-7">
                The feature set is designed around the moments when quality matters most: kickoff, premieres, PPV nights, and family viewing.
              </p>
              <Link
                href="/pricing"
                className="button-glow mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-hover px-7 text-base font-bold text-background transition hover:-translate-y-0.5"
              >
                Start Your Premium Experience
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
