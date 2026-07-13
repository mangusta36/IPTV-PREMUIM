import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import PricingSelector from "@/components/PricingSelector";
import SchemaMarkup from "@/components/SchemaMarkup";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { createWhatsAppSupportUrl } from "@/lib/whatsapp";
import { pricingDeviceOptions } from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "iFlex IPTV Pricing - 1, 2 & 3 Device Subscription Plans",
  description:
    "Choose an iFlex IPTV plan for 1, 2, or 3 active devices. 3-month, 6-month, and 12-month IPTV subscriptions with WhatsApp activation and setup support.",
  alternates: {
    canonical: absoluteUrl("/pricing"),
  },
};

export default function PricingPage() {
  const allPlans = pricingDeviceOptions.flatMap((option) =>
    option.plans.map((plan) => ({
      "@type": "Offer",
      name: `${siteConfig.brandName} ${plan.duration} - ${option.label}`,
      price: String(plan.price),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/pricing"),
      description: `${option.label} IPTV subscription with ${siteConfig.claims.channels}, ${siteConfig.claims.vod}, EPG, and setup support.`,
    }))
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${siteConfig.brandName} IPTV Subscription`,
    description: siteConfig.defaultDescription,
    brand: {
      "@type": "Brand",
      name: siteConfig.brandName,
    },
    image: absoluteUrl(siteConfig.ogImagePath),
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "35",
      highPrice: "149",
      priceCurrency: "USD",
      offerCount: allPlans.length,
      offers: allPlans,
    },
  };

  return (
    <>
      <SchemaMarkup schema={schema} />

      <section className="relative isolate overflow-hidden bg-background noise-overlay pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Image
          src="https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt=""
          fill
          unoptimized
          priority
          sizes="100vw"
          className="-z-30 object-cover opacity-20"
        />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="pointer-events-none absolute inset-0 -z-19 bg-gradient-to-r from-background/90 via-background/40 to-background/60" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Pricing by device count</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl text-foreground font-serif">
              iFlex IPTV plans for 1, 2, or 3 active devices
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose 3 months, 6 months, or the 12-month best value package. Every plan includes EPG support, setup help, and WhatsApp activation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href={createWhatsAppSupportUrl("help choosing the right iFlex IPTV pricing plan")}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="hero-whatsapp"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-accent to-[#c9a227] px-8 font-black text-background transition hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Ask on WhatsApp
              </Link>
              <Link
                href="#plans"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 font-black text-white transition hover:border-accent/40 hover:text-accent"
              >
                Compare Plans
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="plans" className="scroll-mt-24">
        <PricingSelector />
      </div>

      <section className="bg-background pb-20">
        <div className="container mx-auto grid gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="luxury-surface rounded-2xl p-6">
            <Smartphone className="mb-4 h-7 w-7 text-accent" />
            <h2 className="font-black text-white">Device-based clarity</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              Install on supported devices. Active streams depend on your selected 1, 2, or 3 device package.
            </p>
          </div>
          <div className="luxury-surface rounded-2xl p-6">
            <ShieldCheck className="mb-4 h-7 w-7 text-accent" />
            <h2 className="font-black text-white">7-day guarantee</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              If a technical issue cannot be resolved by support, you can request a refund within the policy window.
            </p>
          </div>
          <div className="luxury-surface rounded-2xl p-6">
            <Sparkles className="mb-4 h-7 w-7 text-accent" />
            <h2 className="font-black text-white">Setup included</h2>
            <p className="mt-2 text-sm leading-6 text-white/60">
              WhatsApp support helps with app setup, playlist login, EPG refreshes, and basic troubleshooting.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
