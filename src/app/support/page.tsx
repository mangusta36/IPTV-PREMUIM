import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Key, Settings, ShieldAlert, Tv, Wifi } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { premiumImages } from "@/lib/media";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "iFlex IPTV Support - Setup, EPG & Troubleshooting Help",
  description:
    "Get iFlex IPTV support for setup, activation, EPG refreshes, device login, buffering checks, and package questions.",
  alternates: {
    canonical: absoluteUrl("/support"),
  },
};

const commonProblems = [
  {
    icon: <Wifi className="h-6 w-6 text-accent" />,
    title: "Buffering & Freezing",
    solution: "Check Wi-Fi strength, try Ethernet where possible, clear your app cache, and ask support to review your setup before major live events.",
  },
  {
    icon: <Key className="h-6 w-6 text-accent" />,
    title: "Login Not Working",
    solution: "Confirm username, password, and server URL are copied exactly. IPTV login details are case-sensitive.",
  },
  {
    icon: <Settings className="h-6 w-6 text-accent" />,
    title: "App Not Loading",
    solution: "Restart your device, refresh the playlist, and reinstall the app only if support recommends it.",
  },
  {
    icon: <ShieldAlert className="h-6 w-6 text-accent" />,
    title: "Channels Not Opening",
    solution: "Try refreshing your playlist or EPG. Availability can vary by package, region, app, and connection quality.",
  },
  {
    icon: <Tv className="h-6 w-6 text-accent" />,
    title: "Smart TV MAC Issue",
    solution: "If your app uses a MAC address and device key, send both details to support so the setup can be checked.",
  },
];

export default function SupportPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Support & Contact - ${siteConfig.brandName}`,
    url: absoluteUrl("/support"),
    description: "Contact 24/7 iFlex IPTV support for setup and troubleshooting assistance.",
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden bg-background noise-overlay pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Image
          src={premiumImages.channelHero}
          alt=""
          fill
          unoptimized
          priority
          sizes="100vw"
          className="-z-30 object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-navy/80 via-navy/50 to-navy" />
        <div className="pointer-events-none absolute inset-0 -z-19 bg-gradient-to-r from-navy/90 via-navy/40 to-navy/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-black tracking-tight text-white sm:text-6xl">Need help setting up iFlex IPTV?</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Message support for plan questions, activation, device setup, EPG refreshes, and practical troubleshooting.
            </p>
            <Link
              href={createWhatsAppSupportUrl("support with my IPTV setup")}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="support-whatsapp"
              className="mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent to-[#B8941E] px-8 font-black text-background transition hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-6 w-6" />
              Chat with Support Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commonProblems.map((problem) => (
              <article key={problem.title} className="rounded-2xl border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-accent/40">
                <div className="mb-4 inline-flex rounded-xl border border-accent/20 bg-accent/10 p-3">{problem.icon}</div>
                <h2 className="text-xl font-black text-white">{problem.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/62">{problem.solution}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card/50 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-xl font-black text-white">Looking for installation instructions?</h2>
              <p className="mt-2 text-white/60">Use our device setup guides for Fire Stick, Smart TVs, Android TV, Apple devices, MAG boxes, and more.</p>
            </div>
            <Link href="/guides" className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-accent/50 bg-accent/10 px-6 text-sm font-black text-accent transition hover:bg-accent hover:text-background">
              View Setup Guides <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-black text-white">Support FAQ</h2>
            <FAQAccordion
              items={[
                { question: "How fast is activation?", answer: "Activation details are prepared after payment confirmation and device/package details are collected on WhatsApp." },
                { question: "Can I use it on multiple devices?", answer: siteConfig.claims.devicePolicy },
                { question: "Which internet speed do I need?", answer: "We recommend at least 15 Mbps for HD, 25 Mbps for FHD, and a stronger stable connection for 4K where available." },
                { question: "What should I send support?", answer: "Send your device type, selected app, package, active device count, and a short description of the issue." },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
