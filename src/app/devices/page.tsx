import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle, Monitor, Smartphone, Tv } from "lucide-react";
import { premiumImages } from "@/lib/media";
import { whatsappSetupGuidanceUrl } from "@/lib/whatsapp";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "iFlex IPTV Supported Devices - Smart TV, Fire Stick, Android TV & Mobile",
  description: "Learn how to set up iFlex IPTV on Smart TV, Fire Stick, Android TV, Apple TV, MAG Box, iPhone/iPad, Windows/Mac, and more.",
  alternates: {
    canonical: absoluteUrl("/devices"),
  },
};

const devices = [
  {
    category: "Smart TVs",
    icon: <Tv className="h-9 w-9 text-brand" />,
    items: ["Samsung Smart TV (Tizen)", "LG Smart TV (WebOS)", "Android TV", "Sony & Philips Smart TVs"],
    image: premiumImages.deviceSmartTv,
    alt: "Premium smart television displaying IPTV content in a dark room",
  },
  {
    category: "Streaming Devices",
    icon: <Monitor className="h-9 w-9 text-brand" />,
    items: ["Amazon Firestick & Fire TV", "Apple TV", "Roku (via Web Player)", "Chromecast"],
    image: premiumImages.deviceStreaming,
    alt: "Modern television setup for Firestick Apple TV and streaming devices",
  },
  {
    category: "Mobile & Tablets",
    icon: <Smartphone className="h-9 w-9 text-brand" />,
    items: ["iPhone & iPad (iOS)", "Android Phones & Tablets"],
    image: premiumImages.deviceMobile,
    alt: "Mobile and laptop devices prepared for premium IPTV streaming",
  },
  {
    category: "Other Devices",
    icon: <Tv className="h-9 w-9 text-brand" />,
    items: ["Windows PC & Mac", "MAG Boxes", "Enigma2", "Formuler (MYTVOnline)"],
    image: premiumImages.deviceOther,
    alt: "Living room television showing cross-device IPTV compatibility",
  },
];

const setupSteps = [
  "Choose your device and plan.",
  "Open WhatsApp and send your setup request.",
  "Receive your app, playlist details, and guided activation steps.",
];

export default function DevicesPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Image
          src={premiumImages.devicesHero}
          alt="Premium IPTV streaming on a living room television and supported devices"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,6,0.96),rgba(5,5,6,0.72)_55%,rgba(5,5,6,0.96)),radial-gradient(circle_at_78%_20%,rgba(244,199,107,0.22),transparent_32rem)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Setup in minutes</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">Supported Devices</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              iFlex IPTV works across popular IPTV devices and apps. {siteConfig.claims.devicePolicy}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {devices.map((device) => (
              <article key={device.category} className="luxury-surface group overflow-hidden rounded-[1.5rem] transition duration-500 hover:-translate-y-1 hover:border-brand/40">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={device.image}
                    alt={device.alt}
                    fill
                    sizes="(min-width: 768px) 46vw, 92vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/82 via-background/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/35 backdrop-blur">
                    {device.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-5">{device.category}</h2>
                  <ul className="space-y-3">
                    {device.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="h-4 w-4 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div id="setup-guidance" className="relative isolate scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 p-8 text-center shadow-2xl shadow-black/30 md:p-12">
            <Image
              src={premiumImages.setupGuidance}
              alt="Dark premium television room behind device setup support call to action"
              fill
              sizes="(min-width: 1024px) 64rem, 92vw"
              className="-z-20 object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-background/78 backdrop-blur-[2px]" />
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Guided setup</p>
            <h3 className="mt-3 text-2xl font-bold mb-4">Need help setting up your device?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Once you purchase a subscription, you will receive a comprehensive setup guide tailored to your specific device. Our support team is also available 24/7 to assist you.
            </p>
            <div className="mx-auto mb-8 grid max-w-3xl gap-4 text-left md:grid-cols-3">
              {setupSteps.map((step, index) => (
                <div key={step} className="border-t border-white/15 pt-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-background">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-white/78">{step}</p>
                </div>
              ))}
            </div>
            <Link
              href={whatsappSetupGuidanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-glow-success inline-flex h-12 items-center justify-center gap-2 rounded-full bg-success px-8 text-base font-bold text-background transition hover:-translate-y-0.5 hover:bg-success-hover"
            >
              Get Setup Guidance on WhatsApp
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
